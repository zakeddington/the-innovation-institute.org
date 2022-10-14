
/**
 * sass
 * Compile Sass to CSS
 */

const sass = require('sass');

module.exports = function (grunt) {

	return {
		dev: {
			options: {
				implementation: sass,
				sourceComments: true,
				sourceMap: true,
				sourceMapContents: true,
				outputStyle: 'expanded'
			},
			files: [{
				'<%= localStyles %>/<%= assetName %>.css': '<%= sourceStyles %>/<%= assetName %>.scss'
			}]
		},

		dist: {
			options: {
				implementation: sass,
				sourceComments: false,
				sourceMap: false,
				sourceMapContents: false,
				outputStyle: 'compressed'
			},
			files: [{
				'<%= publicStyles %>/<%= assetName %>.css': '<%= sourceStyles %>/<%= assetName %>.scss'
			}]
		}
	};
};
