(function(window) {
sprite_1353 = function() {
	this.initialize();
}
sprite_1353._SpriteSheet = new SpriteSheet({images: ["egg_base.png"], frames: [[0,0,43,57,0,21,61],[0,0,43,57,0,21,63],[0,0,43,57,0,21,64],[0,0,43,57,0,21,65],[0,0,43,57,0,21,66],[0,0,43,57,0,21,67],[0,0,43,57,0,21,68],[0,0,43,57,0,21,69],[0,0,43,57,0,21,69],[0,0,43,57,0,21,68],[0,0,43,57,0,21,67],[0,0,43,57,0,21,66],[0,0,43,57,0,21,65],[0,0,43,57,0,21,64],[0,0,43,57,0,21,63],[0,0,43,57,0,21,61]]});
var sprite_1353_p = sprite_1353.prototype = new BitmapAnimation();
sprite_1353_p.BitmapAnimation_initialize = sprite_1353_p.initialize;
sprite_1353_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_1353._SpriteSheet);
	this.paused = false;
}
window.sprite_1353 = sprite_1353;
}(window));

