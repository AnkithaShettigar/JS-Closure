//5
//Take a variable in outer function and create an inner function to increase the counter every time it is called
const count2 = function(){
    let counter = 0;
    return function(){
        counter++;
        console.log(`counter is ${counter}`);
    }
   
}

const count1 = count2();
// console.log(counter1);
count1();
count1();
count1();