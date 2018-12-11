(function(window) {
sprite_6353_(ShrubHitArea) = function() {
	this.initialize();
}
sprite_6353_(ShrubHitArea)._SpriteSheet = new SpriteSheet({images: ["shrub_hit_area.png"], frames: [[0,0,54,68,0,26.25,61.4]]});
var sprite_6353_(ShrubHitArea)_p = sprite_6353_(ShrubHitArea).prototype = new BitmapAnimation();
sprite_6353_(ShrubHitArea)_p.BitmapAnimation_initialize = sprite_6353_(ShrubHitArea)_p.initialize;
sprite_6353_(ShrubHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6353_(ShrubHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6353_(ShrubHitArea) = sprite_6353_(ShrubHitArea);
}(window));

