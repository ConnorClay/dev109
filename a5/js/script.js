const images = [
    { src: 'images/image1.jpeg', alt: 'Description of Image 1', description: 'Image 1 Description' },
    { src: 'images/image2.jpg', alt: 'Description of Image 2', description: 'Image 2 Description' },
    { src: 'images/image3.jpg', alt: 'Description of Image 3', description: 'Image 3 Description' },
    { src: 'images/image4.jpg', alt: 'Description of Image 4', description: 'Image 4 Description' },
    { src: 'images/image5.jpg', alt: 'Description of Image 5', description: 'Image 5 Description' },
];

let currentIndex = 0;
let timer;
let timerValue = 8; 

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
    resetTimer();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    resetTimer();
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
    startTimer();
}

document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);

updateCarousel();
startTimer();
