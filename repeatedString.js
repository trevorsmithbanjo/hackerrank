/* There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

Example


The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Sample Input

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first  letters of the infinite string are a, we return . */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
// Fist need to solve for how many occurances of 'a' there are in s
// To do this loop through s and every time there is an 'a' add 1 to a var count
// Next figure out how many times s will repeat based on the given int n
// To do this divide n by s and store that number in a var repeat
// If the remainder is 0 then result is count * repeat
// Else if the remainder is not 0 then result is count * repeat + 1;

    let count = 0;
    let result = 0;
    let length = s.length;
    
    for(let i = 0; i < length; i++) {
        if(s[i] === "a") {
            count++;
            console.log("a " + count);
        } else {
            count += 0;
            console.log("!a " + count);
        }
    }
    
    let repeat = Math.floor(n / length);
    console.log({repeat});
    result += count * repeat;
    console.log({result});
    let dif = n - (repeat * length);
    console.log({dif});
    
    count = 0;
    console.log({count});    
    for(let i = 0; i < dif; i++) {
        if(s[i] === "a") {
            count++;
            console.log("a " + count);
        } else {
            count += 0;
            console.log("!a " + count);
        }
    }
    
    result += count;
    console.log({result});
    return result; 
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
