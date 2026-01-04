// function mergeTwoString(s1,s2){
//     let result = [];
//     const maxLength = Math.max(s1.length,s2.length);

//     for(let i =0; i<maxLength;i++){
//         // If the character exists at index i, add it to result
//         if(s1[i] !== undefined){  //ensure only exist characters add
//             result.push(s1[i]);
//         }
//         if(s2[i] !== undefined){
//             result.push(s2[i]);
//         }
//     }

//     return result.join('');
// }

// console.log(mergeTwoString("shubham","kahar"));


var a = "today is my interview";

// function findLongestWord(str){
//     let words = str.split(" ");
//     let longestWord = "";
//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord(a));


// function findSmallestWord(a){
//     let words = a.split(" ");
//     let smallestWord = words[0];

//     for(let word of words){
//         if(word.length < smallestWord.length){
//             smallestWord = word;
//         }
//     }
//     return smallestWord;
// }

// console.log(findSmallestWord(a));


// merged in the single array without using a in built function
// let arr = [[1,2],[3,4],[5,6],[7,8]];

// function singleArray (arr){
//     let merged = [];

//     // loop through each sub-array
//     for(let i = 0; i<arr.length;i++){
// //   loop through each element inside the sub-array
// for(let j =0; j<arr[i].length;j++){
//     merged.push(arr[i][j]);
// }
//     }
//     return merged;
// }
// console.log(singleArray(arr));



// find duplicate

let arr = [1,2,3,4,5,1,2];

function duplicate(arr){
 return arr.filter((item,index)=> arr.indexOf(item) !== index)
}
console.log(duplicate(arr))