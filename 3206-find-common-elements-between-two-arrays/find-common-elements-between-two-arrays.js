/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(arr1, arr2) {
  const myMap1 = new Set(arr1);
  const myMap2 = new Set(arr2);
  let count1 = 0;
  for (const i of arr1) {
    if (myMap2.has(i)) count1++;
  }
  let count2 = 0;
  for (const j of arr2) {
    if (myMap1.has(j)) count2++;
  }
  return [count1, count2];
}
