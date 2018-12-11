(function(window) {
sprite_54_(Lightning) = function() {
	this.initialize();
}
sprite_54_(Lightning)._SpriteSheet = new SpriteSheet({images: ["lightning_base.png"], frames: [[0,0,0,0,0,0,-0.7000000000000455],[329,0,2,753,0,1,709.3],[259,0,34,669,0,18,630.3],[141,0,65,586,0,34,551.3],[0,0,72,564,0,38,531.3],[0,0,72,564,0,38,531.3],[72,0,69,569,0,36,535.3],[206,0,53,587,0,28,552.3],[293,0,36,604,0,19,568.3]]});
var sprite_54_(Lightning)_p = sprite_54_(Lightning).prototype = new BitmapAnimation();
sprite_54_(Lightning)_p.BitmapAnimation_initialize = sprite_54_(Lightning)_p.initialize;
sprite_54_(Lightning)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_54_(Lightning)._SpriteSheet);
	this.paused = false;
}
window.sprite_54_(Lightning) = sprite_54_(Lightning);
}(window));

