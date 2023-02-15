//  先把 链表转为数组，再判断数组是否是回文


var isPalindrome = function(head) {
    const vals = [];
    while(head !== null) {
        vals.push(head.val);
        head = head.next
    }
    for(let i = 0, j = vals.length; i<j; i++, j--){
        if(vals[i] !== vals[j]){
            return false
        }
    }
    return true
}
