/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not Found');
      return;
    }
    prevNode.next = currNode.next;
  }

  insertBefore(item, afterKey) {
    let after = this.find(afterKey);
    if (this.head === after) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== after) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, after);
    }
  }

  insertAfter(item, beforeKey) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let before = this.find(beforeKey);
      let current = before.next;
      while (tempNode.next !== before) {
        tempNode = tempNode.next;
      }
      before.next = new _Node(item, current);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.find.insertFirst(item);
    } else {
      let tempNode = this.head;
      for (let i = 0; i < position - 1; i++) {
        tempNode = tempNode.next;
      }
      this.insertBefore(item, tempNode.value);
    }
  }


}

module.exports = LinkedList;