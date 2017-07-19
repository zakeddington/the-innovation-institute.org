
/**
 * watch
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 */

module.exports = function (grunt) {

	return {
		// generic options
		options: {
			livereload: '<%= lrPortNum %>',
			spawn: false
		},

		html: {
			files: ['<%= sourceHTML %>/**/*.html'],
			tasks: ['newer:includereplace:dev']
		},

		htmltemplates: {
			files: ['<%= sourceHTML %>/_includes/*.html'],
			tasks: ['includereplace:dev']
		},

		scripts: {
			files: ['<%= sourceScripts %>/**/*.js'],
			tasks: ['newer:eslint', 'browserify:dev']
		},

		styles: {
			files: ['<%= sourceStyles %>/**/*.scss'],
			tasks: ['sasslint:dev', 'sass:dev', 'postcss:dev']
		},

		templates: {
			files: ['<%= sourceTemplates %>/**/*.hbs'],
			tasks: ['browserify:dev']
		},

		copy: {
			files: ['<%= sourceImages %>/**/*.*', '<%= sourceData %>/**/*.*'],
			tasks: ['newer:copy:dev']
		}
	};
};
