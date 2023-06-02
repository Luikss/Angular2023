let age: number;
age = 12;

let userName: string;
userName = "name";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number
}

let person: Person;
person = {
    name: 'Max',
    age: 32
}

let course: string | number = 'React - The Complete Guide';
course += 1234;

function add(a: number, b: number): string {
    return (a + b).toString();
}

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0);

class Student {

    constructor(public firstName: string,
                public lastName: string,
                public age: number,
                private courses: string[]) {
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Andre', 'Luigesoo', 26, ['Angular']);
student.enroll('Java');
student.listCourses();

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let andre: Human;
andre = {
    firstName: 'Andre',
    age: 26,
    greet() {
        console.log('Hello!');
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;

    greet() {
        console.log('Hi!');
    }
}
