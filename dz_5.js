// #2
// let i = ['i', 'g', 'h', 'p', 'a', 'n', 'd']
// let n = []

// const f = (a, b) => {
//     for (k = 0; k < a.length; k++) {
//         let d = a[k].toUpperCase()
//         b.push(d)
//     }
// }
// f(i, n)
// console.log(n)

// #3

// let i = ['index', 6758493, false, 'privet', 'andrey', 'next', { name: 'ivan', age: 24 }]
// let n = []

// const f = (a, b) => {
//     for (k = 0; k < a.length; k++) {
//         if (typeof a[k] == 'string') {
//             let d = a[k].substr(0, 1).toUpperCase() + a[k].substr(1);
//             b.push(d)
//         }
//     }
// }
// f(i, n)
// console.log(n)

// #4

// let i = ['index', 6.57, false, 8.25, 10.666, 255.3333, { name: 'ivan', age: 24 }]
// let n = []
// const f = (a, b) => {
//     for (k = 0; k < a.length; k++) {
//         if (typeof a[k] == 'number') {
//             let d = Math.ceil(a[k])
//             b.push(d)
//         }
//     }
// }
// f(i, n)
// console.log(n)

// #6

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let n = []

// const f = (a, b) => {
//     for (k = a.length; k > 0; k--) {
//         b.push(k)
//     }
// }
// f(i, n)
// console.log(n)

// #7

// let i = [0, 1, false, 2, undefined, '', 3, null];
// let n = []

// const f = (a, b) => {
//     for (k = 0; k < a.length; k++) {
//         if (typeof a[k] == 'number' && a[k] > 0) {
//             b.push(a[k])
//         }
//     }
// }
// f(i, n)
// console.log(n)

// #8

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let index = [...i]
// console.log(index)

// #9

// let i = ['pen', 'pencil', 'rubber', 'rule'];
// let n = '';

// const f = (a) => {
//     let b = a.join(',')
//     console.log(b)
// }
// f(i)

// #10 

// let i = prompt('input number', '');
// let n = Array.from(i)
// console.log(n)
// let d = []


// const func = (a, b) => {
//     for (k = 0; k < a.length; k++) {
//         if ((a[k] % 2 != 0) && (a[k + 1] % 2 != 0)) {
//             b.push(a[k] + ':')
//             b.push(a[k + 1])
//         } else if (a[k] % 2 == 0) {
//             b.push(a[k])
//         }
//     }

//     console.log(b.join(''))
// }
// func(n, d)

// #11

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3]
//     //let n = Array.from(i)
//     //console.log(n)
// let d = []

// const func = (a, b) => {
//         for (k = 0; k < a.length; k++) {
//             for (j = 0; j < a.length; j++) {
//                 if (a[k] != a[j]) {
//                     b.push(a[k])
//                     return b
//                 }

//             }
//         }

//     }
//     // const result = n.map(func(n))
// console.log(func(i, d))

// #12

// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 5];
// let arr4 = [1, 2, 3, 4, 5];

// const fanc = (a, b) => {
//     let arra = a.join()
//     let arrb = b.join()

//     if (arra == arrb) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// fanc(arr2, arr3)

// #13
// let i = +prompt('input year', '')
// let n = +prompt('input year', '')
// let d = []
// const funcDi = (a, b, c) => {
//     for (k = a; k <= b; k++) {
//         c.push(k)
//     }
//     return c
// }
// let b = funcDi(i, n, d)
// console.log(b)

// let e = []

// const funcQu = (arr, arr2) => {
//     for (v = 0; v < arr.length; v++) {
//         if (arr[v] % 4 == 0) {
//             arr2.push(arr[v])
//         }
//     }
//     return arr2
// }
// console.log(funcQu(b, e))

// #14

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = +prompt('input number from 1 to 10', ' ');

// const func = (arr, number) => {
//     console.log(arr.slice(0, number));
// }
// func(i, n)

// #15 
// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = '-' + +prompt('input number from to 10', ' ');
// const func = (arr, number) => {
//     console.log(arr.slice(number));
// }
// func(i, n)

// #16

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOf = (bef, after) => {
//     return bef + after ** 2
// }

// const func = (a) => {
//     return a.reduce(sumOf)
// }

// console.log(func(i))

// #17

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOf = (bef, after) => {
//     return bef + after
// }

// const Multi = (bef, after) => {
//     return bef * after
// }

// const func = (a) => {
//     return a.reduce(sumOf)
// }

// const funcM = (a) => {
//     return a.reduce(Multi)
// }

// let n = 'Summa: ' + func(i) + ';' + ' Multiplication: ' + funcM(i)
// console.log(n)

// #18 

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = +prompt('input number from 1 to 10', ' ');
// const filter = (val) => {

//     return val != n
// }

// const result = (a) => {
//     return a.filter(filter)
// }
// console.log(result(i))

// #19

// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = +prompt('input number from 0 to 9', ' ');
// let d = +prompt('input number from 1 to 10', ' ');

// const repl = (a) => {
//     let c = a.splice(n, 1)
//     return c.join()
// }


// const fill = (b) => {
//     b.fill(+repl(i), d, d + 1)
//     return b
// }

// console.log(fill(i))

// #20

// let i = +prompt('input year', '')
// let n = +prompt('input year', '')
// let d = []
// const funcDi = (a, b, c) => {
//     for (k = a; k <= b; k++) {
//         c.push(k)
//     }
//     return c
// }
// let b = funcDi(i, n, d)
// console.log(b)

//#21

// let i = ['Potato', 'Repa', 'Rediska', 'Carrot'];

// let b = i.map(word => word.length)

// console.log(b)

//#26
// let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = []
// let d = +prompt('input number from 1 to 10', '')

// const func = (array, size, newarr) => {
//     for (k = 0; k < array.length; k++) {
//         newarr.push(array.slice(k, size + k));
//         k = size + k - 1
//     }
//     return newarr;
// };

// console.log(func(i, d, n))

//#27