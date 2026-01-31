
// Connect all race radio buttons
speciesRadioButtons.forEach(speciesRadio => {
	speciesRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.species = this.value;
	});
});

// Connect all class radio buttons
classRadioButtons.forEach(classRadio => {
	classRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.class = this.value;
	});
});

// Connect all subclass radio buttons
subclassRadioButtons.forEach(subclassRadio => {
	subclassRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.subclass = this.value;
	});
});