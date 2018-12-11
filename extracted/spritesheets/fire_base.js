(function(window) {
sprite_57_(Fire) = function() {
	this.initialize();
}
sprite_57_(Fire)._SpriteSheet = new SpriteSheet({images: ["fire_base.png"], frames: [[-763862707,-210476187,-127840963,-194812590,0,0,0],[-763862707,-210476187,-127840963,-194812590,0,0,0],[-763862707,-210476187,-127840963,-194812590,0,0,0],[543519849,-446338989,-381280140,-512858772,0,17,34],[-512732369,-143691150,-512732355,-143691150,0,18,55],[0,0,31,75,0,17,75],[-512732369,-143691150,-512732355,-143691150,0,15,70],[31,0,26,79,0,13,86],[-512732369,-143691150,-512732355,-143691150,0,12,73],[543519849,-446338989,-381280140,-512858772,0,11,78],[543519849,-446338989,-381280140,-512858772,0,10,83]]});
var sprite_57_(Fire)_p = sprite_57_(Fire).prototype = new BitmapAnimation();
sprite_57_(Fire)_p.BitmapAnimation_initialize = sprite_57_(Fire)_p.initialize;
sprite_57_(Fire)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_57_(Fire)._SpriteSheet);
	this.paused = false;
}
window.sprite_57_(Fire) = sprite_57_(Fire);
}(window));

