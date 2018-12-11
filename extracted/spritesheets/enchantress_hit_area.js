(function(window) {
sprite_5817_(EnchantressHitArea) = function() {
	this.initialize();
}
sprite_5817_(EnchantressHitArea)._SpriteSheet = new SpriteSheet({images: ["enchantress_hit_area.png"], frames: [[27,0,26,67,0,12.45,61.5],[78,0,24,71,0,11.45,61.5],[0,0,27,65,0,12.45,62.5],[53,0,25,69,0,12.45,62.5]]});
var sprite_5817_(EnchantressHitArea)_p = sprite_5817_(EnchantressHitArea).prototype = new BitmapAnimation();
sprite_5817_(EnchantressHitArea)_p.BitmapAnimation_initialize = sprite_5817_(EnchantressHitArea)_p.initialize;
sprite_5817_(EnchantressHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5817_(EnchantressHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5817_(EnchantressHitArea) = sprite_5817_(EnchantressHitArea);
}(window));

