"use strict";

const imageArray = [
  { src: "images/una-pizza-1.jpg", alt: "Una Pizza + Wine 17th Ave" },
  { src: "images/una-pizza-2.jpg", alt: "Una Pizza + Wine 17th Ave" },
  { src: "images/process-pic.jpg", alt: "2022 YYC BUMP Roadworks Program" },
  { src: "images/headshot.jpg", alt: "Headshot" },
  { src: "images/target-practice.jpg", alt: "Target Practice" },
  { src: "images/bike-day.jpg", alt: "Kloosifier Loop" },
  { src: "images/majestic.jpg", alt: "Natural Habitat" },
  { src: "images/pink-peaks.jpg", alt: "Pink Peaks" },
  { src: "images/electronic-monolith-4.0.jpg", alt: "Electronic Monolith 4.0" },
];

// Modifying the original imageArray with HTML image elements
const imageElements = imageArray.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}" />`;
});

// Assigning the result of map() back to imageArray
const updatedImageArray = imageArray.map((image) => {
  return `<img src="${image.src}" alt="${image.alt}" />`;
});

// Logging the updated imageArray
console.log(updatedImageArray);

document.querySelector("#image-array").innerHTML = updatedImageArray.join(' ');
galleryElement.innerHTML = imageElements.join(' ');


// Hamburger Menu Toggle
const mobileMenuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

mobileMenuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
  mobileMenuButton.classList.toggle('close'); // Toggle 'close' class for close icon effect
});
