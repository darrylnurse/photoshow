const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = '/photo-logo.png';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Photo Show';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button');
headerButton.textContent = 'All Photos';

headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/';
});

headerRight.appendChild(headerButton);

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);