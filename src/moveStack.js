class MoveStack {
    constructor() {
      this.stack = []
    }
  
    push(obj) {
      this.stack.push(obj)
    }
  
    pop() {
      return this.stack.pop()
    }
  
    has(id) {
      return this.stack.includes(id)
    }
  
    clear() {
      this.stack = []
    }
}

export { MoveStack }
