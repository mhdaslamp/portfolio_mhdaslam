

document.addEventListener('DOMContentLoaded', function() {
  // Initialize with web development as default
  const webBtn = document.getElementById('webBtn');
  const graphicBtn = document.getElementById('graphicBtn');
  
  // Set initial active state
  webBtn.classList.add('active');
  
  // Load initial content
  loadContent('web', webBtn);

  // Add click handlers
  webBtn.addEventListener('click', function() {
    loadContent('web', this);
  });
  
  graphicBtn.addEventListener('click', function() {
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

  // Get elements
  const container = document.getElementById("dynamic_works");
  const loader = document.getElementById("loader");
  const allButtons = document.querySelectorAll('.works_buttons button');

  // Clear and show loader
  container.innerHTML = '';
  loader.style.display = 'block';

  // Update button states
  allButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  // Load appropriate images
  const images = type === 'web' ? webImages : graphicImages;
  
  // Create image elements
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Portfolio work";
    img.style.cssText = `
      width: 311px;
      height: 311px;
      border-radius: 37px;
      object-fit: cover;
      margin: 5px;
    `;
    
    img.onload = () => {
      container.appendChild(img);
      // Hide loader when all images are loaded
      if (container.children.length === images.length) {
        loader.style.display = 'none';
      }
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', src);
      if (container.children.length === images.length - 1) {
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


