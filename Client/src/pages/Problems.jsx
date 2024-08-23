import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

function Problems() {
  const problemList = [
    {
      id: 1,
      title: "Ugly Number II",
      difficulty: "Medium",
      driverCode: `
        function nthUglyNumber(n) {
          const ugly = [1];
          let i2 = 0, i3 = 0, i5 = 0;
          while (ugly.length < n) {
            const nextUgly = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
            if (nextUgly === ugly[i2] * 2) i2++;
            if (nextUgly === ugly[i3] * 3) i3++;
            if (nextUgly === ugly[i5] * 5) i5++;
            ugly.push(nextUgly);
          }
          return ugly[n - 1];
        }
      `,
      testCases: [
        { input: 10, expectedOutput: 12 },
        { input: 1, expectedOutput: 1 },
      ]
    },
    {
      id: 2,
      title: "Two Sum",
      difficulty: "Easy",
      driverCode: `
        function twoSum(nums, target) {
          const map = {};
          for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map[complement] !== undefined) {
              return [map[complement], i];
            }
            map[nums[i]] = i;
          }
          return [];
        }
      `,
      testCases: [
        { input: [[2, 7, 11, 15], 9], expectedOutput: [0, 1] },
        { input: [[3, 2, 4], 6], expectedOutput: [1, 2] },
      ]
    },
    {
      id: 3,
      title: "Add Two Numbers",
      difficulty: "Medium",
      driverCode: `
        function ListNode(val) {
          this.val = val;
          this.next = null;
        }
  
        function addTwoNumbers(l1, l2) {
          let dummy = new ListNode(0);
          let p = l1, q = l2, current = dummy;
          let carry = 0;
          while (p !== null || q !== null) {
            let x = (p !== null) ? p.val : 0;
            let y = (q !== null) ? q.val : 0;
            let sum = carry + x + y;
            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);
            current = current.next;
            if (p !== null) p = p.next;
            if (q !== null) q = q.next;
          }
          if (carry > 0) {
            current.next = new ListNode(carry);
          }
          return dummy.next;
        }
      `,
      testCases: [
        { input: [[2, 4, 3], [5, 6, 4]], expectedOutput: [7, 0, 8] },
        { input: [[0], [0]], expectedOutput: [0] },
      ]
    },
    {
      id: 4,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      driverCode: `
        function lengthOfLongestSubstring(s) {
          const set = new Set();
          let left = 0, maxLength = 0;
          for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
              set.delete(s[left]);
              left++;
            }
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
          }
          return maxLength;
        }
      `,
      testCases: [
        { input: "abcabcbb", expectedOutput: 3 },
        { input: "bbbbb", expectedOutput: 1 },
      ]
    },
    {
      id: 5,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      driverCode: `
        function findMedianSortedArrays(nums1, nums2) {
          const merge = nums1.concat(nums2).sort((a, b) => a - b);
          const mid = Math.floor(merge.length / 2);
          if (merge.length % 2 === 0) {
            return (merge[mid - 1] + merge[mid]) / 2;
          } else {
            return merge[mid];
          }
        }
      `,
      testCases: [
        { input: [[1, 3], [2]], expectedOutput: 2.0 },
        { input: [[1, 2], [3, 4]], expectedOutput: 2.5 },
      ]
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="table-container">
      <h1 className="headline-problem"><input type="search" placeholder='Search questions' /></h1>
      <table className="problem-table">
        <thead className="problem-thead">
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problemList.map((problem, index) => (
            <tr
              key={problem.id}
              style={{
                backgroundColor: index % 2 === 0 ? 'black' : 'grey',
                color: 'white',
              }}
            >
              <td className="status solved"></td>
              <td className="td-problm">
                <Link to={`/problems/${problem.id}`} style={{ color: 'inherit' }}>
                  {problem.title}
                </Link>
              </td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Problems;
