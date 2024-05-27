import { InterfaceCube } from "./interfaceCube"

class InterfaceField {
    constructor() {
      this.cells = document.querySelectorAll(".cell")
      this.initialize(true)
    }
  
    initialize(isBlue) {
        this.cells.forEach(cell => {
            cell.classList.add((isBlue ? "hoverBlue" : 'hoverRed'))
          })
    } 

    restart() {
      this.cells.forEach((cell) => {
        cell.classList.remove("blue")
        cell.classList.remove("red")
        cell.classList.remove("hoverRed")
        cell.classList.add("hoverBlue")
      })
    }
  
    update(moves, isBlue) {
        this.cells.forEach(cell => {
            cell.classList.remove('blue')
            cell.classList.remove('red')

            if (!moves.includes(cell.id)) {
                if (!isBlue) {
                    cell.classList.remove('hoverRed')
                    cell.classList.add('hoverBlue')
                } else {
                    cell.classList.remove('hoverBlue')
                    cell.classList.add('hoverRed')
                }
            }
            

            const idx = moves.indexOf(cell.id)
            if (idx != -1) {
                if (idx % 2 == 0) {
                    cell.classList.remove("hoverRed")
                    cell.classList.remove("hoverBlue")
                    cell.classList.add("blue")
                } else {
                    cell.classList.remove("hoverRed")
                    cell.classList.remove("hoverBlue")
                    cell.classList.add("red")
                }
            }
        })



        
    }
}

export { InterfaceField }