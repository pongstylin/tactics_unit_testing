(function(window) {
sprite_5675_(WitchShadow) = function() {
	this.initialize();
}
sprite_5675_(WitchShadow)._SpriteSheet = new SpriteSheet({images: ["witch_shadow.png"], frames: [[232,344,43,45,0,25,27],[232,344,43,45,0,25,27],[317,154,50,47,0,33,19],[205,0,70,42,0,43,17],[277,80,70,40,0,42,22],[275,0,70,42,0,54,24],[64,262,51,47,0,55,33],[232,344,43,45,0,47,41],[275,0,70,42,0,54,24],[277,80,70,40,0,42,22],[205,0,70,42,0,43,17],[317,154,50,47,0,33,19],[420,157,47,36,0,20,16],[384,262,49,30,0,18,9],[232,389,47,35,0,9,9],[64,262,51,47,0,11,5],[275,0,70,42,0,10,-4],[427,42,71,40,0,-2,-6],[205,0,70,42,0,-1,-11],[317,154,50,47,0,-11,-9],[317,154,50,47,0,-11,-9],[318,343,37,50,0,19,25],[183,222,62,41,0,35,14],[77,46,78,37,0,36,16],[0,0,77,39,0,32,15],[115,267,68,37,0,21,13],[316,393,39,29,0,15,13],[316,393,39,29,0,15,13],[316,393,39,29,0,15,13],[433,275,37,35,0,15,12],[467,157,36,35,0,18,11],[57,217,58,45,0,39,12],[417,82,57,49,0,39,26],[417,82,57,49,0,39,26],[417,82,57,49,0,39,26],[417,82,57,49,0,39,26],[417,82,57,49,0,39,26],[317,154,50,47,0,33,19],[315,259,69,29,0,27,16],[234,120,70,34,0,42,21],[77,0,64,46,0,38,28],[64,120,60,48,0,27,27],[0,272,64,45,0,27,34],[304,120,70,34,0,20,35],[317,201,70,29,0,5,30],[0,272,64,45,0,27,34],[64,120,60,48,0,27,27],[77,0,64,46,0,38,28],[234,120,70,34,0,42,21],[172,391,52,32,0,29,13],[434,193,44,34,0,31,12],[119,381,53,32,0,40,6],[304,120,70,34,0,64,7],[0,272,64,45,0,71,6],[155,46,61,47,0,71,-1],[0,78,64,46,0,82,0],[247,154,70,34,0,86,-7],[247,154,70,34,0,86,-7],[295,317,76,26,0,37,13],[183,304,62,40,0,41,22],[124,133,55,51,0,31,23],[0,170,57,51,0,35,21],[60,317,55,46,0,36,14],[433,310,42,27,0,23,10],[433,310,42,27,0,23,10],[433,310,42,27,0,23,10],[450,132,52,25,0,34,10],[434,227,54,24,0,36,11],[179,184,68,38,0,49,25],[277,42,75,38,0,35,25],[277,42,75,38,0,35,25],[277,42,75,38,0,35,25],[277,42,75,38,0,35,25],[277,42,75,38,0,35,25],[234,120,70,34,0,42,21],[275,343,43,45,0,18,18],[245,290,50,47,0,17,28],[345,0,70,42,0,27,25],[347,80,70,40,0,28,18],[415,0,70,42,0,16,18],[181,344,51,47,0,-4,14],[275,343,43,45,0,-3,4],[415,0,70,42,0,16,18],[347,80,70,40,0,28,18],[345,0,70,42,0,27,25],[245,290,50,47,0,17,28],[355,343,47,36,0,27,20],[384,292,49,30,0,31,21],[387,193,47,35,0,38,26],[181,344,51,47,0,40,42],[415,0,70,42,0,59,46],[142,93,71,40,0,73,46],[345,0,70,42,0,70,53],[245,290,50,47,0,61,56],[245,290,50,47,0,61,56],[474,82,37,50,0,18,25],[183,263,62,41,0,27,27],[64,83,78,37,0,42,21],[0,39,77,39,0,45,24],[115,304,68,37,0,47,24],[444,337,39,29,0,24,16],[444,337,39,29,0,24,16],[444,337,39,29,0,24,16],[279,388,37,35,0,22,23],[470,275,36,35,0,18,24],[121,184,58,45,0,19,33],[64,168,57,49,0,18,23],[64,168,57,49,0,18,23],[64,168,57,49,0,18,23],[64,168,57,49,0,18,23],[64,168,57,49,0,18,23],[245,290,50,47,0,17,28],[315,288,69,29,0,42,13],[247,188,70,34,0,28,13],[141,0,64,46,0,26,18],[0,317,60,48,0,33,21],[0,365,64,45,0,37,11],[245,222,70,34,0,50,-1],[315,230,70,29,0,65,-1],[0,365,64,45,0,37,11],[0,317,60,48,0,33,21],[141,0,64,46,0,26,18],[247,188,70,34,0,28,13],[355,379,52,32,0,23,19],[387,228,44,34,0,13,22],[367,157,53,32,0,13,26],[245,222,70,34,0,6,27],[0,365,64,45,0,-7,39],[216,42,61,47,0,-10,48],[0,124,64,46,0,-18,46],[245,256,70,34,0,-16,41],[245,256,70,34,0,-16,41],[374,131,76,26,0,39,13],[119,341,62,40,0,21,18],[179,133,55,51,0,24,28],[0,221,57,51,0,22,30],[64,363,55,46,0,19,32],[402,337,42,27,0,19,17],[402,337,42,27,0,19,17],[402,337,42,27,0,19,17],[216,89,52,25,0,18,15],[433,251,54,24,0,18,13],[115,229,68,38,0,19,13],[352,42,75,38,0,40,13],[352,42,75,38,0,40,13],[352,42,75,38,0,40,13],[352,42,75,38,0,40,13],[352,42,75,38,0,40,13],[247,188,70,34,0,28,13]]});
var sprite_5675_(WitchShadow)_p = sprite_5675_(WitchShadow).prototype = new BitmapAnimation();
sprite_5675_(WitchShadow)_p.BitmapAnimation_initialize = sprite_5675_(WitchShadow)_p.initialize;
sprite_5675_(WitchShadow)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5675_(WitchShadow)._SpriteSheet);
	this.paused = false;
}
window.sprite_5675_(WitchShadow) = sprite_5675_(WitchShadow);
}(window));
