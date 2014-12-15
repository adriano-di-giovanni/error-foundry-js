'use strict';

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      target: {
        options: {
          jshintrc: true
        },
        files: {
          src: [ './Gruntfile.js', 'ErrorFoundry.js' ]
        }
      }
    },
    uglify: {
      target: {
        files: {
          './ErrorFoundry.min.js': [ './ErrorFoundry.js']
        }
      }
    }
  });

  grunt.registerTask('default', [ 'jshint', 'uglify' ]);
};
