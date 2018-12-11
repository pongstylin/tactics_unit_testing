(function(window) {
sprite_5484_(ClericHitArea) = function() {
	this.initialize();
}
sprite_5484_(ClericHitArea)._SpriteSheet = new SpriteSheet({images: ["cleric_hit_area.png"], frames: [[55,0,28,70,0,12.95,60.650000000000006],[83,0,27,70,0,13.95,60.650000000000006],[0,0,28,74,0,14.95,64.65],[28,0,27,73,0,12.95,64.65]]});
var sprite_5484_(ClericHitArea)_p = sprite_5484_(ClericHitArea).prototype = new BitmapAnimation();
sprite_5484_(ClericHitArea)_p.BitmapAnimation_initialize = sprite_5484_(ClericHitArea)_p.initialize;
sprite_5484_(ClericHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5484_(ClericHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5484_(ClericHitArea) = sprite_5484_(ClericHitArea);
}(window));

