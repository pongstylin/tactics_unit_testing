(function(window) {
sprite_3501 = function() {
	this.initialize();
}
sprite_3501._SpriteSheet = new SpriteSheet({images: ["frost_color.png"], frames: [[142,0,48,32,0,27,51],[142,0,48,32,0,27,51],[293,33,40,33,0,23,51],[85,230,47,28,0,34,53],[132,262,49,25,0,39,53],[164,192,47,27,0,41,56],[164,192,47,27,0,41,56],[40,218,42,33,0,45,65],[164,192,47,27,0,41,56],[132,262,49,25,0,39,53],[85,230,47,28,0,34,53],[293,33,40,33,0,23,51],[170,312,32,32,0,10,43],[301,66,30,39,0,5,48],[239,220,32,35,0,3,41],[93,32,41,33,0,1,37],[164,192,47,27,0,-3,28],[132,262,49,25,0,-5,25],[85,258,47,28,0,-10,25],[88,98,40,33,0,-21,23],[88,98,40,33,0,-21,23],[280,0,45,33,0,27,52],[42,251,43,32,0,26,54],[0,254,42,34,0,26,54],[190,0,45,34,0,24,52],[127,158,37,35,0,18,54],[302,105,32,34,0,17,58],[127,193,36,35,0,19,56],[0,321,43,28,0,22,53],[93,0,49,32,0,27,51],[93,0,49,32,0,27,51],[280,0,45,33,0,27,52],[217,34,37,36,0,15,53],[87,131,40,33,0,18,51],[207,220,32,36,0,7,57],[181,250,22,38,0,-5,62],[305,172,29,36,0,-3,62],[305,172,29,36,0,-3,62],[134,32,41,33,0,-3,65],[305,172,29,36,0,-3,62],[181,250,22,38,0,-5,62],[207,220,32,36,0,7,57],[87,131,40,33,0,18,51],[127,131,48,27,0,30,41],[129,287,49,25,0,33,39],[82,286,47,28,0,36,38],[88,65,41,33,0,41,37],[305,172,29,36,0,41,34],[181,250,22,38,0,39,34],[207,220,32,36,0,51,29],[87,164,40,33,0,62,23],[87,164,40,33,0,62,23],[39,181,38,37,0,13,53],[0,74,41,38,0,15,57],[45,33,42,37,0,16,55],[235,0,45,34,0,23,52],[174,66,39,34,0,22,54],[271,217,35,32,0,18,56],[132,228,37,34,0,19,55],[0,218,40,36,0,21,54],[43,283,39,35,0,18,53],[43,283,39,35,0,18,53],[39,181,38,37,0,13,53],[0,150,47,31,0,21,45],[252,96,41,32,0,19,47],[211,193,47,27,0,14,40],[212,136,49,26,0,11,38],[258,190,47,27,0,7,36],[258,190,47,27,0,7,36],[213,162,41,31,0,-3,33],[258,190,47,27,0,7,36],[212,136,49,26,0,11,38],[211,193,47,27,0,14,40],[252,96,41,32,0,19,47],[271,249,32,32,0,23,53],[306,208,29,33,0,25,55],[302,139,32,33,0,30,58],[213,162,41,31,0,41,61],[258,190,47,27,0,51,64],[212,136,49,26,0,55,66],[211,193,47,27,0,58,68],[261,128,41,31,0,63,75],[261,128,41,31,0,63,75],[129,65,45,30,0,19,45],[0,288,43,33,0,18,47],[43,318,42,32,0,17,47],[0,0,45,38,0,22,52],[41,103,39,35,0,22,59],[132,312,38,31,0,22,59],[82,197,40,33,0,22,58],[45,70,43,33,0,22,54],[45,0,48,33,0,22,48],[45,0,48,33,0,22,48],[129,65,45,30,0,19,45],[175,131,37,35,0,23,48],[129,95,41,32,0,23,47],[239,255,32,32,0,26,43],[202,313,28,33,0,27,42],[303,249,32,31,0,33,38],[303,249,32,31,0,33,38],[170,100,42,31,0,45,33],[303,249,32,31,0,33,38],[202,313,28,33,0,27,42],[239,255,32,32,0,26,43],[129,95,41,32,0,23,47],[85,314,47,28,0,19,51],[164,166,49,26,0,16,52],[254,68,47,28,0,12,55],[170,100,42,31,0,1,61],[303,280,32,31,0,-11,66],[202,313,28,33,0,-17,70],[271,281,32,32,0,-18,71],[261,159,41,31,0,-21,75],[261,159,41,31,0,-21,75],[213,70,39,34,0,26,47],[212,104,40,32,0,26,49],[175,34,42,32,0,27,48],[0,38,45,36,0,23,51],[47,138,40,34,0,18,58],[169,219,38,31,0,17,58],[254,34,39,34,0,18,58],[0,112,40,38,0,20,56],[0,181,39,37,0,22,51],[0,181,39,37,0,22,51],[213,70,39,34,0,26,47]]});
var sprite_3501_p = sprite_3501.prototype = new BitmapAnimation();
sprite_3501_p.BitmapAnimation_initialize = sprite_3501_p.initialize;
sprite_3501_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_3501._SpriteSheet);
	this.paused = false;
}
window.sprite_3501 = sprite_3501;
}(window));

