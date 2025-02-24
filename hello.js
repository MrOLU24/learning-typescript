// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//   }
//   greet("Brendan");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
var hello = "Hello World 2";
console.log(hello);
