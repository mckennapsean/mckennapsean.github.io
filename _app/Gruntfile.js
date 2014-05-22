module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    harp: {
      server: {
        server: true
      },
      dist: {
        dest: 'www'
      }
    },
    replace: {
      dist: {
        src: ['www/**/*.html'],
        overwrite: true,
        replacements: [
          {
            from: '',
            to: ''
          }
        ]
      }
    }
    // uglify: {
    //   build: {
    //     src: 'src/*.js',
    //     dest: 'build/*.min.js'
    //   }
    // }
  });

  // Load all task plugins.
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-text-replace');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Declare all Grunt task(s).
  grunt.registerTask('default', ['harp:dist']);
  grunt.registerTask('serve', 'harp:server');
  //grunt.registerTask('default', ['uglify']);
};
