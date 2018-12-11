(function(window) {
sprite_6014_(BigStreaks) = function() {
	this.initialize();
}
sprite_6014_(BigStreaks)._SpriteSheet = new SpriteSheet({images: ["big_streaks_base.png"], frames: [[83,154,6,6,0,3,2.1999999999999886],[64,147,19,16,0,3,8.199999999999989],[121,145,32,42,0,16,36.19999999999999],[32,0,32,169,0,16,167.2],[64,0,32,147,0,16,140.2],[0,0,32,180,0,16,176.2],[96,0,25,154,0,16,148.2],[121,0,19,145,0,10,140.2],[140,0,13,103,0,10,101.19999999999999],[121,0,19,145,0,3,27.19999999999999]]});
var sprite_6014_(BigStreaks)_p = sprite_6014_(BigStreaks).prototype = new BitmapAnimation();
sprite_6014_(BigStreaks)_p.BitmapAnimation_initialize = sprite_6014_(BigStreaks)_p.initialize;
sprite_6014_(BigStreaks)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_6014_(BigStreaks)._SpriteSheet);
	this.paused = false;
}
window.sprite_6014_(BigStreaks) = sprite_6014_(BigStreaks);
}(window));

