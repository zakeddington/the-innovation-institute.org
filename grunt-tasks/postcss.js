
/**
 * Postcss - apply post-processors to CSS:
 * Add vendor-prefixed CSS properties
 */

module.exports = function (grunt) {

	// list all plugins
	var plugins = [
		require('autoprefixer')({
			browsers: ['last 4 versions']
		})
	];

	return {

		dev: {
			options: {
				processors: plugins,
				map: true
			},
			files: [{
				src: '<%= localStyles %>/<%= assetName %>.css',
				dest: '<%= localStyles %>/<%= assetName %>.css'
			}]
		},

		dist: {
			options: {
				processors: plugins,
				map: false
			},
			files: [{
				src: '<%= publicStyles %>/<%= assetName %>.css',
				dest: '<%= publicStyles %>/<%= assetName %>.css'
			}]
		}
	};
};
