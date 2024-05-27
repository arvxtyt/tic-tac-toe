class Board {
    constructor() {
      this.board = undefined
      this.clear()
    }
  
    clear() {
      this.board = [[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]]
    }
  
    setCell(id, value) {
      const coord = [Number(id[0]), Number(id[1]), Number(id[2])]
      this.board[coord[0]][coord[1]][coord[2]] = value
    }
  }

export { Board }