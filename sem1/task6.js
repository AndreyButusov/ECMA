// Напишите рекурсивную функцию sumDigits, которая принимает положительное 
// целое число в качестве аргумента и возвращает сумму его цифр.

function sumDigits(number) {
    if (number < 10) {
        return number;
    }
    return number % 10 + sumDigits(Math.floor(number / 10));
}

console.log(sumDigits(123));