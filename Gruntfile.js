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
    
    clean: {
      vendor: {
        src: 'www/vendor/'
      },
      root: {
        src: [
          '../*',
          '!../_app/**',
          '!../.gitignore',
          '!../.git/**'
        ],
        options: {
          force: true
        }
      },
      www: {
        src: 'www/'
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
            from: '/vendor/jquery.tablesorter/js/jquery.tablesorter.min.js',
            to: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.18.4/js/jquery.tablesorter.min.js'
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
    },
    
    copy: {
      www: {
        files: [{
          expand: true,
          cwd: 'www',
          src: '**',
          dest: '../'
        }]
      }
    },
    
    connect: {
      server: {
        options: {
          base: '../',
          keepalive: true
        }
      }
    },
    
    watch: {
      files: '**/*.*'
    },
    
    browserSync: {
      dev: {
        bsFiles: {
          src: '**/*.*'
        },
        options: {
          proxy: '127.0.0.1:9000',
          open: true,
          watchTask: true
        }
      }
    }
  });

  // Load all task plugins.
  // grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Declare all Grunt task(s).
  // grunt.registerTask('default', ['harp:compile', 'clean:vendor', 'replace', 'uglify', 'cssmin', 'clean:root', 'copy', 'clean:www']);
  grunt.registerTask('default', ['clean:vendor', 'replace', 'uglify', 'cssmin', 'clean:root', 'copy', 'clean:www']);
  // grunt.registerTask('serve', 'harp:server');
  grunt.registerTask('sync', ['browserSync', 'watch']);
  grunt.registerTask('test', 'connect');
};
