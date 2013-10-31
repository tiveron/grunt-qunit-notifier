/*
 * grunt-qunit-notifier
 * https://github.com/tiveron/grunt-qunit-notifier
 *
 * Copyright (c) 2013 Thiago Tiveron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp'],
		},

		// Configuration to be run (and then tested).
		qunit_notifier: {
			default_options: {
				options: {
					testPath: '/home/tiveron/workspace/qunit_notifier/example/cases',
    			runner: '/home/tiveron/workspace/qunit_notifier/example/index.html',
    			notifier: 'libnotify'
				}
			},
			/*
			teste: 'teste',
			default_options: {
				options: {
				},
				files: {
					'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123'],
				},
			},
			custom_options: {
				options: {
					separator: ': ',
					punctuation: ' !!!',
				},
				files: {
					'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123'],
				},
			},
			*/
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js'],
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'qunit_notifier', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
