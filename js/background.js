const url = `https://bing.biturl.top`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.url;
    const image = document.createElement("img");
    image.src = imageUrl;
    document.body.appendChild(image);
  });
