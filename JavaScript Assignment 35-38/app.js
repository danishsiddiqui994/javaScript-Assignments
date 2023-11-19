// Q1

// function myFunction(){

// const date = new Date()
// console.log(date)
// }
// myFunction()

// Q2

// let firstName = prompt('What is your first name');
// let lastName = prompt('What is your last name');

// function fullName ( firstName,lastName){

//     alert(`Greeting ${firstName} ${lastName}`)
// }
// fullName (firstName,lastName)

// Q3

// let number1 = +prompt("Enter first number to calculate");
// let number2 = +prompt("Enter second number to calculate");
// function myCalculation() {
//     const totalSum = number1 + number2;
//     return totalSum;

// }
// let sumOfTwoNumber = myCalculation();
// console.log(sumOfTwoNumber);

// Q4

// function calcul(num1,operator,num2 ) {
//     if (operator === '+'){
//      return num1 + num2
//     }else if(operator === '-'){  
//      return num1 - num2
//     }else if(operator === '/'){
//      return num1 / num2
//     }else if(operator === '%'){
//      return num1 % num2
//     }else{
//      alert('Please enter a computed number')
//     }
//  }
//  let total = calcul(5,'/',3);
//  console.log(total);

// Q5

// function  square(number){
//     return number * number
// }
// let save = square(9);
// console.log(save);

// Q6

// function myFactorial(num1, num2){
//     let totalSum = num1 ** num2;
//     return totalSum;
// }
// console.log(myFactorial(2,2));

// Q7

// const number1 = +prompt('Enter a starting number');
// const number2 = +prompt('Enter a ending number')
// function totalNumber(start, end){
//      if (start < end){
//         for(var i = start; i <= end; i++){
//             console.log(i);
//         }
//      }else if( start === end || start > end){
//         alert('Please enter a correct number')
//      }
// }
// totalNumber(number1,number2);

// Q8

// const num1 = +prompt('Enter the base number');
// const num2 =+prompt('Enter the perpendicular number');
// function calculateHypotenuse(base, perpen){
//     const baseSq = base * base;
//     const perpendicSq =perpen * perpen ;
//     function calculateSquare(number1, number2){
//        let totalNum = number1 + number2;

//        return console.log(Math.sqrt(totalNum).toFixed(2)); 
//     }
//  calculateSquare(baseSq,perpendicSq)
//  return
// }
// const final = calculateHypotenuse(num1,num2);
// console.log(final);

// Q9

// let heightSum = 30;
// function areaRectangle(widthVal,heightVal){
//     let totalSum = widthVal * heightVal;
//     return totalSum;
// }
// console.log(areaRectangle(40, heightSum));

// Q10

// let text = 'A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam';
// function checkPassedStr(){
//    for (var i = 0; i < text.length; i++){
//       if(text.slice(i,12)==='palindrome'){
//         console.log('Yes it is');
//         break
//       }
//    }
// }
// checkPassedStr()

// Q11

// function changingCase(text){
//     let str1 = text.slice(0,1);
//     let str2 = str1.toUpperCase();
//     let str3 = text.slice(1);
//     let str4 = str2 + ""+ str3
//     return str4
// }
// console.log(changingCase('the quick brown fox'));

// // Q12
// function longestWordStr(longWord){
//     for(var i = 0;i < longWord.length; i++){
//       if(longWord.slice(i,i) == 'Development'){
//           longWord = 'Development';
//           console.log(longWord);
//       }
//     }
//   }
//   longestWordStr('Web Development Tutorials')

// Q13

// function charCount(str, letter) {
//     var letterStr = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             letterStr += 1;
//         }
//     }
//     return letterStr;
// }

// console.log(charCount('danishsiddiqui', 'd'));