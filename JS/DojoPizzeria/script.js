// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

function pizzaOven(crustType, sauceType,cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}

    console.log(pizzaOven("napoletana", "yellow tomatoes", "fiordilatte",["basilico", "olio"]));

    console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]))

    console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom","olives", "onions"]))

    console.log(pizzaOven("romana", "tomato sauce", ["mozzarella"], ["mushroom","sausage"]))

    console.log(pizzaOven("napoletana", "no sauce", ["mozzarella di bufala"], ["mortadella","pesto", "pistacchi"]))
    

//-------------------------------------------------------------------------------------------------------------------

// var pizzaIngredients = {
//     "crustType" : ["napoletana", "romana" , "deep dish" , "gluten free"],
//     "sauceType" : ["red tomato" , "yellow tomato" , "datterini", "no sauce"],
//     "cheeses" : ["mozzarella", "mozzarella di bufala" , "fiordialtte", "burrata"],
//     "toppings" : ["meatballs", "onions" , "sausage" , "pepperoni" , "zucchine", "tuna" , "mushrooms" , "olives"]
// }

// function randomPizza (crustType, sauceType, cheeses, toppings) {
//     console.log(Math.floor(Math.random() * crustType.length ))
//     console.log(Math.floor(Math.random() * sauceType.length ))
//     console.log(Math.floor(Math.random() * cheeses.length ))
//     console.log(Math.floor(Math.random() * toppings.length ))
// }
// console.log(randomPizza());