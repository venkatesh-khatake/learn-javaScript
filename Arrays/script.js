// let arr = [102,789,34,67,55,76];

// arr.push(102); //adds new value at end of the array.
// console.log(arr)
// arr.unshift(111);// add new value at start of the array.
// console.log(arr)
// arr.pop(); // remove value from the end
// console.log(arr)
// arr.shift(); // remove value from the start of the array.
// console.log(arr)
// arr.splice(1,2)
// console.log(arr);
//  let newArr = arr.join("|")
// console.log(newArr);

// arr.slice(1,3);
// console.log(arr);

// arr.splice(1,3,152);
// console.log(arr);

// console.log(arr)

// arr.sort(function( a , b) {
//     return b - a;
// })
// console.log("Sorted",arr)




// arr.forEach((elem) =>{
//     console.log(elem + 2)
// })

// console.log("----------")

// let newArr = arr.map((val) =>{
//     console.log(val + 2)
// })
// console.log(newArr)



let fruits = ['Apple', "Banana", "Orange"];
// console.log(fruits[1])

fruits.push("Mango");
fruits.unshift("Pineapple")
console.log(fruits)

fruits.splice(2,1, "Kiwi")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.splice(1,0,"Grapes")
console.log(fruits)

newFruits = fruits.slice(1,3);
console.log(newFruits)

let arr = [5,12,8,20,3];

 let newArr = arr.filter((val) =>{
    if(val >10){
        return val;
    }
})
console.log(newArr)

let sumOfArr = arr.reduce((acc, val) =>{
    return acc + val;
},0);

console.log(sumOfArr)

let smallVal = arr.find((val) =>{
    return val < 5;
})
console.log(smallVal);

let below = arr.some(function(val){
    return val < 35
})

console.log(below)

let even = arr.every((val) =>{
    return val % 2 === 0;
});

console.log(even)


let name = ['Venkatesh', "Parasaram","Khatake"];

let [firstName, ,lastName] = name;
console.log(firstName);
console.log(lastName)
