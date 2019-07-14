const country = document.getElementById('country');
const gender = document.getElementById('gender');
const amount = document.getElementById('quantity');

const init = () => {
	addEventListeners();
};

const addEventListeners = () => {
	document.querySelector('#form').addEventListener('submit', generateNames);
};
const generateNames = (e) => {
	e.preventDefault();
	getNames();
};

const url = () => {
	let url = `https://uinames.com/api/?`;

	if (country.value !== '') {
		url += `region=${country.value}&`;
	}
	if (gender.value !== '') {
		url += `gender=${gender.value}&`;
	}
	if (amount !== '') {
		url += `amount=${amount.value}`;
	}
	return url;
};

function getNames() {
	console.log(url());
	//New Http Request
	const xhr = new XMLHttpRequest();

	//Open a new Connection
	xhr.open('GET', url(), true);

	//load response
	xhr.onload = function() {
		if (this.status === 200) {
			const names = JSON.parse(this.responseText);
			let html;
			const section = document.getElementById('generatedNames');
			section.style.display = 'block';

			names.forEach((name, index) => {
				html += `<p class="name"><span class="numbering">${index + 1}</span> <span>${name.name}</span></p>`;
			});
			section.innerHTML = html;
		}
	};

	xhr.send();
}

init();
