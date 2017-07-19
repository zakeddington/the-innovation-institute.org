/**
 * Jump Links
 * @description  Accessibility links to skip to other content within a page
 */

class JumpLinks {
	constructor($target) {

		this.ui = {
			target : $target
		};

		this.classes = {
			visibleState : 'jump-link-visible' // class to make offscreen link visible on focus
		};

		this.selector = {
			// data attr that contains alternate element selector
			// This is primarily used when linking to selected nav item
			// but it is hidden in the mobile menu and it can't accept focus
			dataFallback : 'jump-fallback'
		};

		this._addEventListeners();
	}

	_onJumpLink(event) {
		let $curTarget = $(event.currentTarget);

		if (event.type === 'focus') {
			$curTarget.addClass(this.classes.visibleState);
		}

		if (event.type === 'blur') {
			$curTarget.removeClass(this.classes.visibleState);
		}

		if (event.type === 'click') {
			event.preventDefault();

			// Get href element
			let $jumpTarget = $($curTarget.attr('href')).first();

			// Get alternate element from selector defined in data attr
			let $jumpFallback = $($curTarget.data(this.selector.dataFallback)).first();

			// Jump to the href element if it is visible (i.e. not hidden in the mobile menu)
			if ($jumpTarget.length && $jumpTarget.is(':visible')) {
				$jumpTarget.attr('tabIndex', '0');
				$jumpTarget.focus();
			} else if ($jumpFallback.length) {
				// Otherwise, jump to the alternate element
				$jumpFallback.attr('tabIndex', '0');
				$jumpFallback.focus();
			}
		}
	}

	_addEventListeners() {
		this.ui.target.on('focus blur click', this._onJumpLink.bind(this));
	}
}

export default JumpLinks;
