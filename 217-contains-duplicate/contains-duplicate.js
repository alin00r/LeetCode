/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const visited = new Set(nums);
    return visited.size !== nums.length
};