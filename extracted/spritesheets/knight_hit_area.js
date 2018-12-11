(function(window) {
sprite_156_(KnightHitArea) = function() {
	this.initialize();
}
sprite_156_(KnightHitArea)._SpriteSheet = new SpriteSheet({images: ["knight_hit_area.png"], frames: [[88,0,42,69,0,17.9,58.5],[130,0,29,70,0,17.9,59.5],[44,0,44,66,0,24.9,59.5],[0,0,44,76,0,10.899999999999999,66.5]]});
var sprite_156_(KnightHitArea)_p = sprite_156_(KnightHitArea).prototype = new BitmapAnimation();
sprite_156_(KnightHitArea)_p.BitmapAnimation_initialize = sprite_156_(KnightHitArea)_p.initialize;
sprite_156_(KnightHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_156_(KnightHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_156_(KnightHitArea) = sprite_156_(KnightHitArea);
}(window));

