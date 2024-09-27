const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = '/photo-logo.png';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'PHOTOS';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerCenter = document.createElement('div');
headerCenter.className = 'header-center';

const cameraBag = document.createElement('div');
cameraBag.className = 'camera-bag';

const gx85 = document.createElement('img');
gx85.src = '/gx85.png';
const zs35 = document.createElement('img');
zs35.src = '/zs35.png';
const nv4 = document.createElement('img');
nv4.src = '/nv4.png';
const i14pro = document.createElement('img');
i14pro.src = '/14pro.png';

gx85.addEventListener('click', function handleShutter() {
  localStorage.setItem('camera', 'Panasonic DMC-GX85');
  window.location = '/';
});
zs35.addEventListener('click', function handleShutter() {
  localStorage.setItem('camera', 'Panasonic DMC-ZS35');
  window.location = '/';
});

nv4.addEventListener('click', function handleShutter() {
  localStorage.setItem('camera', 'Samsung NV4');
  window.location = '/';
});

i14pro.addEventListener('click', function handleShutter() {
  localStorage.setItem('camera', 'Apple iPhone 14 Pro');
  window.location = '/';
});

cameraBag.appendChild(gx85);
cameraBag.appendChild(zs35);
cameraBag.appendChild(nv4);
cameraBag.appendChild(i14pro);

headerCenter.appendChild(cameraBag);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button');
headerButton.textContent = 'All Photos';

headerButton.addEventListener('click', function handleClick(event) {
  localStorage.setItem('camera', 'All');
  window.location = '/';
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerCenter);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);