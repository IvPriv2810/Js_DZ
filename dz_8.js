let ndate = new Date()
let now = ndate.getDate()
let i = prompt('input your email', '')
let n = prompt('input your phone number', '')
let d = +prompt('input today date', '')
let e = prompt('input your domane', '')

class Validator {
    constructor(email, phone, date, domane) {
        this.email = email
        this.phone = phone
        this.date = date
        this.domane = domane
    }
}

class EmailValidator extends Validator {

    isEmail() {
        if (this.email.includes('@')) {
            console.log('this email is corret: ' + this.email)
        } else {
            console.log('incorrect Email')
        }
    }
}

class DomanePhoneDate extends EmailValidator {
    isDate() {
        if (this.date == now) {
            console.log('correct')
        } else {
            console.log('input correct date')
        }
    }

    isPhone() {
        if (this.phone.includes('+375')) {
            console.log('cool phone number')
        } else {
            console.log('input BLR phone number')
        }
    }

    isDomane() {

    }
}

let ivan = new DomanePhoneDate(i, n, d, e)


console.log(ivan)
ivan.isEmail(i)
ivan.isDate(d)
ivan.isPhone(n)