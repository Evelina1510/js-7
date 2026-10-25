let numbers = [5, 8, 3];
numbers[1] = 10;
console.log(numbers);


let fruits = ["яблуко", "апельсин", "банан"];
fruits.push("груша");
console.log(fruits);


let numbers2 = [2, 4, 6, 8];
let sum = 0;
for (let number of numbers2) {
    sum = sum + number;
}
console.log(sum);



let fiveNumbers = [1, 3, 5, 7, 9];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}



let animals = ["лисиця", "панда", "кіт", "бегемот", "лев"];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > 5) {
        console.log(animals[i]);
    }
}



let maxNumbers = [66, 5, 33, 7, 89, 23, 99, 2, 67, 9];
let max = maxNumbers[0];
for (let number of maxNumbers) {
    if (number > max) {
        max = number;
    }
}
console.log(max);



let evenNumbers = [1, 4, 7, 8, 10, 12, 16, 19, 29, 25];
for (let number of evenNumbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}