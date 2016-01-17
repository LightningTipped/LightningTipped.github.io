var gameTimer = false;
var mainInterval = 20;

var startTime = 0;
var elapsedTime = 0;
var totalElapsedTime = 0;

function init() {
	$(function() {
		$.getScript("script.js");
		$.getScript("handfunctions.js");
		var d = new Date();
	startTime = d.getTime();
	gameTimer = setInterval(tick, mainInterval);
	});
}
function skippedTicks() {
	return ((Math.floor(totalElapsedTime/mainInterval))-Math.floor((totalElapsedTime-elapsedTime)/mainInterval));
}
function tick() {
	var d = new Date();
	elapsedTime = d.getTime()-startTime;
	totalElapsedTime += elapsedTime;
	for (i=0; i<skippedTicks(); i++) {
		update();
	}
	render();
	d = new Date();
	startTime = d.getTime();
}
function update() {
	gameUpdate();
}
function render() {
	gameRender();
}