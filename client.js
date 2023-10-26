const imageArray = [
  { src: "images/una-pizza-1.jpg", alt: "Una Pizza + Wine 17th Ave" },
  { src: "images/una-pizza-2.jpg", alt: "Una Pizza + Wine 17th Ave" },
  { src: "images/process-pic.jpg", alt: "2022 YYC BUMP Roadworks Program" },
  { src: "images/headshot.jpg", alt: "Headshot" },
  { src: "images/target-practice.jpg", alt: "Target Practice" },
  { src: "images/bike-day.jpg", alt: "Kloosifier Loop" },
  { src: "images/majestic.jpg", alt: "Natural Habitat" },
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

document.querySelector("#image-array").innerHTML = updatedImageArray;
// galleryElement.innerHTML = imageElements.join(``);