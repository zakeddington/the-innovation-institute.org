/**
 * Navigation View
 * @description  Primary navigation on mobile/tablet
 *
 * @requires jQuery
 *
 * @param {Object} objOptions - Optional object of properties to mixin to the view
 */

const NavigationView = {

	initialize(objOptions) {
		/**
		 * Default configuration for view
		 */
		this.options = Object.assign({
			selectorNav         : '.site-header',             // selector for the nav container
			selectorBtnToggle   : '.nav-toggle',          // selector for the hamburger icon
			classOpen           : 'is-open'                   // class for setting active states
		}, objOptions);

		/**
		 * DOM elements
		 */
		this.ui = {
			body           : $('body'),
			nav            : $(this.options.selectorNav),
			btnNavToggle   : $(this.options.selectorBtnToggle),
		};

		this._addEventListeners();
	},

	_toggleNav(e) {
		e.preventDefault();
		this.ui.nav.toggleClass(this.options.classOpen);
	},

	_addEventListeners() {
		this.ui.btnNavToggle.on('click', this._toggleNav.bind(this));
	}
};

export default NavigationView;
