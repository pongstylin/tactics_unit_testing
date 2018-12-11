(function(window) {
sprite_6223_(FurgonHitArea) = function() {
	this.initialize();
}
sprite_6223_(FurgonHitArea)._SpriteSheet = new SpriteSheet({images: ["furgon_hit_area.png"], frames: [[65,0,64,64,0,31.5,49.1],[66,64,65,63,0,32.5,48.1],[0,0,65,64,0,32.5,50.1],[0,64,66,63,0,32.5,49.1]]});
var sprite_6223_(FurgonHitArea)_p = sprite_6223_(FurgonHitArea).prototype = new BitmapAnimation();
sprite_6223_(FurgonHitArea)_p.BitmapAnimation_initialize = sprite_6223_(FurgonHitArea)_p.initialize;
sprite_6223_(FurgonHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6223_(FurgonHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6223_(FurgonHitArea) = sprite_6223_(FurgonHitArea);
}(window));

