"use Strict"
src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"
//animations//


//instruction//



//runs the game//
function lightup(tile) {
	var $tile = $('[data-tile=' + tile + ']').addClass('lit');
	window.setTimeout(function() {
	$tile.removeClass('lit');
	}, 300);
}
function newRound() {
	var sequence = [1,2,1]; //red, green, red
	animate(sequence);
}
function animate(sequence) {
	var i = 0;
	var interval = setInterval(function() {
	lightUp(sequence[i]);
	       i++;
	       if (i >= sequence.length) {
	clearInterval(interval);
	       }
	}, 600);
}








//store your name with high score//





//recalls saved scores//