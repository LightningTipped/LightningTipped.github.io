var gameTimer = false;
var mainInterval = 1000;

var startTime = 0;
var elapsedTime = 0;
var totalElapsedTime = 0;

function init() {
	$(function() {
		$.getScript("test.js", function() {
			alert("hi");
		});
	});
	var d = new Date();
	startTime = d.getTime();
	gameTimer = setInterval(tick, mainInterval);
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
}
function update() {
	gameUpdate();
}
function render() {
	gameRender();
}