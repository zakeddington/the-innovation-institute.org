/**
 * Loader
 * @description  Global loading icon
 */

class Loader {
	constructor($target, objOptions) {
		this.$target = $target;
		this.options = $.extend({
			overlay : '<div class="loader-overlay"></div>',
			spinner : '<div class="loader-spinner"></div>'
		}, objOptions || {});
		this.$overlay = $(this.options.overlay);
		this.$spinner = $(this.options.spinner);
	}
	addLoader() {
		let animSpeed = 300;
		this.$overlay.hide();
		this.$overlay.append(this.$spinner);
		this.$target.append(this.$overlay);
		this.$overlay.fadeIn(animSpeed);
	}
	removeLoader() {
		this.$overlay.remove();
	}
}

export default Loader;
