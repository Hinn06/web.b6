let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
];
let current = 0;

function showImage(index) {
    let slide = document.getElementById("slide");
    slide.src = images[index];
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

function goBack() {
    window.location.href = "index.html";
}
