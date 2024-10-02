import logoImg from '../assets/photo-logo.png';
import gx85Img from '../assets/gx85.png';
import zs35Img from '../assets/zs35.png';
import nv4Img from '../assets/nv4.png';
import i14proImg from '../assets/14pro.png';

const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = logoImg;

const headerTitleContainer = document.createElement('div');
headerTitleContainer.className = 'title-container';
const headerText = 'OMENCLATE';
const regex = /a/i; //matches a
for(const char of headerText){
  const headerChar = document.createElement('h1');
  headerChar.textContent = char;
  headerChar.style.cursor = 'pointer';
  headerChar.addEventListener('mouseover', () => {
    headerChar.style.transform = 'translateY(-10px)';
    if(char.match(regex)) {
      headerChar.style.color = 'mediumaquamarine';
    }
  });
  headerChar.addEventListener('mouseout', () => {
    headerChar.style.transform = 'translateY(0)';
    headerChar.style.color = 'black';
  });
  headerChar.style.transition = 'transform 0.25s ease';
  if(char.match(regex)) {
    headerChar.addEventListener('click', () => {
      window.location = '/about';
    });
  }
  headerTitleContainer.appendChild(headerChar);
}

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitleContainer);

const headerCenter = document.createElement('div');
headerCenter.className = 'header-center';

const cameraBag = document.createElement('div');
cameraBag.className = 'camera-bag';
const shadowStyle = "drop-shadow(3px 6px 6px black)";

const gx85 = document.createElement('img');
gx85.src = gx85Img;
gx85.style.filter = localStorage.getItem('camera') === 'Panasonic DMC-GX85' ? shadowStyle : 'none';
const zs35 = document.createElement('img');
zs35.src = zs35Img;
zs35.style.filter = localStorage.getItem('camera') === 'Panasonic DMC-ZS35' ? shadowStyle : 'none';
const nv4 = document.createElement('img');
nv4.src = nv4Img;
nv4.style.filter = localStorage.getItem('camera') === 'Samsung NV4' ? shadowStyle : 'none';
const i14pro = document.createElement('img');
i14pro.src = i14proImg;
i14pro.style.filter = localStorage.getItem('camera') === 'Apple iPhone 14 Pro' ? shadowStyle : 'none';

gx85.addEventListener('click', () => {
  localStorage.setItem('camera', 'Panasonic DMC-GX85');
  window.location = '/';
});
zs35.addEventListener('click', () => {
  localStorage.setItem('camera', 'Panasonic DMC-ZS35');
  window.location = '/';
});

nv4.addEventListener('click', () => {
  localStorage.setItem('camera', 'Samsung NV4');
  window.location = '/';
});

i14pro.addEventListener('click', () => {
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

headerButton.addEventListener('click', () => {
  localStorage.setItem('camera', 'All');
  window.location = '/';
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerCenter);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);