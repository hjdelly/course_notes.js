import moment from 'moment';

// const rightNOw = moment();
// console.log(rightNOw)   DATE AND TIME RIGHT NOW (1970 unix systemt built)

// const birthday = moment('1987-01-04', 'YYYY-MM-DD');

// console.log(birthday.fromNow())  will show a counter how many years ago
// console.log(birthday.format('dddd'));  will show your brithday Day you were born
// console.log(birthday.format('MMM Do YYYY'))  will give you a pretty version of your Birthday
// 

// const twoWeeksFromNow = moment().add(14, 'days')  //will show you the date 2 weeks from now
// console.log(twoWeeksFromNow.toString());   // you can make days weeks months and eyeasr

const sixMonthsAgo = moment().subtract(6, "months")
console.log(sixMonthsAgo.toString());