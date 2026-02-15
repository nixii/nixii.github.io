
// is it saved
var saved = true;

// Connect all race radio buttons
radioButtons.species.forEach(speciesRadio => {
	speciesRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.species = this.value;
		saved = false;
	});
});

// Connect all class radio buttons
radioButtons.classes.forEach(classRadio => {
	classRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.class = this.value;
		saved = false;
	});
});

// Connect all subclass radio buttons
radioButtons.subclasses.forEach(subclassRadio => {
	subclassRadio.addEventListener('change', function() {
		if (!this.checked) return;
		build.subclass = this.value;
		saved = false;
	});
});

// Name and description input
inputs.name.addEventListener('input', function() {
	build.name = this.value;
	saved = false;
});
inputs.description.addEventListener('input', function() {
	build.name 
});

// Save check
window.addEventListener('beforeunload', function(e) {
	if (!saved) {
		e.preventDefault();
	}
});

// Load values
loadBuild();