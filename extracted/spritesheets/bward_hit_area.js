(function(window) {
sprite_5583_(BWardHitArea) = function() {
	this.initialize();
}
sprite_5583_(BWardHitArea)._SpriteSheet = new SpriteSheet({images: ["bward_hit_area.png"], frames: [[0,0,40,50,0,20,47.4],[0,0,40,50,0,20,47.4],[0,0,40,50,0,20,47.4],[0,0,40,50,0,20,47.4]]});
var sprite_5583_(BWardHitArea)_p = sprite_5583_(BWardHitArea).prototype = new BitmapAnimation();
sprite_5583_(BWardHitArea)_p.BitmapAnimation_initialize = sprite_5583_(BWardHitArea)_p.initialize;
sprite_5583_(BWardHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5583_(BWardHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5583_(BWardHitArea) = sprite_5583_(BWardHitArea);
}(window));

