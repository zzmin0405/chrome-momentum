const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomimg = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${randomimg}`;

document.body.appendChild(image);

function randomImggenerate() {}
