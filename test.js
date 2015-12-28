var handIconOne = 0;
var handIconTwo = 0;
var rollTimer = 100;

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
			rollTimer = 100;
			roll();
		}
	}
}
function roll() {
	handIconOne = Math.floor(Math.random(3));
	handIconTwo = Math.floor(Math.random(3));
}
function gameRender() {
	$(function(){
		$("#handOne").text("Hello world!"s);
		$("#handTwo").text(handIconTwo);
	});
}