<template>
  <div>单链表:LList:</div>
  <pre>{{ LList }}</pre>
</template>
<script setup>
/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = new Node('head');
  }
  // query
  display() {
    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
  findByValue(val) {
    let currentElement = this.head;
    while (currentElement.next !== null && currentElement.element !== val) {
      currentElement = currentElement.next;
    }
    return currentElement === null ? -1 : currentElement;
  }
  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // findPrev
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // create
  append(element) {
    let currentElement = this.head;
    const newNode = new Node(element);
    while (currentElement.next) {
      currentElement = currentElement.next;
    }
    currentElement.next = newNode;
  }
  insert(newValue, value) {
    const currentNode = this.findByValue(value);
    if (currentNode === null) {
      console.log('未找到该值');
      return -1;
    }
    const newNode = new Node(newValue);
    // insert
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // delete
  remove(item) {
    const preNode = this.findPrev(item);
    if (preNode === -1) {
      console.log('未找到该值');
      return -1;
    }
    preNode.next = preNode.next.next;
  }
}
// Test
const LList = new LinkList();
LList.append('chen');
LList.append('curry');
LList.append('sang');
LList.append('zhao'); // chen -> curry -> sang -> zhao
console.log(LList.findByValue('sang'));
console.log(LList.findByIndex(3));
console.log(LList.findPrev('sang'));
LList.insert('wang', 'sang');
LList.remove('sang');
LList.display();
</script>
