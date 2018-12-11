(function(window) {
sprite_6357_(TrophyShadow) = function() {
	this.initialize();
}
sprite_6357_(TrophyShadow)._SpriteSheet = new SpriteSheet({images: ["trophy_shadow.png"], frames: [[0,0,55,37,0,26,11],[55,0,55,37,0,30,25]]});
var sprite_6357_(TrophyShadow)_p = sprite_6357_(TrophyShadow).prototype = new BitmapAnimation();
sprite_6357_(TrophyShadow)_p.BitmapAnimation_initialize = sprite_6357_(TrophyShadow)_p.initialize;
sprite_6357_(TrophyShadow)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6357_(TrophyShadow)._SpriteSheet);
	this.paused = false;
}
window.sprite_6357_(TrophyShadow) = sprite_6357_(TrophyShadow);
}(window));

