class CheckWinner {
    checkWon(pos, player, field) {
        player = player > 0 ? 1 : -1;
        let lose = false
        let check;
      
        for (let i = 0; i <= 2; i++) {
            check = this.get(this.get(this.get(field, pos[0]), pos[1]), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true    
        }
      
        lose = false
      
        for (let j = 0; j <= 2; j++) {
            check = this.get(this.get(this.get(field, pos[0]), j), pos[2])
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
        
        for (let k = 0; k <= 2; k++) {
            check = this.get(this.get(this.get(field, k), pos[1]), pos[2])
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
        
        for (let i = 0, j = 0; i <= 2, j <= 2; i++, j++) {
            check = this.get(this.get(this.get(field, pos[0]), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 2, j = 0; i >= 0, j <= 2; i--, j++) {
            check = this.get(this.get(this.get(field, pos[0]), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 0, k = 0; i <= 2, k <= 2; i++, k++) {
            check = this.get(this.get(this.get(field, k), pos[1]), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 2, k = 0; i >= 0, k <= 2; i--, k++) {
            check = this.get(this.get(this.get(field, k), pos[1]), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let j = 0, k = 0; j <= 2, k <= 2; j++, k++) {
            check = this.get(this.get(this.get(field, k), j), pos[2])
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let j = 2, k = 0; j >= 0, k <= 2; j--, k++) {
            check = this.get(this.get(this.get(field, k), j), pos[2])
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 0, j = 0, k = 0; i <= 2, j <= 2, k <= 2; i++, j++, k++) {
            check = this.get(this.get(this.get(field, k), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
      
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 2, j = 0, k = 0; i >= 0, j <= 2, k <= 2; i--, j++, k++) {
            check = this.get(this.get(this.get(field, k), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 0, j = 2, k = 0; i <= 2, j >= 0, k <= 2; i++, j--, k++) {
            check = this.get(this.get(this.get(field, k), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        lose = false
      
        for (let i = 2, j = 2, k = 0; i >= 0, j >= 2, k <= 2; i--, j--, k++) {
            check = this.get(this.get(this.get(field, k), j), i)
            if (check === -player || check === 0) {
                lose = true
                break
            }
        }
        
        if (!lose) {
            return true
        }
        
        return false
      }
    
    get(indexed, i) {
        if (indexed == undefined || i < 0 || i == undefined) {
            return undefined
        } 
      
        return indexed[i]
    }
}


  
export { CheckWinner }  