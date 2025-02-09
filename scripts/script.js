// Image Slideshow
let currentImageIndex = 0;
const images = [
  "assets/tool-preview-1.png",
  "assets/tool-preview-2.png"
];

function changeImage() {
  const toolImage = document.getElementById("toolImage");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  toolImage.src = images[currentImageIndex];
}

setInterval(changeImage, 4000); // Change image every 4 seconds

// Copy Binance ID Function
function copyBinanceId() {
  const binanceId = document.getElementById('binanceId').innerText;
  navigator.clipboard.writeText(binanceId).then(() => {
    alert('Binance ID copied to clipboard!');
  });
}

// Simple Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});