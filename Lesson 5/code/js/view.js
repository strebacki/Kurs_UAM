UAM.InputView = function (InputView) {
    
    UAM.EventEmitter.call(this);
    var InputViewThis = this;

    
    this.button = document.querySelector('#addButton');
    this.input = document.querySelector('#newEntry');
    
    this.button.addEventListener('click', function () {
        
        if (InputViewThis.input.value) {
            InputViewThis.emit('addButtonClicked', InputViewThis.input.value);
            console.log("INPUT VIEW: Przycisk 'addButton' zostal klikniety; wykonano akcje 'addButtonClicked'");
        }
        
    });
    
};


UAM.ListView = function (ListView) {
    
    UAM.EventEmitter.call(this);
    var ListViewThis = this;
    
    var list = document.querySelector('#listview');
    
    this.newElement = function (element) {
        
        var newListElement = document.createElement('li');
        newListElement.innerHTML = element.value;
        newListElement.addEventListener('click', function(){
            var nodeOperation = Array.prototype.slice.call(document.getElementById("listview").children);
            var id = nodeOperation.indexOf(newListElement);
            ListViewThis.emit('elementClicked', id, element.value);
            console.log("LIST VIEW: Element na liscie zostal klikniety; wykonano operacje 'elementClicked'");
            
        });
        
        list.appendChild(newListElement);
        
        this.updateList = function(id, active) {
            
            if (active == true) {
                list.children[id].classList.add("active");
            }
            else {
                list.children[id].classList.remove("active");
            }
            
        };
    };  
};

UAM.FooterView = function (footerView) {
    
    UAM.EventEmitter.call(this);
    var FooterViewThis = this;
    
    var all = footerView.querySelector('#allElements');
    var active = footerView.querySelector('#activeElements');
    
    this.add = function(element) {
        all.innerHTML = element;
    };
    
    this.update = function(activeElements) {
        active.innerHTML = activeElements.length;
    };
    
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);
UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);