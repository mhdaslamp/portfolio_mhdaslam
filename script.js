
  function loadImages() {
    const images = [
"https://i.postimg.cc/cCcSRsrd/coming-soon-2.png",
"https://i.postimg.cc/x8QQNkjs/frame-size-1.png",
"https://i.postimg.cc/52rMqKNQ/Group-12.png",
"https://i.postimg.cc/ZYP4tLjX/IMG-20240708-WA0027.jpg",
"https://i.postimg.cc/8zcSvgDV/Instagram-post-1-4.png"

    ];

    

    const container = document.getElementById("dynamic_works");
    container.innerHTML = ""; // Clear existing content

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Dynamic Image";
      img.style.width = "311px";
        img.style.height = "311px";
        img.style.borderRadius = "37px";
        img.style.objectFit = "cover";
        img.style.margin = "5px";
    
      container.appendChild(img);
    });
  }

