const hubby ="Elias kanchon"
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
console.log(numbers);

function add(num1, num2 = 20){
    return num1 + num2;
}
const total = add(15, 1);
console.log(total);

const firstName = "shafayet";
const lastName ="Ullah";
const fullName = firstName + " " + lastName+ " is a good boy.";
const fullName2 = `${firstName} ${2+2} is a good boy`;
console.log(fullName2);
console.log(fullName);

const multiLine = "I love you\n"+
"I miss you\n"+
"I need you";
console.log(multiLine);

const multiLine2 = `I love you
I miss you
I need you`
console.log(multiLine2);

// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(20);
// console.log(result);

// const doubleIt = function (num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);

// es6 version
// const doubleIt= num => num*2;
// const addSum = (x, y) => x+y;
// const give5 = ()=> 5
// const result = give5();
// console.log(result);
const doMath = (x,y) => {
    const sum =x+y;
    const diff = x-y;
    const result = sum *diff;
    return result;
}
const result3 = doMath(7,5);
console.log(result3);


const ages = [12,13,14,17,15];
const ages2 =[15,16,20];
const ages3 =[25,36,22,29];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
 const allAges2 = [...ages,...ages2,5,...ages3];
console.log(allAges2);

// const business = 650;
// const minister =450;
// const sochib = 250;
// const maximum= Math.max(business,minister,sochib);
// console.log(maximum);

const takaPoisa =[750,700,690];
const maximum =Math.max(...takaPoisa);
console.log(maximum);