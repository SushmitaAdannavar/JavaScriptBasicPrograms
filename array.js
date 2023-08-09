let numbers=[1,2,3,4,5];              
numbers.forEach(square);
function square(element)
{
    result=element*element;
    console.log(result);
}


let names=['sakshi','akshara','rani'];
let uppercase=names.map(Converttoupper);
function Converttoupper(element)
{
    return element.toUpperCase();
}
console.log(uppercase);


let checknumbers=[2,3,5,7,8];
let evennumbers=checknumbers.filter(even);
function even(element)
{
    return element%2==0;
}
console.log(evennumbers);


let mark=[40,45,50,48,50,47];
let totalmark=mark.reduce(calculate);
function calculate(total,element)
{
    return total+element;
}
console.log(totalmark);


let marks=[40,45,50,48]
const totalmarks=marks.reduce((total,element)=>total+element);
console.log(totalmarks);