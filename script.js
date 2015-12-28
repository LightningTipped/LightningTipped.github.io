var handIconOne = 0;
var handIconTwo = 0;
var rollTimer = 0;
var rollInterval = 50;

var playStart = true;

function sheep() {
	alert('baa');
}
function start() {
	playStart = true;
}
function gameUpdate() {
	if (playStart) {
		rollTimer--;
		if (rollTimer<=0) {
			rollTimer=rollInterval;
			roll();
		}
	}
}
function roll() {
	handIconOne = Math.floor(3*Math.random());
	handIconTwo = Math.floor(3*Math.random());
}
function gameRender() {
	$("#handOne").text(handIconOne);
	$("#handTwo").text(handIconTwo);
}