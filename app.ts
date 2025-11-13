interface IUser {
    id: number;
    name: string;
    email: string;
  Tel: number,
  age: number
}

const user: IUser = {
    id: 1,
    name: "John Doe",
    email: "pin4eva@gmail.com",
    Tel: 1234567890,
    age: 30
}

console.log(user);

const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Tablet", price: 299.99 }
];

const company = {
    name: "Tech Corp",
    location: "Silicon Valley",
    employees: 5000
};

const allData = [company, ...products];

console.log(allData);

const workers = ['Alice', 'Bob', 'Charlie', 'David'];

const [firstWorker, secondWorker, ...otherWorkers] = workers;
console.log(firstWorker);
console.log(secondWorker);
console.log(otherWorkers);


const person = { name: 'John', age: 30, city: 'New York' };
    const { age, ...details } = person;
    console.log(age);
    console.log(details);


// Define the interface
interface Students {
    id: number;
    name: string;
    grade: number | string;
    age: number;
    score: number;
    gender: string;
}

// Define the student object
const student: Students = {
    id: 101,
    name: "Alice Smith",
    grade: 4,
    age: 20,
    score: 885,
    gender: "Female",
};

// Define the courses array
const courses: string[] = ["Mathematics", "Physics", "Chemistry", "Biology"];

const studentData = { ...student, courses: courses };

// Log the studentData object
console.log(studentData);

console.log("Courses offered:");
courses.map((course, index) => {
    console.log(`${index + 1}. ${course}`);
});



