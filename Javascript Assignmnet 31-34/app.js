// Q1

// let currentdate = new Date()
// document.write(currentdate)

// Q2

// let currentMonth = new Date()
// let Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let findMonth = currentMonth.getMonth()
// document.write(`Current Month : ${findMonth}`)

// Q3
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let date = new Date();
// let finddays = date.getDay();
// let first3Letters = days[finddays].slice(0,3);
// console.log(first3Letters);

// Q4
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let dates = new Date();
// let funDayFind = dates.getDay();
// if (days[funDayFind] === "Saturday" || days[funDayFind] === "Sunday"){
//     alert("It's Fun day");
// }else{
//     alert(`Today is ${days[funDayFind]}`)
// }

// Q5

// let date = new Date();
// let checkDates = date.getDate();
// if (checkDates < 16) {
//     console.log(`First fifteen days of the month`);
// }else {
//     console.log(`Last days of the month`);
// }





// Q6

// let currentDateShow = new Date();
// let checkPastMilliSec = currentDateShow.getTime();
// let checkPastMinutes = checkPastMilliSec / (1000 * 60 * 60);
// console.log(`Curent Date: ${currentDateShow}`);
// console.log(`Elapsed milliseconds since January 1, 1970: ${checkPastMilliSec}`);
// console.log(`Elapsed minutes since January 1, 1970: ${checkPastMinutes}`);

// Q7

// let date = new Date();
// let hours = date.getHours();
// if( hours < 12 ){
//     console.log ('Its AM')
// }
// else {
//     console.log('Its PM')
// }

// Q8

// let dates3 = new Date('Dec 31 2020');
// console.log(dates3);
// Q9

// let ramadanDays = new Date('June 18, 2015');
// let dates4 = new Date();
// let findRestDays = dates4 - ramadanDays;
// let calcToFindRestDays =Math.floor(findRestDays / (1000 * 60 * 60 * 24));
// console.log(`${calcToFindRestDays} days have passed since 1st Ramadan, 2015`);

// // Q10
// let currentdate = new Date ('Sat Dec 05 2015');

// let seconds = currentdate.getSeconds()
// let elapsed =((currentdate - seconds)/ (1000*60))
// console.log(`on reference date ${currentdate},${elapsed} seconds had passed since begining of 2015`)

// Q11

// const curDate = new Date();
// console.log(curDate);
// const hours = curDate.setHours(17);
// console.log(`1 hour ago,it was ${curDate}`);

// Q12
// let dates = new Date();
// console.log(`current date:${dates}`);
// let yearsBack = dates.setFullYear(1923);
// console.log(`100 years back:it was ${dates}`);

// Q13
// let userAge = +prompt('Enter your current age to get your birthday');
// let dates = new Date();
// let checkBirthDay = dates.getFullYear() - userAge;
// document.write(`<br><br>Your age is ${userAge} <br>Your birth year is ${checkBirthDay}`);

// Q14
// let customerName = "ABC Customer";
// let dates = new Date();
// let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// let currentMonth = dates.getMonth();
// let checkCurMonth = months[currentMonth];
// let units = 410;
// let chargesPerUnit = 16;
// let latePaymentCharges = 350;
// let dueDate = new Date('October 13, 2023');
// function myElectricBill() { 
// if (checkCurMonth === months[9] && dates <= dates.setDate(14)){
//     let total = units * chargesPerUnit;
//     let grossTotal = total + latePaymentCharges;
    
//     document.write(`<br><br><h2>K-Electric Bill</h2>
//     Customer Name: <b>${customerName}</b>
//     <br>Month:<b> ${checkCurMonth}</b>
//     <br>Number of units: <b>${units}</b>
//     <br>Charges per unit: <b>${chargesPerUnit}</b><br>
//     <br>Net Amount Payable (Within Due Date):<b> ${total}</b>
//     <br>Late payment surcharge :<b> ${latePaymentCharges}</b><br>
//     Gross Amount Payable (after Due Date):<b> ${grossTotal}</b>`)
// }
// }
// document.write(myElectricBill)

