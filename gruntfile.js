module.exports = function(grunt) {

  grunt.initConfig({

    // Meta informations
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // define the files to lint
      all: ['js/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults

        laxcomma: true,
        trailing: true,...
        strict: true,

        globals: {
          jQuery: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'jshint');
  grunt.registerTask('travis', 'jshint');
};