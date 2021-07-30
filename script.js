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
        if (!element.classList.contains("flipped")) {
            element.classList.add("flipped");
            var color = getComputedStyle(element.firstElementChild).backgroundColor;
        } else {
            element.classList.remove("flipped");
            var color = "#000";
        }

        // Background slide transition
        bgChange(color);
    }
}

// Function
// Check for flipped cards, and unflip them
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

// Function
// Slide transition for bg colour change
function bgChange(color) {
    //var bgSlide = document.createElement('div');
    //document.body.appendChild(bgSlide);
    //bgSlide.classList.add("bgslide");
    var bgSlide = document.getElementById("bgslide");
    bgSlide.style.backgroundColor = color;
    bgSlide.style.height = "100vh";
    //bgSlide.style.transform = "translateY(-80vh)";
    //document.body.style.backgroundColor = color;
    setTimeout(bgSet, 500);

    // Function for resetting bg elements
    function bgSet() {
        document.body.style.backgroundColor = color;
        bgSlide.style.height = "0px";
    }
}