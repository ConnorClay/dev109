const images = [
    { src: 'images/image1.jpeg', alt: 'Description of Image 1', description: 'This image is of the Snoqualmie Falls.' },
    { src: 'images/image2.jpg', alt: 'Description of Image 2', description: 'This image is of the Mount Si.' },
    { src: 'images/image3.jpg', alt: 'Description of Image 3', description: 'This image is of Lake Roosevelt.' },
    { src: 'images/image4.jpg', alt: 'Description of Image 4', description: 'This image is of the Mount Rainier.' },
    { src: 'images/image5.jpg', alt: 'Description of Image 5', description: 'This image is of the Mount Saint Helens.' },
];

let currentIndex = 0;
let timer;
let timerValue = 4;
let isAutoPlaying = true; // Start auto-playing by default

function updateCarousel() {
    const image = document.getElementById('carousel-image');
    const description = document.getElementById('image-description');
    image.src = images[currentIndex].src;
    image.alt = images[currentIndex].alt;
    description.textContent = images[currentIndex].description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    if (isAutoPlaying) {
        resetTimer();
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    if (isAutoPlaying) {
        resetTimer();
    }
}

function startTimer() {
    let timeLeft = timerValue;
    document.getElementById('timer').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            nextImage();
            timeLeft = timerValue;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    if (isAutoPlaying) {
        startTimer();
    }
}

function toggleAutoPlay() {
    isAutoPlaying = !isAutoPlaying;
    if (isAutoPlaying) {
        startTimer();
        document.getElementById('auto-btn').textContent = 'Auto Play';
    } else {
        clearInterval(timer);
        document.getElementById('auto-btn').textContent = 'Play';
    }
}

document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);
document.getElementById('auto-btn').addEventListener('click', toggleAutoPlay);

updateCarousel();
startTimer();
