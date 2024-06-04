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
        console.log(`Person: ${this.name}, ${this.getGender()} - ${this.age}yrs.`);
    }
}

function Teacher(name, age, gender, subjects) {
    Person.call(this, name, age, gender);
    this.subjects = subjects;

    this.about = () => {
        console.log(`Teacher: ${this.name}, ${this.getGender()} - ${this.age}yrs, Subjects: [${this.subjects}]`);
    }
}

function Student(name, age, gender, hobbies) {
    Person.call(this, name, age, gender);
    this.hobbies = hobbies;

    this.about = () => {
        console.log(`Student: ${this.name}, ${this.getGender()} - ${this.age}yrs, Hobbies: [${this.hobbies}]`);
    }
}

const person = new Person('Gabriel', 22, Gender.M);
const teacher = new Teacher('Maria', 42, Gender.F, ['history', 'science']);
const student = new Student('João', 15, Gender.M, ['gym', 'videogames']);

person.about();
teacher.about();
student.about();

// node exercicio.js 
// Person: Gabriel, Male - 22yrs.
// Teacher: Maria, Female - 42yrs, Subjects: [history,science]
// Student: João, Male - 15yrs, Hobbies: [gym,videogames]