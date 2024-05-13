/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  const mapNumToIdx = {}
  for (let i =0;i<nums.length;i++) {
      mapNumToIdx[nums[i]] = i;
  }

  for (let i =0; i<nums.length - 1; i++) {
      let foundedIdx = mapNumToIdx[target - nums[i]]
      if(foundedIdx && foundedIdx !== i)  {
        return [i, foundedIdx]
      }
  }
  return [];
};
