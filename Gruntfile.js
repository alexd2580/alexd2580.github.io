module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*'],
                tasks: ['default'],
                options: {
                    spawn: false,
                },
            },
        },
        less: {
            development: {
                files: {
                    "style.css": "*.less"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask("default", ["less"]);
};
