(function(window) {
sprite_6467_(EggShadow) = function() {
	this.initialize();
}
sprite_6467_(EggShadow)._SpriteSheet = new SpriteSheet({images: ["egg_shadow.png"], frames: [[0,0,40,26,0,20,13],[0,0,40,26,0,20,13]]});
var sprite_6467_(EggShadow)_p = sprite_6467_(EggShadow).prototype = new BitmapAnimation();
sprite_6467_(EggShadow)_p.BitmapAnimation_initialize = sprite_6467_(EggShadow)_p.initialize;
sprite_6467_(EggShadow)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6467_(EggShadow)._SpriteSheet);
	this.paused = false;
}
window.sprite_6467_(EggShadow) = sprite_6467_(EggShadow);
}(window));

