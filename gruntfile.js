module.exports = function(grunt) {

  grunt.initConfig({

    // Meta informations
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // define the files to lint
      files: ['js/main.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'jshint');
  grunt.registerTask('travis', 'jshint');
};