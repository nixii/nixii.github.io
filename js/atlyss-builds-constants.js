
// Radio buttons for info
const radioButtons = {
	species: document.querySelectorAll('input[name="species-choice"]'),
	classes: document.querySelectorAll('input[name="class-choice"]'),
	subclasses: document.querySelectorAll('input[name="subclass-choice"]'),
};

// Get inputs
const inputs = {
	name: document.getElementById('name-input'),
	description: document.getElementById('description-input'),
};

// Max/min boxes
const numbers = {
	maxAttributePoints: document.getElementById('maximum-attribute-points'),
	spentAttributePoints: document.getElementById('spent-attribute-points'),
};

// Attribute inputs
const attributeInputs = {
	strength: document.getElementById('strength-attribute'),
	mind: document.getElementById('mind-attribute'),
	dexterity: document.getElementById('dexterity-attribute'),
	vitality: document.getElementById('vitality-attribute'),
};