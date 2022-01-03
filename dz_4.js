//#1 

/*const Sun = (a,b) => {
    a = +prompt('input first number', '')
    b = +prompt('input second number', '')
    let summa = a + b
    if (summa > 10) {
        console.log('true'); 
    } else if (summa < 10) {
        console.log('false')
    }
};

//#2

let i = +prompt('input number', '');

const f = (a) => {
    if (a < 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
f(i)

//#3 

let i = 'const_text_hello'

const f = (a) => {
    let z = a.replace('_', '').replace('_', '')
    let result = z.substr(0, 5) + z.substr(5, 1).toUpperCase() + z.substr(6, 3) + z.substr(9, 1).toUpperCase() + z.substr(10, 4)
    return result
}

let k = f(i)
console.log(k)

//#4

let i = prompt('input word', '')
let n = ['word', 'text', 'good', 'job', 'false', 'true', 'game'];

const f = (a, b) => {
    for (k = 0; k < b.length; k++) {
        if (a == b[k]) {
            console.log(true)
        } else {
            console.log(false)
        }
    }

}
f(i, n)

//#5

let i = prompt('input value', '')
let n = +prompt('input number', '')
let d = []
d.length = n
d.fill(i)
console.log(d)

//#6

let date = new Date();
console.log(date)
let day = date.getDay()
console.log(day)
let i = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const f = (a, b) => {
    for (k = 0; k < a.length; k++) {
        if (b == k) {
            console.log(a[k].italics())
        }
    }
}
f(i, day)

//#7

let i = +prompt('input number>1000', '')
let n = 0
const f = (a, b) => {
    for (let k = a; k > 50; k = k / 2) {
        b++
        console.log(k)
    }
    console.log(b)

}
f(i, n)*/