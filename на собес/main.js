// сумма элементов массива
/* const array = [1, 2, 3, 4, 7, 9, 10];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum); */

// сумма элементов массива
/* const array = [1, 2, 3, 4, 7, 9, 10];
let sum = array.reduce(
    (prevnum, currentnum) => prevnum + currentnum,
    0 знач по дефолту чтобы при пустом [] не было ошибки 
);
console.log(sum); */

//максимальный и минимальный элемент массива
/*const array = [1, 2, 3, 4, 7, 9, 10];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max); */

//максимальный и минимальный элемент массива
/*const array = [12, 1, 2, 3, 4, 7, 9, 10];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    array[i] > max ? (max = array[i]) : max;
}
console.log(max);*/

//максимальный и минимальный элемент массива
/*const array = [1, 12, 2, 3, 4, 7, 9, 10];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    max = Math.max(array[i], max);
}
console.log(max); */

//максимальный и минимальный элемент массива
/*const array = [1, 12, 2, 3, 4, 7, 9, 10];
let max = array.reduce((acc, next) => (current > next ? current : next)); //или => Math.max(acc,next)
console.log(max); */

//максимальный и минимальный элемент массива
/*const array = [1, 12, 2, 3, 4, 7, 9, 10];
array.sort((x1, x2) => x1 - x2); //(function( a, b ) {return b - a})
let max = array[array.length - 1]; array.pop() позволяет удалить последний элемент из массива и возвратить его значение
console.log(max);*/

//максимальный и минимальный элемент массива
/*const array = [1, 12, 2, 3, 4, 7, 9, 10];
console.log(Math.max(...array));*/

//второе и третье максимальное значение массива перебрав его всего один раз
const array = [1, 12, 2, 3, 4, 7, 9, 10, 15, 20];
let max = array[0];
let second = array[0];
let third = array[0];
for (let i = 0; i < array.length; i++) {
    console.log("Now value", array[i]);
    if (array[i] > max) {
        third = second;
        second = max;
        max = array[i];
        console.log("max", max);
        console.log("sec", second);
    }
    if (array[i] < max && array[i] > second) {
        third = second;
        second = array[i];
        console.log("sec", second);
        console.log("third", third);
    }
    if (array[i] < second && array[i] > third) {
        third = array[i];
        console.log("third", third);
    }
}
console.log(max, second, third);

//дубль массива
/*const doublearray = (arre) => [...arre, ...arre];
let result = doublearray([1, 2, 3, 4, 5]);
console.log(result); */