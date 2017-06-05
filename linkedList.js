// I create the first node

var firstNode = {
    data: 12,
    next: null
}

// attach a new node to create a list

firstNode.next = {
    data: 99,
    next: null
}

function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
    // add item to list
    add: function (data) {
        // create a new node and place data into it
        var node = {
            data: data,
            next: null
        },

        // i needd hook to traverse the structure
        current;

        // what if the list is empty?
        if (this._head === null) {
            this._head = node;
        } else {
            current = this._head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        // update the count
        this._length++;
    },

    // retrive a value
    item: function(index){
        // check for out-of-bounds values
        error = 'out-of-bounds values'
        if(index > -1 && index < this._length){
            var current = this._head,
                i = 0;
            
            while(i++ < index){
                current = current.next;
            }

            return current.data;
        } else {
            throw new Error(error);
        }
    },

    // remove a value
    remove: function(index) {

        //check for out-of-bounds value
        error = 'out-of-bounds value'
        if(index > -1 && index < this._length) {
            var current = this._head,
                previous,
                i = 0;
            // remove the first Item
            if (index === 0){
                this._head = current.next;
            } else {

                //find the rigth location
                while(i++ < index) {
                    previous = current;
                    current = current.next;
                }

                // skip over the item to remove
                previous.next = current.next;
            }

            // decrement the length
            this._length--;

            // return the value
            return current.data;
        } else {
            throw new Error(error);
        }
    }
}