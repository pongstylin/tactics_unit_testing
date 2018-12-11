(function(window) {
sprite_6139_(RiderHitArea) = function() {
	this.initialize();
}
sprite_6139_(RiderHitArea)._SpriteSheet = new SpriteSheet({images: ["rider_hit_area.png"], frames: [[0,0,96,69,0,56.6,53.6],[47,137,47,76,0,23.6,50.6],[0,69,96,68,0,39.6,52.6],[0,137,47,97,0,21.6,61.6]]});
var sprite_6139_(RiderHitArea)_p = sprite_6139_(RiderHitArea).prototype = new BitmapAnimation();
sprite_6139_(RiderHitArea)_p.BitmapAnimation_initialize = sprite_6139_(RiderHitArea)_p.initialize;
sprite_6139_(RiderHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6139_(RiderHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6139_(RiderHitArea) = sprite_6139_(RiderHitArea);
}(window));

