class CheckWinner {
    checkWon(pos, player, field) {
        let p = player > 0 ? 1 : -1;
        let b = 0;
    
        for (let i = 0; i <= 2; i++) {
            b += field[pos[0]][pos[1]][i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let j = 0; j <= 2; j++) {
            b += field[pos[0]][j][pos[2]]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let k = 0; k <= 2; k++) {
            b += field[k][pos[1]][pos[2]]
        }

        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }
        
        for (let i = 0; i <= 2; i++) {
            b += field[pos[0]][i][i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[pos[0]][i][2-i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][pos[1]][i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }
    
        for (let i = 0; i <= 2; i++) {
            b += field[i][pos[1]][2-i]
    
        }

        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][i][pos[2]]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][2-i][pos[2]]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][i][i]
        }
      
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][i][2-i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][2-i][i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            b = 0;
        }

        for (let i = 0; i <= 2; i++) {
            b += field[i][2-i][2-i]
        }
        
        if (b === p * 3) {
            return true;
        } else {
            return false;
        }
      }
}


  
export { CheckWinner }  