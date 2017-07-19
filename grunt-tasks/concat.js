
/**
 * concat
 * Concatenate files.
 */

module.exports = function (grunt) {

	return {
		vendor_dev: {
			options: {
				separator: '\n\n'
			},
			src: [
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				// Then everything else
				'<%= sourceVendor %>/**/*.js'
			],
			dest: '<%= localScripts %>/vendor.js'
		},

		vendor_dist: {
			options: {
				separator: '\n\n'
			},
			src: [
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				// Then everything else
				'<%= sourceVendor %>/**/*.js'
			],
			dest: '<%= publicScripts %>/vendor.js'
		}
	};
};
