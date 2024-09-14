var isPalindrome = (head) => {
    if(head === null || head.next === null) return true
    // get the middle of the linkedlist
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse the secondHalf of the linkedlist .
    let prev = null;
    while(slow !== null){
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next ;
    }
    // compare the secondHalf with the firstHalf element by element.
    let firstHalf = head;
    let secondHalf = prev;
    while(secondHalf !== null){
        if(firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};
