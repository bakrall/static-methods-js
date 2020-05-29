// based on https://www.youtube.com/watch?v=Jbopfp3LvRU

(function() {
	'use strict';

	const button = $('.square-check__button'),
		answer = $('.answer');

	class Square {
		constructor(width) {
			this.width = width;
			this.height = width;
		}

		static isValidSquare(width, height) {
			return width === height;
		}
	}

	button.on('click', event => {
		event.preventDefault();
		const width = $('#width').val();
		const height = $('#height').val();

		console.log($('#width').val().length);

		if (!width.length || !height.length) {
			answer.text('Please, give width and height');
			return;
		}

		if (Square.isValidSquare(width, height)) {
			answer.text('Yes');
		} else {
			answer.text('No');
		}
	});
})();