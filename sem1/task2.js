// Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве
// аргумента и возвращает новый массив, содержащий только четные числа.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers(args) {
    return args.filter(num => num % 2 === 0);
}

// const getEvenNumbers = (args) => args.filter(num => num % 2 === 0);

console.log(getEvenNumbers(arr));


// Напишите функцию calculateAverage, которая принимает массив чисел
// в качестве аргумента и возвращает среднее значение этих чисел.

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, item) => acc + item, 0);
    return sum / numbers.length;
  }

console.log(calculateAverage(arr));


// Напишите программу capitalizeFirstLetter, которая принимает строку в качестве аргумента
// и возвращает новую строку, в которой первая буква каждого слова является заглавной.

function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ')
}

console.log(capitalizeFirstLetter('hello misha and petya'));