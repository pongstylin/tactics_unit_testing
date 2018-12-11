(function(window) {
sprite_6132_(DragonHitArea) = function() {
	this.initialize();
}
sprite_6132_(DragonHitArea)._SpriteSheet = new SpriteSheet({images: ["dragon_hit_area.png"], frames: [[0,80,77,69,0,36.55,54.35],[0,149,61,82,0,23.549999999999997,56.35],[0,0,76,80,0,39.55,58.35],[61,149,61,78,0,36.55,53.35]]});
var sprite_6132_(DragonHitArea)_p = sprite_6132_(DragonHitArea).prototype = new BitmapAnimation();
sprite_6132_(DragonHitArea)_p.BitmapAnimation_initialize = sprite_6132_(DragonHitArea)_p.initialize;
sprite_6132_(DragonHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6132_(DragonHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6132_(DragonHitArea) = sprite_6132_(DragonHitArea);
}(window));

