/*
 * grunt-qunit-notifier
 * https://github.com/tiveron/grunt-qunit-notifier
 *
 * Copyright (c) 2013 Thiago Tiveron
 * Licensed under the MIT license.
 */

'use strict';

var qnotifier = require('qunit_notifier');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('qunit_notifier', 'Grunt plugin for qunit_notifier.', function() {
    var done = this.async();

    // force watch = false to run instead watch tests
    this.data.watch = false;

    // set configuration and run
    qnotifier.configure(this.data.options);
    qnotifier.run();

  });

};
