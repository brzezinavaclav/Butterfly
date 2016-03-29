module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: {
                    'css/style.min.css': ['css/bootstrap.css', 'css/font-awesome.css', 'css/responsiveslides.css', 'css/lightbox.css', 'css/main.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/js.min.js': ['js/jquery.min.js','js/bootstrap.js','js/lightbox.js', 'js/responsiveslides.js','js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'uglify']);

};