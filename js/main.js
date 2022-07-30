/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myExamples").classList.toggle("show");
    document.getElementById("myTaskes").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.examplebtn')) {
        var myDropdown = document.getElementById("myExamples");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.taskbtn')) {
        var myDropdown = document.getElementById("myTaskes");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}