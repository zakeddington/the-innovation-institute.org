/**
 * @module       Application initializer
 */

import Application   from './Application';
import svg4everybody from 'svg4everybody';

$(function() {
	svg4everybody();
	Application.initialize();
});
