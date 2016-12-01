setTimeout(function(){
	Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var i=e[t];window.requestAnimationFrame=window[i$

	$(function() {
    		$('.b-page').append('<div class="snow" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; transform: translateZ(0)"></div>');
    		snowFall.snow($('.snow'), { flakeCount: 200, round: true, minSize: 5, maxSize: 8 });
	})
}, 100)
