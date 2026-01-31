
// is it saved
var saved = true;

// Connect all race radio buttons
speciesRadioButtons.forEach(speciesRadio => {
	speciesRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.species = this.value;
		saved = false;
	});
});

// Connect all class radio buttons
classRadioButtons.forEach(classRadio => {
	classRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.class = this.value;
		saved = false;
	});
});

// Connect all subclass radio buttons
subclassRadioButtons.forEach(subclassRadio => {
	subclassRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.subclass = this.value;
		saved = false;
	});
});

// Save check
window.addEventListener('beforeunload', function(e) {
	if (!saved) {
		e.preventDefault();
	}
});