let date = new Date()
let newdate = date.getFullYear()
let i = prompt('Write your name', '')
let n = prompt('Write your surname', '')
let d = +prompt('Write your year of admission', '')
let e = newdate - d

class student {
    constructor(name, surname, year) {
        this.name = name,
            this.surname = surname,
            this.year = year
    }

    get fullcourse() {
        return `New student is '${this.name} ${this.surname}' His year of admission ${this.year}`
    }

    get full() {
        return x
    }
}

const func = (a) => {
    if (a < 5) {
        return 'He study on ' + a + ' course'
    } else {
        return 'He is already graduated'
    }
}
let x = func(e)

let newstudent = new student(i, n, d)
let studname = 'Name: ' + newstudent.name
let studsurname = 'Surname: ' + newstudent.surname
let studyear = 'year of admision: ' + newstudent.year

console.log(newstudent.fullcourse)
console.log(newstudent.full)
console.log(studname)
console.log(studsurname)
console.log(studyear)