# JavaScript Challanges

## Safecracker

Traditional safes use a three-wheel locking mechanism, with the safe combination entered using a dial on the door of the safe. The dial is marked with clockwise increments between 0 and 99. The three-number combination is entered by first dialling to the right (clockwise), then to the left (anti-clockwise), and then to the right (clockwise) again. Combination numbers are read from the top of the dial:

![Safe image](https://edabit-challenges.s3.amazonaws.com/image25.png "Safe image")

Given the starting (top) position of the dial and the increments used for each turn of the dial, return an array containing the combination of the safe.

#### Step-By-Step Example

    safecracker(0, [3, 10, 5]) ➞ [97, 7, 2]

    Starting dial position of 0 (same as the diagram above).

    First turn (rightward) of 3 increments:
    0 -> 99, 98, 97
    First number of combination = 97

    Second turn (leftward) of 10 increments:
    97 -> 98, 99, 0, 1, 2, 3, 4, 5, 6, 7
    Second number of combination = 7

    Third turn (rightward) of 5 increments:
    7 -> 6, 5, 4, 3, 2
    Third number of combination = 2

    The final combination is [97, 7, 2]

## zipWith

Create a zipWith function that takes two arrays of numbers and a function that will apply to each pair of numbers in the two arrays. The zipWith function should return a new array from the results.

#### Examples

    zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )
    //[1,10,100,1000]

    zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )
    // [4,7,7,4,7,7]

    zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )
    //[0,2,4,6]

    zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] )
    //[0,2,4,6]

## sumOfAllArrays

Create a function that will sum all the values in an array and its subarrays

#### Examples

    arraySum([1, 2])
    //3

    arraySum([1, 2, 3])
    //6

    arraySum([1, 2, [1, 2, [3]]])
    //9

## Count the nines

I want to count from 0 to n. How many times will I come across the number 9?
Numbers like 9, 19, 91 ... add a nine
Numbers like 99, 199, 919 ... add two nines
And so on

#### Examples

    countNines (8) // returns 0
    countNines (9) // returns 1
    countNines (10) // returns 1
    countNines (98) // returns 18
    countNines (100) // returns 20

## Encoude the duplicates

The purpose of this challange is to convert a string to a new one, where every unique character is converted to "(", and every duplicate to ")"

#### Examples

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))(("

## Group by type

You are given an array of values with different data types. Write a function that will return an object with sorted values.

#### Examples

    Input value:
    ['a', 1, 2, false, 'b']

    Output value:
    {
        number: [1, 2],
        string: ['a', 'b'],
        boolean: [false]
    }

## Key extractor

Extract keys from an object and its nested objects into an array

## IP validator

Create a function that validates an IPv4 address.

#### Examples

    Examples of valid addresses:
    1.2.3.4
    123.45.67.89

    Examples of invalid addresses:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089

## Return the Objects Keys and Values

Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

#### Examples

    keysAndValues({ a: 1, b: 2, c: 3 })
    ➞ [["a", "b", "c"], [1, 2, 3]]

    keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
    ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

    keysAndValues({ key1: true, key2: false, key3: undefined })
    ➞ [["key1", "key2", "key3"], [true, false, undefined]]
