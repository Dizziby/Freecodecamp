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



// 5---Return Largest Numbers in Arrays



// 6---Confirm the Ending



// 7---Repeat a String Repeat a String



// 8---Truncate a String



// 9---Finders Keepers



// 10---Boo who



// 11---Title Case a Sentence



// 12---Slice and Splice



// 13---Falsy Bouncer



// 14---Where do I Belong



// 15---Mutations



// 16---Chunky Monkey