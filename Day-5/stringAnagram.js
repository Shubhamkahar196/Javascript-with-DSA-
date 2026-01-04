function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for(let char of str1){
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for(let char of str2){
        freq2[char] = (freq2[char] || 0) +1;
    }

    // compare frequency maps
    for(let key in freq1){
        if(freq1[key] !==freq2[key]){
            return false;
        }
    }
    return true;
}
console.log(isAnagram("rat", "car")); 