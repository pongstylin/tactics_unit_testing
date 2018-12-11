(function(window) {
sprite_5328_(Die) = function() {
	this.initialize();
}
sprite_5328_(Die)._SpriteSheet = new SpriteSheet({images: ["die_base.png"], frames: [[86,56,34,36,0,17,34],[86,0,34,56,0,18,55],[0,0,31,75,0,17,75],[57,0,29,67,0,15,70],[31,0,26,79,0,13,86],[120,0,25,64,0,12,73],[145,0,22,65,0,11,78],[167,0,19,66,0,10,83]]});
var sprite_5328_(Die)_p = sprite_5328_(Die).prototype = new BitmapAnimation();
sprite_5328_(Die)_p.BitmapAnimation_initialize = sprite_5328_(Die)_p.initialize;
sprite_5328_(Die)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5328_(Die)._SpriteSheet);
	this.paused = false;
}
window.sprite_5328_(Die) = sprite_5328_(Die);
}(window));

