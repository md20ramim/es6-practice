const numbers =[3,4,5,6,7,8];
// const output =[];
// for(let i = 0; i<numbers.length; i++){
//     const element= numbers[i];
//     const result = element*element;
//     output.push(result);
// }

// numbers.map(function(element, index,array){
//     console.log(element, index,array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(element => element*element);

// const result = numbers.filter(element => element<5);

const result = numbers.find(element => element>5);
console.log(result);