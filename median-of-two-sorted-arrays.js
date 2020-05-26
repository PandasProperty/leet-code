/** 
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(v1, v2) {
    const length1 = v1.length;
    const length2 = v2.length;

    const length = length1 + length2;
    const middle = parseInt(length/2);

    const medianIndex = middle === length/2 ? middle - 1 : middle;

    let median = 0;
    let i = 0;
    let contor1 = 0;
    let contor2 = 0;
    const even = length/2 === middle;

    while (i < length) {
        let value = null;
        if (contor1 < length1){
            value = v1[contor1];
        }
        if (contor2 < length2) {
            if (value === null || value > v2[contor2]) {
                value = v2[contor2];
                contor2 ++;
            } else {
                contor1 ++;
            }
        } else {
            contor1 ++;
        }
        if (i === medianIndex) {
            median += value;
            if (!even) {
                break;
            }
        }
        if (i === medianIndex + 1) {
            median += value;
            break;
        }
        i++;
    }
    return (even ? median/2 : median);
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 2, 3], [3, 4])); // 3
console.log(findMedianSortedArrays([5, 9, 13, 15], [2, 6, 8, 10, 16])); // 2 5 6 8 9 10 13 15 16 -> 9
console.log(findMedianSortedArrays([5, 9, 11, 13, 15], [2, 6, 8, 10, 16])); // 2 5 6 8 9 10 11 13 15 16 -> 9.5