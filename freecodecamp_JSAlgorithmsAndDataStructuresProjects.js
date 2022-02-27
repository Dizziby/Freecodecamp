// 1---Palindrome Checker

function palindrome(str) {
    let regExp = /[a-z0-9]/gi;
    let newStr = str.match(regExp).join("").toLowerCase();
    console.log(newStr);
    let newStrReverce = str.match(regExp).reverse().join("").toLowerCase();
    console.log(newStrReverce);
    return newStr === newStrReverce;
}

palindrome("eye");


// 2---Roman Numeral Converter



// 3---Caesars Cipher



// 4---Telephone Number Validator



// 5---Cash Register