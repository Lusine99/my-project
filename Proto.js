
let animal = {
  eats: true
}
let elephant = Object.create(animal);
console.log(elephant.eats);
console.log (Object.getPrototypeOf(elephant)===animal);
Object.setPrototypeOf(elephant, {});

let armenianDictionary = Object.create(null);
armenianDictionary.hello="Բարեվ";
armenianDictionary.bye ="Հաջողություն";
console.log(Object.keys(armenianDictionary))