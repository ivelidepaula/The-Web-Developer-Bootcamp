//printReverse()
//Write a function that takes an array as an argument and prints out the elements in the array in reverse order.
var numbers = [1,2,3,4,5,6,7,8,9,10];

function printReverse(num) {
    for(var i = num.length - 1; i >= 0; i--) {
    console.log(num[1]);
    }
}

printReverse(numbers);

//isUniform()
//Write a function which takes an array as an argument and returns true if all elements in the array are identical.

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i <arr.length;i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}


//sumArray()
//Write a function that Accepts an array of numbers and returns the sum of all numbers in the array.

function sumArray() {
    var sum = 0;
    num.forEach(function(i){
        sum += i;
    });
    return sum;
}

//max()
//Write a function that accepts an array of numbers and returns the maximum number in the array.

function max(num) {
    var max = num[0];
    for(var i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
}
