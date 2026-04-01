

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
    { url: "https://i.postimg.cc/QCDWZxtP/Screenshot-2025-06-27-174941.png", link: "https://mhdaslam.me/" },
    { url: "https://i.postimg.cc/PqCY15gN/Screenshot-2026-03-31-185902.png", link: "https://alameencatering.in/" }
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

  images.forEach(item => {
    const isObj = typeof item === 'object';
    const src = isObj ? item.url : item;
    const link = isObj ? item.link : null;

    const wrapper = document.createElement('div');
    wrapper.className = 'work-item';
    wrapper.style.opacity = '0';
    wrapper.style.transition = 'opacity 0.5s ease';

    const img = document.createElement('img');
    img.src = src;
    img.alt = "Portfolio work";
    img.className = 'portfolio-img';

    if (link) {
      const overlay = document.createElement('a');
      overlay.href = link;
      overlay.target = "_blank";
      overlay.className = 'visit-overlay';
      overlay.textContent = 'Visit';
      wrapper.appendChild(overlay);
    }

    wrapper.appendChild(img);

    img.onload = () => {
      loadedCount++;
      container.appendChild(wrapper);
      setTimeout(() => wrapper.style.opacity = '1', 50); // Fade in effect

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


