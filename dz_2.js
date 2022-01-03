//#1
console.log(true + false); // так как true=1, a false=0
console.log(12 / '6'); // строчный элемент был преобразован в числовой 
console.log('number' + 15 + 3); // из-за первого элемента все стало строчным 
console.log(15 + 3 + 'number'); // так как строчный элемент крайний а числовой в начале 
console.log([1] > null); // обьект преобразуется в true 
console.log('foo' + +'bar'); // при использовании в постфиксной форме оставляет результат без изменений, при использовании в префиксной форме показывает ошибку так как к строке нельзя прибавитть 1
console.log('true' == true); // Преобразование boolean в строки это false
console.log(false == 'false'); // Преобразование строки в boolean  это false
console.log(null == ''); //Значение null представляет отсутствие какого-либо объектного значения
console.log(!!'false' == !!'true'); //""- в булин это false => false == false
console.log(['x'] == 'x'); //так как приводит все к строке х=х
console.log([] + null + 1); //массив это 0 все остальное сумма как строк 
console.log(0 || '0' && {});
console.log([1, 2, 3] == [1, 2, 3]); // так как сравнивает два совершенно разных обьекта памяти
console.log(!!null); //в булин это false
console.log(!!undefined); //==nul поэтому false

//#2
let i = 20;

while (i) {
    alert(i--);
}
// Выполняет действие пока условие не станет равным нулю либо ложным

//#3
let v = 39
while (v < 93) {
    v++
    console.log(v);
}

//#4
let k = 10;
while (k < 341) {
    k++;
    let mult = k % 4;
    if (mult == 0) {
        console.log(k);
    }
}

//#5
for (let index = 100; index > -6; index--) {
    console.log(index);
}

//#6

let line = '';

for (let index = 0; index < 15; index++) {
    line = line + 'y';
    console.log(line);
}

//#7

for (let even = 0; even < 101; even++) {
    let ev = even % 2;
    if (ev == 0) {
        console.log(even);
    }
}

//#8



let a = 0;
let sum = 1;

while (a < 101) {
    sum = sum + a;
    a++;
    console.log(sum);
}

//#9

let str = '';
for (let far = 0; far < 12; far++) {
    let cut = far % 2;
    if (cut != 0) {
        str = str + far;
    };
}
console.log(str);

//#10 

let str = '';
for (let far = -124; far < -117; far++) {
    str = str + far;
};

console.log(str);

//#11 

let str = '';

for (let far = -1; far > -10; far--) {
    str = str + far;
};
str = str + '-'
console.log(str);

//#12

let i = prompt('input first number', '');
let n = prompt('input second number', '');

if (i == n) {
    console.log('GG');
} else {
    console.log('try again');
}

i == n ? console.log("GG") : console.log("Try again");

//#13

let i = parseInt(prompt('input first number', ''));
let n = parseInt(prompt('input second number', ''));
let d = 10;
let e = i + n;

console.log(e);

if (e > d) {
    console.log('GG');
}
if (e < d) {
    console.log('The amount is not more than 10');
}