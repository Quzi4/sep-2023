// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calc = (a, b) =>{
//     console.log(a + b)
// }
// (calc(21,49))
//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let calcR = (r) => r * r * Math.PI;
// console.log(calcR(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let calcRh =(r, h) => Math.PI * r * r * h;
// console.log(calcRh(2, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let xyz = ['hello world', true, 1000020, false, 'Ok' ]
//
// let masive = (array) =>{
//     for (const arr of array) {
//         console.log(arr)
//     }
// }
// masive(xyz)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// let newWord = (arg1) => document.write(`<p>${arg1}</p>`);
//
// newWord('hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulWithLi = (arg1)=>{
//     for (let i = 0; i < 3; i++) {
//         document.write(`<ul>
//         <li>${arg1}</li>
//                       </ul>`)
//     }
// }
// ulWithLi('Hello Man')



// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulWithTrplLi =(text, number) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulWithTrplLi('This is Sparta', 17)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let xyz = ['hello world', true, 1000020, false, 'Ok' ]
// let undefineMasive = (arr)=>{
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// undefineMasive(xyz)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 783, name: 'Pavel', age: 19},
//     {id: 222, name: 'Oleg', age: 44},
//     {id: 144, name: 'Vlad', age: 24},]
//
// let usersInfo = (array)=>{
//     for (let i = 0; i < array.length; i++) {
//         const arr = array[i];
//         document.write(`<div><p>ID: ${arr.id} Name: ${arr.name} Age: ${arr.age}</p> </div>`)
//     }
// }
// usersInfo(users)


// - створити функцію яка повертає найменьше число з масиву
// let xyc = [1020, 123, 84, 2174, 219, 11, 22 ]
// let minimalNumber = (array)=>{
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//     }
//     console.log(min)
// }
// minimalNumber(xyc)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let xyc = [1000, 120, 80, 60, 40, 20, 30 ]
// let sum = (arr)=>{
//     x = 0
//     for (const arrElement of arr) {
//         x +=arrElement;
//     }
//     console.log(x)
// }
// sum(xyc)



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let usp=[11,22,33,44]
// let swap =(arr, index0, index1)=>{
//     let x = arr[index0]
//     arr[index0] = arr[index1]
//     arr[index1] = x;
//     console.log(arr)
// }
// swap(usp, 1 ,3)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exc = (sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
        }
    }
    console.log(sumUAH / exchangeCurrency)
}
exc(37000, 'USD', 37)
exc(72000,'CAD',22)