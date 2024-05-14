function render(materials, field) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (field[i][j][k] == 0) {
            materials[i][j][k].color.set(0x999999)
            materials[i][j][k].opacity = 0.2
          } else if (field[i][j][k] === 1) {
            materials[i][j][k].color.setRGB(0, 0, 255)
            materials[i][j][k].opacity = 0.6
          } else {
            materials[i][j][k].color.setRGB(255, 0, 0)
            materials[i][j][k].opacity = 0.6
          }
        }
      }
    }
  }
  
export { render }  