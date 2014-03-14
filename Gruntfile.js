module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg:        grunt.file.readJSON('package.json'),
        nodewebkit: {
            version:   "0.9.2",
            build_dir: "./build",
            win:       false,
            mac:       false,
            linux32:   false,
            linux64:   true
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('build', ['grunt-node-webkit-builder']);
};