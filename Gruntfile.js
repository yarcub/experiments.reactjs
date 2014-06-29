'use strict'

module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
        app: 'public'
    },

    wiredep: {
      target: {
        src: [
          './public/index.html'
        ]
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/**/*.js',
          '<%= config.app %>/**/*.html',
          '<%= config.app %>/**/*.css'],
      }
    },

    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
        },
        server: {
            options: {
                base: ['<%= config.app%>'],
            }
        },
    },
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['wiredep','connect:server','watch']);
}
