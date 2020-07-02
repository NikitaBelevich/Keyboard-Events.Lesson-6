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
    return event.code;
}
