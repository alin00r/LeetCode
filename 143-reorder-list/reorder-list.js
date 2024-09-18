/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // find the middle of the linkedlist
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the second half of the linked list
    let secondHalf = slow.next;
    let prev = null;
    while(secondHalf){
        const temp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = temp       
    }
        slow.next = null;
        let first = head;
        secondHalf = prev;
        while (secondHalf !== null) {
            const tmp1 = first.next;
            const tmp2 = secondHalf.next;
            first.next = secondHalf;
            secondHalf.next = tmp1;
            first = tmp1;
            secondHalf = tmp2;
        }
    
    
};