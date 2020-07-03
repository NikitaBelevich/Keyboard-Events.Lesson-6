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
