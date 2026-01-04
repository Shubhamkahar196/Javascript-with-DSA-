function mergeTwoString(s1,s2){
    let result = [];
    const maxLength = Math.max(s1.length,s2.length);

    for(let i =0; i<maxLength;i++){
        // If the character exists at index i, add it to result
        if(s1[i] !== undefined){  //ensure only exist characters add
            result.push(s1[i]);
        }
        if(s2[i] !== undefined){
            result.push(s2[i]);
        }
    }

    return result.join('');
}

console.log(mergeTwoString("shubham","kahar"));