// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: object{} property age having a value type of number

let e = [3]
// A: number[]

let f;
// A:any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: need to add "?" to make an releaseYear an optional property

let prices = [100, 200, 300];
prices[0] = '$100';
// A: $1oo is a string and can not be assigned as a number
// let prices: (string | number | boolean)[] = [100, 200, 300];
// this could work 

function myFunc(a: number, b: number): number {}
// A:
// function myFunc(a: number, b: number): number {
//     return a * b
// }
// first answer was to have the function return something and that fixes error

// function myFunc(a: number, b: number): void {
// }
// 
// other anwser is if a value isnt meant to return a valu just change return type to void


