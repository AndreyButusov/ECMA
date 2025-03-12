// Напишите функцию createPasswordChecker, которая принимает допустимую длину 
// пароля в качестве аргумента и возвращает функцию для проверки введенного пароль. 
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина 
// соответствует допустимой, и false в противном случае.

function createPasswordChecker(lengthPassword) {
    const trueLength = lengthPassword;
    return function(password) {
        if (password.length === trueLength) {
            return true;
        } else {
            return false;
        }
    }
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));