const reverseList = (head) => {
    let prev = null;
    let temp = head;
    let next;
    while(temp){
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next
    }
    return prev
}