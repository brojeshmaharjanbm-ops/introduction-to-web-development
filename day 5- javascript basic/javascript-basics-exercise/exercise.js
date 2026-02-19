document.addEventListener('DOMContentLoaded', () => {

	const counterText = document.querySelector('.js-counter-text');
	const incrementBtn = document.querySelector('.js-increment-btn');
	const decrementBtn = document.querySelector('.js-decrement-btn');

	let count = 0;

	function renderCount() {
		counterText.textContent = count;
	}

	incrementBtn.addEventListener('click', () => {
		count += 1;
		renderCount();
	});

	decrementBtn.addEventListener('click', () => {
		count -= 1;
		renderCount();
	});


	const ageInput = document.querySelector('.js-age-input');
	const calculateBtn = document.querySelector('.js-calculate-btn');
	const resultText = document.querySelector('.js-result');

	function calculateDogAge(humanYears) {
		return humanYears * 7;
	}

	function showResult(message, isError = false) {
		resultText.textContent = message;
		resultText.style.color = isError ? 'crimson' : '';
	}

	calculateBtn.addEventListener('click', () => {
		const value = ageInput.value.trim();
		if (value === '') {
			showResult('Please enter your age.', true);
			return;
		}

		const years = Number(value);
		if (Number.isNaN(years) || years < 0) {
			showResult('Enter a valid non-negative number.', true);
			return;
		}

		const dogAge = calculateDogAge(years);
		showResult(`Your dog age will be ${dogAge} years.`);
	});

	ageInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') calculateBtn.click();
	});

	renderCount();
});




