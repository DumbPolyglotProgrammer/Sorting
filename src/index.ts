import Numbers from "./Numbers";
import Characters from "./Characters";

const numbers = new Numbers([10, 0, 5, -10, -5]);
numbers.sort();
console.log(numbers.data);

const characters = new Characters("Hitanshu");
characters.sort();
console.log(characters.data);
