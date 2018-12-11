(function(window) {
sprite_5593_(WitchHitArea) = function() {
	this.initialize();
}
sprite_5593_(WitchHitArea)._SpriteSheet = new SpriteSheet({images: ["witch_hit_area.png"], frames: [[66,0,39,85,0,21.85,75.45],[0,0,66,83,0,24.85,71.45],[64,85,39,78,0,16.85,70.45],[0,83,64,76,0,39.85,68.45]]});
var sprite_5593_(WitchHitArea)_p = sprite_5593_(WitchHitArea).prototype = new BitmapAnimation();
sprite_5593_(WitchHitArea)_p.BitmapAnimation_initialize = sprite_5593_(WitchHitArea)_p.initialize;
sprite_5593_(WitchHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5593_(WitchHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5593_(WitchHitArea) = sprite_5593_(WitchHitArea);
}(window));

