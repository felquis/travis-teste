module.exports = function(grunt) {

  grunt.initConfig({

    // Meta informations
    pkg: '<json:package.json>',
    meta: {
      banner: '/*\n' +
        ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' *  <%= pkg.description %>\n' +
        ' *  <%= pkg.homepage %>\n\n' +
        ' *  Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
        ' *  MIT License\n' +
        ' */'
    },

    // Lint definitions
    lint: {
      files: ['js/main.js']
    },
    jshint: {
      options: {
        multistr: true
      }
    }
  });

  grunt.registerTask('default', 'lint');
  grunt.registerTask('travis', 'lint');
};