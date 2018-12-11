(function(window) {
sprite_23_(BlackSpike) = function() {
	this.initialize();
}
sprite_23_(BlackSpike)._SpriteSheet = new createjs.SpriteSheet({images: ["black_spike_base.png"], frames: [[0,0,22,14,0,11,7],[22,0,46,87,0,23,71],[68,0,35,97,0,17,85],[103,0,41,115,0,20,101],[144,0,49,117,0,24,101],[0,117,57,92,0,28,73],[57,117,68,163,0,34,141],[125,117,66,161,0,33,140]]});
var sprite_23_(BlackSpike)_p = sprite_23_(BlackSpike).prototype = new createjs.Sprite();
sprite_23_(BlackSpike)_p.Sprite_initialize = sprite_23_(BlackSpike)_p.initialize;
sprite_23_(BlackSpike)_p.initialize = function() {
	this.Sprite_initialize(sprite_23_(BlackSpike)._SpriteSheet);
	this.paused = false;
}
window.sprite_23_(BlackSpike) = sprite_23_(BlackSpike);
}(window));

