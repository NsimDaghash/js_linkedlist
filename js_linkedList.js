/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/
function addTwoNumbers(l1, l2) {
    let result = new ListNode(0)    // declair a new list to store the result
    let currentNode = result        // point to the head og the list 
    let carryOver = 0               // in case there is carry 
    while (l1 != null || l2 != null) {   // check if not the end of the list
      let v1 = 0                         // variable for the value of the node
      let v2 = 0
      if (l1 != null) v1 = l1.val        // if there is a value (not pointing to null)
      if (l2 != null) v2 = l2.val
      
      let sum =  v1 + v2 + carryOver     //the sum of the two numbers + the carry
      carryOver = Math.floor(sum / 10)   // if the number > 10 the carry will be 1 else 0
      sum = sum % 10                     // return the division's remainer
      currentNode.next = new ListNode(sum)  // point to the next element in the list
  
      currentNode = currentNode.next
      if (l1 != null) l1 = l1.next
      if (l2 != null) l2 = l2.next
    }
    
    if (carryOver > 0) {               // if there is acarry 
      currentNode.next = new ListNode(carryOver)  // add it to the end of the list
    }
    
    return result.next     // return pointer to the head of the result list
  };