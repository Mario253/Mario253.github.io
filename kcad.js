class Ability {
	constructor(name, description, enemies) {
		this._name = name;
		this._description = description;
		this._enemies = enemies;
	}

	print() {
		document.getElementById("text").classList.toggle("show");
		document.getElementById("text").innerHTML = "<strong>Name</strong>: " + this._name + "<br /><strong>Description</strong>: " + this._description + "<br /><strong>Enemies</strong>: " + this._enemies;
	}
}

var animal = new Ability("Animal", "'You love dirt! DIG! Sweet dirt! DIG! DIG! DIG! DIG!! Can't dig everywhere...' -Kirby: Squeak Squad", ["Gaw Gaw", " <em>Spinni</em>'s metal claw", " <em>Gao Gao</em>"]);
