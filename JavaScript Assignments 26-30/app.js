// Q1

// let integar = +prompt('Enter positive integar');
// document.write(`Number: ${integar} <br> Round off value: ${Math.round(integar)} <br> Floor value: ${Math.floor(integar)} <br> Ceil value: ${Math.ceil(integar)} <hr>`);


// // Q2
// let integar = +prompt('Enter negative integar');
// document.write(`Number: ${integar} <br> Round off value: ${Math.round(integar)} <br> Floor value: ${Math.floor(integar)} <br> Ceil value: ${Math.ceil(integar)} <hr>`);


// Q3
// let absoluteValue = +prompt('Enter a number ');
// let absoluteValue2 = Math.abs(absoluteValue);
// document.write(`The absolute value of ${absoluteValue} is ${absoluteValue2} `);

// Q4
// let dice = Math.floor(Math.random()*6) + 1;
// let dice2 = Math.floor(Math.random()*6) + 1;
// document.write(`random dice value: ${dice} `);
// document.write(`random dice value: ${dice2} `);

// Q5

// let coinToss = Math.floor(Math.random()*2) + 1;

// let toss = 'Head';
// let coinToss1 = Math.floor(Math.random()*2) + 1;

// let toss1 = "Tails";

// if(coinToss === 1) {
//     toss = "Tails";
//     document.write(`${coinToss} <br> randon coin value: ${toss} <br> <hr>`);
//     document.write(`${coinToss1} <br> randon coin value: ${toss1} <hr>`);
// }
// else if(coinToss1 === 2) {
//     toss1 = "Heads";
//     document.write(`${coinToss1} <br> randon coin value: ${toss1} <br> <hr>`);
//     document.write(`${coinToss} <br> randon coin value: ${toss} <hr>`);
// }




// Q6

// let randomNumber = Math.floor(Math.random()*100)+1;

// document.write(`random number between 1 and 100: ${randomNumber}`);

// Q7
// let userInput = prompt('Enter your weight in kilograms');

// let weight = parseFloat(userInput)

// if(!isNaN (weight)){

//     document.write(`the weight of user is: ${weight}`)

// }
// else {
//     document.write(`invalid input `)
// }

// Q8

// let userInput = +prompt('Enter a number between 1 and 10');
// let secretNumber = [1,2,3,4,5,6,7,8,9,10]
// let randomNumber = Math.floor(Math.random()*secretNumber.length)+1

// if( userInput === secretNumber[5]){
//     alert(`your secret number is ${userInput}`)
// }
// else(
//     alert('try again')
// )
