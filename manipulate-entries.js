/*
    filterEntries: filters using both key and value, passed as an array ([k, v]).
    mapEntries: changes the key, the value or both, passed as an array ([k, v]).
    reduceEntries: reduces the entries passing keys and values as an array ([k, v]).
*/
function filterEntries(obj, func){
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => func([k, v])))
}

function reduceEntries(obj, func, initialVal) {
    return Object.entries(obj).reduce((acc, [k,v]) => func(acc, [k, v]), initialVal)
}

function mapEntries(obj, func){
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])))
}
/*
    totalCalories: that will return the total calories of a cart.
    lowCarbs: that leaves only those items of the cart which have less than 50 grams of carbs after calculating the total amount.
    cartTotal: that will give you the right amount of calories, proteins and so on for each item in your grocery cart.

*/
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

function totalCalories(cart) {
 const total = reduceEntries(cart, (acc, [key, grams]) => {
        const itemNut = nutritionDB[key];
       if(!itemNut) return acc
    return acc + itemNut.calories * (grams /100)
    }, 0)
    return Math.round(total * 10)/10
}

function lowCarbs(cart) {
    return filterEntries(cart, ([key, grams]) => {
        const itemNut =nutritionDB[key];
        if(!itemNut) return
        const totalCarbs = Math.round(itemNut.carbs * (grams / 100) *10)/10
        return totalCarbs < 50;
    })
}

// function roundToDecimal(value, decimals = 1) {
//     return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
// }

function cartTotal(cart) {
    return reduceEntries(cart, (acc, [key, grams]) => {
        const itemNut = nutritionDB[key];
        if(!itemNut) return acc

        // Calculate nutritional values based on grams
       acc[key]= mapEntries(itemNut, ([nutrient, value]) => {
            return [nutrient, value * (grams / 100)];
        });

        return acc;
    }, {});
}

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))


  