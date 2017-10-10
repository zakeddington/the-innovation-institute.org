/**
 * @module       Application
 * @description  Defines our application
 */
/* eslint-disable no-magic-numbers, no-unused-vars */

import breakpointChange from 'utilities/BreakpointChange';
import resizeEndEvent   from 'utilities/ResizeEndEvent';
import VideoLoader      from 'utilities/VideoLoader';
import Quotes           from 'data/Quotes';
import NavigationView   from 'views/NavigationView';
import ModalVideo       from 'widgets/ModalVideo';
import templateQuote    from 'templates/quote.hbs';

const Application = {

	initialize() {
		this._initGlobalEvents();
		this._initViews();

		this._initMapOverlay();
		this._initQuotes();
		this._initVideos();
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
	},

	_initQuotes() {
		let keys = Object.keys(Quotes);
		let $blockquote = $('blockquote[data-quote]');

		if ($blockquote.length) {
			$.each($blockquote, function() {
				let $curTarget = $(this);
				let targetQuote = $curTarget.data('quote');
				let data;

				if (targetQuote === 'random' || !targetQuote.length) {
					let ranIndex = Math.floor(Math.random() * keys.length);
					data = Quotes[keys[ranIndex]];
				} else {
					data = Quotes[targetQuote];
				}

				let $html = $(templateQuote(data)).hide();
				$curTarget.append($html);
				$html.fadeIn();
			})
		}
	},

	_initVideos() {
		let $videoContainers = $('.video-player');

		if ($videoContainers.length) {
			$.each($videoContainers, function() {
				new VideoLoader($(this));
			})
		}

		new ModalVideo('.video-trigger');
	},
};

export default Application;
