let lastVisitedPhoto = 1;
const renderPhotos = async () => {

  let data;
  try {
    const response = await fetch('/photos');
    data = await response.json();
  } catch (error) {
    console.error(error.message);
  }

  const mainContent = document.getElementById('main-content');
  mainContent.classList.add("home-main");

  const storedLastVisitedPhoto = localStorage.getItem('lastVisitedPhoto');
  if (storedLastVisitedPhoto) {
    lastVisitedPhoto = parseInt(storedLastVisitedPhoto);
  }

  if (data) {
    mainContent.style.backgroundImage = `url(${data[lastVisitedPhoto - 1].url})`
    mainContent.style.backgroundSize = "cover";
    mainContent.style.backgroundRepeat = "no-repeat";
    mainContent.style.backgroundBlendMode = "difference";

    const selectedCamera = localStorage.getItem('camera');

    data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter((photo) => {
          if(selectedCamera === 'All') return true;
          return photo.camera === selectedCamera;
        })
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
          photoDate.textContent = "Taken On: " + formatDate(photo.date);
          bottomContainer.appendChild(photoDate);

          const photoLocation = document.createElement('p');
          photoLocation.textContent = "Taken In: " + photo.location;
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
    noPhotos.textContent = "NOTHING TAKEN.";
    mainContent.appendChild(noPhotos);
  }
}

const renderPhoto = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop());

  const response = await fetch('/photos');
  const data = await response.json();

  const photoContent = document.getElementById('photo-content');
  photoContent.classList.add('photo-main');

  let photo;

  if(data) {
    photo = data.find(photo => photo.id === requestedID);
  }

  if(photo) {
    lastVisitedPhoto = photo.id;
    localStorage.setItem('lastVisitedPhoto', lastVisitedPhoto);

    document.getElementById('image').src = photo.url;
    document.getElementById('title').textContent = photo.title;
    document.getElementById('date').textContent = 'Taken On: ' + formatDate(photo.date);
    document.getElementById('location').textContent = 'Taken In: ' + photo.location;
    document.getElementById('camera').textContent = 'Taken With: ' + photo.camera;
    document.getElementById('focal-length').textContent = 'Focal Length: ' + photo['focal_length'];
    document.getElementById('aperture').textContent = 'Aperture: ' + photo.aperture;
    document.getElementById('shutter-speed').textContent = 'Shutter Speed: ' + photo['shutter_speed'];
    document.getElementById('iso').textContent = 'ISO: ' + photo.iso;
    document.title = `${photo.title}`;
    photoContent.style.backgroundImage = `url(${photo.url})`
    photoContent.style.backgroundSize = "cover";
    photoContent.style.backgroundRepeat = "no-repeat";
    photoContent.style.backgroundBlendMode = "difference";

  } else {
    const noPhotos = document.createElement('h2');
    noPhotos.textContent = "NOTHING EARNED.";
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

function formatDate(date) {
  return new Date(date).toDateString().slice(4);
}