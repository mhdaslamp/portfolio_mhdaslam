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

  // Optional: define loadContent function if not defined elsewhere
  function loadContent(type, activeButton) {
    // Remove 'active' class from both buttons
    webBtn.classList.remove('active');
    graphicBtn.classList.remove('active');

    // Add 'active' class to the clicked button
    activeButton.classList.add('active');

    // Toggle content visibility
    document.getElementById('webContent').style.display = (type === 'web') ? 'flex' : 'none';
    document.getElementById('graphicContent').style.display = (type === 'graphic') ? 'flex' : 'none';
  }
});



function loadImages(type, buttonElement) {
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

  // Clear container and show loader
  container.innerHTML = "";
  loader.style.display = "block";

  // Update button states
  document.querySelectorAll('.works_buttons button').forEach(btn => {
    btn.classList.remove('active');
  });
  buttonElement.classList.add('active');

  // Load appropriate images
  const images = type === 'web' ? webImages : graphicImages;
  
  // Track loaded images
  let loadedCount = 0;
  const totalImages = images.length;

  images.forEach(src => {
    const img = new Image();
    img.src = src;
    img.alt = "Portfolio Image";
    img.style.width = "311px";
    img.style.height = "311px";
    img.style.borderRadius = "37px";
    img.style.objectFit = "cover";
    img.style.margin = "5px";

    img.onload = function() {
      container.appendChild(img);
      loadedCount++;
      if (loadedCount === totalImages) {
        loader.style.display = "none";
      }
    };

    img.onerror = function() {
      console.error("Failed to load image:", src);
      loadedCount++;
      if (loadedCount === totalImages) {
        loader.style.display = "none";
      }
    };
  });
}

// Initialize on page load
window.onload = function() {
  const webBtn = document.getElementById('webBtn');
  // Set web button as active by default
  webBtn.classList.add('active');
  // Load web images by default
  loadImages('web', webBtn);
};
