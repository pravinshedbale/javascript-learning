// Type Conversion
console.log(String(123));
console.log(Number("123"));

//Type Coercion
console.log("I am " + 23 + " years old");
console.log(12 + "12"); //this trigger coercion which convert all into string
console.log(12 - "12"); //this trigger coercion which convert all into number
console.log(12 * "12"); //this trigger coercion which convert all into number
console.log(12 / "12"); //this trigger coercion which convert all into number
