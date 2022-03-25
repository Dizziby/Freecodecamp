// 1---Sum All Numbers in a Range

function sumAll(arr) {
    let sum = 0;
    if(arr[0] < arr[1]) {
        for(let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    } else if (arr[0] > arr[1]) {
        for(let i = arr[1]; i <= arr[0]; i++) {
            sum += i;
        }
    } else {
        sum = arr[0];
    }
    return sum;
}

sumAll([1, 4]);


// 2---Diff Two Arrays

function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach(el => {
        if(arr2.indexOf(el) === -1) {
            newArr.push(el);
        }});
    arr2.forEach(el => {
        if(arr1.indexOf(el) === -1) {
            newArr.push(el);
        }});
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// 3---Seek and Destroy

function destroyer(arr, ...args) {
    for(let i = 0; i < args.length; i++) {
        arr = arr.filter(el => {
            if(el === args[i]) {
                return false;
            } else {
                return true;
            }
        });
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// 4---Wherefore art thou



// 5---Spinal Tap Case



// 6---Pig Latin

function translatePigLatin(str) {
    if(/^[aeuo]/.test(str)) {
        return str + "way";
    } else {
        let consonant = str.match(/^[^aeuo]+/gi).join("");
        console.log(consonant);
        return str.slice(consonant.length) + consonant + "ay";
    }
}

translatePigLatin("consonant");


// 7---Search and Replace

function myReplace(str, before, after) {
    let newStr;
    let newafter;
    if(before[0] !== before[0].toUpperCase() && after[0] === after[0].toUpperCase()) {
        newafter = after[0].toLowerCase() + after.slice(1);
    } else if (before[0] === before[0].toUpperCase() && after[0] !== after[0].toUpperCase()) {
        newafter = after[0].toUpperCase() + after.slice(1);
    } else {
        newafter = after;
    }
    newStr = str.replace(before, newafter);
    return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// 8---DNA Pairing

function pairElement(str) {
    const arr = [];
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "G":
                arr.push(["G", "C"]);
                break;
            case "C":
                arr.push(["C", "G"]);
                break;
            case "T":
                arr.push(["T", "A"]);
                break;
            case "A":
                arr.push(["A", "T"]);
                break;
        }
    }
    return arr;
}

pairElement("GCG");


// 9---Missing letters

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = str[0];
    for(let i = 0; i < str.length; i++) {
        let regExp = new RegExp(newStr)
        console.log(regExp)
        if(regExp.test(alphabet)) {
            newStr += str[i+1]
        } else {
            console.log(str[i])
            return alphabet[alphabet.indexOf(str[i]) - 1]
        }
    }
}

fearNotLetter("abce");


// 10---Sorted Union

function uniteUnique(...arr) {
    const resArr = [];
    arr.reduce((acc, el) => acc.concat(el), []).forEach(el => {
        if(resArr.indexOf(el) === -1) {
            return resArr.push(el);
        }
    })
    return resArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// 11---Convert HTML Entities

function convertHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/, "&apos;");
}

convertHTML("Dolce & Gabbana");


// 12---Sum All Odd Fibonacci Numbers



// 13---Sum All Primes



// 14---Smallest Common Multiple



// 15---Drop it

function dropElements(arr, func) {
    if(arr.find(func) === undefined) {
        return []
    }
    let num = arr.find(func)
    let index = arr.indexOf(num);
    return arr.slice(index);
}

dropElements([1, 2, 3], function(n) {return n < 3; });


// 16---Steamroller



// 17---Binary Agents



// 18---Everything Be True



// 19---Arguments Optional



// 20---Make a Person

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return firstAndLast;
    };
    this.getFirstName = function() {
        return firstAndLast.split(" ")[0];
    };
    this.getLastName = function() {
        return firstAndLast.split(" ")[1];
    };

    this.setFullName = function(fullName) {
        firstAndLast = fullName;
    };
    this.setFirstName = function(first) {
        firstAndLast = first + " " + firstAndLast.split(" ")[1];
        console.log(firstAndLast)
    };
    this.setLastName = function(last) {
        firstAndLast = firstAndLast.split(" ")[0]  + " " + last;
    };
};

const bob = new Person('Bob Ross');


// 21---Map the Debris