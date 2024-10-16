// // const n = 3;

// // for(let i = 1; i <= 10; i++){
// //     console.log(`${n} * ${i} = ${n * i}`);
// // }

// // const student = {
// //     name : "Monica",
// //     class : 7,
// //     age : 12
// // }

// // for(let key in student){
// //     console.log(`${key} => ${student[key]}`);
// // }

// // Print a pattern like below :
// // 1 
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5 
// // 1 2 3 4 5 6 
// // 1 2 3 4 5 6 7
// // 1 2 3 4 5 6 7 8

// for(let i = 1; i <= 8; i++){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern += j + "";
//     }
//     console.log(pattern);
// }



// // Given an array, find out the total no. of odd and even nos.?
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
// // }

// // Do-while loops 
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


// // Concat() Method of String
// // var str1 = "Hello";
// // var str2 = "Maria!";
// // var res = str1.concat(str2);
// // console.log(res);

// // Slice Method of String 
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

// // Split method of String
// console.log(name.split("will"));

// // length method of String
// console.log(name.length);
