(function(window) {
sprite_5880_(MudHitArea) = function() {
	this.initialize();
}
sprite_5880_(MudHitArea)._SpriteSheet = new SpriteSheet({images: ["mud_hit_area.png"], frames: [[0,63,55,55,0,26.95,39.8],[55,63,55,55,0,27.95,39.8],[55,0,54,63,0,27.95,44.8],[0,0,55,63,0,25.95,44.8]]});
var sprite_5880_(MudHitArea)_p = sprite_5880_(MudHitArea).prototype = new BitmapAnimation();
sprite_5880_(MudHitArea)_p.BitmapAnimation_initialize = sprite_5880_(MudHitArea)_p.initialize;
sprite_5880_(MudHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5880_(MudHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5880_(MudHitArea) = sprite_5880_(MudHitArea);
}(window));

