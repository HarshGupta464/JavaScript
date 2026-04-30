// var bro = "Kartik";
// console.log(bro);

// var student ={
//     fullName : "Harsh Gupta",
//     age : 29,
//     cgpa : 8.4,
//     isPass : true
// };

// console.log(student.age);
// student["cgpa"]=9.1;


// let num = prompt("Enter a number: ");
// console.log(num);
// if(num%5 === 0){
//     console.log('Multiple of 5');
// } else {
//     console.log('Not a multiple of 5');
// }


// WAP to wite grade of students

score = prompt("Enter your score: ");
var grade;
if (score >= 80 && score <= 100){
    grade = "A";
} else if (score >= 70 && score < 80){
    grade = "B";
} else if (score>=60 && score < 70){
    grade = "C";
} else if (score >= 50 && score < 60){
    grade = "D";
} else{
    grade = "F";
}
console.log("Your grade is:", grade);


