(function(window) {
sprite_67_(Slash) = function() {
	this.initialize();
}
sprite_67_(Slash)._SpriteSheet = new SpriteSheet({images: ["slash_base.png"], frames: [[0,0,0,0,0,-0.5,-0.29999999999999716],[0,0,116,60,0,57.5,67.7],[56,60,28,110,0,13.5,92.7],[0,60,56,81,0,27.5,77.7]]});
var sprite_67_(Slash)_p = sprite_67_(Slash).prototype = new BitmapAnimation();
sprite_67_(Slash)_p.BitmapAnimation_initialize = sprite_67_(Slash)_p.initialize;
sprite_67_(Slash)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_67_(Slash)._SpriteSheet);
	this.paused = false;
}
window.sprite_67_(Slash) = sprite_67_(Slash);
}(window));

