UAM.InputCtrl = function (inputView, store) {
    
    inputView.on('addButtonClicked', function (element) {
        
        var index = 1;
        
        /*if(UAM.Store.data != undefined) {
            
            index = UAM.Store.this.data.length;
            console.log("INPUT CONTROL: index elementu listy jest teraz > 1");
            
        }*/
        
        var pierwszy = "";
        
        /*if (index == 1) {
            pierwszy = " ( to pierwszy element na twojej liscie :) )";
        }*/
        
        var record = {
            id: index,
            value: element+pierwszy,
            status: true,
            active: false
        };
        
        store.add(record);
        console.log("INPUT CONTROL: wpis dodany prawidlowo; event 'addButtonClicked' wychwycony");
    });
};

UAM.ListCtrl = function (listView, store) {
    store.on('addToList', function(element){
        listView.newElement(element);
        console.log("LIST CONTROLL: element wyswietlony prawidlowo; event 'addToList' wychwycony");
    });
             
    store.on('listUpdate', function(id, active){
        listView.updateList(id, active);
    });
    
    listView.on('elementClicked', function(id, data){
        store.update(id, data);
    });
};

UAM.FooterCtrl = function (footerView, store) {
    
    store.on('newFooterElement', function(element){
        footerView.add(element);
    });
    
    store.on('footerUpdate', function(element) {
        footerView.update(element);
    });
};