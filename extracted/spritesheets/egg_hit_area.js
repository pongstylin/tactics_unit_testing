(function(window) {
sprite_6470_(EggHitArea) = function() {
	this.initialize();
}
sprite_6470_(EggHitArea)._SpriteSheet = new SpriteSheet({images: ["egg_hit_area.png"], frames: [[0,0,37,55,0,17.65,58.6],[0,0,37,55,0,17.65,58.6],[0,0,37,55,0,17.65,58.6]]});
var sprite_6470_(EggHitArea)_p = sprite_6470_(EggHitArea).prototype = new BitmapAnimation();
sprite_6470_(EggHitArea)_p.BitmapAnimation_initialize = sprite_6470_(EggHitArea)_p.initialize;
sprite_6470_(EggHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6470_(EggHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6470_(EggHitArea) = sprite_6470_(EggHitArea);
}(window));

