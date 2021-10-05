//task1

let num1 = Boolean(Number('10')) + 1;
console.log(num1);

let num2 = 'sub' + Number(false);
console.log(num2);

let num3 = 16  *  '     91    ';
console.log(num3);

let num4 = true - 70;
console.log(num4);

let num5 = Number(1+String(1))+ 1;
console.log(num5);

//task2


let time = 60 * 60 * prompt(`Введите количество часов:`);

let result = alert(`Количество секунд: ${time}`);
console.log(time);

//task3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;

alert(num);