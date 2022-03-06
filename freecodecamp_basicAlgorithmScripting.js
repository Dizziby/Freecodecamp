// 1---Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

convertToF(30);


// 2---Reverse a String

function reverseString(str) {
    const arr = str.split("");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr.join("");
}

reverseString("hello");


// 3---Factorialize a Number

function factorialize(num) {
    let result = 1;
    if (num === 0) {
        return result;
    } else {
        result = num * factorialize(num - 1);
        return result;
    }

}

factorialize(5);


// 4---Find the Longest Word in a String

function findLongestWordLength(str) {
    const arr = str.split(" ");
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
        }
    }
    return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// 5---Return Largest Numbers in Arrays

function largestOfFour(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {

        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }

        arr[i].sort(compareNumeric);
        newArr.push(arr[i][(arr[i].length - 1)]);

    }
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// 6---Confirm the Ending

function confirmEnding(str, target) {
    let regExp = new RegExp(target + "$");
    let result = regExp.test(str);

    return result;
}

confirmEnding("Bastian", "n");


// 7---Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    let newStr = "";
    while (num > 0) {
        newStr += str;
        num--;
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);


// 8---Truncate a String

function truncateString(str, num) {
    let newStr = "";
    if (str.length > num) {
        newStr = str.slice(0, num) + "...";
    } else {
        newStr = str;
    }
    return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// 9---Finders Keepers

function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++) {
        num = arr[i];
        if(func(num)) {
            return num;
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// 10---Boo who

function booWho(bool) {
    if(typeof(bool) === 'boolean') {
        return true;
    } else {
        return false;
    }

}

booWho(null);


// 11---Title Case a Sentence

function titleCase(str) {
    const arr = str.split(" ");
    const newArr = arr.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
    return newArr.join(" ");
}

titleCase("I'm a little tea pot");


// 12---Slice and Splice

function frankenSplice(arr1, arr2, n) {
    const arr2Part1 = arr2.slice(0, n);
    const arr2Part2 = arr2.slice(n, arr2.length);

    return arr2 = [...arr2Part1,...arr1,...arr2Part2];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


// 13---Falsy Bouncer

function bouncer(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

bouncer([7, "ate", "", false, 9]);


// 14---Where do I Belong

function getIndexToIns(arr, num) {
    if(arr.length === 0) {
        return 0;
    }

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    const newArr = arr.sort(compareNumeric);

    for(let i = 0; i < newArr.length; i++) {
        if(newArr[newArr.length - 1] < num) {
            return newArr.length;
        } else  if(newArr[i] < num && newArr[i+1] > num) {
            return i+1;
        }  else if (newArr[i] === num) {
            return i;
        }
    }
}

getIndexToIns([40, 60], 50);

// 15---Mutations

function mutation(arr) {
    let counter = 0;
    for(let i = 0; i < arr[1].length; i++) {
        let regExp = new RegExp(arr[1][i], "gi");
        if (regExp.test(arr[0])) {
            counter++;
        }
    }
    if(counter === arr[1].length) {
        return true;
    } else {
        return false;
    }
}

mutation(["hello", "hey"]);


// 16---Chunky Monkey

function chunkArrayInGroups(arr, size) {
    const newArr = [];
    for(let i = 0; i < Math.ceil(arr.length); i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);