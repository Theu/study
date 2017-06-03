function Queue() {
    this.oldesIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
}

Queue.prototype.size = function() {
    return this.newestIndex - this.oldesIndex;
}

Queue.prototype.enqueque = function(data) {
    this.storage[this.newestIndex] = data;
    this.newestIndex++;
}

Queue.prototype.dequeue = function() {
    var oldestIndex = this.oldestIndex,
        newestIndex = this.newestIndex,
        deleteData;

    if (oldestIndex !== newestIndex) {        
        deleteData = this.storage[this.oldesIndex]
        delete this.storage[this.oldesIndex]
        this.oldesIndex++;

        return deleteData;
    }
}