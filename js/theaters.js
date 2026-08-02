function searchTheater() {

    const input = document.getElementById("search").value.toLowerCase();

    const cards = document.querySelectorAll(".theater-card");

    cards.forEach(card => {

        const theaterName = card.querySelector("h2").textContent.toLowerCase();

        if (theaterName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}