const arr =[5,3,8,9,10,2,1];
let maxElement = arr[0];
let minElement = arr[0]

for(let i = 0; i<arr.length; i++){

    // for max element
    // if(arr[i] > maxElement){
    //     maxElement = arr[i]
    // }

    // for min element number
    if(arr[i] < minElement){
        minElement = arr[i];
    }
}


console.log(minElement);