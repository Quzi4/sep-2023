
// let arr = ['katya','oleg','masha','nikita','petro', 'syzana','kot','sobaka','holub','slon']
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])


// let book1 = {
//     title: 'starwars',
//     pageCount: 1200,
//     genre: 'fantasy',
// }
// // console.log(book1)
//
// let book2 = {
//     title: 'War and Peace',
//     pageCount: 999,
//     genre: 'novel',
// }
// // console.log(book2)
//
// let book3 = {
//     title: 'warcraft ',
//     pageCount: 347,
//     genre: 'adventures',
// }
// console.log(book3)


// let kniga1 = {
//     title: 'starwars',
//     pageCount: 1200,
//     genre: 'fantasy',
//     authors: [{name: 'Viktor petrovich', age: 99}],
// }
// console.log(kniga1)

// let kniga2 = {
//     title: 'War and Peace',
//     pageCount: 999,
//     genre: 'novel',
//     authors: [{name: 'Valentin Zirka', age: 50}],
// }
// console.log(kniga2)
//

// let kniga3 = {
//     title: 'warcraft ',
//     pageCount: 347,
//     genre: 'adventures',
//     authors: [{name: 'Salmon Olegovich', age: 32}],
// }
// console.log(kniga3)


// let users = [
//     {name: 'kirill', username: 'kir1337', password: 'qwerty12345'},
//     {name: 'maksim', username: 'fujiOleg143', password: 'Chadj2303'},
//     {name: 'Egorik', username: 'gorKa02002', password: 'SanCHiL'},
//     {name: 'Maryna', username: 'NorthMar', password: 'A1a9a9a2'},
//     {name: 'Vlad', username: 'wiskie', password: 'vlad009231'},
//     {name: 'Sergiy', username: 'Serjjj', password: 'wolf23dj'},
//     {name: 'Andriy', username: 'Dron777', password: 'SnoppyDog'},
//     {name: 'Alex', username: 'Busik', password: 'SanBusanNn'},
//     {name: 'Elena', username: 'Lenchik', password: 'PrivetOOO'},
//     {name: 'Yuriy', username: 'VeloS', password: 'Startjjd'},
// ]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)






// let x = 2;
// if (x != 0) {
//     console.log('Вірно');
// } else if(x == 0) {
//     console.log('Невірно');
// }


// let time = 21;
// if (time > 0 && time < 15 ) {
//     console.log('First half')
// } else if (time > 15 && time < 30){
//     console.log('Second half')
// } else if (time > 30 && time < 45){
//     console.log('Third half')
// } else if (time > 45 && time < 59){
//     console.log('Fourth half')
// }

// let time = 47;
// if (time > 0 ) {
//     if (time < 15) {
//         console.log('first half')
//     }
//     }  if (time > 15) {
//      if (time < 30) {
//         console.log('second half')}
//     }
//     if (time > 30){
//         if (time < 45){
//             console.log("third half")}
//     }  if ( time > 45){
//         if ( time < 59 ){
//             console.log('Fourth half')
//         }
//     }

// let day = 29;
// if ( day > 1 && day < 10 ){
//     console.log('First decade')
// } else if ( day > 11 && day < 20 ){
//     console.log('Second decade')
// } else if ( day > 21 && day < 31){
//     console.log('Third decade')}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let day = prompt('Розклад на який день вас цікавить?');
// switch (day){
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday')
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
// }


// let a = 322;
// let b = 17;
// if(a >= b){
//     console.log(a)
// } else if (a <= b ){
//     console.log(b)
// }

// let a = 10;
// let b = 10;
// if(a >= b){
//     console.log(a)
// } else if (a <= b ){
//     console.log(b)
// }



// let x = '';
// if (x === '' || x === 'number'){
//     console.log('default')
// }

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер-Пупер');
} if(coursesAndDurationArray[1].monthDuration >5) {
    console.log('Супер-Пупер');
}if(coursesAndDurationArray[2].monthDuration >5) {
    console.log('Супер-Пупер');
} if(coursesAndDurationArray[3].monthDuration >5) {
    console.log('Супер-Пупер');
} if(coursesAndDurationArray[4].monthDuration >5) {
    console.log('Супер-Пупер');
} if(coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер-Пупер');
}

