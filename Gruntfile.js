module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg:        grunt.file.readJSON('package.json'),
        nodewebkit: {
            options: {
                version:   '0.9.2',
                build_dir: './build',
                mac:       false,
                win:       false,
                linux32:   false,
                linux64:   true
//                credits: './credits.html', // mac only, used to display credits
//                mac_icns: './app.icns'
            },
            src:     ['./app.nw/**/*'] // Your node-wekit app source directory
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    // Default task(s).
    grunt.registerTask('default', ['nodewebkit']);

};