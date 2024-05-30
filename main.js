import { Game } from "./src/game.js"
import { Bot } from "./src/bot.js"
import { Popup } from "./src/popup.js"
import { CheckWinner } from "./src/checkWon.js"


const cells = document.querySelectorAll(".cell")
const restartButton = document.getElementById("restart")
const backButton = document.getElementById("back")
const popup = document.getElementById("popup")
const slider = document.getElementById("bot")
const checkWinner = new CheckWinner()
const bot = new Bot(5, checkWinner)
const popupObj = new Popup(popup)
const game = new Game(bot, popupObj, checkWinner)

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 66) {
    game.moveBack()
  }
})

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 82) {
    game.restart()
  }
})

slider.addEventListener("change", () => {
  game.changePlayWithBot()
  game.restart()
})


popup.addEventListener("click", () => {
  game.popup.closePopup()
})

restartButton.addEventListener("click", () => {
  game.restart()
})

backButton.addEventListener("click", () => {
    game.moveBack()
  }  
)


cells.forEach(cell => {
  cell.addEventListener("click", () => {
    game.makeMove(cell)
  })
})