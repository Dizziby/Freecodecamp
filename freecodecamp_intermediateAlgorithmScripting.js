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



// 10---Sorted Union



// 11---Convert HTML Entities



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



// 21---Map the Debris