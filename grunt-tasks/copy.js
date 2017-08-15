
/**
 * copy
 * Copy files and folders.
 */

module.exports = function (grunt) {

	return {
		dev: {
			files: [
				{
					cwd: '<%= sourceImages %>',
					src: '**/*.*',
					dest: '<%= localImages %>',
					expand: true
				}
			]
		},

		dist: {
			files: [
				{
					cwd: '<%= sourceImages %>',
					src: '**/*.*',
					dest: '<%= publicImages %>',
					expand: true
				}
			]
		}
	};
};
