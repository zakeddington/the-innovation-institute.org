/**
 * @module       Application
 * @description  Defines our application
 */
/* eslint-disable no-magic-numbers, no-unused-vars */

import breakpointChange from 'utilities/BreakpointChange';
import resizeEndEvent   from 'utilities/ResizeEndEvent';
import Constants        from 'config/Constants';
import NavigationView   from 'views/NavigationView';

const Application = {

	initialize() {
		this._initGlobalEvents();
		this._initViews();

		this._initMapOverlay();
	},

	_initGlobalEvents() {
		breakpointChange();
		resizeEndEvent();
	},

	_initViews() {
		NavigationView.initialize();
	},

	_initMapOverlay() {
		let $overlay = $('.map-overlay');

		if ($overlay.length) {
			$overlay.on('click', () => {
				$overlay.hide();
			});
		}
	}
};

export default Application;
