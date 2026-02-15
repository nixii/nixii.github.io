
var build = {
	species: 'none',
	class: 'none',
	subclass: 'none',

	name: '',
	description: '',

	equipment: {
		weapons: {
			primary: {
				id: 'none',
				enchantment: 'none'
			},
			secondary: {
				id: 'none',
				enchantment: 'none'
			},
		},
		ring: {
			id: 'none',
			enchantment: 'none'
		},
		side: {
			id: 'none',
			enchantment: 'none'
		},
		helmet: {
			id: 'none',
			enchantment: 'none'
		},
		chestpiece: {
			id: 'none',
			enchantment: 'none'
		},
		leggings: {
			id: 'none',
			enchantment: 'none'
		}
	},

	level: 40,

	attributes: {
		totalPoints: 123,
		spentPoints: 0,

		strength: 1,
		mind: 1,
		dexterity: 1,
		vitality: 1
	},

	skills: {
		totalPoints: 60,
		spentPoints: 0,
		skills: [],
	}
};

// Load the build
function loadBuild() {
	numbers.maxAttributePoints.innerHTML = build.attributes.totalPoints;
	numbers.spentAttributePoints.innerHTML = build.attributes.spentPoints;
}