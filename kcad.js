class Ability {
	constructor(name, description, enemies, games_art) {
		this._name = name;
		this._description = description;
		this._enemies = enemies;
		this._games_art = games_art;
	}

	print() {
		var popuptexts = document.getElementsByClassName("popuptext");
		for (var i = 0; i < popuptexts.length; i++) {
			if (popuptexts[i].id !== this._name) {
				popuptexts[i].classList.remove("show");
			}
		}
		document.getElementById(this._name).classList.toggle("show");
		document.getElementById(this._name).innerHTML = "<strong>Name</strong>: " + this._name + "<br /><strong>Description</strong>: " + this._description + "<br /><strong>Enemies</strong>: " + this._enemies + "<br /><strong>Games</strong>: " + this._games_art;
	}
}

var animal = new Ability("Animal", "'You love dirt! DIG! Sweet dirt! DIG! DIG! DIG! DIG!! Can't dig everywhere...' -Kirby: Squeak Squad", ["Gaw Gaw", " <em>Spinni</em>'s metal claw", " <em>Gao Gao</em>"], ["Kirby: Squeak Squad<br /><img src='images/animal_art.png' alt='Animal Kirby' width='250' />"]);
var archer = new Ability("Archer", "'Wait for the right moment, and open fire. Hide in the shadows, and become a Sharpshooter! Your precision aiming will let you hit a small target from a longer distance.' -Kirby: Triple Deluxe", ["Spynum"], ["Kirby: Triple Deluxe", " Kirby Fighters Deluxe", " Kirby: Planet Robobot<br /><img src='images/archer_art.png' alt='Archer Kirby' width='250' />"]);
var artist = new Ability("Artist", "'Set out on a voyage of training with a colorful paintbrush on your side! Materialize yummies to share with your friends. It's like magic! Art has the power to save the world!' -Kirby Star Allies", ["<em>Vividria</em>"], ["Kirby Star Allies<br /><img src='images/artist_art.png' alt='Artist Kirby' width='250' />"]);
var backdrop = new Ability("Backdrop", "'Kirby can use a powerful wrestling technique, the back drop, to defeat his opponents!' -Kirby's Adventure", ["<em>Bugzzy</em>"], ["Kirby's Adventure", " Kirby: Nightmare in Dream Land<br /><img src='images/backdrop_art.png' alt='Backdrop Kirby' width='250' />"]);
var ball = new Ability("Ball", "'Kirby can roll into a smooth ball! If you hold the A Button, he will jump higher!' -Kirby's Adventure", ["Bubbles", " <em>Paint Roller</em>'s baseball"], ["Kirby's Adventure", " Kirby: Nightmare in Dream Land<br /><img src='images/ball_art.png' alt='Ball Kirby' width='250' />"]);
var balloon = new Ability("Balloon", "'Inflate! Pop to stun enemies!' -Kirby: Canvas Curse", ["Bloon"], ["Kirby: Canvas Curse<br /><img src='images/balloon_art.png' alt='Balloon Kirby' width='250' />"]);
var beam = new Ability("Beam", "'This crackling attack unleashes a ton of energy. Shoot a Cycle Beam or fire a Beam Blast from midair! And if you need to electrify your friends' weapons in a flash, use the rapid fire Wave Beam!' -Kirby Star Allies", ["Gemra", " Laser Ball", " Metal Bit", " Waddle Doo", " <em>King Doo</em>"], ["Kirby's Adventure", " Kirby Super Star", " Kirby: Nightmare in Dream Land", " Kirby & The Amazing Mirror", " Kirby: Canvas Curse", " Kirby: Squeak Squad", " Kirby Super Star Ultra", " Kirby's Return to Dream Land", " Kirby Triple Deluxe", " Kirby Fighers Deluxe", " Kirby: Planet Robobot", " Team Kirby Clash Deluxe", " Kirby Star Allies", " Super Kirby Clash<br /><img src='images/beam_art.png' alt='Beam Kirby' width='250' />"]);
var beetle = new Ability("Beetle", "'A flash of light reflects off its horn as the king of bugs soars through the sky! After charging your enemies to grab them with your horn, you can slam them into the ground!' -Kirby Triple Deluxe", ["Beetley", " <em>Hornhead</em>"], ["Kirby Triple Deluxe", " Kirby Fighters Deluxe", " Kirby Battle Royale", " Kirby Star Allies<br /><img src='images/beetle_art.png' alt='Beetle Kirby' width='250' />"]);
var bell = new Ability("Bell", "'Ring dong, ding dong! It's a golden bell. Shake it, and a strange tone issues forth. Talk about stunning conclusions--get a load of the Ding Finale!' -Kirby Triple Deluxe", ["Ringle"], ["Kirby Triple Deluxe", " Kirby Fighters Deluxe<br /><img src='images/bell_art.png' alt='Bell Kirby' width='250' />"]);
var bomb = new Ability("Bomb", "'Grab a bomb and hold the button to set the throw angle. Toss it and it'll go Ka-BOOM!' -Kirby Super Star Ultra", ["Bronto Burt's bombs", " Bomb Poppy Bros. Jr.", " Jungle Bomb", " Skud", " Pedo", " Rockn", " Balloon Bomber", " Foley", " Prank", " Bomb Perot", " Volm", " <em>Miracle Matter</em>'s bombs", " <em>Mr. Dooter</em>'s bombs", " <em>Metal General</em>'s missiles", " <em>Moley</em>'s bombs", " <em>Wiz</em>'s bombs", " <em>(Dark) Daroach</em>'s bombs", " <em>Clanky Woods</em>'s missiles", " <em>Susie</em>'s missiles"], ["Kirby Super Star", " Kirby 64: The Crystal Shards", " Kirby Air Ride", " Kirby & The Amazing Mirror", " Kirby: Squeak Squad", " Kirby Super Star Ultra", " Kirby's Return To Dream Land", " Kirby Triple Deluxe", " Kirby Fighters Deluxe", " Kirby: Planet Robobot", " Kirby Battle Royale", " Kirby Star Allies<br /><img src='images/bomb_art.png' alt='Bomb Kirby' width='250' />"]);
var bubble = new Ability("Bubble", "'Mysterious bubbles can capture so much.' -Kirby: Squeak Squad", ["Bubble Head", " <em>Buboo</em>"], ["Kirby: Squeak Squad<br /><img src='images/bubble_art.png' alt='Bubble Kirby' width='250' />"]);
