
const User = {
    _email: 'john@google.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
tea.email="shivank@gmail.com"
console.log(tea.email);