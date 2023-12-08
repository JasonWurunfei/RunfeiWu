---
title: Leetcode 2515. Shortest Distance to Target String in a Circular Array
datetime: 2023-10-28T19:52:00.000+02:00
tags: [Leetcode, Array, String]
collection: [Leetcode]
---
# Leetcode: 2515. Shortest Distance to Target String in a Circular Array
You are given a 0-indexed circular string array words and a string target. A circular array means that the array's end connects to the array's beginning.

Formally, the next element of `words[i]` is `words[(i + 1) % n]` and the previous element of `words[i]` is`words[(i - 1 + n) % n]`, where n is the length of words.
Starting from `startIndex`, you can move to either the next word or the previous word with `1` step at a time.

Return the shortest distance needed to reach the string target. If the string target does not exist in words, return `-1`.

 

**Example 1:**

**Input:** words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
**Output: 1**
Explanation: We start from index 1 and can reach "hello" by

- moving 3 units to the right to reach index 4.
- moving 2 units to the left to reach index 4.
- moving 4 units to the right to reach index 0.
- moving 1 unit to the left to reach index 0.
The shortest distance to reach "hello" is 1.
Example 2:

**Input:** words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
**Output:** 1
**Explanation:** We start from index 0 and can reach "leetcode" by

- moving 2 units to the right to reach index 3.
- moving 1 unit to the left to reach index 3.
The shortest distance to reach "leetcode" is 1.
Example 3:

**Input:** words = ["i","eat","leetcode"], target = "ate", startIndex = 0
**Output:** -1
**Explanation:** Since "ate" does not exist in words, we return -1.

**Constraints:**

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] and target consist of only lowercase English letters.
0 <= startIndex < words.length



## Intuition
Since the distance works in two different directions, we should start from both. There is a limit to how big the distance can be which is `n // 2`.

## Approach
Using double stepping pointers to compare the current string with the target string. The definition of the next and previous index is very useful for finding next index for `i` and `j`.

## Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

## Code
```python
class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:

        def next_idx(j, n):
            return (j + 1) % n
        
        def prev_idx(i, n):
            return (i - 1 + n) % n

        n = len(words)
        i, j = startIndex, next_idx(startIndex, n)
        steps = 0
        max_steps = n // 2
        while words[i] != target and words[j] != target:
            steps += 1
            if steps > max_steps:
                break

            i = prev_idx(i, n)
            j = next_idx(j, n)

            

        if words[i] == target:
            return steps

        if words[j] == target:
            return steps + 1
        
        return -1
```