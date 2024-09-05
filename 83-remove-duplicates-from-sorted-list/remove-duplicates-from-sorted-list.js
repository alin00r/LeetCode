/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp = head;
    if(head === null) return head
    while(temp.next){
        let next = temp.next
        if(temp.val === next.val ){
            temp.next = next.next
        }else{
            temp = temp.next;
        }
    }
    return head
};