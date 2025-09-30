const API_KEY = 'CT5XXhKr3fWFIoIvqu07IKlFyG5xyAzYakNXouj7'; 
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('nasaTitle').innerText = data.title;
    document.getElementById('desc').textContent = data.explanation;

    const mediaContainer = document.getElementById('media');
    mediaContainer.innerHTML = ""; // Clear previous content

    if (data.media_type === "image") {
      const img = document.createElement("img");
      img.src = data.url;
      img.alt = data.title;
      img.style.maxWidth = "100%";
      mediaContainer.appendChild(img);
    } else if (data.media_type === "video") {
      const iframe = document.createElement("iframe");
      iframe.src = data.url;
      iframe.width = "100%";
      iframe.height = "500";
      iframe.allowFullscreen = true;
      mediaContainer.appendChild(iframe);
    } else {
      mediaContainer.textContent = "Unsupported media type.";
    }
  })
  .catch(error => console.error("Error fetching NASA APOD:", error));
