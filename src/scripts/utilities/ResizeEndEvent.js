/**
 * ResizeEndEvent
 * @description  Broadcasts a pseudo 'resizeEnd' event
 */

import Events from 'config/Events';

const ResizeEndEvent = function() {
	var resizeTimer;
	var delay = 100;
	$(window).on('resize', function(event) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			$.event.trigger(Events.WINDOW_RESIZE_END);
		}, delay);
	});
};

export default ResizeEndEvent;
