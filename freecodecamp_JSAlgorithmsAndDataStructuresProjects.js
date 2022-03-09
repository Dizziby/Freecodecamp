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

function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arrAbc = abc.split("");
    const arrStr = str.split("");
    const newArr = [];
    for(let i = 0; i < arrStr.length; i++) {
        let j = arrAbc.indexOf(arrStr[i]);
        //console.log(j, 4);
        if(j === -1 && typeof(arrStr[i]) === 'string') {
            newArr.push(arrStr[i]);
        } else if(j === -1) {
            newArr.push(" ");
        } else {
            if(j >= 13) {
                newArr.push(arrAbc[j-13]);
            }
            newArr.push(arrAbc[j+13]);
        }
    }
    let newStr = newArr.join("");
    return newStr;
}

rot13("SERR PBQR PNZC");


// 4---Telephone Number Validator

function telephoneCheck(str) {
    let regExp = /^\d{3}-\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\)\s\d{3}-\d{4}|^\d{3}\s\d{3}\s\d{4}|^\d{10}$|^1\s\d{3}\s\d{3}\s\d{4}|^1\s\d{3}-\d{3}-\d{4}|^1\s\(\d{3}\)\s\d{3}-\d{4}|^1\(\d{3}\)\d{3}-\d{4}/;
    return regExp.test(str);
}

telephoneCheck("555-555-5555");


// 5---Cash Register