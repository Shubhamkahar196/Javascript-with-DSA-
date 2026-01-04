function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item)=== index);
}

const arr = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(arr);
console.log(result);