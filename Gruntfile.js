module.exports = function (grunt) {
	var env = process.env.ENV || "dev"
	var expressTask = "express:" + env
	var path = require ("path")

	console.log ("environment: %s", process.env.ENV)

	grunt.initConfig ({
		options: {
			livereload: true,
		},
		express: {
			options: {
				port: process.env.PORT || 3000,
				node_env: env,
				spawn: false
			},
			dev: {
				options: {
					script: path.resolve (__dirname, "js", "app.js")
				}
			},
			staging: {
				options: {
					script: path.resolve (__dirname, "js", "app.js")
				}
			},
			production: {
				options: {
					script: path.resolve (__dirname, "js", "app.js")
				}
			}
		},
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: [
					"js/*.js",
					"js/db/*.js",
					"js/configs/*.js",
					"js/configs/*/*.js",
					"js/lib/*.js",
					"js/lib/*/*.js",
					"js/lib/*/*/*.js",
					"js/components/*/*.js",
					"Gruntfile.js"
				],
				tasks: [
					expressTask
				],
				options: {
					livereload: true
				}
			}
		}
	})

	grunt.loadNpmTasks ("grunt-express-server")
	grunt.loadNpmTasks ("grunt-contrib-watch")
	grunt.registerTask ("default", [expressTask, "watch"])
}
