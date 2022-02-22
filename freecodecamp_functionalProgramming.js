// 1---Learn About Functional Programming

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line


// 2---Understand Functional Programming Terminology

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);


// 3---Understand the Hazards of Using Imperative Code



// 4---Avoid Mutations and Side Effects Using Functional Programming



// 5---Pass Arguments to Avoid External Dependence in a Function



// 6---Refactor Global Variables Out of Functions



// 7---Use the map Method to Extract Data from an Array



// 8---Implement map on a Prototype



// 9---Use the filter Method to Extract Data from an Array



// 10---Implement the filter Method on a Prototype



// 11---Return Part of an Array Using the slice Method



// 12---Remove Elements from an Array Using slice Instead of splice



// 13---Combine Two Arrays Using the concat Method



// 14---Add Elements to the End of an Array Using concat Instead of push



// 15---Use the reduce Method to Analyze Data



// 16---Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem



// 17---Sort an Array Alphabetically using the sort Method



// 18---Return a Sorted Array Without Changing the Original Array



// 19---Split a String into an Array Using the split Method



// 20---Combine an Array into a String Using the join Method



// 21---Apply Functional Programming to Convert Strings to URL Slugs



// 22---Use the every Method to Check that Every Element in an Array Meets a Criteria



// 23---Use the some Method to Check that Any Elements in an Array Meet a Criteria



// 24---Introduction to Currying and Partial Application