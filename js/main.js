// Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

// Create Zdog Illustration
// https://zzz.dog/api#illustration
const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: { x: -0.32, y: 0.64, z: 0 },
  resize: "fullscreen",
  onResize: function(width, height) {
    const minSize = Math.min(width, height);
    const maxSize = 2;
    this.zoom = Math.min(minSize / 420, maxSize);
  }
});

// Create a Font object
// You can use any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
const font = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
});

// Create a TextGroup object for the title
// https://github.com/jaames/zfont#zdogtextgroup
const title = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  value: "FelipeSazz",
  fontSize: 60,
  translate: { y: -100 },
  textAlign: "center",
  textBaseline: "middle",
  color: "#fff",
  fill: true
});

// Duplicate the title to create a shadow effect
const titleShadow = title.copyGraph({
  translate: { z: -6, y: -100 },
  color: "#aab"
});

// Create a TextGroup object for the subtitle
// https://github.com/jaames/zfont#zdogtextgroup
const sub = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  // Pass an array as the text value for multiline text:
  value: ["back-end developer", "anime junkie"],
  fontSize: 42,
  textAlign: "center",
  textBaseline: "middle",
  color: "#fff",
  fill: true
});

// Duplicate the subtitle to create a shadow effect
const subShadow = sub.copyGraph({
  translate: { z: -6 },
  color: "#aab"
});

// Settings for the wave animation
let t = 0;
const tStep = 5;
const amplitude = 0.75;
const frequency = 50;

// Wave function
// This loops through every shape in a TextGroup and modifies its position according to a sine wave
function wave(group) {
  group.children.forEach(shape => {
    const x = shape.translate.x + t;
    shape.translate.y += amplitude * Math.sin(x / frequency);
  });
}

// Animation loop
function animate() {
  wave(title);
  wave(titleShadow);
  wave(sub);
  wave(subShadow);
  t += tStep;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();