(function(window) {
sprite_5585_(LWardHitArea) = function() {
	this.initialize();
}
sprite_5585_(LWardHitArea)._SpriteSheet = new SpriteSheet({images: ["lward_hit_area.png"], frames: [[0,0,43,90,0,18.5,74.5],[0,0,43,90,0,18.5,74.5],[0,0,43,90,0,18.5,74.5],[0,0,43,90,0,18.5,74.5]]});
var sprite_5585_(LWardHitArea)_p = sprite_5585_(LWardHitArea).prototype = new BitmapAnimation();
sprite_5585_(LWardHitArea)_p.BitmapAnimation_initialize = sprite_5585_(LWardHitArea)_p.initialize;
sprite_5585_(LWardHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5585_(LWardHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5585_(LWardHitArea) = sprite_5585_(LWardHitArea);
}(window));

