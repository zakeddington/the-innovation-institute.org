/**
 * Navigation View
 * @description  Hamburger nav on mobile/tablet. Keyboard events for flyouts on desktop.
 *
 * @requires jQuery
 *
 * @param {Object} objOptions - Optional object of properties to mixin to the view
 */

import Constants from 'config/Constants';

const NavigationView = {

	initialize(objOptions) {
		/**
		 * Default configuration for view
		 */
		this.options = Object.assign({
			selectorNav             : '.site-header',          // selector for the nav container
			selectorFlyoutContainer : '.nav-flyout-container', // selector for the desktop flyouts
			selectorBtnToggle       : '.nav-toggle',           // selector for the hamburger icon
			selectorFocus           : '.primary-logo',         // selector for element to send focus on mobile
			classOpen               : 'is-open',               // class for setting active states
		}, objOptions);

		/**
		 * DOM elements
		 */
		this.ui = {
			document         : $(document),
			body             : $('body'),
			nav              : $(this.options.selectorNav),
			flyoutContainers : $(this.options.selectorFlyoutContainer),
			btnNavToggle     : $(this.options.selectorBtnToggle),
			focusTarget      : $(this.options.selectorFocus),
		};

		this.constant = {
			namespace : Date.now(), // namespace for events
		};

		this.state = {
			isMobileNavOpen : false,
		};

		this._addEventListeners();
	},

	_toggleMobileNav(e) {
		e.preventDefault();

		if (this.ui.nav.hasClass(this.options.classOpen)) {
			this._closeMobileNav();
		} else {
			this._openMobileNav();
		}
	},

	/**
	 * Remove active class and unbind focus event
	 * @param  {Boolean} setFocus - is this being triggered from keyboard event?
	 */
	_closeMobileNav(setFocus = false) {
		this.ui.nav.removeClass(this.options.classOpen);
		this.ui.document.off('.' + this.constant.namespace);
		this.state.isMobileNavOpen = false;

		if (setFocus) {
			this.ui.focusTarget.focus();
		}
	},

	/**
	 * Set active class and bind focus event
	 */
	_openMobileNav() {
		this.ui.nav.addClass(this.options.classOpen);
		this.state.isMobileNavOpen = true;

		this.ui.document.on('focusin.' + this.constant.namespace, (e) => {
			if (!this.ui.nav.find($(e.target)).length) {
				this.ui.focusTarget.focus();
			}
		});
	},

	/**
	 * Close mobile nav on escape key
	 */
	_onNavKeydown(e) {
		const escKey = 27;

		if (e.keyCode === escKey && this.state.isMobileNavOpen) {
			this._closeMobileNav(true);
		}
	},

	/**
	 * Show desktop flyouts on focus
	 */
	_onNavItemFocus(e) {
		let $curTarget = $(e.currentTarget);
		let $curContainer = $curTarget.parents(this.options.selectorFlyoutContainer);

		this.ui.flyoutContainers.removeClass(this.options.classOpen);

		if (Constants.breakpoint === 'desktop' && $curContainer.length) {
			$curContainer.addClass(this.options.classOpen);
		}
	},

	_addEventListeners() {
		this.ui.nav.on('keydown', this._onNavKeydown.bind(this));
		this.ui.nav.on('focusin.' + this.constant.namespace, 'a', this._onNavItemFocus.bind(this));
		this.ui.btnNavToggle.on('click', this._toggleMobileNav.bind(this));
	}
};

export default NavigationView;
