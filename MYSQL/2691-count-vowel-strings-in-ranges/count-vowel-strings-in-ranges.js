var vowelStrings = function(words, queries) {
    const isVowel = (c) => "aeiou".includes(c);
    
    const n = words.length;
    const prefix = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        if (isVowel(words[i][0]) && isVowel(words[i].slice(-1))) {
            prefix[i + 1]++;
        }
        prefix[i + 1] += prefix[i];
    }
    
    return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
};