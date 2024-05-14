function removeMove(id, isBlue, cells, document) {
    const elem = document.getElementById(id)
    elem.classList.remove("blue")
    elem.classList.remove("red")
    

    cells.forEach(el => {
      if (el.classList.contains("blue")) {
        el.classList.remove("hoverRed")
        el.classList.remove("hoverBlue")
      } else if (el.classList.contains("red")) {
        el.classList.remove("hoverRed")
        el.classList.remove("hoverBlue")
      } else {
        if (!isBlue) {
          el.classList.remove("hoverRed")
          el.classList.add("hoverBlue")
        } else {
          el.classList.remove("hoverBlue")
          el.classList.add("hoverRed")
        }
      }
        
      }
    );
    
}

export { removeMove }