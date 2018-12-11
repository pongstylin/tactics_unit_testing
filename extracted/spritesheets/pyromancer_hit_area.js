(function(window) {
sprite_242_(PyromancerHitArea) = function() {
	this.initialize();
}
sprite_242_(PyromancerHitArea)._SpriteSheet = new SpriteSheet({images: ["pyromancer_hit_area.png"], frames: [[0,0,48,86,0,13.549999999999997,75.85],[48,76,28,78,0,14.549999999999997,60.849999999999994],[48,0,48,76,0,33.55,68.85],[96,0,29,96,0,13.549999999999997,88.85]]});
var sprite_242_(PyromancerHitArea)_p = sprite_242_(PyromancerHitArea).prototype = new BitmapAnimation();
sprite_242_(PyromancerHitArea)_p.BitmapAnimation_initialize = sprite_242_(PyromancerHitArea)_p.initialize;
sprite_242_(PyromancerHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_242_(PyromancerHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_242_(PyromancerHitArea) = sprite_242_(PyromancerHitArea);
}(window));

