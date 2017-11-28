// module.exports = function(grunt) {
// const mozjpeg = require ('imagemin-mozjpeg');

//   grunt.initConfig({
//     responsive_images: {
//       dev: {
//         options: {
//           engine: 'im',
//           sizes: [{
//             width: 100,
//             suffix: '_small_1x',
//             quality: 20
//           },
//           {
//             width: 200,
//             suffix: '_medium_1x',
//             quality: 25
//           },
//           {
//             width: 1000,
//             suffix: '_large_1x',
//             quality: 30
//           }]
//         },

//         /*
//         You don't need to change this part if you don't change
//         the directory structure.
//         */
//         files: [{
//           expand: true,
//           src: ['*.{gif,jpg,png}'],
//           cwd: 'views/images/',
//           dest: 'images_src/'
//         }]
//       }
//     },

//     /* Clear out the images directory if it exists */
//     clean: {
//       dev: {
//         src: ['images'],
//       },
//     },

//     /* Generate the images directory if it is missing */
//     mkdir: {
//       dev: {
//         options: {
//           create: ['images']
//         },
//       },
//     },

//     /* Copy the "fixed" images that don't go through processing into the images/directory */
//     copy: {
//       dev: {
//         files: [{
//           expand: true,
//           src: 'images_src/*.{gif,jpg,png}',
//           dest: 'images/'
//         }]
//       },
//     },

// imagemin: {
//   dynamic: {
//       files: [{
//           expand: true,
//           cwd: 'images_src/',
//           src: ['**/*.{png,jpg,gif}'],
//           dest: 'dist/'
//       }]
//   }
//     }
//   });




//   grunt.loadNpmTasks('grunt-responsive-images');
//   grunt.loadNpmTasks('grunt-contrib-clean');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-mkdir');
//   grunt.loadNpmTasks('grunt-contrib-imagemin');
//   grunt.registerTask('default',[
//     'clean',
//     'mkdir',
//     'copy',
//     'responsive_images',
//     'imagemin'
//     ]);

// };



// 'use strict'

// var ngrok = require('ngrok');

// module.exports = function(grunt) {

//   // Load grunt tasks
//   require('load-grunt-tasks')(grunt);

//   // Grunt configuration
//   grunt.initConfig({
//     pagespeed: {
//       options: {
//         nokey: true,
//         locale: "en_G  B",
//         threshold: 40
//       },
//       local: {
//         options: {
//           strategy: "desktop"
//         }
//       },
//       mobile: {
//         options: {
//           strategy: "mobile"
//         }
//       }
//     }
//   });

//   // Register customer task for ngrok
//   grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
//     var done = this.async();
//     var port = 8080;

//     ngrok.connect(port, function(err, url) {
//       if (err !== null) {
//         grunt.fail.fatal(err);
//         return done();
//       }
//       grunt.config.set('pagespeed.options.url', url);
//       grunt.task.run('pagespeed');
//       done();
//     });
//   });

//   // Register default tasks
//   grunt.registerTask('default', ['psi-ngrok']);
// };

'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    pagespeed: {
      options: {
        nokey: true,
        locale: "en_US",
        threshold: 40
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  // Register default tasks
  grunt.registerTask('default', ['psi-ngrok']);
};
