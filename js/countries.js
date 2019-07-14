function getCountries() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'js/api.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			const countries = JSON.parse(this.responseText);
			let option;

			countries.forEach((country) => {
				option += `<option value=${country.region.toLowerCase()}>${country.region}</option>
		                `;
			});
			document.getElementById('country').innerHTML += option;
		}
	};

	xhr.send();
}

getCountries();