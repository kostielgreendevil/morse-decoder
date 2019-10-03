const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here

    let words = expr.split('**********');

    let letter = [],
        letters = [];

    for (let i = 0; i < words.length; i++) {
        let word = [];
        for (let j = 0; j < words[i].length; j += 10) {
            word.push(words[i].slice(j, j + 10));
        }
        for (let n = 0; n < word.length; n++) {
            for (let k = 0; k < word[n].length; k += 2) {
                letters.push(word[n].slice(k, k + 2));
            }
            letters.map(item => {
                if (item == "00") {
                    item = '';
                }
                if (item == '10') {
                    item = '.';
                }
                if (item == '11') {
                    item = '-';
                }
                letter.push(item);
            })
            letters = [];
            word[n] = MORSE_TABLE[letter.join('')];
            letter = [];
        }
        words[i] = word.join('');
    }
    let word_res = words.join(' ');
    console.log(word_res);
    return word_res;
}

module.exports = {
    decode
}