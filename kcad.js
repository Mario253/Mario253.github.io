class Ability {
	constructor(name, description, accessed, games, smalltext = false) {
		this._name = name;
		this._description = description;
		this._accessed = accessed.join(", ");
		this._games = games.join(", ");
		this._smalltext = smalltext;
	}

	get name() {
		return this._name;
	}

	get smalltext() {
		return this._smalltext;
	}

	print() {
		var popuptexts = document.getElementsByClassName("popuptext");
		for (var i = 0; i < popuptexts.length; i++) {
			if (popuptexts[i].id !== this._name) {
				popuptexts[i].classList.remove("show");
			}
		}
		document.getElementById(this._name).classList.toggle("show");
		document.getElementById(this._name).innerHTML = "<strong>Name</strong>: " + this._name + "<br /><strong>Description</strong>: " + this._description + "<br /><strong>Get it from</strong>: " + this._accessed + "<br /><strong>Games</strong>: " + this._games + "<br /><img src='images/" + this._name + "_art.png' alt='" + this._name +" Kirby' />";
	}
}

var norm_abil = {
	"Animal": new Ability("Animal", "'You love dirt! DIG! Sweet dirt! DIG! DIG! DIG! DIG!! Can't dig everywhere...' -Kirby: Squeak Squad", ["Gaw Gaw", "<em>Spinni</em>'s metal claw", "<em>Gao Gao</em>"], ["Kirby: Squeak Squad"]),
	"Archer": new Ability("Archer", "'Wait for the right moment, and open fire. Hide in the shadows, and become a Sharpshooter! Your precision aiming will let you hit a small target from a longer distance.' -Kirby: Triple Deluxe", ["Spynum"], ["Kirby: Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot"]),
	"Artist": new Ability("Artist", "'Set out on a voyage of training with a colorful paintbrush on your side! Materialize yummies to share with your friends. It's like magic! Art has the power to save the world!' -Kirby Star Allies", ["<em>Vividria</em>"], ["Kirby Star Allies"]),
	"Backdrop": new Ability("Backdrop", "'Kirby can use a powerful wrestling technique, the back drop, to defeat his opponents!' -Kirby's Adventure", ["<em>Bugzzy</em>"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land"]),
	"Ball": new Ability("Ball", "'Kirby can roll into a smooth ball! If you hold the A Button, he will jump higher!' -Kirby's Adventure", ["Bubbles", "<em>Paint Roller</em>'s baseball"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land"]),
	"Balloon": new Ability("Balloon", "'Inflate! Pop to stun enemies!' -Kirby: Canvas Curse", ["Bloon"], ["Kirby: Canvas Curse"]),
	"Beam": new Ability("Beam", "'This crackling attack unleashes a ton of energy. Shoot a Cycle Beam or fire a Beam Blast from midair! And if you need to electrify your friends' weapons in a flash, use the rapid fire Wave Beam!' -Kirby Star Allies", ["Gemra", "Laser Ball", "Metal Bit", "Waddle Doo", "<em>King Doo</em>"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighers Deluxe", "Kirby: Planet Robobot", "Team Kirby Clash Deluxe", "Kirby Star Allies", "Super Kirby Clash"]),
	"Beetle": new Ability("Beetle", "'A flash of light reflects off its horn as the king of bugs soars through the sky! After charging your enemies to grab them with your horn, you can slam them into the ground!' -Kirby Triple Deluxe", ["Beetley", "<em>Hornhead</em>"], ["Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby Battle Royale", "Kirby Star Allies"]),
	"Bell": new Ability("Bell", "'Ring dong, ding dong! It's a golden bell. Shake it, and a strange tone issues forth. Talk about stunning conclusions--get a load of the Ding Finale!' -Kirby Triple Deluxe", ["Ringle"], ["Kirby Triple Deluxe", "Kirby Fighters Deluxe"]),
	"Bomb": new Ability("Bomb", "'Grab a bomb and hold the button to set the throw angle. Toss it and it'll go Ka-BOOM!' -Kirby Super Star Ultra", ["Bronto Burt's bombs", "Bomb Poppy Bros. Jr.", "Jungle Bomb", "Skud", "Pedo", "Rockn", "Balloon Bomber", "Foley", "Prank", "Bomb Perot", "Volm", "<em>Miracle Matter</em>'s bombs", "<em>Mr. Dooter</em>'s bombs", "<em>Metal General</em>'s missiles", "<em>Moley</em>'s bombs", "<em>Wiz</em>'s bombs", "<em>(Dark) Daroach</em>'s bombs", "<em>Clanky Woods</em>'s missiles", "<em>Susie</em>'s missiles"], ["Kirby Super Star", "Kirby 64: The Crystal Shards", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return To Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"], true),
	"Bubble": new Ability("Bubble", "'Mysterious bubbles can capture so much.' -Kirby: Squeak Squad", ["Bubble Head", "<em>Buboo</em>"], ["Kirby: Squeak Squad"]),
	"Burning": new Ability("Burning", "'Kirby can turn into a flying fireball! Jump and attack in a flash of fire!' -Kirby's Adventure", ["Flamer", "Bobo", "Burnis", "Galbo", "Magoo", "Transformer", "Bukiset (fire sword)", "<em>Fire Lion</em>", "<em>Batafire</em>", "<em>Efrite</em>", "<em>Boboo</em>", "<em>Master Hand</em>'s bullets", "<em>Mr. Bright</em>'s stars", "<em>Miracle Matter</em>'s fireballs", "<em>Master & Crazy Hand<em>'s bullets", "<em>Moley</em>'s oil cans"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby's Dream Land 2", "Kirby's Block Ball", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare In Dream Land", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse"]),
	"Circus": new Ability("Circus", "'Is this for real? You bet it is! Jump through a flaming hoop, and show off your finest Acrobatics! After the curtains close on your foes, they'll know the clown arts are no joke.' -Kirby Triple Deluxe", ["Clown Acrobot"], ["Kirby Triple Deluxe", "Kirby: Planet Robobot"]),
	"Cleaning": new Ability("Cleaning", "'Fly about the sky on your broom and sweep up a breeze to blow fallen leaves and enemies away. You can even put out flames with a bucketful of water! And perhaps old friends will pop up to help you scrub?' -Kirby Star Allies", ["Broom Hatter", "Keke", "Bukiset (Broom)", "<em>Haboki</em>"], ["Kirby's Dream Land 3", "Kirby Star Allies"]),
	"Copy": new Ability("Copy", "'Use a strange light to analyze and then copy foes' abilities. Might you learn weird ones?' -Kirby Super Star Ultra", ["Tac"], ["Kirby Super Star", "Kirby Super Star Ultra"]),
	"Cupid": new Ability("Cupid", "'Fire a pointy arrow. Press and release B to fire the arrow. Change where you aim with the +Control Pad.' -Kirby & The Amazing Mirror", ["Cupie"], ["Kirby & The Amazing Mirror", "Kirby: Squeak Squad"]),
	"Cutter": new Ability("Cutter", "'The Cutter can cut anything in its path. Use it to cut down enemies, as well as ropes that get in your way.' -Kirby Super Star", ["Sir Kibble", "Kapar", "Bukiset (green wand)", "Fishbone", "Sawyer", "Boomerang Poppy Bros. Jr.", "Juckle", "<em>Waiu</em>", "<em>Kibble Blade</em>", "<em>Mr. Shine</em>", "<em>Miracle Matter</em>", "<em>Flowery Woods</em>", "<em>Marx</em>", "<em>Marx Soul</em>", "<em>Void</em>", "<em>Void Soul</em>"], ["Kirby's Adventure", "Kirby's Dream Land 2", "Kirby Super Star", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"]),
	"Doctor": new Ability("Doctor", "'Knowledgeable in medicine and the sciences, Doctor Kirby has a variety of quick and devastating attacks!' -Kirby: Planet Robobot", ["Chemitory"], ["Kirby: Planet Robobot", "Team Kirby Clash Deluxe", "Kirby Battle Royale", "Super Kirby Clash"]),
	"ESP": new Ability("ESP", "'Disappear with mind powers, just like magic, and revel in the effects when you use UP to tap into your powers! Also, use PK Insight to guard yourself, and release a psychokinetic charge with PK Electroshift! It's an ESPecially good time!' -Kirby Star Allies", ["NESP", "<em>Telepathos</em>", "<em>Void Termina</em>", "<em>Void Soul</em>", "<em>Void</em>"], ["Kirby: Planet Robobot", "Kirby Star Allies"]),
	"Fighter": new Ability("Fighter", "'This ability raises your fighting power to the max! Kirby's supersonic punches and kicks bring about infinite fighting capabilities.' -Kirby: Planet Robobot", ["Knuckle Joe", "Boxin", "Blue Golem", "<em>Iron Mam</em>", "<em>Box Boxer</em>"], ["Kirby Super Star", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"]),
	"Fire": new Ability("Fire", "'Kirby can breathe fire! Enemies beware, or you're gonna get burned!' -Kirby's Adventure", ["Acchi", "Antler", "Burning Leo", "Flamer", "Galbo", "Heat Phanphan", "Hot Head", "Prank's fireballs", "Shield Guard's sizzle shield", "<em>Fire Lion", "Fire Sphere Doomer", "Flame Galboros", "Mrs. Moley</em>'s oil cans", "<em>Mr. Bright</em>'s bright stars", "<em>Mr. Dooter EX</em>'s flaming skulls", "<em>Coily Rattler</em>'s volcanic rocks", "<em>Queen Sectonia", "Dark Matter Clone</em>'s orbs", "<em>Flamberge</em>'s flaming projectiles"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Star Allies"]),
	"Freeze": new Ability("Freeze", "'Kirby can create a shield to freeze enemies! He can then knock away the frozen blocks!' -Kirby's Adventure", ["Snoppy", "Transformer", "Chilly", "<em>Mr. Frosty</em>"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby: Canvas Curse"]),
	"Ghost": new Ability("Ghost", "'I will possess... I will control... I'm a spooky soul... I'm not scary, though. Right?' -Kirby: Squeak Squad", ["<em>Tedhaun</em>"], ["Kirby: Squeak Squad"]),
	"Hammer": new Ability("Hammer", "'A giant hammer inherited from the king himself that can pound pegs flat! You can charge it up for a pulverizing blow, but be careful not to overdo it. Imbue it with a friend's power and use it to fight!' -Kirby Star Allies", ["Dygclops (orange)", "<em>Bonkers", "Masked Dedede</em> (start of fight)"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Team Kirby Clash Deluxe", "Kirby Battle Royale", "Kirby Star Allies", "Super Kirby Clash"]),
	"Hi-Jump": new Ability("Hi-Jump", "'Leap into the air with a Hi-Jump! Zoom back down with an unstoppable high-speed Rocket Dive! A hero has made his debut!' -Kirby's Return to Dream Land", ["Starman", "Transformer"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby: Nightmare in Dream Land", "Kirby: Squeak Squad", "Kirby's Return to Dream Land"]),
	"Ice": new Ability("Ice", "'Freeze enemies with Ice Breath, and then send them packing with an Ice Kick! You can also glide gracefully along the ground with Ice Skate.' -Kirby Triple Deluxe", ["Pengi", "Master Pengi", "Frigis", "Snowl", "Emp", "Wappa", "Prank", "Bukiset (ice sword", "Antler (white)", "Shield Guard's blizzard shield", "Propeller", "Chilly", "<em>Yuki", "Mr. Frosty", "Ice Sphere Doomer", "Miracle Matter</em>'s ice crystals", "<em>Dark Mind</em>'s blue stars", "<em>Goliath</em>'s snowballs"], ["Kirby's Adventure", "Kirby's Dream Land 2", "Kirby Super Star", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"], true),
	"Jet": new Ability("Jet", "'This high-flying ability full of aerodynamic power makes its return! Charge it up with B, and then jet toward enemies at extreme speed!' -Kirby: Planet Robobot", ["Capsule J/J2/J3"], ["Kirby Super Star", "Kirby Super Star Ultra", "Kirby: Planet Robobot"]),
	"Laser": new Ability("Laser", "'Kirby can fire a laser beam! This beam will bounce off slopes, so try it in many places!' -Kirby's Adventure", ["Laser Ball", "Metal Guardian"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad"]),
	"Leaf": new Ability("Leaf", "'It's time to dance! The Leaf Dance creates a gorgeous swirl of razor-edged leaves. Press A to Guard, and...huh?! You're gone!' -Kirby's Return to Dream Land", ["Bulby", "Leafran"], ["Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot"]),
	"Metal": new Ability("Metal", "'Be careful. You can't get hurt, but don't get mad if you break stuff. It's not perfect, OK?' -Kirby: Squeak Squad", ["Metalun", "<em>Big Metalun</em>"], ["Kirby: Squeak Squad"]),
	"Mini": new Ability("Mini", "'Shrink down to tiny size so you can fit through tight passageways.' -Kirby & The Amazing Mirror", ["Minny"], ["Kirby & The Amazing Mirror"]),
	"Mirror": new Ability("Mirror", "'No one is quite sure how this odd cloning ability works. While guarding, it responds automatically to attack by countering straight away.' -Kirby: Planet Robobot", ["Simirror"], ["Kirby Super Star", "Kirby Super Star Ultra", "Kirby: Planet Robobot", "Kirby Battle Royale"]),
	"Missile": new Ability("Missile", "'Transform into a missile and fly through the sky. Watch out: you'll blow up if you hit an enemy or a wall.' -Kirby & The Amazing Mirror", ["Bang-Bang", "<em>Bombar</em>"], ["Kirby & The Amazing Mirror", "Kirby: Canvas Curse"]),
	"Needle": new Ability("Needle", "'Cover yourself in pointy needles to poke your enemies and attach to walls! You can also poke needles into the ceiling and floor!' -Kirby Triple Deluxe", ["Needlous", "Togezo", "Tick", "Boten", "Punc", "Pichikuri", "Spikey", "Ghost Knight", "Kacti", "Transformer", "Bukiset (lance)", "Togekuki", "<em>Captain Stitch", "Miracle Matter</em>'s thorns"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby's Dream Land 2", "Kirby's Block Ball", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby: Canvas Curse", "Kirby's Return to Dream Land", "Kirby Triple Deluxe"]),
	"Ninja": new Ability("Ninja", "'Reinforcements have been called in from a nearby ninja village! Slide into the shadows, and vanish in the darkness. When the time is right, unleash the Blossom Storm technique!' -Kirby Triple Deluxe", ["Bio Shock", "Moonja", "<em>Spinni</em>'s shurikens</em>"], ["Kirby Super Star", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"]),
	"Parasol": new Ability("Parasol", "'Guard against falling objects, or take a floaty stroll through the air. You can also spray water to attack enemies or put out fires. For your grand finale, use a Circus Throw!' -Kirby Triple Deluxe", ["Parasol Drifter", "Parasol Waddle Dee/Doo", "Bukiset (umbrella)", "Sasuke", "Klinko", "Transformer", "Shotzos (w/ parasol)", "<em>Jumpershot", "Paint Roller</em>'s drawn parasol"], ["Kirby's Adventure", "Kirby's Dream Land 2", "Kirby Super Star", "Kirby's Dream Course", "Kirby's Dream Land 3", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"], true),
	"Plasma": new Ability("Plasma", "'The supercharged Plasma Ability returns! Waggle the control stick to build up energy, then fire it off. You can even shoot upwards! You can also zap your friends' weapons with a mighty jolt to grant them extra shocking powers!' -Kirby Star Allies", ["Plasma Whip", "Plugg", "<em>Zan Partizanne</em>'s electric beam", "<em>Hyness</em>'s lightning pillar"], ["Kirby Super Star", "Kirby Air Ride", "Kirby Super Star Ultra", "Kirby Star Allies"]),
	"Poison": new Ability("Poison", "'This dangerous ability can be used to attack enemies with a corrosive liquid that damages organic and inorganic forms alike.' -Kirby: Planet Robobot", ["Dacooga", "Venog", "<em>Miasmoros</em>"], ["Kirby: Planet Robobot"]),
	"SmashBros": new Ability("SmashBros", "'You're ready to rumble! You got the Smash Bros. ability!' -Kirby: Planet Robobot", ["<em>Master Hand</em>"], ["Kirby & The Amazing Mirror", "Kirby: Planet Robobot"]),
	"Spark": new Ability("Spark", "'Mash on the +Control Pad, charge up your power, and create an energy barrier! With the Spark ability, you can even fire plasma shots!' -Kirby: Planet Robobot", ["Antler", "Bobin", "Bukiset (yellow wand)", "Dubior Jr.", "Elec", "Haltworker", "Pata", "Plugg", "Spark-i", "Sparky", "Transformer", "Turbite", "Zoos", "<em>Dubior", "Master Green", "Spark Sphere Doomer</em>'s energy balls", "<em>Telepathos</em>'s psychic blasts", "<em>Security Force</em>'s drones", "<em>Paint Roller</em>'s cloud", "<em>Metal General</em>'s spark mines", "<em>Miracle Matter</em>'s sparks"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby's Dream Land 2", "Kirby's Block Ball", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby: Squeak Squad", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot"], true),
	"Spear": new Ability("Spear", "'The spear is a true warrior's weapon. Multispear Attack! Spear Throw! Moon Drop! The spear ability puts all these moves and more at your disposal. You can even use the spear underwater!' -Kirby Triple Deluxe", ["Pierce", "Lanzer"], ["Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Battle Royale"]),
	"Spider": new Ability("Spider", "'What predator is more impressive? None shall escape such a hunter! You can spin threads with skill to execute the Friend Bounce, which will get your friends up high. Ready, set...jump!' -Kirby Star Allies", ["Como"], ["Kirby Star Allies"]),
	"Staff": new Ability("Staff", "'Become a staff-wielding martial artist and mow down your enemies! The product of a strange land, this staff is the ultimate telescoping weapon that extends to let you pole-vault over obstacles.' -Kirby Star Allies", ["Jammerjab"], ["Kirby Star Allies"]),
	"Stone": new Ability("Stone", "'Look cool, be invincible, and slide down slopes! You can turn into various things and pound down pegs. You can even do some curling with water or ice or float above your friends and then drop on them! Who knows what sort of stone sculptures you'll see?' -Kirby Star Allies", ["Rocky", "Gansan", "Cairn", "Pompey", "Hack", "Transformer", "Golem", "Bukiset (club)", "Giant Rocky", "<em>Blocky", "Moundo", "Fatty Whale</em>'s rocks", "<em>Master/Crazy Hand</em>'s ground pound stars", "<em>Clanky Woods</em>'s boulders"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby's Dream Land 2", "Kirby's Block Ball", "Kirby Super Star", "Kirby's Dream Land 3", "Kirby 64: The Crystal Shards", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Star Allies"]),
	"Suplex": new Ability("Suplex", "'A fighter with an indomitable spirit! Use a Pinpoint Kick or Dash to attack. You can also grab enemies and stars and then hurl them away. Hyah! Grab friends with UP, then fling them to smash the hardest rocks!' -Kirby Star Allies", ["<em>Jukid", "Bugzzy", "Phan Phan</em>"], ["Kirby Super Star", "Kirby Super Star Ultra", "Kirby Star Allies"]),
	"Sword": new Ability("Sword", "'The undisputed king of melee weapons. Drill Stab, Down Thrust, Spin Slash-- the list goes on. Finish with a Sword Dive, and then raise your blade to the heavens and let out a war cry!' -Kirby Triple Deluxe", ["Sword Knight", "Blade Knight", "Heavy Knight", "Snapper", "Swordory", "<em>Gigant Edge", "Dark Meta Knight</em>'s stars", "<em>Meta Knight</em>'s offered sword", "<em>Galacta Knight</em>'s cutter projectiles"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Team Kirby Clash Deluxe", "Kirby Battle Royale", "Kirby Star Allies", "Super Kirby Clash"]),
	"Throw": new Ability("Throw", "'Kirby can grab an enemy and toss it away, like a star! Use an enemy to beat others!' -Kirby's Adventure", ["Bun", "<em>Rolling Turtle", "Phan Phan</em>"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad"]),
	"Tornado": new Ability("Tornado", "'Round and round you go! Spin with unique controls! Shake the Wii Remote, charge up power, and send a whirlwind flying!' -Kirby's Return to Dream Land", ["Twister", "Caller", "Transformer"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby: Squeak Squad", "Kirby's Return to Dream Land", "Kirby Battle Royale"]),
	"UFO": new Ability("UFO", "'Unidentified flying object detected! You are very lucky to have managed to copy this ability!' -Kirby: Planet Robobot", ["UFO (enemy)", "Transformer", "<em>Doc</em>'s flying saucers"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Fighters Deluxe", "Kirby: Planet Robobot"]),
	"Water": new Ability("Water", "'A positively refreshing ability with many applications! Harness the waves and surf along the ground. Enjoy a powered-up version of the Water Gun and carry heavy stones with ease! And make sure you find out what happens if you freeze a fountain...' -Kirby Star Allies", ["Water Galbo", "Pluid", "Driblee", "Floaty the Cell Core", "<em>Water Galboros", "Fatty Puffer</em>'s water blobs"], ["Kirby's Return to Dream Land", "Kirby Star Allies"]),
	"Wheel": new Ability("Wheel", "'Put pedal to the metal, and surge ahead with a Dash! As long as you've got speed, you're invincible, baby! Just watch out for potholes!' -Kirby: Planet Robobot", ["Wheelie", "Yellow Golem", "Transformer", "<em>Grand Wheelie", "Wiz</em>'s car", "<em>Paint Roller</em>'s car"], ["Kirby's Adventure", "Kirby's Dream Course", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby Triple Deluxe", "Kirby: Planet Robobot"]),
	"Whip": new Ability("Whip", "'Flick! Snap! It's the classic whip-cracking Copy Ability. Grab and throw items and enemies! If there's fire on your whip, unleash a blazing lash. With ice, create a pile of frost, or use Whip Tornado to make a thunderstorm!' -Kirby Star Allies", ["Whippy", "Wester"], ["Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Fighters Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"]),
	"Wing": new Ability("Wing", "'There's no better feeling than taking your friends soaring through the skies on your back, controlling the winds at will. Charge up weapons with gusts of wind to create a great air current and shoot up to the heavens!' -Kirby Star Allies", ["Birdon", "Flappy", "Owgulf", "<em>Void Termina", "Void Soul", "Void</em>"], ["Kirby Super Star", "Kirby Air Ride", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby Star Allies"]),
	"Yo-Yo": new Ability("Yo-Yo", "'There it is, the mischievous yo-yo! Yo-Yo Up, Yo-Yo Orbit, Break Spin, Walk the Dog—it's all child's play! Add an attribute to make it even more powerful. With a variety of moves at your disposal, looking cool has never been easier.' -Kirby Star Allies", ["Gim", "<em>Combo Cannon</em>'s cannonballs"], ["Kirby Super Star", "Kirby Super Star Ultra", "Kirby Star Allies"])
};

var limit_abil = {
	"Cook": new Ability("Cook", "'What's on today's menu? Put all your foes in the pot and stew them to perfection!' -Kirby Super Star Ultra", ["Cookin", "Prank", "<em>Chef Kawasaki</em>"], ["Kirby Super Star", "Kirby & The Amazing Mirror", "Kirby Super Star Ultra", "Kirby Star Allies"]),
	"Crash": new Ability("Crash", "'DANGER! Use caution when handling this ability. It can only be used once, so make it count!' -Kirby: Planet Robobot", ["Bomber", "Searches", "Scarfy", "Mr. Anglep (Copy)", "<em>Poppy Bros Sr.", "Dark Mind</em>'s bomb", "<em>Paint Roller</em>'s bomb", "<em>Metal General</em>'s huge mistake"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby & The Amazing Mirror", "Kirby: Canvas Curse", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Star Allies"]),
	"Festival": new Ability("Festival", "'Honk, toot, and bammity-bam! Bust out a festival of drums and horns, which makes everyone break into a wild dance! Gather your all-star friends and have a party!' -Kirby Star Allies", ["Donpuffle", "<em>Yggy Woods</em>'s golden cherries"], ["Kirby Star Allies"]),
	"Light": new Ability("Light", "'Brighten those dark corners! *Can only be used once.' -Kirby: Nightmare in Dream Land", ["Cool Spook"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land"]),
	"Magic": new Ability("Magic", "'No telling what will happen when you use it, but... once you use it, you lose it!' -Kirby & The Amazing Mirror", ["<em>Boxy</em>"], ["Kirby & The Amazing Mirror", "Kirby: Squeak Squad"]),
	"Mike": new Ability("Mike", "'Yeah! Yeah! Whooooa-oh-oh-oh! There are three songs to sing with resounding enthusiasm! Store up power to pump up the volume. Sing with friends for explosive harmony. Gather multiple singers for a glorious chorus.' -Kirby Star Allies", ["Walky", "<em>Mr. Tick-Tock", "Paint Roller</em>'s microphone"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby Super Star Ultra", "Kirby's Return to Dream Land", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Star Allies"]),
	"Paint": new Ability("Paint", "'Now's your chance to use it! A special onetime Copy Ability! Paint the town all of 7 colors!' -Kirby Super Star Ultra", ["Paint Slime", "<em>Chameleo Arm</em>'s paint blobs", "<em>Marx Soul</em>'s paint rain"], ["Kirby Super Star", "Kirby Super Star Ultra"]),
	"RobobotArmor": new Ability("RobobotArmor", "'Originally part of the invading robotic army, when Kirby jumps into this machine, it becomes his Robobot Armor - able to change its form by scanning enemy specs!' -Kirby: Planet Robobot", ["Found in various locations around the map"], ["Kirby: Planet Robobot"]),
	"Sleep": new Ability("Sleep", "'Sleep is definitely important, but it can be dangerous if you drop off in the wrong place! Luckily, you can wake up quickly by button mashing.' -Kirby: Planet Robobot", ["Noddy", "<em>Heavy Mole</em>'s Red Dygclops", "<em>Wiz</em>'s apple"], ["Kirby's Adventure", "Kirby Super Star", "Kirby: Nightmare in Dream Land", "Kirby Air Ride", "Kirby & The Amazing Mirror", "Kirby: Squeak Squad", "Kirby Super Star Ultra", "Kirby's Return to Dreamland", "Kirby Triple Deluxe", "Kirby: Planet Robobot", "Kirby Battle Royale", "Kirby Star Allies"]),
	"WheelieRider": new Ability("WheelieRider", "'Hop on your bike, Wheelie Rider! Go for a drive with a friend. Use teamwork to roll ahead!' -Kirby Super Star Ultra", ["Jump onto a Wheelie Bike helper"], ["Kirby Super Star", "Kirby Super Star Ultra"])
};

var super_abil = {
	"Hypernova": new Ability("Hypernova", "'Eating a Miracle Fruit imbues Kirby with this special ability. After an explosion of energy, Kirby's stomach becomes a veritable black hole, allowing him to inhale giant objects!' -Kirby Triple Deluxe", ["<em>Queen Sectonia</em>"], ["Kirby Triple Deluxe"]),
	"FlareBeam": new Ability("FlareBeam", "'A Super Ability you can control as you like! Gather electricity into a ball, and move it around at will! Now, that's power!' -Kirby's Return to Dream Land", ["Super Waddle Doo"], ["Kirby's Return to Dream Land"]),
	"GrandHammer": new Ability("GrandHammer", "'Smash the ground with the Grand Hammer! Shake the Wii Remote to power it up, and pound even huge stakes flat!' -Kirby's Return to Dream Land", ["Super Bonkers"], ["Kirby's Return to Dream Land"]),
	"MonsterFlame": new Ability("MonsterFlame", "'This hot, hot Super ability summons a fiery dragon! It appears like a storm and unleashes fury, burning everything in its path.' -Kirby's Return to Dream Land", ["Super Hot Head"], ["Kirby's Return to Dream Land"]),
	"SnowBowl": new Ability("SnowBowl", "'Snow day! Transform into a giant snowball and bowl down foes! Roll them up and crash into a wall for an ice-cold strike!' -Kirby's Return to Dream Land", ["Super Chilly"], ["Kirby's Return to Dream Land"]),
	"UltraSword": new Ability("UltraSword", "'Packing pure destructive power, it's a Super Ability! Its name: Ultra Sword! It can rend the Earth as it destroys all in its path!' -Kirby's Return to Dream Land", ["Super Blade Knight"], ["Kirby's Return to Dream Land"])
};

var final_abil = {
	"CrystalGun": new Ability("CrystalGun", "No description", ["Mandatory final weapon"], ["Kirby 64: The Crystal Shards"]),
	"LoveLoveStick": new Ability("LoveLoveStick", "No description", ["Mandatory final weapon"], ["Kirby's Dream Land 3", "Kirby's Super Star Stacker"]),
	"Master": new Ability("Master", "'Almighty Sword! It can be used on all puzzles!' -Kirby & The Amazing Mirror", ["Optional final weapon"], ["Kirby & The Amazing Mirror"]),
	"RainbowSword": new Ability("RainbowSword", "'In order to defeat Dark Matter, you need the Rainbow Sword. It is said that the sword has something to do with the Rainbow Drops hiding on the islands. Will Kirby be able to save the Dream Land from Dark Matter?' -Kirby's Dream Land 2", ["Mandatory final weapon"], ["Kirby's Dream Land 2"]),
	"RobobotHalberd": new Ability("RobobotHalberd", "'The Robobot Armor has scanned Meta Knight's ship! It's equipped with the Planet Buster. Capture debris, and press A to fire it!' -Kirby: Planet Robobot", ["Mandatory final weapon"], ["Kirby: Planet Robobot"]),
	"Starship": new Ability("Starship", "'The lights of the starry path cross and a Starship appears! Now stop Marx's mad plan!' -Kirby Super Star Ultra", ["Mandatory final weapon"], ["Kirby Super Star", "Kirby Super Star Ultra"]),
	"StarRod": new Ability("StarRod", "'This suddenly appeared at the Fountain of Dreams. Use it in your final battle against the Nightmares!' -Kirby: Nightmare in Dream Land", ["Mandatory final weapon"], ["Kirby's Adventure", "Kirby: Nightmare in Dream Land"]),
	"TripleStar": new Ability("TripleStar", "'What else needs saying?<br /><strong>TRIPLE STAR</strong><br />That's what you are. Amazing!' -Kirby: Squeak Squad", ["Optional final weapon"], ["Kirby: Squeak Squad"]),
	"Landia": new Ability("Landia", "'Landia to the rescue in Planet Popstar's - no, the entire universe's - time of need! Joining up with Kirby, the dragon takes to battle!' -Kirby's Return to Dream Land", ["Mandatory final weapon/vehicle"], ["Kirby's Return to Dream Land (as a weapon, appears as a boss elsewhere"]),
	"StarAlliesSparkler": new Ability("StarAlliesSparkler", "'Star Allies Sparkler is a secret technique based on the warmth of giving hearts. The desire to save everyone in the galaxy transforms into a sparkling star... which heads straight for the final boss!' -Kirby Star Allies", ["Mandatory final weapon"], ["Kirby Star Allies"])
};

var mix64_abil = {
	"SuperFireball": new Ability("SuperFireball", "'Kirby forms a giant flame bird that streaks across the sky, destroying all enemies in its path. Be careful where the power quits, though. You don't want to fall into an enemy or a dangerous surface.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Burning"], ["Kirby 64: The Crystal Shards"]),
	"Volcano": new Ability("Volcano", "'Kirby transforms into the world's smallest active volcano, shooting out lava rocks at his enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Stone"], ["Kirby 64: The Crystal Shards"]),
	"MeltingIceBlock": new Ability("MeltingIceBlock", "'Kirby becomes a giant ice cube that immediately melts and vaporizes.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Ice"], ["Kirby 64: The Crystal Shards"]),
	"FlamingArrow": new Ability("FlamingArrow", "'Kirby transforms into a bow that shoots flaming arrows. The arrows go farther the longer you hold B.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Needle"], ["Kirby 64: The Crystal Shards"]),
	"Fireworks": new Ability("Fireworks", "'Kirby shoots off fireworks from his body. The longer you press B, the more fireworks he sends out.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Bomb"], ["Kirby 64: The Crystal Shards"]),
	"Match": new Ability("Match", "'Kirby pulls out a piece of cellophane and rubs it on his head until he catches fire. Once he's on fire, he runs back and forth, destroying his enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Spark"], ["Kirby 64: The Crystal Shards"]),
	"SwordOfFire": new Ability("SwordOfFire", "'Kirby spits out a flaming sword that he can use against enemies and obstacles. To put the sword away, press up then B.' -Kirby 64: The Crystal Shards official strategy guide", ["Burning + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"GiantStone": new Ability("GiantStone", "'Kirby takes the shape of a giant boulder. He can still walk and jump a little distance, but his most spectacular power is his explosion when you press B.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Stone"], ["Kirby 64: The Crystal Shards"]),
	"CurlingStone": new Ability("CurlingStone", "'Kirby takes the shape of a curling hammer, great for moving across large areas filled with enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Ice"], ["Kirby 64: The Crystal Shards"]),
	"Drill": new Ability("Drill", "'Kirby shoots a drill to the left or right, which he can either let go of or hold onto.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Needle"], ["Kirby 64: The Crystal Shards"]),
	"Dynamite": new Ability("Dynamite", "'Like the single bomb power, Kirby tosses dynamite. Be very careful though. The explosions are very large and can damage Kirby unless he's far away. Press down to make Kirby put on the helmet and avoid the explosion.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Bomb"], ["Kirby 64: The Crystal Shards"]),
	"LightningBoulder": new Ability("LightningBoulder", "'A giant electrified boulder swings out from Kirby and circles around as he moves, destroying all enemies. Press B to make the rock explode.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Spark"], ["Kirby 64: The Crystal Shards"]),
	"AnimalStatues": new Ability("AnimalStatues", "'Kirby turns into random stone animals, like fish and birds, that are heavy and indestructible.' -Kirby 64: The Crystal Shards official strategy guide", ["Stone + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"RollingSnowball": new Ability("RollingSnowball", "'Kirby forms a giant snowball that engulfs all enemies as it rolls along. When Kirby hits an obstacle or when you press B, the snowball explodes, destroying all the trapped enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Ice + Ice"], ["Kirby 64: The Crystal Shards"]),
	"GiantSpinySnowflake": new Ability("GiantSpinySnowflake", "'Kirby turns into a giant ice crystal, destroying any enemy that's too close to his pointy spikes.' -Kirby 64: The Crystal Shards official strategy guide", ["Ice + Needle"], ["Kirby 64: The Crystal Shards"]),
	"ExplosiveSnowman": new Ability("ExplosiveSnowman", "'Kirby is coated with snow, forming a snowman with a fuse burning at the top of his head. When the fuse burns out, he explodes, destroying nearby enemies and obstacles. Ice + bomb will also explode if Kirby runs and jumps into an enemy.' -Kirby 64: The Crystal Shards official strategy guide", ["Ice + Bomb"], ["Kirby 64: The Crystal Shards"]),
	"Refrigerator": new Ability("Refrigerator", "'Kirby turns into a refrigerator. Pressing the B Button again opens the door and food items fly out, destroying enemies. Kirby can then eat the food that isn't destroyed to regain vitality.' -Kirby 64: The Crystal Shards official strategy guide", ["Ice + Spark"], ["Kirby 64: The Crystal Shards"]),
	"IceSkating": new Ability("IceSkating", "'Kirby straps on his ice skates and skates across the landscape. Press A while he's skating to see a world-class jump.' -Kirby 64: The Crystal Shards official strategy guide", ["Ice + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"SwissArmy": new Ability("SwissArmy", "'Kirby shoots out all kinds of sharp stuff, from a bumblebee stinger to a compass point and a cactus. This super power is very effective against large groups of enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Needle + Needle"], ["Kirby 64: The Crystal Shards"]),
	"SpikeBomb": new Ability("SpikeBomb", "'Kirby turns into a spiked mine that looks like the Gordo enemies found in the game.' -Kirby 64: The Crystal Shards official strategy guide", ["Needle + Bomb"], ["Kirby 64: The Crystal Shards"]),
	"LightningRod": new Ability("LightningRod", "'Kirby becomes a short lightning rod that fires off a bolt of electricity, zapping enemies who may have wandered too close.' -Kirby 64: The Crystal Shards official strategy guide", ["Needle + Spark"], ["Kirby 64: The Crystal Shards"], true),
	"GiantClaws": new Ability("GiantClaws", "'Kirby's normally stubby arms turn into giant jaws with teeth that snap shut on enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Needle + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"Tri-MissileAttack": new Ability("Tri-MissileAttack", "'Kirby fires homing rockets from his mouth. He fires from one to three rockets, depending on how long you hold B.' -Kirby 64: The Crystal Shards official strategy guide", ["Bomb + Bomb"], ["Kirby 64: The Crystal Shards"]),
	"LightBulb": new Ability("LightBulb", "'Kirby becomes a small light bulb, burning brightly. Eventually, he burns too brightly and explodes, destroying nearby enemies.' -Kirby 64: The Crystal Shards official strategy guide", ["Bomb + Spark"], ["Kirby 64: The Crystal Shards"]),
	"ExplosiveNinjaStars": new Ability("ExplosiveNinjaStars", "'Kirby can throw ninja stars that detonate after sticking into enemies or walls.' -Kirby 64: The Crystal Shards official strategy guide", ["Bomb + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"SuperElectricEnergyField": new Ability("SuperElectricEnergyField", "'By meditating, Kirby surrounds himself with a giant ball of electricity that no enemy can withstand. The ball shrinks a little when Kirby walks with it, so be careful.' -Kirby 64: The Crystal Shards official strategy guide", ["Spark + Spark"], ["Kirby 64: The Crystal Shards"]),
	"Double-BladedLaserSword": new Ability("Double-BladedLaserSword", "'Kirby uses a double-bladed light sword— a very cool weapon. Press down to turn it off.' -Kirby 64: The Crystal Shards official strategy guide", ["Spark + Cutter"], ["Kirby 64: The Crystal Shards"]),
	"SuperBoomerang": new Ability("SuperBoomerang", "'The small boomerang is replaced by a giant boomerang with saw-like teeth, which rips through the ground, walls, and enemies. It's very effective at clearing out enemies in your way.' -Kirby 64: The Crystal Shards official strategy guide", ["Cutter + Cutter"], ["Kirby 64: The Crystal Shards"])
};

var mixDS_abil = {
	"FireSword": new Ability("FireSword", "'CUT Can't be used in water.' -Kirby: Squeak Squad", ["Fire + Sword"], ["Kirby: Squeak Squad"]),
	"IceBomb": new Ability("IceBomb", "No description", ["Ice + Bomb"], ["Kirby: Squeak Squad"]),
	"IceSword": new Ability("IceSword", "'CUT Can't be used in water.' -Kirby: Squeak Squad", ["Ice + Sword"], ["Kirby: Squeak Squad"]),
	"ThunderBomb": new Ability("ThunderBomb", "No description", ["Spark + Bomb"], ["Kirby: Squeak Squad"]),
	"ThunderSword": new Ability("ThunderSword", "'CUT Can't be used in water.' -Kirby: Squeak Squad", ["Spark + Sword"], ["Kirby: Squeak Squad"])
}

var abil_elements = {
	"Blizzard": new Ability("Blizzard", "No description", ["Doctor", "Freeze", "Ice", "Snow Bowl", "Adeleine", "Daroach", "Kine", "abilities infused with blizzard"], ["Kirby: Squeak Squad", "Kirby Star Allies"]),
	"Bluster": new Ability("Bluster", "No description", ["Cleaning", "Wing", "Coo", "Magolor", "abilities infused with bluster"], ["Kirby Star Allies"]),
	"Sizzle": new Ability("Sizzle", "No description", ["Fire", "Bomb", "Burning", "Circus", "Crash", "Doctor", "Fighter", "Hammer", "Jet", "Laser", "Master", "Monster Flame", "Triple Star", "UFO", "Daroach", "Flamberge", "Gooey", "Magolor", "Rick", "abilities infused with sizzle"], ["Kirby: Squeak Squad", "Kirby Star Allies"]),
	"Splash": new Ability("Splash", "No description", ["Cleaning", "Parasol", "Poison", "Ninja", "Water", "Francisca", "Gooey", "Kine", "abilities infused with splash"], ["Kirby Star Allies"]),
	"Zap": new Ability("Zap", "No description", ["Beam", "Doctor", "ESP", "Flare Beam", "Plasma", "Spark", "UFO", "Adeleine", "Daroach", "Magolor", "Taranza", "Zan Partizanne", "abilities infused with zap"], ["Kirby: Squeak Squad", "Kirby Star Allies"])
}

var norm_div = document.getElementById("norm_abil");
var limit_div = document.getElementById("limit_abil");
var super_div = document.getElementById("super_abil");
var final_div = document.getElementById("final_abil");
var mix64_div = document.getElementById("mix64_abil");
var mixDS_div = document.getElementById("mixDS_abil");
var elements_div = document.getElementById("abil_elements");

var normaltext, smalltext;
var abil;
for (abil in norm_abil) {
	normaltext = (`<span class="popup" onclick="norm_abil['` + norm_abil[abil].name + `'].print();">
		<img src="images/` + norm_abil[abil].name + `.png" alt="` + norm_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + norm_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="norm_abil['` + norm_abil[abil].name + `'].print();">
		<img src="images/` + norm_abil[abil].name + `.png" alt="` + norm_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + norm_abil[abil].name + `"></span>
		</span>`)
	if (norm_abil[abil].smalltext == true) {
		norm_div.innerHTML += smalltext;
	} else {
		norm_div.innerHTML += normaltext;
	}
}

for (abil in limit_abil) {
	normaltext = (`<span class="popup" onclick="limit_abil['` + limit_abil[abil].name + `'].print();">
		<img src="images/` + limit_abil[abil].name + `.png" alt="` + limit_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + limit_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="limit_abil['` + limit_abil[abil].name + `'].print();">
		<img src="images/` + limit_abil[abil].name + `.png" alt="` + limit_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + limit_abil[abil].name + `"></span>
		</span>`)
	if (limit_abil[abil].smalltext == true) {
		limit_div.innerHTML += smalltext;
	} else {
		limit_div.innerHTML += normaltext;
	}
}

for (abil in super_abil) {
	normaltext = (`<span class="popup" onclick="super_abil['` + super_abil[abil].name + `'].print();">
		<img src="images/` + super_abil[abil].name + `.png" alt="` + super_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + super_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="super_abil['` + super_abil[abil].name + `'].print();">
		<img src="images/` + super_abil[abil].name + `.png" alt="` + super_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + super_abil[abil].name + `"></span>
		</span>`)
	if (super_abil[abil].smalltext == true) {
		super_div.innerHTML += smalltext;
	} else {
		super_div.innerHTML += normaltext;
	}
}

for (abil in final_abil) {
	normaltext = (`<span class="popup" onclick="final_abil['` + final_abil[abil].name + `'].print();">
		<img src="images/` + final_abil[abil].name + `.png" alt="` + final_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + final_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="final_abil['` + final_abil[abil].name + `'].print();">
		<img src="images/` + final_abil[abil].name + `.png" alt="` + final_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + final_abil[abil].name + `"></span>
		</span>`)
	if (final_abil[abil].smalltext == true) {
		final_div.innerHTML += smalltext;
	} else {
		final_div.innerHTML += normaltext;
	}
}

for (abil in mix64_abil) {
	normaltext = (`<span class="popup" onclick="mix64_abil['` + mix64_abil[abil].name + `'].print();">
		<img src="images/` + mix64_abil[abil].name + `.png" alt="` + mix64_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + mix64_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="mix64_abil['` + mix64_abil[abil].name + `'].print();">
		<img src="images/` + mix64_abil[abil].name + `.png" alt="` + mix64_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + mix64_abil[abil].name + `"></span>
		</span>`)
	if (mix64_abil[abil].smalltext == true) {
		mix64_div.innerHTML += smalltext;
	} else {
		mix64_div.innerHTML += normaltext;
	}
}

for (abil in mixDS_abil) {
	normaltext = (`<span class="popup" onclick="mixDS_abil['` + mixDS_abil[abil].name + `'].print();">
		<img src="images/` + mixDS_abil[abil].name + `.png" alt="` + mixDS_abil[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + mixDS_abil[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="mixDS_abil['` + mixDS_abil[abil].name + `'].print();">
		<img src="images/` + mixDS_abil[abil].name + `.png" alt="` + mixDS_abil[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + mixDS_abil[abil].name + `"></span>
		</span>`)
	if (mixDS_abil[abil].smalltext == true) {
		mixDS_div.innerHTML += smalltext;
	} else {
		mixDS_div.innerHTML += normaltext;
	}
}

for (abil in abil_elements) {
	normaltext = (`<span class="popup" onclick="abil_elements['` + abil_elements[abil].name + `'].print();">
		<img src="images/` + abil_elements[abil].name + `.png" alt="` + abil_elements[abil].name + ` icon" width="150" />
		<span class="popuptext" id="` + abil_elements[abil].name + `"></span>
		</span>`)
	smalltext = (`<span class="popup" onclick="abil_elements['` + abil_elements[abil].name + `'].print();">
		<img src="images/` + abil_elements[abil].name + `.png" alt="` + abil_elements[abil].name + ` icon" width="150" />
		<span class="popuptext smalltext" id="` + abil_elements[abil].name + `"></span>
		</span>`)
	if (abil_elements[abil].smalltext == true) {
		elements_div.innerHTML += smalltext;
	} else {
		elements_div.innerHTML += normaltext;
	}
}
