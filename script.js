function flip(event){
    var element = event.currentTarget;
    if (element.classList.contains("card-slip")) {
        console.log(element.lastElementChild);
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
    }
}