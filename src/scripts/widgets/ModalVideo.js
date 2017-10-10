/**
 * Photo Modal Window
 *
 * @description
 * - Display photo in a modal window
 * - Photo is cloned content from within the trigger element
 *
 * @requires jQuery
 * @requires ModalWindow (base class)
 *
 * @example
 * new ModalWindow('.modal-photo-trigger', {options})
 *
 * @param {String} triggerSelector  - trigger element (e.g. '.modal-photo-trigger')
 * @param {Object} objOptions       - Optional object of properties to mixin to the instance
 */

import ModalWindow from 'widgets/ModalWindow';

class ModalVideo extends ModalWindow {

	initialize(selectorTrigger, objOptions) {
		/**
		 * Default configuration for component
		 */
		this.options = $.extend({
			modalID       : 'modal-media',
			container     : '<div class="video-player" />',
			iframeOptions : '?rel =0',
			iframeUrl     : 'https://www.youtube.com/embed/',
			dataAttrUrl   : 'video-id',
		}, objOptions || {});

		super.initialize(selectorTrigger, this.options);
	}

	_getContent() {
		this._setContent();
	}

	/**
	 * Fired from _openModal
	 * Display the content in the modal window
	 */
	_setContent() {
		let $container = $(this.options.container);
		let videoId = this.ui.curTrigger.data(this.options.dataAttrUrl);
		let $iframe = $('<iframe src="' + this.options.iframeUrl + videoId + this.options.iframeOptions + '" frameborder="0" allowfullscreen></iframe>');;

		// Create modal content container
		this.ui.content = $('<div/>', {
			'class' : this.options.contentClass
		}).appendTo(this.ui.modal);

		$container.append($iframe);

		this.ui.content.append($container);

		this.ui.content.appendTo(this.ui.modal);

		this.ui.content.on('click.' + this.instance.namespace, function() {
			if (this.state.isOpen) {
				this._closeModal();
			}
		}.bind(this));
	}
}

export default ModalVideo;
