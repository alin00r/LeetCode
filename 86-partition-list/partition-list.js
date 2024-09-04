/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = head;
    while(current != null){
        if(current.val < x){
            dummy1.next = current;
            dummy1= dummy1.next
        }else{
            dummy2.next = current;
            dummy2 = dummy2.next
        }
        current = current.next;
        
    }
    dummy2.next = null;
    dummy1.next = prev2.next;
    return prev1.next
    
    
};