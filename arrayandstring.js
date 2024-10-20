// const n = 3;

// for(let i = 1; i <= 10; i++){
//     console.log(`${n} * ${i} = ${n * i}`);
// }

const student = {
    name : "Monica",
    class : 7,
    age : 12
}

for(let key in student){
    console.log(`${key} => ${student[key]}`);
}

// Print a pattern like below :
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8

// for(let i = 1; i <= 8; i++){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern += j + "";
//     }
//     console.log(pattern);
// }



// Given an array, find out the total no. of odd and even nos.?
// let arrs = [1, 2, 5, 7, 8, 3, 9, 1, 3, 4, 5];
// let Even_No = 0;
// let Odd_No = 0;
// for(arr of arrs){
//     if(arr % 2 == 0){
//         Even_No++;
//     }else{
//         Odd_No++;
//     }
// }
// console.log(Even_No);
// console.log(Odd_No);

// // While loop
// let i = 0;
// while(i < 10){
//     text = "The Number is " + i;
//     i++;
//     console.log(text);
// }

// Do-while loops 
// let i = 1;
// do{
//     console.log("Hello Loop");
//     i++;
// }while(i<10);

// Some String methods
// var Str = "You will be an amazing developer will";
// let index = Str.indexOf("developer");
// console.log(index);
// index = Str.lastIndexOf("developer");
// console.log(index);
// index = Str.indexOf("will", 10);
// console.log(index);


// String Concatenation
// var string1 = "prep";
// var string2 = "Bytes";
// var string3 = string1 + string2;
// console.log(string3);


// Concat() Method of String
// var str1 = "Hello";
// var str2 = "Maria!";
// var res = str1.concat(str2);
// console.log(res);

// Slice Method of String 
// var name = "You will be an amazing developer";
// var newMessage = name.slice(7, 13);
// console.log(newMessage);
// newMessage = name.slice(7, -13);
// console.log(newMessage);
// newMessage = name.slice(7);
// console.log(newMessage);
// newMessage = name.slice(-7);
// console.log(newMessage);

// Substring Method of String
// var name = "You will be an amazing developer";
// var newMessage = name.substring(7, 13);
// console.log(newMessage);
// var newMessage = name.substring(7);
// console.log(newMessage);

// Replace Method of String
// var name = "You will be an amazing developer";
// console.log(name.replace('amazing', 'outstanding'));
// console.log(name.replaceAll(' ', '_'));
// console.log(name.trim());

// Split method of String
// console.log(name.split("will"));

// length method of String
// console.log(name.length);

// Reverse Method of String
// let array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array);
// Output = [5, 4, 3, 2, 1];

// Question - You are provided with a string you have to slice the name from the string and print the sliced string. 
// Input = Hi prepbytes
// Output = prepbytes
// var word = "Hi Prepbytes";
// console.log(word.slice(2));

// Array 

//(i). Push() Method - The push() method adds new elemnts to the end of an array, and returns the new length.
// const arr = ["Aryan", "The"];
// arr.push("Developer");
// console.log(arr);
// Output = ["Aryan", "The", "Developer"];

// (ii). slice() method - The slice() method selects a  part of an array and returns the new array. 
// const arr = ["Aryan", "The", "Developer"];
// console.log(arr.slice(1, 2));
// Output = ["The"];

// (iii). toString() Method - The toString() method converts an array to a String, and returns the result. 
// const arr = ["Jarvis", "The", "Developer"];
// console.log(arr.toString());
// Output = "Jarvis, The, Developer"

// (iv). shift() Method  - The shift() method removes the first element of an Array, and returns that element. 
// const arr = ["Aryan", "The", "Developer"];
// arr.shift();
// console.log(arr);
// Output - ["The", "Developer"];

// (v). map() method - The map() method creates a new array with the results of calling a function for every array element.
// const arr = [1, 4, 9, 16 ];
// console.log(arr.map(x => x * 2));
// Output = [2, 8, 18, 32];

// (vi). pop() Method - The pop() method removes the last element of an Array, and returns that element. 
// const arr = ["Aryan", "The", "Developer"];
// arr.pop();
// console.log(arr);
// Output = ["Aryan", "The"]

// (vii). filter() method - The filter() method creates an array filled with all array elements that pass a test (provided as a function). 
// const arr = ["Aryan", "The", "Developer"];
// console.log(arr.filter(word => word.length > 3));
// Output = ["Aryan", "The"];

// (viii). includes() Method
// let array = [1, 2, 3, 4, 5];
// array.includes(5);
// console.log(array);

// (ix). unshift() Method
// // let array = [1, 2, 3, 4, 5];
// // array.unshift(10);
// // console.log(array);

// (x). concat() and join() Metod 
// let myArr = [1, 2, 3];
// console.log(myArr.concat(5, 6, 7));
// let MyArr = ["Hi", "How", "Are", "You"];
// console.log(MyArr.join("-"));

// (xi). indexOf() and lastIndexOf() Method 
// let myArr = [1, 2, 3, 4, 5, 6, 3];
// console.log(myArr.indexOf(3));
// console.log(myArr.lastIndexOf(3));

// (xii). slice() and splice() method 
// let myArr = [1, 2, 3, 4, 5, 6, 3];
// console.log(myArr.slice(1, 3));
// console.log(myArr.splice(1, 3, "a","b","c" ,"d"));

// (xiii).  reverse() and sort() method
// let myArr = [1, 2, 3, 4, 5, 6, 3];
// console.log(myArr.reverse());
// console.log(myArr.sort());

// // Question - You are provided an array of integer and you have to print the sum of array. 
// let arr = [1, 2, 3, 4, 66, 23, 28, 448];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
// }
// console.log(sum);

