/**
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
   如果有两个中间结点，则返回第二个中间结点。
   https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */

 //  用两个指针 slow 与 fast 一起遍历链表。slow 一次走一步，fast 一次走两步。那么当 fast 到达链表的末尾时，slow 必然位于中间。

 var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

    