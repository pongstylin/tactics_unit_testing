(function(window) {
sprite_566_(Dspeaker) = function() {
	this.initialize();
}
sprite_566_(Dspeaker)._SpriteSheet = new SpriteSheet({images: ["dspeaker_base.png"], frames: [[788,311,58,90,0,22,77.95],[788,311,58,90,0,22,77.95],[707,402,60,86,0,24,81.95],[0,461,57,90,0,30,86.95],[0,371,58,90,0,33,89.95],[753,490,59,86,0,37,90.95],[753,490,59,86,0,37,90.95],[456,388,58,90,0,43,91.95],[533,552,58,86,0,36,90.95],[58,393,58,90,0,33,89.95],[355,477,57,90,0,30,86.95],[295,451,60,86,0,24,81.95],[61,309,63,84,0,18,72.95],[335,276,65,86,0,13,64.95],[412,478,61,84,0,9,59.95],[240,307,61,87,0,2,62.95],[456,301,62,87,0,-4,62.95],[181,307,59,90,0,-9,61.95],[638,477,57,90,0,-14,58.95],[116,393,60,87,0,-20,53.95],[116,393,60,87,0,-20,53.95],[240,394,55,94,0,22,81.95],[65,204,58,104,0,23,91.95],[744,207,56,104,0,23,91.95],[729,102,63,105,0,22,91.95],[520,0,73,104,0,21,91.95],[92,0,92,104,0,24,90.95],[354,0,91,92,0,23,79.95],[0,105,79,82,0,21,68.95],[360,395,63,82,0,21,69.95],[176,479,58,88,0,22,75.95],[116,480,58,88,0,22,75.95],[360,395,63,82,0,21,69.95],[518,386,64,82,0,22,69.95],[176,397,63,82,0,21,69.95],[695,576,48,100,0,22,87.95],[334,754,42,90,0,21,70.95],[90,771,42,82,0,17,69.95],[789,757,47,81,0,15,71.95],[699,765,47,80,0,14,72.95],[653,768,45,83,0,7,76.95],[653,768,45,83,0,7,76.95],[0,756,42,90,0,-1,84.95],[653,768,45,83,0,7,76.95],[379,748,48,82,0,14,74.95],[43,753,47,82,0,15,72.95],[585,772,42,82,0,18,69.95],[183,760,42,90,0,28,64.95],[289,728,45,92,0,35,58.95],[653,676,46,92,0,38,57.95],[225,762,42,90,0,41,54.95],[539,754,46,83,0,51,48.95],[124,309,49,82,0,58,46.95],[136,758,47,81,0,59,43.95],[746,776,42,82,0,62,41.95],[746,776,42,82,0,62,41.95],[790,663,46,94,0,21,73.95],[730,311,58,91,0,25,73.95],[57,483,58,88,0,24,75.95],[0,281,61,90,0,25,76.95],[550,204,65,92,0,32,77.95],[354,92,74,90,0,43,77.95],[550,296,61,90,0,42,77.95],[489,202,61,99,0,42,77.95],[157,106,62,101,0,42,77.95],[219,106,63,99,0,42,77.95],[282,106,63,99,0,42,77.95],[157,106,62,101,0,42,77.95],[496,741,43,94,0,23,70.95],[496,741,43,94,0,23,70.95],[234,488,58,88,0,24,75.95],[412,562,60,83,0,37,71.95],[582,386,63,83,0,37,69.95],[695,488,58,88,0,28,66.95],[174,567,57,87,0,25,63.95],[349,567,59,84,0,23,60.95],[349,567,59,84,0,23,60.95],[48,571,59,82,0,15,57.95],[473,551,60,84,0,23,60.95],[174,567,57,87,0,25,63.95],[788,401,58,89,0,28,67.95],[514,468,62,83,0,37,69.95],[411,208,64,89,0,46,81.95],[680,207,64,92,0,53,87.95],[611,296,61,90,0,53,88.95],[576,469,62,83,0,60,86.95],[231,576,58,83,0,67,88.95],[591,567,57,86,0,69,91.95],[301,362,59,89,0,72,94.95],[645,393,62,84,0,81,97.95],[645,393,62,84,0,81,97.95],[790,576,55,87,0,33,75.95],[292,537,57,89,0,36,75.95],[472,635,50,93,0,29,75.95],[792,102,54,103,0,33,86.95],[445,0,75,106,0,53,96.95],[0,0,92,105,0,69,96.95],[184,0,90,106,0,68,96.95],[274,0,80,106,0,59,96.95],[92,104,65,100,0,43,90.95],[219,205,58,102,0,36,90.95],[277,205,58,102,0,36,90.95],[92,104,65,100,0,43,90.95],[345,182,66,94,0,43,84.95],[0,187,65,94,0,43,84.95],[699,678,48,87,0,27,69.95],[0,655,43,101,0,23,90.95],[247,659,42,103,0,24,92.95],[648,567,47,104,0,33,84.95],[289,626,46,102,0,33,82.95],[522,638,45,103,0,39,82.95],[522,638,45,103,0,39,82.95],[204,659,43,101,0,44,76.95],[408,645,45,103,0,39,82.95],[743,576,47,102,0,34,82.95],[0,551,48,104,0,33,84.95],[335,651,44,103,0,24,92.95],[611,671,42,101,0,16,98.95],[48,653,45,100,0,11,100.95],[453,728,43,95,0,8,98.95],[93,671,43,100,0,2,105.95],[800,205,46,104,0,-4,110.95],[796,0,48,101,0,-9,110.95],[115,568,47,103,0,-11,112.95],[162,654,42,104,0,-20,120.95],[162,654,42,104,0,-20,120.95],[567,653,44,101,0,24,90.95],[400,297,56,98,0,32,88.95],[123,207,58,102,0,35,92.95],[428,106,61,102,0,37,92.95],[664,102,65,102,0,34,92.95],[593,0,71,103,0,27,92.95],[593,103,65,101,0,21,91.95],[615,204,65,92,0,21,82.95],[520,104,65,98,0,21,87.95],[664,0,66,102,0,22,91.95],[730,0,66,102,0,22,91.95],[520,104,65,98,0,21,87.95],[747,678,42,98,0,21,87.95],[747,678,42,98,0,21,87.95],[672,299,58,94,0,35,84.95]]});
var sprite_566_(Dspeaker)_p = sprite_566_(Dspeaker).prototype = new BitmapAnimation();
sprite_566_(Dspeaker)_p.BitmapAnimation_initialize = sprite_566_(Dspeaker)_p.initialize;
sprite_566_(Dspeaker)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_566_(Dspeaker)._SpriteSheet);
	this.paused = false;
}
window.sprite_566_(Dspeaker) = sprite_566_(Dspeaker);
}(window));
