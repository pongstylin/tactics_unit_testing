(function(window) {
sprite_6540_(BerserkerHitArea) = function() {
	this.initialize();
}
sprite_6540_(BerserkerHitArea)._SpriteSheet = new SpriteSheet({images: ["berserker_hit_area.png"], frames: [[0,0,68,82,0,28.9,60.4],[68,0,68,82,0,37.9,60.4],[0,82,68,72,0,37.9,62.4],[68,82,67,72,0,28.9,62.4]]});
var sprite_6540_(BerserkerHitArea)_p = sprite_6540_(BerserkerHitArea).prototype = new BitmapAnimation();
sprite_6540_(BerserkerHitArea)_p.BitmapAnimation_initialize = sprite_6540_(BerserkerHitArea)_p.initialize;
sprite_6540_(BerserkerHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6540_(BerserkerHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6540_(BerserkerHitArea) = sprite_6540_(BerserkerHitArea);
}(window));

