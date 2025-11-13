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





