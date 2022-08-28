
//4
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

let f;
const g = function(length){
    f = function(breadth){
        console.log(length * breadth);
    }
}
g(5);
f(6);