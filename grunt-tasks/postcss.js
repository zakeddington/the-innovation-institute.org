/**
 * Postcss - apply post-processors to CSS:
 * Add vendor-prefixed CSS properties
 */

var autoprefixer = require('autoprefixer');

module.exports = function (grunt) {
	// list all plugins
	var plugins = [
		autoprefixer()
	];
	return {
		dev: {
			options: {
				processors: plugins,
				map: true
			},
			files: [{
				// Set to true for recursive search for all css files
				expand: true,
				cwd: '<%= localStyles %>/',
				src: ['**/*.css'],
				dest: '<%= localStyles %>/',
				ext: '.css'
			}]
		},
		dist: {
			options: {
				processors: plugins,
				map: false
			},
			files: [{
				// Set to true for recursive search for all css files
				expand: true,
				cwd: '<%= publicStyles %>/',
				src: ['**/*.css'],
				dest: '<%= publicStyles %>/',
				ext: '.css'
			}]
		}
	};
};
