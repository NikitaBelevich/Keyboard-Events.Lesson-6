'use strict';

// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
const input1 = document.querySelector('.i-1');
const out1 = document.querySelector('.out-1');

input1.addEventListener('keydown', (e) => {
    out1.textContent = t1(e);
});

function t1(event) {
    return event.key;
}

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
const input2 = document.querySelector('.i-2');
const out2 = document.querySelector('.out-2');

input2.addEventListener('keydown', (e) => {
    out2.textContent = t2(e);
});

function t2(event) {
    return event.keyCode;
}

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */
const input3 = document.querySelector('.i-3');
const out3 = document.querySelector('.out-3');

input3.addEventListener('keydown', (e) => {
    out3.textContent = t3(e);
});

function t3(event) {
    return (!event.code.includes('Digit')) ? true : false;
}

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
const input4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');

input4.addEventListener('keyup', function(e) {
    out4.textContent += t4(e);
});

function t4(event) {
    if (event.code.includes('Key')) {
        return event.key.toLowerCase();
    } else return '';
}

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
const input5 = document.querySelector('.i-5');
const out5 = document.querySelector('.out-5');

input5.addEventListener('keyup', function(e) {
    out5.textContent += t5(e);
});

function t5() {
    if (event.code.includes('Key')) {
        return event.key.toUpperCase();
    } else return '';
}

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
const input6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

input6.addEventListener('keyup', function(e) {
    out6.textContent += t6(e);
});

function t6(event) {
    if (event.code.includes('Key')) {
        return event.key.toLowerCase();
    } else return '';
}

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const input7 = document.querySelector('.i-7');
const out7 = document.querySelector('.out-7');

input7.addEventListener('keydown', function(e) {
    out7.textContent += t7(e);
});

function t7() {
    const a7 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    let randIndex = Math.floor(Math.random() * a7.length);
    return a7[randIndex];
}

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
const input8 = document.querySelector('.i-8');
const out8 = document.querySelector('.out-8');

input8.addEventListener('keydown', function(e) {
    out8.textContent += t8(e);
});

function t8(event) {
    let outputChar = event.key;

    switch (outputChar) {
        case 'i':
            outputChar = 1;
            break;
        case 'o':
            outputChar = 0;
            break;
        case 'l':
            outputChar = 7;
            break;
    }
    return outputChar;
}