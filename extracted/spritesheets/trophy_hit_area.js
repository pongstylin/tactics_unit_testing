(function(window) {
sprite_6360_(TrophyHitArea) = function() {
	this.initialize();
}
sprite_6360_(TrophyHitArea)._SpriteSheet = new SpriteSheet({images: ["trophy_hit_area.png"], frames: [[49,0,50,81,0,22.4,67],[0,0,49,84,0,26.4,75],[0,0,49,84,0,26.4,75]]});
var sprite_6360_(TrophyHitArea)_p = sprite_6360_(TrophyHitArea).prototype = new BitmapAnimation();
sprite_6360_(TrophyHitArea)_p.BitmapAnimation_initialize = sprite_6360_(TrophyHitArea)_p.initialize;
sprite_6360_(TrophyHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6360_(TrophyHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6360_(TrophyHitArea) = sprite_6360_(TrophyHitArea);
}(window));

