var gameTimer = false;
var mainInterval = 20;

var startTime = 0;
var elapsedTime = 0;
var totalElapsedTime = 0;

var deferred = new $.Deferred();
var promise = deferred.promise();

function init() {
	$(function() {
		promise = promise.then(function() {
		$.getScript("script.js"););
		$.getScript("handfunctions.js");}
		);
	});
	promise.done(function () {
		var d = new Date();
	startTime = d.getTime();
		gameTimer = setInterval(tick, mainInterval)
	});
	deferred.resolve();
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