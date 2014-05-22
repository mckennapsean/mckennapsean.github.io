module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    harp: {
      server: {
        server: true
      },
      compile: {
        dest: 'www'
      }
    },
    replace: {
      vendor: {
        src: ['www/**/*.html', 'www/**/*.css'],
        overwrite: true,
        replacements: [
          {
            from: '/vendor/jquery/dist/jquery.min.js',
            to: '//cdn.jsdelivr.net/jquery/2.1.1/jquery.min.js'
          }, {
            from: '/vendor/skeljs/dist/skel.min.js',
            to: '//cdn.jsdelivr.net/skeljs/0.4.6/skel.min.js'
          }, {
            from: '/vendor/skeljs/dist/skel-panels.min.js',
            to: '//cdn.jsdelivr.net/skeljs/0.4.6/skel-panels.min.js'
          }, {
            from: '/vendor/skeljs/dist/skel-noscript.css',
            to: '//cdn.jsdelivr.net/skeljs/0.4.6/skel-noscript.css'
          }, {
            from: '/vendor/html5shiv/dist/html5shiv.min.js',
            to: '//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.js'
          }, {
            from: '../vendor/font-awesome-bower/fonts/fontawesome-webfont',
            to: '//cdn.jsdelivr.net/fontawesome/4.1.0/fonts/fontawesome-webfont'
          }
        ]
      }
    },
    clean: {
      vendor: {
        src: [
          'www/vendor/'
        ]
      },
      root: {
        src: [
          '../*.html',
          '../code/',
          '../css/',
          '../cv/',
          '../images/',
          '../js/',
          '../projects/'
        ],
        options: {
          force: true
        }
      },
      www: {
        src: 'www/'
      }
    },
    uglify: {
      minify: {
        files: [{
          expand: true,
          cwd: 'www/js',
          src: '**/*.js',
          dest: 'www/js'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'www/css/',
        src: ['**/*.css'],
        dest: 'www/css/',
        ext: '.css'
      }
    }
  });

  // Load all task plugins.
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Declare all Grunt task(s).
  grunt.registerTask('default', ['harp:compile']);
  grunt.registerTask('serve', 'harp:server');
};
