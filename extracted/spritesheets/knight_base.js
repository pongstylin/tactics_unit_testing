(function(window) {
sprite_5311_(Knight) = function() {
	this.initialize();
}
sprite_5311_(Knight)._SpriteSheet = new SpriteSheet({images: ["knight_base.png"], frames: [[399,470,49,77,0,22,63],[399,470,49,77,0,22,63],[209,615,47,71,0,17,60],[0,396,63,75,0,18,64],[375,77,68,76,0,21,66],[0,543,58,71,0,24,69],[44,675,47,76,0,38,74],[399,470,49,77,0,44,77],[0,543,58,71,0,24,69],[375,77,68,76,0,21,66],[0,396,63,75,0,18,64],[209,615,47,71,0,17,60],[230,686,49,72,0,8,52],[216,538,48,77,0,2,49],[279,686,47,75,0,-1,46],[44,675,47,76,0,-6,46],[0,471,58,72,0,-20,41],[375,77,68,76,0,-23,38],[0,396,63,75,0,-26,36],[209,615,47,71,0,-27,32],[209,615,47,71,0,-27,32],[179,390,57,77,0,29,63],[61,157,63,87,0,33,73],[182,229,54,94,0,24,80],[63,396,45,94,0,17,79],[455,391,47,81,0,18,66],[73,0,76,81,0,18,66],[185,686,45,79,0,17,65],[185,686,45,79,0,17,65],[91,680,47,76,0,21,62],[419,547,45,75,0,20,61],[419,547,45,75,0,20,61],[419,547,45,75,0,20,61],[419,547,45,75,0,20,61],[91,680,47,76,0,21,62],[91,680,47,76,0,21,62],[209,615,47,71,0,17,60],[48,319,64,77,0,51,63],[56,244,68,75,0,47,59],[162,467,54,76,0,30,61],[161,543,48,77,0,21,63],[352,385,54,72,0,21,66],[112,390,67,71,0,25,73],[48,319,64,77,0,29,77],[352,385,54,72,0,21,66],[161,543,48,77,0,21,63],[162,467,54,76,0,30,61],[56,244,68,75,0,47,59],[365,317,66,68,0,64,52],[406,244,68,73,0,71,49],[341,153,72,71,0,73,46],[112,390,67,71,0,69,45],[352,385,54,72,0,65,38],[161,543,48,77,0,65,35],[162,467,54,76,0,74,33],[56,244,68,75,0,91,31],[56,244,68,75,0,91,31],[236,312,59,84,0,45,69],[461,623,34,91,0,21,76],[264,597,40,89,0,28,73],[149,79,58,103,0,36,88],[300,0,73,75,0,51,61],[341,224,65,77,0,37,62],[73,81,76,76,0,53,62],[73,81,76,76,0,53,62],[464,547,44,76,0,32,62],[138,680,47,76,0,34,61],[138,680,47,76,0,34,61],[138,680,47,76,0,34,61],[138,680,47,76,0,34,61],[464,547,44,76,0,32,62],[464,547,44,76,0,32,62],[56,244,68,75,0,47,59],[98,606,49,74,0,28,68],[372,686,47,72,0,31,65],[103,538,58,68,0,43,64],[297,301,68,73,0,49,63],[294,451,57,68,0,34,59],[326,686,46,76,0,9,51],[448,472,50,75,0,6,54],[294,451,57,68,0,34,59],[297,301,68,73,0,49,63],[103,538,58,68,0,43,64],[372,686,47,72,0,31,65],[304,613,48,73,0,41,73],[321,537,47,76,0,46,77],[351,457,48,80,0,49,78],[326,686,46,76,0,53,79],[216,470,57,68,0,78,87],[297,301,68,73,0,93,91],[103,538,58,68,0,87,92],[352,613,47,73,0,75,93],[352,613,47,73,0,75,93],[0,191,56,95,0,29,89],[0,99,61,92,0,29,86],[108,461,54,77,0,31,71],[58,490,45,92,0,29,85],[0,286,48,106,0,30,100],[300,77,75,71,0,57,65],[419,622,42,76,0,26,70],[419,622,42,76,0,26,70],[273,519,48,78,0,27,72],[0,675,44,83,0,25,76],[0,675,44,83,0,25,76],[0,675,44,83,0,25,76],[0,675,44,83,0,25,76],[273,519,48,78,0,27,72],[273,519,48,78,0,27,72],[372,686,47,72,0,31,65],[443,82,63,82,0,14,70],[373,0,70,77,0,21,67],[295,374,57,77,0,27,65],[406,391,49,79,0,29,65],[236,396,58,74,0,36,60],[207,156,70,73,0,43,52],[443,82,63,82,0,36,56],[236,396,58,74,0,36,60],[406,391,49,79,0,29,65],[295,374,57,77,0,27,65],[373,0,70,77,0,21,67],[112,319,68,71,0,3,76],[207,81,71,75,0,-2,80],[226,0,74,81,0,0,81],[207,156,70,73,0,-1,80],[431,317,58,74,0,-8,88],[406,391,49,79,0,-15,93],[295,374,57,77,0,-17,93],[373,0,70,77,0,-23,95],[373,0,70,77,0,-23,95],[236,230,61,82,0,14,70],[476,164,35,89,0,14,77],[58,582,40,93,0,13,81],[124,182,58,88,0,22,76],[0,0,73,99,0,23,86],[443,0,64,82,0,26,70],[149,0,77,79,0,24,67],[149,0,77,79,0,24,67],[278,148,63,82,0,13,70],[413,164,63,80,0,13,68],[413,164,63,80,0,13,68],[413,164,63,80,0,13,68],[413,164,63,80,0,13,68],[278,148,63,82,0,13,70],[278,148,63,82,0,13,70],[373,0,70,77,0,21,67]]});
var sprite_5311_(Knight)_p = sprite_5311_(Knight).prototype = new BitmapAnimation();
sprite_5311_(Knight)_p.BitmapAnimation_initialize = sprite_5311_(Knight)_p.initialize;
sprite_5311_(Knight)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5311_(Knight)._SpriteSheet);
	this.paused = false;
}
window.sprite_5311_(Knight) = sprite_5311_(Knight);
}(window));

