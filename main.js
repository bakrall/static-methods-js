// based on https://www.youtube.com/watch?v=Jbopfp3LvRU
//and https://www.youtube.com/watch?v=10b6K9fORI4 (techsith)

(function() {
	'use strict';

	const button = $('.square-check__button'),
		answer = $('.answer');

	class Square {
		// constructor(width) {
		// 	this.width = width;
		// 	this.height = width;
		// }

		getDimensions() {
			const width = $('#width').val();
			const height = $('#height').val();

			return {
				width,
				height
			}
		}

		static isValidSquare(width, height) {
			return width === height;
		}
	}

	const newSquare = new Square();

	button.on('click', event => {
		event.preventDefault();

		const {width, height} = newSquare.getDimensions();

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