class Popup {
    constructor(popup) {
        this.popup = popup;
    }

    showPopup(isBlue) {
        const popuptext = document.getElementById("popuptext")
        popuptext.innerHTML = (isBlue ? "Blue" : "Red") + " won!"
        this.popup.classList.remove("hide")
        this.popup.classList.add("show")
    }

    closePopup() {
        popup.classList.remove("show")
        popup.classList.add("hide")
    }
}

export { Popup }