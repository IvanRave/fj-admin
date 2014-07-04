/**
 * Grunt file
 */
module.exports = function (grunt) {
	'use strict';

	// Project configuration
	grunt.config.init({
		// Metadata
		pkg : grunt.file.readJSON('package.json'),
		'gh-pages' : {
			options : {
				base : 'public',
				message : 'chore(release): version <%= pkg.version %>',
				push : true
			},
			src : '**/*'
		},
		jshint : {
			gruntfile : {
				options : {
					jshintrc : '.jshintrc'
				},
				src : 'Gruntfile.js'
			},
			app : {
				options : {
					jshintrc : '.jshintrc'
				},
				files : [{
						expand : true,
						dot : true,
						cwd : 'public/js/',
						src : ['**/*.js']
					}
				]
			}
		}
	});

	grunt.registerTask('default', ['jshint']);

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-gh-pages');
};
