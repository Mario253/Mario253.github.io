class Ability {
	constructor(name, description, enemies) {
		this._name = name;
		this._description = description;
		this._enemies = enemies;
	}

	print() {
		document.getElementById("popup").innerHTML = "Name: " + this._name + "<br />Description: " + this._description + "<br />Enemies: " + this._enemies;
	}
}

var test = new Ability("test", "test ability", ["no ", "enemies"]);
