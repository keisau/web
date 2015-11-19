function __common () {
	Object.defineProperty (global, '__stack', {
		get: function () {
			var orig = Error.prepareStackTrace
			Error.prepareStackTrace = function(_, stack) {
				return stack
			}
			var err = new Error
			Error.captureStackTrace (err, arguments.callee)
			var stack = err.stack
			Error.prepareStackTrace = orig
			return stack
		}
	})

	Object.defineProperty (global, '__line', {
		get: function () {
			return __stack[1].getLineNumber ()
		}
	})

	Object.defineProperty (global, '__func', {
		get: function () {
			return __stack[1].getFunctionName ()
		}
	})

	Object.defineProperty (global, '__file', {
		get: function () {
			return __stack[1].getFileName ()
		}
	})

	Object.defineProperty (global, '__funcline', {
		get: function () {
			return "[" + __stack[1].getFunctionName () + ":" + __stack[1].getLineNumber () + "]"
		}
	})
}

/* make use of module cache to make sure the above codes are run once only */
module.exports = new __common ()
