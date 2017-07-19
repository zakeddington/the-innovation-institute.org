/**
 * BreakpointChange
 * @description  Create pseudo 'breakpointChange' event
 */

import Constants from 'config/Constants';
import Events    from 'config/Events';

const BreakpointChange = function() {

	var $elIndicator = $('<div></div>',{
		'id': 'breakpoint-indicator'
	}).appendTo($('body'));

	var zIndex = $elIndicator.css('z-index');

	var updateConstants = function() {
		Constants.breakpoint = Constants.breakpoints[zIndex];
		Constants.isMobileView = Constants.breakpoint === 'mobile' ? true : false;
		Constants.isTabletView = Constants.breakpoint === 'tablet' ? true : false;
		Constants.isDesktopView = Constants.breakpoint === 'desktop' ? true : false;
	};
	updateConstants();

	$(window).on('resize', function(event) {
		var newZI = $elIndicator.css('z-index');
		if (newZI !== zIndex) {
			zIndex = newZI;
			updateConstants();

			$.event.trigger( Events.BREAKPOINT_CHANGE, { breakpoint: Constants.breakpoints[zIndex] } );
		}
	});
};

export default BreakpointChange;
