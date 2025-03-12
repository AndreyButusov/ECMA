// Напишите функцию createGreeting, которая принимает имя пользователя и 
// возвращает функцию, которая будет выводить приветствие с использованием
// этого имени.

function createGreeting(str) {
    return function() {
        console.log(`Hello, ${str}!`);
    }         
}

const greeting = createGreeting('Petya');
greeting();