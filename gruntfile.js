/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {

          sizes: [{

            width: 500,
            suffix: '_small',
            quality: 50
          },{

            width: 800,
            suffix: '_medium',
            quality: 70
          },{

            width: 1200,
            suffix: '_large',
            quality: 80
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

     // Clear out the images directory if it exists
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    // mkdir: {
    //   dev: {
    //     options: {
    //       create: ['images']
    //     },
    //   },
    // },

cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css',
      src: ['*.css', '!*.min.css'],
      dest: 'css',
      ext: '.min.css'
    }]
  }
},


  uglify: {
    my_target: {
      files: [{
        'js/jquery-3.1.0.min.js': ['js/jquery-3.1.0.js', 'src/input2.js']
      }]
    }
},




  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['responsive_images']);

};
