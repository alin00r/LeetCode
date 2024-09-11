var isPalindrome = function(head) {
    let  str1 = str2 = "";
    let temp = head;
    while(temp){
        str1=`${temp.val}${str1}`
        str2=`${str2}${temp.val}`
        temp= temp.next;
    }
    return str1===str2;
}
