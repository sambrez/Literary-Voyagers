function showDiv() {
    const div = document.getElementById('hidden-reviews');
    div.setAttribute("style", "display: block")
 };

 document.getElementById("clickOn").addEventListener('click', showDiv);