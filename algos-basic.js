//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-algorithm-scripting





// Reverse a String With Built-In Functions //////////////////////////////////////////

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
// For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.
// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.


function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString; // "olleh"
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

// Reverse a String With Recursion
// For this solution, we will use two methods: the String.prototype.substr() method and the String.prototype.charAt() method.

function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
        return "";

    else
        return reverseString(str.substr(1)) + str.charAt(0);
    /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
    
    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"
    
    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately
    
    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
    */
}
reverseString("hello");

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");


///////////////////////////////////////////////////////////////
// Is it a Palindrome? ///////////////////////////////////////
// Return true if a word is a Palindrome, or will return false if not.

const isPalindrome = (word) => {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
    // if (word === reversedWord) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(isPalindrome("hello"))


///////////////////////////////////////////////////////////////
// Convert Celsius to Fahrenheit //////////////////////////////
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

convertCtoF(30);


//////////////////////////////////////////////////////////////
// Reverse a String //////////////////////////////////////////
// Reverse the provided string and return the reversed string.

function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('')
}

reverseString("hello");
//   Code Explanation
//   Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.
//   Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.
//   Next we chain the reverse() function, which takes our array of characters and reverses them.
//   Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

reverseString("hello");
//   Code Explanation
//   Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
//   During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
//   Finally, you return the final value of reversedStr.


/////////////////////////////////////////////////////////////////
// Factorialize a Number ////////////////////////////////////////
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let product = 1
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product
}

console.log(factorialize(5));
// Code Explanation
// Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.

// For all numbers passed to the function which are greater than one, the simple for loop will increment i by one each iteration and recalculate product up to the value num.   

function factorialize(num) {
    if (num <= 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);
//   Code Explanation
//   Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow.

function factorialize(num, factorial = 1) {
    if (num <= 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

factorialize(5);
//   Code Explanation
//   In this solution, we use Tail Recursion 1.1k to optimize the the memory use.
//   In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don’t get the result of your calculation until you have returned from every recursive call.
//   In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).
//   In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.


/////////////////////////////////////////////////////////////////
// Find the Longest Word in a String ////////////////////////////
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let longestWord = 0;
    let words = str.split(' ')

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length
        }
    }
    return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//     Code Explanation
// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
}

function findLongestWordLength(s) {
    return s
        .split(' ')
        .reduce((longest, word) => Math.max(longest, word.length), 0);
}
//   Code Explanation
//   using .reduce()
//   In case you’re wondering about that 0 after the callback function, it is used to give an initial value to the longest, so that Math.max will know where to start.

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}
// Code Explanation
// We provide Math.max with the length of each word as argument, and it will simply return the highest of all.
// Let’s analyze everything inside the Math.max parenthesees to understand how we do that.
// str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].
// Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().
// str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]
// Finally, we pass the array as argument for the Math.max function with the spread operator ...

function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
        return words[0].length;
    }
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
    );
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Code Explanation
// The first line splits the string into individual words. Then we check if words only has 1 element left. If so, then that is the longest element and we return it. Otherwise, we remove the first element and recursively call the function findLongestWord, returning the maximum between the length of the first result and the recursive call 


////////////////////////////////////////////////////////////////
// Return Largest Numbers in Arrays ////////////////////////////
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}
//   Code Explanation
//   Create a variable to store the results as an array.
//   Create an outer loop to iterate through the outer array.
//   Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
//   Create said inner loop to work with the sub-arrays.
//   Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
//   After the inner loop, save the largest number in the corresponding position inside of the results array.
//   And finally return said array.

function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}
// Code Explanation
// we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
// within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
// the callback function passed to the reduce method takes the previous value and the current value and compares the two values
// if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item.

function largestOfFour(arr, finalArr = []) {
    return !arr.length
        ? finalArr
        : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}


////////////////////////////////////////////////////////////////
// Confirm the Ending ///////////////////////////////////////////////
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
// Code Explanation
// First we use the slice method copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.
// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(10, 17) would return give me.
// In this case we only include one parameter which it will copy everything from the starting index.
// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
// Finally we compare the return result of slice to target and check if they have the same characters.

function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
//   Code Explanation
//   If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.


// Repeat a String Repeat a String /////////////////////////////////////////
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
    for (let i = 0; i < num; i++) {
        accumulatedStr += str;
    }
    return accumulatedStr;
}
repeatStringNumTimes("abc", 3);
//   Code Explanation 
// Create an empty string variable to store the repeated word.
// Use a for loop or for loop to repeat code as many times as needed according to num
// Then we add the string to the variable created on step one inside of the loop.
// At the end of the loop, return the variable for the repeated word.


