var isPalindrome = function(head) {
    const arr = [];
    while(head && head.val !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.every((e, i) => e === arr[arr.length - i - 1]);
};