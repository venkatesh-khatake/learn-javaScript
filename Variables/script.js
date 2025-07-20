// var a = 12;
// {
//     console.log(a);
//     var a = 45;
//     console.log(a)
// }
// console.log(a)

// if(true){
//     var a= 10;
//     let b = 25;
// }
// console.log(a);
// console.log(b)






// let a = 45;
// let b = "5";

// let c = b + a;
// // console.log(c);
// // console.log(typeof(c))


// const arr = [1,3,4,5]
// console.log(...arr);
// console.log(arr);

// let count = 0;

// function counter(){
//     count++;
//     console.log(count)
// }
// counter();
// counter()
// counter();

// func();

// let func = function(){
//     console.log("Hello World");
// }

// function add(...val){
//     let total = 0;

//     val.forEach((elem) =>{
//         total = total + elem
//     })
//     return total;
    
// }

// console.log(add(4,5,6,7,8,9,1));


// function canVote(age){
//     if(age >= 18){
//         console.log("Can Vote.");
//     }
//     else{
//         console.log("Cannot Vote.")
//     }
// }

// canVote(8)


// function abcd(val){
//     val();
// }

// abcd(function(){
//     console.log("Hello World")
// })

// let total = 0;

// function abcd(num){
//     let newTotal = total;
//    newTotal += num;
//    console.log(newTotal)
// }


// abcd(5);
// abcd(5);

// console.log(total)


// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let counter = outer();

// counter();
// counter();
// counter();


// (function(){
//     console.log("Initialized");
// })();

// let abc = (function(){
//     let score = 0;

//     return{
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score = val;
//         }
//     }
// })();

// abc.getScore();
// abc.setScore(45);
// abc.getScore();


// greet()

// let greet = () =>{
//     console.log("Hello");
// }


// function bmi(weight, height){
//     let result = weight / (height * height);
//     console.log("BMI :", result.toFixed(2));
//     if(result >= 16 && result <= 18.5){
//         console.log("UnderWeight");
//     }
//     else if(result > 16 && result <= 25){
//         console.log("Normal");
//     }
//     else if(result > 25 && result <= 30){
//         console.log("OverWeight");
//     }
//     else if(result > 30){
//         console.log("Obesity");
//     }
//     else{
//         console.log("Enter correct Height and weight");
//     }
// }

// console.log(bmi(65,1.67))



// function discountCalc(discount){
//     return function(amount){
//         console.log("Actual Amount", amount);
//         let dis = amount - amount * (discount / 100);
//         return dis;
//     };
// }

// let newDis = discountCalc(10);
// console.log("Discounted Amount : ",newDis(450));


// counter

// function outer(){
//     let count = 0;

//     function inner(){
//          count++;
//          console.log(count)
//     }
//     return inner;
// }

// let counter = outer();
// counter();
// counter();
// counter();
// counter()


// function doubleIt(val){
//     return val * 2;
// }
// console.log(doubleIt(10));