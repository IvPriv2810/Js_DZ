// //#1

// let i = ['a', 'b', 'c'];
// let n = [1, 2, 3, 4];
// let d = i.concat(n);

// console.log(d);

// //#2

// let i = ['a', 'b', 'c'];
// let n = 1;
// let d = 2;
// let e = 3;

// let x = i.push(n, d, e);

// console.log(i);

// //#3

// let i = [1, 2, 3, 4];
// let n = i.reverse();

// console.log(n);

// //#4

// let i = [1, 2, 3, 4, 5]
// let b = i.slice(0, 3);
// console.log(b);

// //#5

// let i = [1, 2, 3, 4, 5]
// let b = i.slice(-2);
// console.log(b);

// //#6

// let i = { js: 'test', jq: 'hello', css: 'world' };
// console.log(Object.keys(i));

// // #7



// //#8

// let i = [
//     [1, 2, 3],
//     [4, 5],
//     [6]
// ];
// let sum = 0;
// for (let n = 0; n < i.length; n++) {
//     for (let j = 0; j < i[n].length; j++) {
//         sum += i[n][j];
//     }
// }
// console.log(sum);

// //#9

// let v = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [9, 8]
//     ]
// ];
// let sum = 0;
// for (var i = 0; i < v.length; i++) {
//     for (var j = 0; j < v[i].length; j++) {
//         for (var k = 0; k < v[i][j].length; k++) {
//             sum += v[i][j][k];
//         }
//     }
// }
// console.log(sum);

//#10

// let i = {
//     name: 'Ivan',
//     age: 22,
//     month: 'Ocrober',
//     year: 1999,
// }
// let k = {
//     name: 'Kate',
//     age: 22,
//     month: 'July',
//     year: 1999
// }

// for (const key in i) {
//     if (i[key] == k[key]) {
//         console.log(key + ':' + i[key])
//     }
// }