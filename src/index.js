const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
}

module.exports = {
    decode
}
// здесь тестовый код
function decode(expr) {
    lenexpr = expr.length
    masmorze = []
    for(i=0;i<lenexpr-10; i+=10) {
        masmorze.push(expr.slice(i,i+10))
    }
    for(i=0; i<masmorze.length; i++) {
        masmorze[i] = masmorze[i].slice(masmorze[i].indexOf('1'))
        s = ''
        for(j=0;j<masmorze[i].length; j+=2) {
            if(masmorze[i].slice(j,j+2)=='11') s += '-'
            else s += '.'
        }
        masmorze[i] = MORSE_TABLE[s]
    }

    return masmorze
    // write your solution here
}

console.log(decode('0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010'))