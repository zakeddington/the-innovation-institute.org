/**
 * @module       Application initializer
 */

import 'babel-polyfill';
import Application   from './Application';
import svg4everybody from 'svg4everybody';

$(function() {
	svg4everybody();
	Application.initialize();
});
