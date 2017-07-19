/**
 * @module       Application
 * @description  Defines our application
 */
/* eslint-disable no-magic-numbers, no-unused-vars */

import breakpointChange       from 'utilities/BreakpointChange';
import resizeEndEvent         from 'utilities/ResizeEndEvent';
import Constants              from 'config/Constants';

const Application = {

	initialize() {
		console.log('init');
		this._initGlobalEvents();
	},

	_initGlobalEvents() {
		breakpointChange();
		resizeEndEvent();
	},
};

export default Application;
