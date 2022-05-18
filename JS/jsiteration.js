'use strict';

// exc 1
let a = 100;
while (a <= 200) {
    console.log(a);
    a++;
}
//  exc 2
let b = 100;
while (b <= 200) {
    if (b % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    b++;
}

// exc 3
for (let i = 0; i < 11; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}

for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}
