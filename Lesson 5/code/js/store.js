UAM.Store = function () {
    
	UAM.EventEmitter.call(this);
	this.data = [];
    this.activeElements = [];
    
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    this.data.push(data);
    this.activeElements.push(false);
    
    this.emit("addToList", data);
    console.log("STORE: Emituje event 'addToList'");
    
    this.emit('newFooterElement', this.data.length);
    console.log("STORE: Emituje event 'newFooterElement'");

};

UAM.Store.prototype.update = function (id, data) {
    var active = false;
    if(!this.activeElements[id]) {
        this.activeElements[id] = true;
        active = true;
    }
    else {
        this.activeElements[id] = false;
    }
    
    this.emit('listUpdate', id, active);
    
    elements = [];
    
    for (var i=0; i < this.data.length; i++) {
        if (this.activeElements[i] == true) {
            console.log("STORE: Dodano aktywny element");
            elements.push(this.data[i]);
        }
    }
    
    this.emit('footerUpdate', elements);
     console.log("STORE: Emituje event 'footerUpdate'");

};
