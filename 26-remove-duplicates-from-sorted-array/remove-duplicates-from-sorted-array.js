/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [left,right] = [0,0]
    
    while(right < nums.length){
        const [leftValue,rightValue] = [nums[left],nums[right]];
        const isEqual = rightValue === leftValue
        if(!isEqual){
            left++;
            nums[left]= rightValue
        }
        right++;
    }
    return (left + 1)
};