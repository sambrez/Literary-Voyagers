function showDiv() {
    const div = document.querySelector('.hidden-reviews');

    if (div.getAttribute("style") === "display: none") {
        div.setAttribute("style", "display: block")
    } else {
        div.setAttribute("style", "display: none")
    }
 };

 document.querySelector(".clickOn").addEventListener('click', showDiv);

