(function(window) {
sprite_6217_(DspeakerHitArea) = function() {
	this.initialize();
}
sprite_6217_(DspeakerHitArea)._SpriteSheet = new SpriteSheet({images: ["dspeaker_hit_area.png"], frames: [[0,0,48,86,0,13.549999999999997,75.85],[125,0,28,78,0,14.549999999999997,60.849999999999994],[48,0,48,76,0,33.55,68.85],[96,0,29,96,0,13.549999999999997,88.85]]});
var sprite_6217_(DspeakerHitArea)_p = sprite_6217_(DspeakerHitArea).prototype = new BitmapAnimation();
sprite_6217_(DspeakerHitArea)_p.BitmapAnimation_initialize = sprite_6217_(DspeakerHitArea)_p.initialize;
sprite_6217_(DspeakerHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6217_(DspeakerHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6217_(DspeakerHitArea) = sprite_6217_(DspeakerHitArea);
}(window));

