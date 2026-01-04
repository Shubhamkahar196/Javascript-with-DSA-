function secondLargest(arr){
   if(arr.length < 2) return null;

   let maxFirst = arr[0];
   let maxSecond = -Infinity;

    for(let i =0; i<arr.length;i++){
        if(arr[i] > maxFirst){
            maxSecond = maxFirst
            maxFirst = arr[i]
            
        }else if(arr[i] > maxSecond && arr[i] < maxFirst) {
            maxSecond = arr[i];
        }
      
    }
    return maxSecond === -Infinity ? maxFirst : maxSecond;
}