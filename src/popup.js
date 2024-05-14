function showPopup(popup, isBlue, document) {
    const popuptext = document.getElementById("popuptext")
    popuptext.innerHTML = (isBlue ? "Blue" : "Red") + " won!"
    popup.classList.remove("hide")
    popup.classList.add("show")
}

export { showPopup }