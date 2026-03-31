

document.addEventListener('DOMContentLoaded', function () {
  // Initialize with web development as default
  const webBtn = document.getElementById('webBtn');
  const graphicBtn = document.getElementById('graphicBtn');

  // Set initial active state
  webBtn.classList.add('active');

  // Load initial content
  loadContent('web', webBtn);

  // Add click handlers
  webBtn.addEventListener('click', function () {
    loadContent('web', this);
  });

  graphicBtn.addEventListener('click', function () {
    loadContent('graphic', this);
  });
});

function loadContent(type, button) {
  // Image arrays
  const webImages = [
    "https://i.postimg.cc/QCDWZxtP/Screenshot-2025-06-27-174941.png"
  ];

  const graphicImages = [
    "https://i.postimg.cc/cCcSRsrd/coming-soon-2.png",
    "https://i.postimg.cc/x8QQNkjs/frame-size-1.png",
    "https://i.postimg.cc/52rMqKNQ/Group-12.png",
    "https://i.postimg.cc/ZYP4tLjX/IMG-20240708-WA0027.jpg",
    "https://i.postimg.cc/8zcSvgDV/Instagram-post-1-4.png",
    "https://i.postimg.cc/C1Jb7jgZ/playstation-1.png"
  ];

  const container = document.getElementById("dynamic_works");
  const loader = document.getElementById("loader");
  const allButtons = document.querySelectorAll('.works_buttons button');

  // Mark start time to ensure minimum lodaer visibility
  const startTime = Date.now();
  const minDuration = 600; // ms

  // Clear and show loader
  container.innerHTML = '';
  loader.style.display = 'block';

  // Update button states
  allButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  const images = type === 'web' ? webImages : graphicImages;
  let loadedCount = 0;

  if (images.length === 0) {
    loader.style.display = 'none';
    return;
  }

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Portfolio work";
    img.className = 'portfolio-img'; // Use class for styling
    img.style.cssText = `
      width: 311px;
      height: 311px;
      border-radius: 37px;
      object-fit: cover;
      margin: 5px;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;

    img.onload = () => {
      loadedCount++;
      container.appendChild(img);
      setTimeout(() => img.style.opacity = '1', 50); // Fade in effect

      if (loadedCount === images.length) {
        const remainingTime = Math.max(0, minDuration - (Date.now() - startTime));
        setTimeout(() => {
          loader.style.display = 'none';
        }, remainingTime);
      }
    };

    img.onerror = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        loader.style.display = 'none';
      }
    };
  });
}



document.addEventListener('mousemove', (e) => {
  const sphere = document.getElementById('sphere1');
  sphere.style.left = `${e.clientX - 200}px`;
  sphere.style.top = `${e.clientY - 200}px`;
});


