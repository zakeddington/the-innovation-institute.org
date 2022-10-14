
/**
 * uglify
 * Minify files with UglifyJS.
 */

module.exports = function (grunt) {

	return {
		dist: {
			options: {
				output: {
					comments: '/^!/'
				}
			},
			files: [
				{
					src: '<%= publicScripts %>/vendor.js',
					dest: '<%= publicScripts %>/vendor.js'
				},
				{
					src: '<%= publicScripts %>/<%= assetName %>.js',
					dest: '<%= publicScripts %>/<%= assetName %>.js'
				}
			]
		}
	};
};
