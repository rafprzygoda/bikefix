module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'style.css': 'style.sass'
        }
      }
    }

    imagemin: {
    	dynamic: {
        	files: [{
            	expand: true,
            	cwd: '',
            	src: ['**/*.{png,jpg,gif}'],
            	dest: ''
        	}]
    	}
	}

	watch: {
    scripts: {
        files: ['.html'],
        tasks: ['.html'],
        options: {
            spawn: false,
        },
    } 
}
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ["sass", 'imagemin', 'watch']);
};