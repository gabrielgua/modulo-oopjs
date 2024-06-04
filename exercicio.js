const Gender = {
    M: 'Male',
    F: 'Female',
    O: 'Other'
}

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    let _gender = gender;

    this.getGender = () => {
        return _gender;
    } 

    this.setGender = () => {
        if (typeof gender === Gender) {
            _gender = gender;
        }
    } 

    this.about = () => {
        console.log(`${this.name}, ${this.getGender()} - ${this.age}yrs.`);
    }
}

const person = new Person('Gabriel', 22, Gender.M);
person.about();