/**
 * Video Loader
 * @description  Lazy embed YouTube video when it is scrolled into view.
 *
 * @requires jQuery
 *
 * @param {Object} objOptions - Optional object of properties to mixin to the instance
 */

class VideoLoader {

	constructor($container, objOptions) {
		this.initialize($container, objOptions);
	}

	initialize($container, objOptions) {

		this.options = Object.assign({
			iframeOptions  : '?rel =0',
			iframeUrl      : 'https://www.youtube.com/embed/',
			offsetTrigger  : 50,
			dataAttrUrl    : 'video-id'
		}, objOptions);

		this.ui = {
			window         : $(window),
			container      : $container,
		};

		this.state = {
			videoUrl       : this.ui.container.data(this.options.dataAttrUrl),
			isVideoEmbeded : false,
			namespace      : Date.now() * Math.random(),
		};

		this._addEventListeners();
	}

	_onWindowScroll(e) {
		let scrollTop = this.ui.window.scrollTop();
		let winHeight = this.ui.window.outerHeight(true);
		let offsetTrigger = this.options.offsetTrigger;
		let videoTop = this.ui.container.offset().top;

		if (videoTop < scrollTop + winHeight + offsetTrigger) {
			this._embedVideo();
		}
	}

	_embedVideo() {
		if (!this.state.isVideoEmbeded) {
			this.state.isVideoEmbeded = true;

			let $iframe = $('<iframe src="' + this.options.iframeUrl + this.state.videoUrl + this.options.iframeOptions + '" frameborder="0" allowfullscreen></iframe>');
			this.ui.container.append($iframe);

			this._removeEventListeners();
		}
	}

	_removeEventListeners() {
		this.ui.window.off('scroll.' + this.state.namespace);
	}

	_addEventListeners() {
		this.ui.window.on('scroll.' + this.state.namespace, this._onWindowScroll.bind(this));
	}
};

export default VideoLoader;
