const date = new Date()
const friday = date.getDay()

if(!friday === 5) {
  const renatinho = document.getElementById("renatinho").style.display = "none"
  const song = document.getElementById("notPlay").style.display = "none"
  const warning = document.getElementById("notToday").style.display = "none"
  }
if(friday === 5) {
   const musica = document.getElementById("animesong")
     musica.play();
}
console.log(`Dia Atual: ${friday}`)
