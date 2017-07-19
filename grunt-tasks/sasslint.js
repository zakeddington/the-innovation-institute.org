/**
 * sasslint
 * lint our scss
 */

module.exports = function (grunt) {

	return {
		dev: {
			files: [
				{
					src: '<%= sourceStyles %>/**/*.scss'
				}
			],
			options: {
				force: true,
				config: '.sass-lint.yml',
				reporterOutput: null
			}
		}
	};
};
