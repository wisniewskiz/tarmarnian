

const vowels = ['a', 'e', 'i', 'o', 'u'];
const tarmarnian = 'ar';

let yarba = ['yes', 'yeah', 'yas', 'ya'];
let yarbaIndex = [];



console.log(`Let's translate something in to tarmarnian for you! Write a phrase and press enter when you are ready`);

let phrase = prompt();
let phraseArray = phrase.split(' ');
let translatedPhrase = [];
let translateFinal = [];

for (let i = 0; i < phraseArray.length; i++) {
    for (let j = 0; j < yarba.length; j++) {
        if (phraseArray[i] == yarba[j]) {
            yarbaIndex.push(i);
            phraseArray.splice(i, 1);
        };
    };
};

for (i = 0; i < phraseArray.length; i++) {
    translatedPhrase.push(phraseArray[i].split(''));
};


for (i = 0; i < translatedPhrase.length; i++) {
    for (j = 0; j < translatedPhrase[i].length; j++) {
        if (translatedPhrase[i][translatedPhrase[i].length - 1] == 'e') {
            translatedPhrase[i][translatedPhrase[i].length - 1] = '-';
        }
        if (translatedPhrase[i][j] == 'u' && translatedPhrase[i][j + 1] == 'a') {
            translatedPhrase[i][j] = '-';
        }
        for (k = 0; k < vowels.length; k++) {
            if (translatedPhrase[i][j] == vowels[k]) {
                translatedPhrase[i][j] = tarmarnian;
            }
        }
        if (translatedPhrase[i][translatedPhrase[i].length - 1] == '-') {
            translatedPhrase[i][translatedPhrase[i].length - 1] = 'e';
        }
        if (translatedPhrase[i][j] == '-' && translatedPhrase[i][j + 1] == 'a') {
            translatedPhrase[i][j] = 'u';
        }
    }
   
};

for (i = 0; i < translatedPhrase.length; i++) {
    for (j = 0; j < translatedPhrase[i].length; j++) {
        if(translatedPhrase[i][j] == tarmarnian && translatedPhrase[i][j + 1] == tarmarnian) {
            translatedPhrase[i].splice(j, 1);
        };
        
    };
    const lastLetter = translatedPhrase[i][translatedPhrase[i].length - 1];
    const secLastLetter = translatedPhrase[i][translatedPhrase[i].length - 2];
    if (lastLetter == 'y' && secLastLetter == tarmarnian) {
        translatedPhrase[i].pop();
    };
    if (lastLetter == 'w' && secLastLetter == tarmarnian) {
        translatedPhrase[i].pop();
    };
    if (lastLetter == 'r' && secLastLetter == tarmarnian) {
        translatedPhrase[i].pop();
    };
    if (lastLetter == tarmarnian && secLastLetter == tarmarnian) {
        translatedPhrase[i].pop();
    };
    translateFinal.push(translatedPhrase[i].join(''));
}

for (i = 0; i < yarbaIndex.length; i++) {
    translateFinal.splice(yarbaIndex[i], 0, 'yarba');
};
for (i = 0; i < translateFinal.length; i++) {
    if (translateFinal[i] == 'the') {
        translateFinal[i] = 'thar';
    };
    if (translateFinal[i] == 'my') {
        translateFinal[i] = 'mar';
    };
};
translateFinal = translateFinal.join(' ');
console.log(translateFinal);






