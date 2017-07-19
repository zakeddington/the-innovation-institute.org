
/**
 * sass
 * Compile Sass to CSS
 */

module.exports = function (grunt) {

	return {
		dev: {
			options: {
				sourceComments: true,
				sourcemap: true,
				sourceMapContents: true,
				outputStyle: 'expanded'
			},
			files: [{
				'<%= localStyles %>/<%= assetName %>.css': '<%= sourceStyles %>/<%= assetName %>.scss'
			}]
		},

		dist: {
			options: {
				sourceComments: false,
				sourcemap: false,
				sourceMapContents: false,
				outputStyle: 'compressed'
			},
			files: [{
				'<%= publicStyles %>/<%= assetName %>.css': '<%= sourceStyles %>/<%= assetName %>.scss'
			}]
		}
	};
};
