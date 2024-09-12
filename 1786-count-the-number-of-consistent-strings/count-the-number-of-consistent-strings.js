/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = words.length;
    const allowedSet = new Set(allowed);
    for(const word of words ){
        for(const char of word){
            if(!allowedSet.has(char)){
                count--;
                break;
            }
        }
    }
    return count;
    

    
};