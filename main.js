var handIcon = 0;
var playStart = false;
var gameTimer = false;
var mainInterval = 1000;

function init() {
	$.getScript("test.js", function(){
		alert('yay');
});
gameTimer = setInterval(gameTick, mainInterval);
}
function start() {
	playStart = true;
}
function gameTick() {
	sheep();
}
function gameUpdate() {
	
}
function gameRender() {
	
}