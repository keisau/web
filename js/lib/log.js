require ("./common")

var errorType = {
	err: 1,
	info: 2,
	warn: 3,
}

function _log () {
	this.debug = !process.env.NDEBUG || process.env.NDEBUG === "0"
	this.path = require ("path")
}

_log.prototype._print = function () {
	if (this.debug === true) {
		var args = []
		var str = arguments[0] + arguments[1]

		args[0] = str

		for (var i = 2; i < arguments.length; ++i) {
			args[i - 1] = arguments[i]
		}

		console.log.apply (this, args)
	}
}

_log.prototype._print_color = function (type, _args) {
	var time = new Date ()
	var args = ["[" + time.getHours() + ":"
		+ time.getMinutes() + ":"
		+ time.getSeconds() + ":"
		+ time.getMilliseconds()
		+ "]"
		+ "[" + this.path.basename (__stack[2].getFileName ()) + "]"
		+ "[" + __stack[2].getFunctionName () + ":" + __stack[2].getLineNumber () + "]"
		+ "[\033[3" + errorType[type] + "m" + type + "\033[0m] "].concat (Array.prototype.slice.call (_args, 0))

	this._print.apply (this, args)
}

_log.prototype.info = function () {
	this._print_color.apply (this, ["info"].concat (arguments))
}

_log.prototype.warn = function () {
	this._print_color.apply (this, ["warn"].concat (arguments))
}

_log.prototype.err = function () {
	this._print_color.apply (this, ["err"].concat (arguments))
}

module.exports = new _log ()
