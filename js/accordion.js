const accordion = document.getElementsByClassName("accordion");

for (a of accordion) {
    a.addEventListener("click", function (event) {
        if (event.target.classList.contains("subject")) {
            this.classList.toggle("active");
        }
    });
}
