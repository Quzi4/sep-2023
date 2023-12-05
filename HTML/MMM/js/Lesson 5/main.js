// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let sRec = (a, b) => {
//     console.log(a * b)
// }
// sRec(4,7)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let sCola = (r) => {
//     console.log(Math.PI * r * r)
// }
// sCola(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let sCilinder = (h, r) =>{
//     console.log(2 * Math.PI * r * r + 2 * Math.PI * r * h)
// }
// sCilinder(3, 5)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [44, 'book',false]
// let masArr = (array)=>{
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// masArr(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = () =>{
//     document.write(`<p>Hello</p>`)
// }
// paragraph()

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulWithLi = (argument) =>{
//     document.write(`<ul>`)
//         for (let i = 0; i < 3; i++) {
//             document.write(`<li>${argument}</li>`)
//         }
//     document.write(`</ul>`)
// }
// ulWithLi('jesika')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulWithLi = (argument, limit)=>{
//     document.write(`<ul>`)
//         for (let i = 0; i < limit; i++) {
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulWithLi('hello', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [44, 'bye', true, 'hello']
// let masArr = (arr) =>{
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// masArr(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// let users = [{id: 13, name: 'Vlad', age: 24},
//             {id: 14, name: 'Maryna', age: 28},
//             {id: 15, name: 'Rita', age: 9}]
// let usersArr = (user)=>{
//     for (let i = 0; i < user.length; i++) {
//         const arrayElement = user[i];
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age} </div>`)
//         console.log(arrayElement)
//     }
// }
// usersArr(users)

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [11, 6, 5, 7, -50]
// let minNum = (min) =>{
//     let minNum = min[0]
//     for (let i = 0; i < min.length; i++) {
//         const minElement = min[i];
//         if( minNum > minElement){
//             minNum = minElement
//         }
//     }
//     console.log(minNum)
// }
// minNum(numbers)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
//
// let numbers = [1, 2, 10]
// let sum = (arr) =>{
//     let sumNum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         sumNum += arrElement
//     }
//     console.log(sumNum)
// }
// sum(numbers)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swapArr = ([11,22,33, 44])
// let swap = (arr, index1, index2)=>{
//     let num = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = num;
// }
// swap(swapArr, 0,3)
// console.log(swapArr)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const currency of currencyValues) {
        if(currency.currency === currency.value){
        }
    }
    console.log(sumUAH / exchangeCurrency)
}
exchange(10000, 'USD', 37)
exchange(10000, 'EUR', 42)
exchange(10000, 'ZLT', 9)