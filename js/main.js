document.getElementById('movie-search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase(); // Get the input value in lowercase
    const movieCards = document.querySelectorAll('.movie-card, .upcoming-card'); // Select all movie cards

    movieCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase(); // Get the title in lowercase

        // Check if the title includes the search value
        if (title.includes(searchValue)) {
            card.style.display = ''; // Show the card if it matches
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
});

document.querySelector('.apply-filter').addEventListener('click', function () {
    const selectedLanguage = document.getElementById('language-select').value.toLowerCase();
    const selectedGenre = document.getElementById('genre-select').value.toLowerCase();

    // Select all movie cards from both Now Showing and Upcoming Movies sections
    const nowShowingCards = document.querySelectorAll('.movie-card'); // for Now Showing
    const upcomingCards = document.querySelectorAll('.upcoming-card'); // for Upcoming Movies

    // Combine both NodeLists into a single array
    const allMovieCards = [...nowShowingCards, ...upcomingCards];

    allMovieCards.forEach(card => {
        const languageMatch = selectedLanguage ? card.getAttribute('data-language').toLowerCase() === selectedLanguage : true;
        const genreMatch = selectedGenre ? card.getAttribute('data-genre').toLowerCase() === selectedGenre : true;

        if (languageMatch && genreMatch) {
            card.style.display = 'block'; // Show the movie card
        } else {
            card.style.display = 'none'; // Hide the movie card
        }
    });
});

document.querySelectorAll('.main-trailer video, .other-trailers video').forEach(trailer => {
    trailer.addEventListener('click', function () {
        openPopup(this.querySelector('source').src);
    });
});
function openPopup(videoSrc) {
    document.getElementById('popup-video').src = videoSrc;
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-video').play();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-video').pause();
    document.getElementById('popup-video').src = '';
}
// JavaScript for Carousel Animation
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        // Remove 'active' class from the current item
        items[currentIndex].classList.remove('active');

        // Increment index and reset if it exceeds item count
        currentIndex = (currentIndex + 1) % items.length;

        // Add 'active' class to the next item
        items[currentIndex].classList.add('active');
    }

    // Initialize by showing the first item
    items[currentIndex].classList.add('active');

    // Set interval for auto-scrolling (e.g., every 3 seconds)
    setInterval(showNextItem, 3000); // Adjust time as needed
});


// JavaScript to handle modal display and video source
const playButtons = document.querySelectorAll('.play-button');
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeModal = document.querySelector('.close');

// Function to show modal with the selected video
playButtons.forEach(button => {
    button.addEventListener('click', function () {
        const videoUrl = this.getAttribute('data-video');
        videoFrame.src = videoUrl; // Set the video URL in the iframe
        videoModal.style.display = 'block'; // Show the modal
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function () {
    videoModal.style.display = 'none'; // Hide the modal
    videoFrame.src = ''; // Stop the video
});

// Close modal when clicking anywhere outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target === videoModal) {
        videoModal.style.display = 'none'; // Hide the modal
        videoFrame.src = ''; // Stop the video
    }
});
// Get modal element
var modal = document.getElementById("videoModal");
// Get video player
var videoPlayer = document.getElementById("videoPlayer");
// Get video source
var videoSource = document.getElementById("videoSource");
// Get close button
var closeButton = document.getElementsByClassName("close")[0];

// Add click event listeners to trailer images
var trailerImages = document.querySelectorAll(".trailer-image");
trailerImages.forEach(function (image) {
    image.addEventListener("click", function () {
        var videoPath = this.getAttribute("data-video");
        videoSource.src = videoPath; // Set the video source
        videoPlayer.load(); // Load the new video
        modal.style.display = "block"; // Show the modal
    });
});

// Close the modal when the close button is clicked
closeButton.onclick = function () {
    modal.style.display = "none";
    videoPlayer.pause(); // Pause the video when closing
    videoSource.src = ""; // Reset the video source
};

// Close the modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.pause(); // Pause the video when closing
        videoSource.src = ""; // Reset the video source
    }
};


// JavaScript for trailer navigation
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trailerContainer = document.getElementById('trailerContainer');

prevBtn.addEventListener('click', () => {
    trailerContainer.scrollBy({
        top: 0,
        left: -400, // Adjust based on your card width and desired scroll amount
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    trailerContainer.scrollBy({
        top: 0,
        left: 400, // Adjust based on your card width and desired scroll amount
        behavior: 'smooth'
    });
});


// Function to open the popup and display the selected offer
document.querySelectorAll('.view-offer').forEach(button => {
    button.addEventListener('click', function () {
        const offerCard = this.closest('.offer-card');
        const title = offerCard.dataset.title;
        const valid = offerCard.dataset.valid;
        const terms = offerCard.dataset.terms;
        const imageSrc = offerCard.querySelector('img').src;

        // Set popup content
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-valid').textContent = "Valid till: " + valid;
        document.getElementById('popup-terms').textContent = terms;
        document.getElementById('popup-image').src = imageSrc;

        // Display the popup
        document.getElementById('offerPopup').style.display = 'flex';
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById('offerPopup').style.display = 'none';
}

document.getElementById('movie-search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase(); // Get the input value in lowercase
    const movieCards = document.querySelectorAll('.movie-card, .upcoming-card'); // Select all movie cards

    let hasResults = false; // Flag to track if any results are found

    movieCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase(); // Get the title in lowercase

        // Check if the title includes the search value
        if (title.includes(searchValue)) {
            card.style.display = ''; // Show the card if it matches
            hasResults = true; // Set flag to true if a match is found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Handle no results found
    const noResultsModal = document.getElementById('no-results-modal');
    if (!hasResults && searchValue) {
        noResultsModal.style.display = 'block'; // Show no results modal
    } else {
        noResultsModal.style.display = 'none'; // Hide no results modal
    }
});

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('no-results-modal').style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener('click', function (event) {
    const noResultsModal = document.getElementById('no-results-modal');
    if (event.target === noResultsModal) {
        noResultsModal.style.display = 'none';
    }
});
