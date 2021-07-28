function flip(event){
    var element = event.currentTarget;
    if (element.classList.contains("card-slip")) {

        // Check for other flipped cards
        flipCheck(element);

        // Flipping the current card,
        if (element.firstElementChild.style.transform == "rotateY(180deg)") {
            element.firstElementChild.style.transform = "rotateY(0deg)";
        } else {
            element.firstElementChild.style.transform = "rotateY(180deg)";
        }
        if (element.lastElementChild.style.transform == "rotateY(0deg)") {
            element.lastElementChild.style.transform = "rotateY(180deg)";
        } else {
            element.lastElementChild.style.transform = "rotateY(0deg)";
        }
        
        // Add "flipped" to class names
        element.classList.add("flipped");
    }
}

function flipCheck(element) {

    // Create sibling array
    var cardArray = [];
    let sibling = element.parentNode.firstElementChild;
    while (sibling) {
        cardArray.push(sibling);
        sibling = sibling.nextElementSibling;
    }

    // Check array for flipped cards
    cardArray.forEach(unflip);

    // Function for unflipping cards
    function unflip(card) {
        if (card.classList.contains("flipped") && card != element) {
            card.firstElementChild.style.transform = "rotateY(0deg)";
            card.lastElementChild.style.transform = "rotateY(180deg)";
            card.classList.remove("flipped")
        }
    }
}