(function(window) {
sprite_36_(Bubbles) = function() {
	this.initialize();
}
sprite_36_(Bubbles)._SpriteSheet = new SpriteSheet({images: ["bubbles_base.png"], frames: [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[110,121,24,16,0,12,8],[110,139,46,47,0,23,31],[192,131,38,49,0,19,37],[156,139,36,55,0,18,43],[186,70,38,61,0,19,49],[192,0,44,70,0,22,56],[62,123,48,71,0,24,56],[134,69,52,70,0,26,53],[134,0,58,69,0,29,51],[0,123,62,70,0,31,50],[0,0,68,123,0,34,101],[68,0,66,121,0,33,100],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]});
var sprite_36_(Bubbles)_p = sprite_36_(Bubbles).prototype = new BitmapAnimation();
sprite_36_(Bubbles)_p.BitmapAnimation_initialize = sprite_36_(Bubbles)_p.initialize;
sprite_36_(Bubbles)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_36_(Bubbles)._SpriteSheet);
	this.paused = false;
}
window.sprite_36_(Bubbles) = sprite_36_(Bubbles);
}(window));

