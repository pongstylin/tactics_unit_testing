(function(window) {
sprite_6457_(AmbusherHitArea) = function() {
	this.initialize();
}
sprite_6457_(AmbusherHitArea)._SpriteSheet = new SpriteSheet({images: ["ambusher_hit_area.png"], frames: [[0,56,78,51,0,37.45,40.65],[78,66,34,60,0,15.450000000000003,44.65],[0,0,77,56,0,38.45,43.65],[78,0,35,66,0,18.450000000000003,46.65]]});
var sprite_6457_(AmbusherHitArea)_p = sprite_6457_(AmbusherHitArea).prototype = new BitmapAnimation();
sprite_6457_(AmbusherHitArea)_p.BitmapAnimation_initialize = sprite_6457_(AmbusherHitArea)_p.initialize;
sprite_6457_(AmbusherHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6457_(AmbusherHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6457_(AmbusherHitArea) = sprite_6457_(AmbusherHitArea);
}(window));

