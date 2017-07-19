
/**
 * eslint
 * validate JS files with eslint.
 * available rules: http://eslint.org/docs/rules/
 */

module.exports = function (grunt) {

	return {

		options: {
			configFile: './.eslintrc.json'
		},

		target: '<%= sourceScripts %>/**/*.js'

	};

};
