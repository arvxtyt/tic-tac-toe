// import { checkWon } from "./checkWon";

class Bot {
    constructor(depth, checkWinner) {
      this.maxDepth = depth;
      this.checkWinner = checkWinner;
    }
  
    botDoMove(field) {
      let bestMove = [-1, -1, -1];
      let bestValue = Infinity;
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
              for (let k = 0; k < 3; k++) {
                  if (field[i][j][k] === 0) {
                      field[i][j][k] = -1;
                      const moveValue = this.minimax(0, 1, [i, j, k], -Infinity, Infinity, field);
                      field[i][j][k] = 0;
                      if (moveValue < bestValue) {
                          bestValue = moveValue;
                          bestMove = [i, j, k];
                      }
                  }
              }
          }
      }

      return bestMove[0].toString() + bestMove[1].toString() + bestMove[2].toString()
}

    minimax(depth, turn, pos, alpha, beta, field_) {
        if (this.checkWinner.checkWon(pos, 1, field_)) {
            return this.maxDepth + 1 - depth;
        }
      
        if (this.checkWinner.checkWon(pos, -1, field_)) {
            return depth - 1 - this.maxDepth;
        }
      
        if (depth >= this.maxDepth) {
            return 0;
        }
      
        let bestVal = turn === 1 ? -Infinity : Infinity;
        let val;
      
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (field_[i][j][k] === 0) {
                        field_[i][j][k] = turn;
                        val = this.minimax(depth + 1, -turn, [i, j, k], alpha, beta, field_);
                        field_[i][j][k] = 0;
      
                        if (turn === 1) {
                            bestVal = Math.max(bestVal, val);
                            alpha = Math.max(alpha, val);
                        } else {
                            bestVal = Math.min(bestVal, val);
                            beta = Math.min(beta, val);
                        }
      
                        if (beta <= alpha) {
                            return bestVal;
                        }
                    }
                }
            }
        }
      
        return bestVal;
    }
}

export { Bot }