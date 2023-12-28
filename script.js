
let day = document.querySelector('.data');
let horario = document.querySelectorAll('.a');
const everbory = new Date().getFullYear() + 1
const date = new Date(`january 1 ${everbory} 00:00:00`)
function newera() {
  const interval = setInterval(() => {
    const newdate = new Date()
    const diferenca = date - newdate
    const array = [
      Math.floor(diferenca / 1000 / 60 / 60 / 24),
      Math.floor(diferenca / 1000 / 60 / 60) % 24,
      Math.floor(diferenca / 1000 / 60) % 60,
      Math.floor(diferenca / 1000) % 60,
    ]
    horario.forEach((a, index) => {
      a.innerHTML = array[index]<10?`0${array[index]}`:array[index]
    })

    if (array.every((a)=>a<1)) {
      clearInterval(interval)
      horario.forEach((a) => a.textContent = 0)
      day.textContent = "happy new year"
    }
  }, 1000)

}
newera()