(function(window) {
sprite_6133_(Explode) = function() {
	this.initialize();
}
sprite_6133_(Explode)._SpriteSheet = new SpriteSheet({images: ["explode_base.png"], frames: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[80,58,36,41,0,18,39],[60,0,48,58,0,24,55],[0,0,60,84,0,30,75],[26,84,29,67,0,15,70],[0,84,26,79,0,13,86],[55,84,25,64,0,12,73],[80,99,22,65,0,11,78],[102,99,19,66,0,10,83]]});
var sprite_6133_(Explode)_p = sprite_6133_(Explode).prototype = new BitmapAnimation();
sprite_6133_(Explode)_p.BitmapAnimation_initialize = sprite_6133_(Explode)_p.initialize;
sprite_6133_(Explode)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6133_(Explode)._SpriteSheet);
	this.paused = false;
}
window.sprite_6133_(Explode) = sprite_6133_(Explode);
}(window));

