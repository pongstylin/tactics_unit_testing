(function(window) {
sprite_5940_(FrostHitArea) = function() {
	this.initialize();
}
sprite_5940_(FrostHitArea)._SpriteSheet = new SpriteSheet({images: ["frost_hit_area.png"], frames: [[59,0,59,57,0,28.05,48.35],[47,58,46,66,0,24.05,50.35],[0,0,59,58,0,30.05,49.35],[0,58,47,65,0,21.05,49.35]]});
var sprite_5940_(FrostHitArea)_p = sprite_5940_(FrostHitArea).prototype = new BitmapAnimation();
sprite_5940_(FrostHitArea)_p.BitmapAnimation_initialize = sprite_5940_(FrostHitArea)_p.initialize;
sprite_5940_(FrostHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5940_(FrostHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5940_(FrostHitArea) = sprite_5940_(FrostHitArea);
}(window));

