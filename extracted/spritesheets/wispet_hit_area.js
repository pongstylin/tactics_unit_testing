(function(window) {
sprite_6365_(WispetHitArea) = function() {
	this.initialize();
}
sprite_6365_(WispetHitArea)._SpriteSheet = new SpriteSheet({images: ["wispet_hit_area.png"], frames: [[77,0,38,43,0,21.35,51.25],[77,43,38,43,0,15.350000000000001,51.25],[39,0,38,70,0,15.350000000000001,59.25],[0,0,39,70,0,21.35,59.25]]});
var sprite_6365_(WispetHitArea)_p = sprite_6365_(WispetHitArea).prototype = new BitmapAnimation();
sprite_6365_(WispetHitArea)_p.BitmapAnimation_initialize = sprite_6365_(WispetHitArea)_p.initialize;
sprite_6365_(WispetHitArea)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6365_(WispetHitArea)._SpriteSheet);
	this.paused = false;
}
window.sprite_6365_(WispetHitArea) = sprite_6365_(WispetHitArea);
}(window));

