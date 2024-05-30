import { Board } from "./board.js"
import { MoveStack } from "./moveStack.js"
import { InterfaceField } from "./interfaceField.js"
import { InterfaceCube } from "./interfaceCube.js"

class Game {
    constructor(bot, popup, checkWinner) {
      this.isBlue = true
      this.playWithBot = false
      this.freeze = false
      this.board = new Board();
      this.moveStack = new MoveStack()
      this.interfaceField = new InterfaceField()
      this.interfaceCube = new InterfaceCube()
      this.popup = popup
      this.Bot = bot
      this.checkWinner = checkWinner
      this.debounceTimeout = undefined

      this.interfaceCube.animate()
      this.interfaceCube.render(this.board)
    }
  
    switchMove() {
      this.isBlue = !this.isBlue
    }
  
    changePlayWithBot() {
      this.playWithBot = !this.playWithBot
    }
  
    restart() {
      this.freeze = false
      this.isBlue = true
      this.interfaceField.restart()
      this.moveStack.clear()
      this.board.clear()
      this.interfaceCube.render(this.board)
    }
  
    moveBack() {
      if (this.freeze) {
        this.freeze = false
        this.restart()
        return
      }
  
      const id = this.moveStack.pop()
      if (id == undefined) {
        return
      }
      
      this.board.setCell(id, 0)
  
      if (this.playWithBot) {
        const id2 = this.moveStack.pop()
        this.board.setCell(id2, 0)
      }
  
      if (this.playWithBot) {
        this.switchMove()
      }

      this.interfaceField.update(this.moveStack, this.isBlue)
      this.switchMove()
      this.interfaceCube.render(this.board)
    }
  
    addMove(id) {
      this.moveStack.push(id)
      this.board.setCell(id, this.isBlue ? 1 : -1)
      this.interfaceField.update(this.moveStack, this.isBlue)
      this.interfaceCube.render(this.board)
    }
    makeMove(cell) {
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.move(cell)
      }, 100)
    }
    move(cell) {
      if (!(this.moveStack.has(cell.id) || this.freeze)) {
        this.addMove(cell.id)      
        if (this.checkWinner.checkWon(cell.id, this.isBlue, this.board.board)) {
        this.popup.showPopup(this.isBlue)
        this.freeze = true
        return
      }
      this.switchMove()
      if (this.playWithBot) {
        const move = this.Bot.botDoMove(this.board.board)
  
        this.addMove(move, this.isBlue)
        if (this.checkWinner.checkWon(move, this.isBlue, this.board.board)) {
          this.popup.showPopup(this.isBlue)
          this.freeze = true
          return
        }
  
        this.isBlue = true
      }
    }
  }
}
  

export { Game }