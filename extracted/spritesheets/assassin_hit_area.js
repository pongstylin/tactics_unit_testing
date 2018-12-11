(function(window) {
sprite_5680_(AssassinHitArea) = function() {
	this.initialize();
}
sprite_5680_(AssassinHitArea)._SpriteSheet = new SpriteSheet({images: ["assassin_hit_area.png"], frames: [[0,0,37,71,0,22.1,61.5],[37,69,36,68,0,16.1,60.5],[37,0,36,69,0,13.100000000000001,61.5],[0,71,34,67,0,17.1,62.5]]});
var sprite_5680_(AssassinHitArea)_p = sprite_5680_(AssassinHitArea).prototype = new BitmapAnimation();
sprite_5680_(AssassinHitArea)_p.BitmapAnimation_initialize = sprite_5680_(AssassinHitArea)_p.initialize;
sprite_5680_(AssassinHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5680_(AssassinHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_5680_(AssassinHitArea) = sprite_5680_(AssassinHitArea);
}(window));

