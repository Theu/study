function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    //  assigned to the number of nodes in a list
    this.length = 0;
    //  point to the end of the list
    this.head = null;
}

// methods to add, search, remove node from a list

//  add

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    //if we have an empty list
    if (!currentNode) {
        this.head = node;
        this.length++;

        return node;
    }

    //if we already have a list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return node;
}

// implement search

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
}