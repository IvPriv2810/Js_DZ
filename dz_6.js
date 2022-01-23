//#1
let first = document.querySelector('.first')

first.addEventListener('click', First => {
    alert('Welcome to the club')
});

//#2

let second = document.querySelector('.second')

second.addEventListener('mouseover', Second => {
    alert('You are the best!!!')
});

//#3

let third = document.querySelector('.third')

third.addEventListener('dblclick', Third => {
    alert('The Weekend!')
});

//#4

let fourth = document.querySelector('.fourth')

fourth.addEventListener('mouseout', Fourth => {
    alert('Hi Man')
});

//#5

let elem = document.querySelector('.elem')
let dz5 = document.querySelector('.dz5')

elem.addEventListener('click', Elem => {
    alert(dz5.value)
});

//#6

let elem2 = document.querySelector('.elem2')
let dz6 = document.querySelector('.dz6')

elem2.addEventListener('click', Elem2 => {
    dz6.value = 'Forget me'
})

//#7

let elem3 = document.querySelector('.elem3')
let img = document.querySelector('.img')
elem3.addEventListener('click', Elem3 => {
    img.src = 'i.jpg'
})

//#9 

let dz9 = document.querySelector('.dz9')

dz9.addEventListener('click', Dz9 => {
    dz9.value = 'Ow sh**, here we go again'
})

//#11

let dz11 = document.querySelector('.dz11')

function Dz11() {
    this.value = 'yeeeeh!!!!!'
}

dz11.addEventListener('click', Dz11)

//#12

let dz12 = document.querySelector('.dz12')

function Dz12() {
    this.disabled = true
    this.value = 'stop push'
}

dz12.addEventListener('click', Dz12)

//#13
let img2 = document.querySelector('.img2')

function Dz13() {
    this.src = 'i.jpg'
}

function Dz131() {
    this.src = 'i (1).jpg'
}

img2.addEventListener('mouseover', Dz13)
img2.addEventListener('mouseout', Dz131)

//#14

let dz14 = document.querySelector('.dz141')
let dz1411 = document.querySelector('.dz1411')

function Dz14() {
    dz1411.classList.add('dz14')
}

dz14.addEventListener('click', Dz14)

//#15 

let dz151 = document.querySelector('.dz151')
let dz152 = document.querySelector('.dz152')
let dz153 = document.querySelector('.dz153')

const funcH = () => {
    dz153.type = 'hidden'
}
const func = () => {
    dz153.type = 'text'
}

dz152.addEventListener('click', funcH)
dz151.addEventListener('click', func)

//#16 

let dz16 = document.querySelector('.dz16')
let dz161 = document.querySelector('.dz161')
let dz162 = document.querySelector('.dz162')

function Dz16() {
    dz16.classList.add('dz161')
}

dz162.addEventListener('click', Dz16)

//#17

let dz17 = document.querySelector('.dz17')
let dz171 = document.querySelector('.dz171')

function Dz17() {
    dz17.disabled = true
    dz17.value = 'do not push me'
    dz171.type = 'submit'
}

function Dz171() {
    dz171.type = 'hidden'
    dz17.disabled = false
    dz17.value = 'push me again'
}

dz17.addEventListener('click', Dz17)
dz171.addEventListener('click', Dz171)

//#18

let dz18 = document.querySelector('.dz18')

function Dz18() {
    dz18.value++
}

dz18.addEventListener('click', Dz18)

//#19

let dz191 = document.querySelector('.dz191')
let dz192 = document.querySelector('.dz192')
let dz1921 = document.querySelector('.dz1921')
dz191.append(dz192)

function Dz19() {
    dz191.prepend(dz192)
    dz192.classList.add('dz1921')
    dz192.classList.remove('dz192')
}

dz192.addEventListener('click', Dz19);

//#21 

let dz211 = document.querySelector('.dz211')
let dz212 = document.querySelector('.dz212')
let dz213 = document.querySelector('.dz213')

function Dz21() {
    if (dz212.after(dz211)) {
        dz212.before(dz211)
    }
}
dz213.addEventListener('click', Dz21)

//#22-23

let dz221 = document.querySelector('.dz221')
let dz222 = document.querySelector('.dz222')
let dz223 = document.querySelector('.dz223')

function Dz22() {
    if (+dz221.value) {
        dz222.value = dz221.value ** 2
    } else {
        alert('Crazy, input number pls')
    }
}

dz223.addEventListener('click', Dz22)

//#24

let dz24 = document.querySelector('.dz24')
let dz241 = document.querySelector('.dz241')

function Dz241() {
    dz24.style.cursor = 'not-allowed'
}


function Dz24() {
    dz24.disabled = true
    Dz241()
}

dz24.addEventListener('click', Dz24)

//#25

let field = document.querySelector('.field')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let del = document.querySelector('.del')
let multi = document.querySelector('.multi')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let zero = document.querySelector('.zero')

function Dz25() {
    field.value + plus.value
}

plus.addEventListener('click', Dz25)