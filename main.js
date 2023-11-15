import './style.css';
import './scss/main.scss';

/* Teljarinn sem telur niður að jólum */
function updateCountdown() {
	const christmas = new Date('December 24, 2023 00:00:00');
	const now = new Date();
	const diff = christmas - now;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	const countdownElement = document.getElementById('time');
	countdownElement.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Updatear á hverri sekúndu
setInterval(updateCountdown, 1000);

/* Uppskriftirnar sem sóttar eru á spoonacular */
function displayRecipes(recipes) {
	const recipesContainer = document.getElementById('recipes');
	recipes.forEach(recipe => {
		const recipeElement = document.createElement('div');
		recipeElement.classList.add('recipe');
		recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
          
        `;
		recipesContainer.appendChild(recipeElement);
	});
}

async function fetchGingerbreadRecipes() {
	const apiKey = 'ba37bb2b57744c209729f2bd46ae5b06';
	const url = `https://api.spoonacular.com/recipes/complexSearch?query=gingerbread&apiKey=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		displayRecipes(data.results);
	} catch (error) {
		console.error('Error fetching recipes:', error);
	}
}

fetchGingerbreadRecipes();// Sækir uppskriftirnar

/* Snjókorn! */
document.addEventListener('DOMContentLoaded', () => {
	const snowflakes = document.querySelectorAll('.snow');

	snowflakes.forEach(snowflake => {
		const minSize = 5; // Minnsta stærð snjókorna
		const maxSize = 10; // Stærsta stærð snjókorna
		const size = ((Math.random() * (maxSize - minSize)) + minSize);
		const duration = ((Math.random() * 10) + 10); // Endunartími snjókorna
		const delay = (Math.random() * 10); // Biðtími snjókorna
		const opacity = Math.random(); // Opacity snjókorna

		snowflake.style.width = `${size}px`;
		snowflake.style.height = `${size}px`;
		snowflake.style.opacity = opacity;
		snowflake.style.left = `${Math.random() * 100}vw`;
		snowflake.style.animationDuration = `${duration}s`;
		snowflake.style.animationDelay = `-${delay}s`;
		snowflake.style.animationTimingFunction = 'linear';
		snowflake.style.animationName = 'fall';
	});
});

