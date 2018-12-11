(function(window) {
sprite_5327_(Barrier) = function() {
	this.initialize();
}
sprite_5327_(Barrier)._SpriteSheet = new SpriteSheet({images: ["barrier_base.png"], frames: [[0,0,78,78,0,39,69],[156,78,76,76,0,38,68],[156,154,76,76,0,38,68],[78,0,78,78,0,39,69],[78,0,78,78,0,39,69],[0,156,76,76,0,38,68],[76,156,76,76,0,38,68],[156,0,78,78,0,39,69],[156,0,78,78,0,39,69],[152,230,76,76,0,38,68],[0,232,76,76,0,38,68],[0,78,78,78,0,39,69],[76,232,76,76,0,38,68],[78,78,78,78,0,39,69],[152,306,76,76,0,38,68],[78,0,78,78,0,39,69],[0,382,76,76,0,38,68],[76,308,76,76,0,38,68],[152,382,76,76,0,38,68],[156,0,78,78,0,39,69],[156,0,78,78,0,39,69]]});
var sprite_5327_(Barrier)_p = sprite_5327_(Barrier).prototype = new BitmapAnimation();
sprite_5327_(Barrier)_p.BitmapAnimation_initialize = sprite_5327_(Barrier)_p.initialize;
sprite_5327_(Barrier)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5327_(Barrier)._SpriteSheet);
	this.paused = false;
}
window.sprite_5327_(Barrier) = sprite_5327_(Barrier);
}(window));

