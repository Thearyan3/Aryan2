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

// Given an array find out the total no. of odd and even nos.
// 

let arrs = [1, 2, 5, 7, 8, 3, 9, 1, 3, 4, 5];
let Even_No = 0;
let Odd_No = 0;
for(arr of arrs){
    if(arr % 2 == 0){
        Even_No++;
    }else{
        Odd_No++;
    }
}
console.log(Even_No);
console.log(Odd_No);