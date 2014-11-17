(function (global) {

if(!global.UAM) {
	global.UAM = {};
}

var EventEmitter;

EventEmitter = function() {
};

	EventEmitter.prototype.on = function(eventName, listener, context) {
		
		var that = this;
		
		var objListener = {
			f: listener,
			k: context
		};
		
		this.listenersArray = this.listenersArray || {};
		this.listenersArray[eventName] = this.listenersArray[eventName] || [];
		this.listenersArray[eventName].push(objListener);
		
		return function() {
			var id = that.listenersArray[eventName].indexOf(objListener);
			if ( id > -1) {
				that.listenersArray[eventName].splice(id, 1);
			}
		}
		
		
	};

	EventEmitter.prototype.emit = function (eventName) {
	
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		this.listenersArray[eventName].forEach(function (argumenty) {
			argumenty.f.apply(argumenty.k, args);
	});
	
	
	global.UAM.EventEmitter = EventEmitter;
	
}(window));