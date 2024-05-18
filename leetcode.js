/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let carry = 0;
	let tail = new ListNode();
	let head = tail;

	while (l1 !== null || l2 !== null || carry) {
		let d1 = l1 !== null ? l1.val : 0;
		let d2 = l2 !== null ? l2.val : 0;
		const sum = d1 + d2 + carry;
		carry = Math.floor(sum / 10);

		const node = new ListNode(Math.floor(sum % 10));
		tail.next = node;
		tail = node;

		if (l1 !== null) {
			l1 = l1.next;
		}
		if (l2 !== null) {
			l2 = l2.next;
		}
	}

	return head.next;
};
