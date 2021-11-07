function fibonacci(firstNumber, secondNumber, number) {
    if (number === 2) {
        return secondNumber;
    } else if (number === 1) {
        return firstNumber;
    } else {
        let f0 = firstNumber;
        let f1 = secondNumber;
        let f2 = "";

        for (let i = 2; i < number; i++) {
            f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
        return f2;
    }
}

function fibonacciMinus(firstNumber, secondNumber, number) {
    if (number === 0) {
        return secondNumber;
    } else {
        let f0 = firstNumber;
        let f1 = secondNumber;
        let f2 = "";

        for (let i = 2; i < number; i++) {
            f2 = f0 - f1;
            f0 = f1;
            f1 = f2;
        }
        return f2;
    }
}

let firstNumber = +prompt("Введи первое число");
let secondNumber = +prompt("Введи второе число");
let number = +prompt("Введи число для Фибоначчи");

if (firstNumber > 0 && secondNumber > 0) {
    alert(
        `Обобщенное число Фибоначчи: ${fibonacci(
            firstNumber,
            secondNumber,
            number
        )}`
    );
} else {
    alert(
        `Обобщенное число Фибоначчи: ${fibonacciMinus(
            firstNumber,
            secondNumber,
            number
        )}`
    );
}
