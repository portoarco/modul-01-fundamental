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

    while(x > 0){
       let digit = x % 10;
       reversed  = reversed * 10 + digit;
       x = Math.floor(x/10);
    
    }

    return reversed === number;
};

console.log(isPalindrome(121))

// Exercise 4 
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/ 

function romanToInt(s:string): number {
    // membuat dictionary simbol dan value 
    const dictionary:{[key:string]:number} = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    // inisialisasi variabel penampung total
    let total = 0;
    // looping index (for loop)  
    

    for(let i = 0; i < s.length;i++){
        let current = dictionary[s[i]];
        let next = dictionary[s[i+1]];
        
        console.log(current); //output : 1 , 5 
        
        if(next && current < next){
            total = total +  next - current; // total += next-current
            i++;
            // console.log(total);
        } else {
            total = total + current; // total += current 
        }

    }

    // return variabel penampung
    return total;
};

console.log(romanToInt('XVII'));
console.log(romanToInt('MCMXCIV')); //expected output: 1994


// Exercise 5 - Remove Duplicates from Sorted Array
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/ 

function removeDuplicates(nums: number[]): number {
    let k = 1;

    if(nums.length === null){
        return 0
    }

    // akses isi array 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k; 
    
};

console.log(removeDuplicates([1,1,2]));


// Exercise 6 - PlusOne
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/ 
function plusOne(digits: number[]): number[] {
    let lastIndex = digits.length - 1

    for(let i = lastIndex; i >= 0; i--){
        if (digits[i] < 9) {
            digits[i] += 1; 
            return digits;
        } else {
            digits[i] = 0; 
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1,2,3]));

// Exercise 7 - Find the Index of the First Occurence in a String
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/ 

function strStr(haystack: string, needle: string) {
    // console.log(haystack);
    // console.log(needle);

    let findIndex = haystack.indexOf('sadbutsad')    
    return findIndex
};

console.log(strStr("sadbutsad","sad"));


// Exercise 8 
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/ 

function lengthOfLastWord(s: string): number {
    let trimWord = s.trim()
    let kata = trimWord.split(" ");
    let lastWordCount = 0;
    // let lastWord = kata.length

    for(let i = 0; i < kata.length; i++){
        // console.log(kata[i]);
        // console.log(kata[i].length);
        lastWordCount = kata[i].length
    }
    return lastWordCount
};

console.log(lengthOfLastWord("Hello World saiyaaaa "));


// Exercise 9 - Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/ 

function longestCommonPrefix(strs: string[]): string {
    let temp:string = "";
    
    for(let i = 0; i < strs.length; i++){
        // console.log(i);
        temp = strs[i]
        console.log(temp.slice(0,2));
    }

};

console.log(longestCommonPrefix(["flower","flow","flight"]));


