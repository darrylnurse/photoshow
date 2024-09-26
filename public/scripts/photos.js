const renderPhotos = async () => {
  const response = await fetch('/photos');
  const data = await response.json();

  const mainContent = document.getElementById('main-content');

  if (data) {
    data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(photo => {
          const card = document.createElement('div');
          card.classList.add("card");

          const topContainer = document.createElement('div');
          topContainer.classList.add("top-container");
          topContainer.style.backgroundImage = `url(${photo.url})`;

          const bottomContainer = document.createElement('div');
          bottomContainer.classList.add("bottom-container");

          const photoTitle = document.createElement('h3');
          photoTitle.textContent = photo.title;
          bottomContainer.appendChild(photoTitle);

          const photoDate = document.createElement('p');
          photoDate.textContent = "Taken On: " + photo.date;
          bottomContainer.appendChild(photoDate);

          const photoLocation = document.createElement('p');
          photoLocation.textContent = "Taken At: " + photo.location;
          bottomContainer.appendChild(photoLocation);

          const readMore = document.createElement('a');
          readMore.textContent = "See More";
          readMore.href = `/photos/${photo.id}`;
          readMore.setAttribute('role', 'button');
          bottomContainer.appendChild(readMore);

          card.appendChild(topContainer);
          card.appendChild(bottomContainer);

          mainContent.appendChild(card);
        });
  } else {
    const noPhotos = document.createElement('h2');
    noPhotos.textContent = "No Photos Available :(";
    mainContent.appendChild(noPhotos);
  }
}

const renderPhoto = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop());

  const response = await fetch('/photos');
  const data = await response.json();

  const photoContent = document.getElementById('photo-content');

  let photo;

  if(data) {
    photo = data.find(photo => photo.id === requestedID);
  }

  if(photo) {
    document.getElementById('image').src = photo.url;
    document.getElementById('title').textContent = photo.title;
    document.getElementById('date').textContent = 'Taken On: ' + photo.date;
    document.getElementById('location').textContent = 'Taken At: ' + photo.location;
    document.getElementById('camera').textContent = 'Taken With: ' + photo.camera;
    document.getElementById('focal-length').textContent = 'Focal Length: ' + photo['focal-length'];
    document.getElementById('aperture').textContent = 'Aperture: ' + photo.aperture;
    document.getElementById('shutter-speed').textContent = 'Shutter Speed: ' + photo.shutterspeed;
    document.getElementById('iso').textContent = 'ISO: ' + photo.iso;
    document.title = `${photo.title}`;
    photoContent.style.backgroundImage = `url(${photo.url})`
    photoContent.style.backgroundSize = "cover";
    photoContent.style.backgroundRepeat = "no-repeat";
    photoContent.style.backgroundBlendMode = "difference";

  } else {
    const noPhotos = document.createElement('h2');
    noPhotos.textContent = "No Photos Available.";
    photoContent.appendChild(noPhotos);
  }
}

const requestedURL = window.location.href.split('/').pop();

if (!isNaN(parseInt(requestedURL))) {
  renderPhoto().catch(console.error);
} else if (!requestedURL || requestedURL === "") {
  renderPhotos().catch(console.error);
} else {
  window.location.href = '../404.html';
}