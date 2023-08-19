function changeFacing() {
	let facing = document.querySelector('#frog').style.transform;
	if (facing === '') {
		document.querySelector('#frog').style.transform = 'scaleX(-1)';
	} else {
		document.querySelector('#frog').style.transform = '';
	}
}

function jumping(intensity) {
	let start = Date.now();

	let timer = setInterval(function(){
		let timePassed = Date.now() - start;

		if (timePassed >= 1000*intensity) {
			clearInterval(timer);
			return;
		}

		if (timePassed >= 500*intensity) {
			drawJump(1000*intensity - timePassed);
		} else {
			drawJump(timePassed);
		}
		
	}, 10*intensity);
}

function drawJump(timePassed) {
	frog.style.bottom = timePassed / 5 + 'px';
}

let clicked = false;
let clickedOk = false;

let timerAll = setInterval(function() {
	if (clicked) {
		let randFlip = Math.floor(Math.random() * 2);
		if (randFlip == 1) {
			changeFacing();
		}
	
		let randJump = Math.floor(Math.random() * 100);
		if (randJump < 50) {
			jumping(0.01 * randJump);
		}

		audio.muted = false;
		audio.play();
		audio.hidden = true;
	}

}, 500);

function trollMusic() {
	audio.hidden = true;
	clicked = true;
	text_control.style.display = 'none';
	text_enigma.style.display = '';
}


function forceMusic() {
	audio.hidden = true;
	clickedOk = true;
	text_control.style.display = 'none';
	text_enigma.style.display = '';

	audio.muted = false;
	audio.play();
	audio.hidden = true;

	normal.style.display = 'none';
	gagnado.style.display = '';

	document.body.style.backgroundImage = 'url(images/bg-win.png)';
	document.body.style.backgroundSize = 'cover';
}

function hideEnigma() {
	let cpt_el = text_enigma.children.length;
	for(let i = 0 ; i < cpt_el ; i++) {
		let base = text_enigma.children[i].textContent;
		let new_str = '';
		let display = '';
		if (i > 0) {
			display = 'style="display:inline;"';
			continue;
		}
		for (let j = 0 ; j < base.length ; j++) {
			new_str += '<p ' + display + '>' + base.charAt(j) + '</p>';
		  }
		  text_enigma.children[i].innerHTML = new_str;
	}
}