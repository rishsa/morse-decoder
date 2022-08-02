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
    lenexpr = expr.length
    masmorze = []
    for(i=0;i<lenexpr; i+=10) {
        masmorze.push(expr.slice(i,i+10))
    }
    console.log(masmorze)
    for(i=0; i<masmorze.length; i++) {
        if (masmorze[i]=='**********') {
            masmorze[i]=' ';
            continue
        }
        masmorze[i] = masmorze[i].slice(masmorze[i].indexOf('1'))
        s = ''
        console.log(masmorze[i])
        for(j=0;j<masmorze[i].length; j+=2) {
            if(masmorze[i].slice(j,j+2)=='11') s += '-'
            else s += '.'
        }
        console.log(s)
        masmorze[i] = MORSE_TABLE[s]
    }

    return masmorze.join('')
    // write your solution here
}

module.exports = {
    decode
}
