(function(window) {
sprite_5369_(ScoutHitArea) = function() {
	this.initialize();
}
sprite_5369_(ScoutHitArea)._SpriteSheet = new SpriteSheet({images: ["scout_hit_area.png"], frames: [[0,0,57,78,0,23.049999999999997,69.75],[153,0,36,78,0,23.049999999999997,66.75],[57,0,59,69,0,33.05,64.75],[116,0,37,76,0,11.049999999999997,62.75]]});
var sprite_5369_(ScoutHitArea)_p = sprite_5369_(ScoutHitArea).prototype = new BitmapAnimation();
sprite_5369_(ScoutHitArea)_p.BitmapAnimation_initialize = sprite_5369_(ScoutHitArea)_p.initialize;
sprite_5369_(ScoutHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5369_(ScoutHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5369_(ScoutHitArea) = sprite_5369_(ScoutHitArea);
}(window));

