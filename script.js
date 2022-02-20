const adviceIdEl = document.getElementsByClassName('advice-id')[0]
const adviceTextEl = document.getElementsByClassName('advice-text')[0]
const diceEl = document.getElementsByClassName('dice-container')[0]

const apiUrl = 'https://api.adviceslip.com/advice'

const fetchAdvice = async () => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    let adviceId = data.slip.id
    let adviceText = data.slip.advice

    adviceIdEl.innerHTML = `Advice #${adviceId}`
    adviceTextEl.innerHTML = `"${adviceText}"`
  } catch (error) {
    console.error(error)
  }
}
fetchAdvice()
