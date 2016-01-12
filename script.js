var handIconOne = 0;
var handIconTwo = 0;
var rollTimer = 0;
var rollInterval = 50;
var keyInput = 0;
var score = 0;
var bufferTime = 5;
var waiting = false;

var handIcons = ["rock", "scissors", "paper"];

var playStart = true;

function sheep() {
	alert('baa');
}
function start() {
	playStart = true;
}
function gameUpdate() {
	if (playStart) {
		if (!waiting) {
		rollTimer--;
		if (rollTimer<=0) {
			rollTimer=rollInterval;
			roll();
			score--;
		}}
		$(document).keydown(function(e) {
			if (!waiting) {
			var code = e.which;
			winCheck = -2;
			if (code == 90)	{ // z
				winCheck = -1;
				keyInput = -1;
			} else if (code == 88) {// x
				winCheck = 0;
				keyInput = 0;
			} else if (code == 67) {// c
				winCheck = 1;
				keyInput = 1;
			}
			if (winCheck == getResult(handIconOne, handIconTwo)) {
				rollTimer=rollInterval;
			roll();
				score++;
				waiting = true;
			} else if (winCheck!=-2) {
				rollTimer = rollInterval;
				roll();
				score--;
				waiting=true;
			}
			}
		});
		if (waiting) {
			bufferTime--;
			if (bufferTime <= 0) {
				bufferTime = 5;
				waiting = false;
			}
		}
	}
}
function roll() {
	handIconOne = Math.floor(3*Math.random());
	handIconTwo = Math.floor(3*Math.random());
}
function gameRender() {
	$("#handOne").text(handIcons[handIconOne]);
	$("#handTwo").text(handIcons[handIconTwo]);
	$("#keyInput").text(keyInput);
	$("#correctInput").text(getResult(handIconOne, handIconTwo));
	if (waiting) {
		$("#correctInput").text("wait");
	}
	$("#score").text(score);
}