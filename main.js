function isAlphabeticalLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function countDifferent(s) {
    return (new Set(s)).size;
}

function transform(word) {
    let result = word;
    if (word.length > 2) {
        const firstLetter = word[0];
        const lastLetter = word[word.length-1];
        const middle = word.substring(1, word.length-1);
        result = `${firstLetter}${countDifferent(middle)}${lastLetter}`;
    }
    return result;
}

function parse(sentence) {
    const words = sentence.split(' ');
    const moreWords = [];
    words.forEach((word) => {
        let currentWord = '';
        for (let i = 0; i < word.length; i += 1) {
            if (isAlphabeticalLetter(word[i])) {
                currentWord += word[i]
            } else {
                if (currentWord) {
                    moreWords.push(currentWord);
                    currentWord = '';
                }
            }
        }
        if (currentWord) {
            moreWords.push(currentWord);
            currentWord = '';
        }
    });
    return moreWords.map((word) => transform(word));
}

console.log(parse('Smáoth Crimßinal is c*_olmλçantis'));    // ['Sm',  'o1h', 'C2m', 'i2l', 'is',  'c', 'o1m', 'a3s']
console.log(parse('Smooth Criminal is cool'));  // [ 'S3h', 'C5l', 'is', 'c1l' ]