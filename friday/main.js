const date = new Date()
const friday = date.getDay()
const noFriday = [0,1,2,3,4,6]
if(friday === noFriday) {
  const renatinho = document.getElementById("renatinho").style.display = "none"
  const song = document.getElementById("notPlay").style.display = "none"
  const musica = document.getElementById("animesong").style.display = "none"
  }
if(friday === 5) {
   const warning = document.getElementById("notToday").style.display = "none"
}
console.log(`Dia Atual: ${friday}`)
