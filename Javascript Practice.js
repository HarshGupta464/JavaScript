// ************************ LOOPS *****************************
 
// for(let i = 0 ; i<=100 ; i++){
//     if(i % 2 === 0)
//     {
//         console.log(i);
//     }
// }

// var ranNum = 34;
// let num = prompt("Guess a number");
// while (ranNum != num)
// {
//     num=prompt("Wrong! Guess again!!");
// }

// console.log("You guessed correct");


// ********************** STRINGS ***********************

// let str = "Harsh Gupta";
// var len = str.length;
// console.log("String is ", str, "and length is ", len);


// // string template :-

// let obj ={
//     item : "pen",
//     price : 10
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of", obj.item, "is", obj.price, "rupees");




// userName = prompt("Enter your name: ");
// res="@"+ userName + userName.length;
// console.log(res);



// *********************************ARRAYS*****************************

// Find average of marks:

// marks = [85,97,44,37,76,60];
// var sum=0
// for (let i of marks)
// {
//     sum += i;
//     console.log(i);
// }
// console.log(`Average = ${sum/marks.length}`);


// apply discount of 10% on list of prices

// mrp = [250, 645, 300, 900, 50];
// finalprice=[];

// for (let i in mrp){
//     finalprice[i]= mrp[i] - (mrp[i]/10);

// }
// console.log(finalprice);


// company= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(company);

// company.shift();
// console.log(company);

// company.splice(1,1,"Ola");
// console.log(company);

// company.push("Amazon");
// console.log(company);


// ************************************** Arrow Functions **********************************************
// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(5,2));

// const mult = (a,b) => {
//     console.log(a*b);
// };


// ********************************** Function to count number of Vowels ********************************
// function vowel(str){
//     count = 0;
//     chck=str.toLowerCase();
//     for (let i of chck){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u")
//         {
//             count++;
//         }
//     }
// }

// abc=prompt("Enter a string: ");
// vowel(abc);
// console.log(`Number of vowels in ${abc} are ${count}`);


// ************************* Arrow Function to count number of Vowels ************************************

// const vowelCount = (str) => {
//     count=0;
//     for (i of str){
//         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// let xyz= prompt("Enter a string: ");
// vowelCount(xyz);
// console.log(`Number of vowels in ${xyz} are ${count}`);



// *********************** Example of forEach Loop **********************************

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })



// ************************* give sqaure of each value in an array******************************

// arr = [40,2,12,14,8,6];
// arr.forEach(val => {
//     console.log(val*val);
// });

// // ************************ another method for squares ****************************************

// arr = [40,2,12,14,8,6];
// let calcSqr = (arr) => {
//     console.log(arr*arr);
// }
// arr.forEach(calcSqr);

// *********************************** Example of Map ******************************************

// let nums = [43, 54, 91];

// let newArr = nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);


// *************************** Example of Filter *********************************

// **** print all even numbers ****

// arr = [5, 7, 2, 18, 19, 4];

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// }
// )
// console.log(newArr);


// ************************ Example of Reduce ******************************

// **** Calculate sum of numbers in an array ****

// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr) =>{
//     return res + curr;
// })
// console.log(output);

// **** To return Largest number ****

// let arr = [5,6,1,7,2];

// const output = arr.reduce((res,curr) =>{
//     return res>curr ? res:curr;
// });
// console.log(output);



// ******************** filter out the marks of the students that scored 90+ ************************

// let marks = [74, 87, 62, 97, 89, 94, 91];

// const highMarks = marks.filter((val) => {
//     return val>=90;
// })
// console.log("Marks with 90 and above are: ", highMarks);


// ********** Create an array then calculate sum and product of the array ***************

// let num = prompt("Enter a number: ");
// arr=[];
// for (let i = 1; i<=num ; i++){
//     arr.push(i);
// }
// console.log(`Array = ${arr}`);

// let sum = arr.reduce((res,curr) => {
//     return res+curr;
// })
// console.log(`Sum = ${sum}`);

// let prod = arr.reduce((res,curr) => {
//     return res*curr;
// })
// console.log(`Product = ${prod}`);