////////////////////////////////////////////////////////////////
// Truncate a String  ////////////////////////////////////////////////
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
//   Code Explanation
//   We start off with a simple if statement to determine one of two outcomes…
//   If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
//   However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
//   Code Explanation
//   This solution is very similar to basic solution. To determine the new string, we use a ternary operator. In our ternary operation, if str.length is larger than num, we return a new string which is slice of our string starting at character 0, and ending at num and the '...' is appended to the end of our new string. If str.length is less than or equal to num, we return the string without any truncation.

//   NOTE In order to understand the above code, you need to understand how a Ternary Operator works. The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.



////////////////////////////////////////////////////////////////
// Finders Keepers  ////////////////////////////////////////
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
//2,4
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })
//8
findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })
//undefined

//   Code Explanation
//   Challenge asks us to look through array. This is done using a for loop.
//   The num variable is being passed into the function, so we set it to each index in our array.
//   The pre-defined function already checks each number for us, so if it is “true”, we return that num.
//   If none of the numbers in the array pass the function’s test, we return undefined.


// Boo who ///////////////////////////////////////////////
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);


////////////////////////////////////////////////////////////////
//   Title Case a Sentence  //////////////////////////////////
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
//   Code Explanation
//   Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.


function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(" ");
}

titleCase("I'm a little tea pot");
//   Code Explanation
//   We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.


////////////////////////////////////////////////////////////////
// Slice and Splice  ///////////////////////////////////////////////
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}
//   Code Explanation
//   Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
//   Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
//   Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
//   We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
//   Finally, we return the localArray and end the function.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}
//   Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function
//   Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....
//   localArr is returned and the function is complete.


function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
//   Code explanation
//   Use spread operators with slice to return an array.
//   First spread operator uses the slice method to only give the portion of arr2 from index 0 to ‘n.’
//   Second spread operator passes all elements from arr1.
//   Third spread operator uses the slice method to return all elements starting at index ‘n’ to the end of the array.


////////////////////////////////////////////////////////////////
// Falsy Bouncer //////////////////////////////////////////////
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Try converting each value to a Boolean.

function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
}
//   Code Explanation
//   We create a new empty array (filteredArr).
//   We use a for cycle to iterate over all elements of the provided array (arr).
//   We use the if statement to check if the current element is truthy 714 or falsy.
//   If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
//   We return the new array (filteredArr).

function bouncer(arr) {
    return arr.filter(Boolean);
}
//   Code Explanation
//   The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy. Hence we pass the built-in Boolean function.


////////////////////////////////////////////////////////////////
// Where do I Belong  //////////////////////////////////////
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
//   Code Explanation
//   We use method-chaining to invoke one method after another to solve the problem in a single line. First we create a new array with the contents of arr and num by using the concat() method
//   Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order
//   Lastly we return the position or index of num in the array with the indexOf() method


function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}
//   Code Explanation
//   First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
//   Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.


////////////////////////////////////////////////////////////////
// Mutations  ////////////////////////////////////////////////
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
//   Code Explanation
//   First we make the two strings in the array lowercase. test will hold what we are looking for in target.
//   Then we loop through our test characters and if any of them is not found we return false.

//   If they are all found, the loop will finish without returning anything and we get to return true.


function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(function (letter) {
            return arr[0].toLowerCase().indexOf(letter) !== -1;
        });
}
//   Code Explanation
//   Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.

//   Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

function mutation([target, test], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length
        ? true
        : !target.includes(test[i])
            ? false
            : mutation([target, test], i + 1);
}
//   Note that nesting ternaries this deeply is typically not recommended in professional code.


////////////////////////////////////////////////////////////////
// Chunky Monkey  //////////////////////////////////////////////
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}
//   Code Explanation
//   Firstly, we create two empty arrays called temp and result, which we will eventually return.
//   Our for loop loops until a is equal to or more than the length of the array in our test.
//   Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
//   Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
//   Next, if temp isn’t an empty array, we push it to result.
//   Finally, we return the value of result.

function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
//   Code Explanation
//   First, we create an empty array newArr where we will store our ‘chunks’.
//   The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
//   Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
//   Inside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
//   We add this chunk/slice to newArr with newArr.push().
//   Finally, we return the value of newArr once the for loop is complete.