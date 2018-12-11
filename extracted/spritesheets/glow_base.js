(function(window) {
sprite_5875_(Glow) = function() {
	this.initialize();
}
sprite_5875_(Glow)._SpriteSheet = new SpriteSheet({images: ["glow_base.png"], frames: [[200,162,36,18,0,17.85,38.349999999999994],[200,108,46,54,0,22.85,56.349999999999994],[154,116,46,84,0,22.85,71.35],[174,0,79,108,0,39.85,83.35],[0,0,96,138,0,47.85,98.35],[96,0,78,116,0,38.85,87.35],[96,116,58,94,0,28.85,76.35],[0,138,72,72,0,35.85,65.35],[72,138,12,50,0,5.850000000000001,54.349999999999994]]});
var sprite_5875_(Glow)_p = sprite_5875_(Glow).prototype = new BitmapAnimation();
sprite_5875_(Glow)_p.BitmapAnimation_initialize = sprite_5875_(Glow)_p.initialize;
sprite_5875_(Glow)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5875_(Glow)._SpriteSheet);
	this.paused = false;
}
window.sprite_5875_(Glow) = sprite_5875_(Glow);
}(window));

