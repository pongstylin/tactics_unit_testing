(function(window) {
sprite_66_(Boulder) = function() {
	this.initialize();
}
sprite_66_(Boulder)._SpriteSheet = new SpriteSheet({images: ["boulder_base.png"], frames: [[54,47,40,42,0,21,75],[64,0,38,32,0,17,19],[0,47,54,46,0,21,33],[0,0,64,47,0,25,24]]});
var sprite_66_(Boulder)_p = sprite_66_(Boulder).prototype = new BitmapAnimation();
sprite_66_(Boulder)_p.BitmapAnimation_initialize = sprite_66_(Boulder)_p.initialize;
sprite_66_(Boulder)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_66_(Boulder)._SpriteSheet);
	this.paused = false;
}
window.sprite_66_(Boulder) = sprite_66_(Boulder);
}(window));

