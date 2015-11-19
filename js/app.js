var express = require ("express")
var http = require ("http")
var bodyParser = require ("body-parser")
var connectTimeout = require ("connect-timeout")

var path = require ("path")
var fs = require ("fs")

var log = require (path.resolve (__dirname, "./lib/log"))

var app = express ()

var timeout = connectTimeout (10000)

app.set ("port", process.env.PORT || 80)

app.use (timeout)

app.use (bodyParser.json ())
app.use (bodyParser.urlencoded ({ extended: true }))

/**
 * compress everything before routes
 */
app.use (require ("compression") ())

/**
 * Routes
 */
var oneDay = 86400000

app.use (express.static (path.resolve (__dirname, "../build"), { maxAge: oneDay }))

app.get ("*[/\*]*", function (req, res, next) {
	//log.info ("path [others]: %s", req.path)
	fs.readFile (path.resolve (__dirname, "../build/index.html"), function (err, data) {
		if (err) {
			res.status (404).send ("Not found")
		} else {
			res.set ("Content-Type", "text/html")
			res.status (200).send (data)
		}
	})
})

/**
 * default: 404
 */
app.use (function (req, res, next) {
	res.status (404)
	next ()
})

/**
 * Start of server
 */
var server = http.createServer (app).listen (app.get ("port"), function () {
	log.info ("[https] server started listening to port %d", app.get ("port"))
})
