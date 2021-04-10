const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.nodeList = {};
    this.last = null;
  }

  enqueue(element) {
    if (this.last) {
      const node = new ListNode(element);
      this.last.next = node;
      this.last = node;
    } else {
      this.nodeList = new ListNode(element);
      this.last = this.nodeList;
    }
  }

  dequeue() {
    const { value } = this.nodeList;
    this.nodeList = this.nodeList.next;
    return value;
  }
}

module.exports = Queue;
