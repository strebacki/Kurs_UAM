(function (global) {
    
    var EE;
    
    if (!global.UAM) {
        global.UAM = {};
    }
    
    console.log('in ee file');

    EE = function () {
        this.listenersArray = {};
    };

    EE.prototype.on = function (eventName, listener, context) {

        var that = this,

            objListener = {
                f: listener,
                k: context
            };

        this.listenersArray[eventName] = this.listenersArray[eventName] || [];
        this.listenersArray[eventName].push(objListener);

        return function () {
            var id = that.listenersArray[eventName].indexOf(objListener);
            if (id > -1) {
                that.listenersArray[eventName].splice(id, 1);
            }
        };


    };

    EE.prototype.emit = function (eventName) {
        if (this.listenersArray[eventName]) {  
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            this.listenersArray[eventName].forEach(function (argumenty) {
                argumenty.f.apply(argumenty.k, args);
            });
      }
    };


    /*global */UAM.EventEmitter = EE;

}(window));