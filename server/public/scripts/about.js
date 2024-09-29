const main = document.getElementById("main-content");
main.className = "about-main";

const header = document.createElement('h1');
header.textContent = "OMENCLATE IS:";
header.className = "about-header";

const aboutForm = document.createElement('form');
aboutForm.className = "about-form";

const aboutInput = document.createElement('input');
aboutInput.className = "about-input";
aboutInput.setAttribute("type", "text");
aboutInput.setAttribute("autocomplete", "off");
aboutInput.setAttribute("name", "userInput");

const submitButton = document.createElement('button');
submitButton.textContent = "TELL"
submitButton.className = "about-button";
submitButton.setAttribute("type", "submit");

aboutForm.appendChild(aboutInput);
aboutForm.appendChild(submitButton);

aboutForm.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(aboutForm);
    const userInput = formData.get('userInput');

    if(userInput.match(/^\s*$/)) {
        alert("ENTER SOMETHING.");
        return;
    }

    fetch('/about', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    window.location = '/';
}

main.appendChild(header);
main.appendChild(aboutForm);