(function(window) {
sprite_4717_(Trophy) = function() {
	this.initialize();
}
sprite_4717_(Trophy)._SpriteSheet = new SpriteSheet({images: ["trophy_base.png"], frames: [[55,0,55,85,0,26,69],[0,0,55,116,0,30,104]]});
var sprite_4717_(Trophy)_p = sprite_4717_(Trophy).prototype = new BitmapAnimation();
sprite_4717_(Trophy)_p.BitmapAnimation_initialize = sprite_4717_(Trophy)_p.initialize;
sprite_4717_(Trophy)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_4717_(Trophy)._SpriteSheet);
	this.paused = false;
}
window.sprite_4717_(Trophy) = sprite_4717_(Trophy);
}(window));

