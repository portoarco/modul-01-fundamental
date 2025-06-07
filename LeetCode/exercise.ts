// Exercise 1 - Easy
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

// Keypoint: num


*/ 

function twoSumm(nums: number[], target:number) {
    const hasil = [nums[0]];
    // console.log(hasil);
    
    for(let i = 0; i < nums.length; i++){
        // console.log(nums[i]);
        for(let j = i+1; j < nums.length; j++){
            // console.log(nums[j]);
            if(nums[i]+nums[j] === target){
                return [i,j];
            } 
        }
        
    }
};

console.log(twoSumm([2,5,5,11],10));


// Exercise 2- Easy
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/ 

function removeElement(nums: number[], val: number) {
    let writeIndex:number = 0;
    for(let i = 0; i<nums.length;i++){
        // console.log(nums[i]);
        if(nums[i] !== val){
            // console.log(nums[i])
            nums[writeIndex] = nums[i]
            writeIndex++
            
        }
    }
    return writeIndex
};

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));

// Exercise 3 
/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/ 

function isPalindrome(x: number) {
    let reversed:number = 0;
    let number:number = x;
    
    if(number < 0){
        return false
    } 

//     while(x == 0){
//         //Logical Steps:
//         // 1. Modulus dengan 10 untuk ambil digit belakang
//         let modulus = (x % 10);//123 % 10 = 3
//         let add = reversed * 10 + modulus // 0 * 10 + 3 = 3 
//         reversed = Math.floor(add/modulus)
    
//     }

//     return reversed === x;
};

// console.log(isPalindrome(123))
