const adviceIdEl = document.getElementsByClassName('advice-id')[0]
const adviceTextEl = document.getElementsByClassName('advice-text')[0]
const diceEl = document.getElementsByClassName('dice-container')[0]

const apiUrl = 'https://api.adviceslip.com/advice'

const fetchAdvice = async () => {
  const response = await fetch(apiUrl)
  const data = await response.json()

  let adviceId = data.slip.id
  let adviceText = data.slip.advice

  adviceIdEl.append(adviceId)
  adviceTextEl.innerHTML = adviceText
}
fetchAdvice()

diceEl.addEventListener('click', () => {
  adviceIdEl.innerHTML = 'Advice #'
  adviceTextEl.innerHTML = ''

  fetchAdvice()
})
