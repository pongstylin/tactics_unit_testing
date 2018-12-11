(function(window) {
sprite_6054_(Shell) = function() {
	this.initialize();
}
sprite_6054_(Shell)._SpriteSheet = new SpriteSheet({images: ["shell_base.png"], frames: [[0,0,78,78,0,39,69],[78,78,76,76,0,38,68],[78,0,78,78,0,39,69],[78,0,78,78,0,39,69],[154,78,76,76,0,38,68],[156,0,78,78,0,39,69],[156,0,78,78,0,39,69],[78,154,76,76,0,38,68],[154,154,76,76,0,38,68],[0,78,78,78,0,39,69]]});
var sprite_6054_(Shell)_p = sprite_6054_(Shell).prototype = new BitmapAnimation();
sprite_6054_(Shell)_p.BitmapAnimation_initialize = sprite_6054_(Shell)_p.initialize;
sprite_6054_(Shell)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6054_(Shell)._SpriteSheet);
	this.paused = false;
}
window.sprite_6054_(Shell) = sprite_6054_(Shell);
}(window));

