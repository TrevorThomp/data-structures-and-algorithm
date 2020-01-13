'use strict';

/**
 * @class
 */
class Node {
  constructor(value ,next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Inserts value into list
   * @param {number} value 
   */
  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Tests to see if value is in list
   * @param {number} value 
   */
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  /**
   * Returns value in list as Head -> 2 -> 1 -> NULL
   */
  toString() {
    let current = this.head;
    let string = 'Head';
    while (current !== null) {
      string = `${string} -> ${current.value}`;
      current = current.next;
    }
    return `${string} -> NULL`;
  }

  append(value) {
    let newNode = new Node(value);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = null;
  }

  insertBefore(val, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while (current.next.value !== val) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  insertAfter(val, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while (current.value !== val) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
}

module.exports = LinkedList;