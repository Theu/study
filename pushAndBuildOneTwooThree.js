// pushAndBuildOneTwooThree

// http://www.codewars.com/kata/linked-lists-push-and-buildonetwothree/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Go.
    var newNode = new Node(data); // i create a new node using Node()
    newNode.next = head; // I make the next node as actual head means that if I add something something comes last
    return newNode; 
}

function buildOneTwoThree() {
    var head = null;
    head = push(head, 3);
    head = push(head, 2);
    head = push(head, 1);
    return head;
}