// Создайте функцию mergeArrays, которая принимает два массива и возвращает 
// новый массив, содержащий все элементы из обоих массивов.
// Используйте spread оператор для объединения массивов.

const mas1 = [1, 2, 3];
const mas2 = [4, 5, 6];

function mergeArrays(mas1, mas2) {
    return [...mas1, ...mas2];
}

//const mergeArrays = (mas1, mas2) => [...mas1, mas2];

console.log(mergeArrays(mas1, mas2));


// Создайте функцию removeDuplicates, которая принимает любое количество 
// аргументов и возвращает новый массив, содержащий только уникальные
// значения. Используйте rest оператов для сбора всех аргументов в массив,
// а затем filter для определения дубликатов.

const array = [1, 2, 3, 2, 4, 1, 5];
const array1 = [6, 1, 7, 8, 3, 4, 1];

function removeDuplicates(...args) {
    return args.filter((value, index) => args.indexOf(value) === index);
}

//const removeDuplicates = (...args) => args.filter((value, index) => args.indexOf(value) === index);

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));
