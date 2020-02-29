class Ability {
	constructor(name, description, enemies, games) {
		this._name = name;
		this._description = description;
		this._enemies = enemies;
		this._games = games;
	}

	print() {
		var popuptexts = document.getElementsByClassName("popuptext");
		for (var i = 0; i < popuptexts.length; i++) {
			if (popuptexts[i].id !== this._name) {
				popuptexts[i].classList.remove("show");
			}
		}
		document.getElementById(this._name).classList.toggle("show");
		document.getElementById(this._name).innerHTML = "<strong>Name</strong>: " + this._name + "<br /><strong>Description</strong>: " + this._description + "<br /><strong>Enemies</strong>: " + this._enemies + "<br /><strong>Games</strong>: " + this._games;
	}
}

var animal = new Ability("Animal", "'You love dirt! DIG! Sweet dirt! DIG! DIG! DIG! DIG!! Can't dig everywhere...' -Kirby: Squeak Squad", ["Gaw Gaw", " <em>Spinni</em>'s metal claw", " <em>Gao Gao</em>"], ["Kirby: Squeak Squad"]);
var archer = new Ability("Archer", "'Wait for the right moment, and open fire. Hide in the shadows, and become a Sharpshooter! Your precision aiming will let you hit a small target from a longer distance.' -Kirby: Triple Deluxe", ["Spynum"], ["Kirby: Triple Deluxe", " Kirby Fighters Deluxe", " Kirby: Planet Robobot"]);
