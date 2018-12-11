(function(window) {
sprite_6019_(StoneHitArea) = function() {
	this.initialize();
}
sprite_6019_(StoneHitArea)._SpriteSheet = new SpriteSheet({images: ["stone_hit_area.png"], frames: [[0,60,57,57,0,28.9,48.35],[57,71,42,68,0,25.9,50.35],[0,0,57,60,0,28.9,50.35],[57,0,41,71,0,16.9,53.35]]});
var sprite_6019_(StoneHitArea)_p = sprite_6019_(StoneHitArea).prototype = new BitmapAnimation();
sprite_6019_(StoneHitArea)_p.BitmapAnimation_initialize = sprite_6019_(StoneHitArea)_p.initialize;
sprite_6019_(StoneHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6019_(StoneHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6019_(StoneHitArea) = sprite_6019_(StoneHitArea);
}(window));

