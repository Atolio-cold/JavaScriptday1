console.log("Hello world")

console.log(2+2);

console.warn("wrong password");

console.error("bad answer");

const people = [
    { name: "Antek",age: 15 },
    {name: "Łucja", age: 15}
];
console.table(people)

console.time("test");
for(let i = 0; i <1000; i++) {}
console.timeEnd("test")