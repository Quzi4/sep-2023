// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let newUser1 =  new User(0, 'Mark', 'Olegovich', '666333777@ukr.net', 380734467715 );
let newUser2 =  new User(1, 'Tolik', 'Grigorievich', 'dontsleepl@gmail.com', 380685422202 );
let newUser3 =  new User(2, 'Katya', 'Petrovna', 'ultrabomba@meta.ua', 380936802244 );
let newUser4 =  new User(3, 'Nastya', 'Kamarjobovna', 'nastik2109@gmail.com', 380957771122 );
let newUser5 =  new User(4, 'Oleg', 'Aleksandrovich', 'Olejkatop@ukr.net', 380501500202 );
let newUser6 =  new User(5, 'Margo', 'Vladislavovna', 'Ritapr@outlook.com', 380734115575 );
let newUser7 =  new User(6, 'Natasha', 'Maximovna', 'Nataliya1988@gmail.com', 380739821740 );
let newUser8 =  new User(7, 'Semen', 'Semenovich', 'semasema777@ukr.net', 380985310101 );
let newUser9 =  new User(8, 'Yudjin', 'Sergeyevich', '0837662188ukr.net', 380677344331 );
let newUser10 = new User(9, 'Marina', 'Pavlovna', 'Mar100500@ukr.net', 380636072699 );

let users = [newUser1, newUser2, newUser3, newUser4, newUser5, newUser6, newUser7, newUser8, newUser9, newUser10];
// console.log(users);
//
//

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let fileredId = users.filter(users => {
//     if(users.id % 2 === 0){
//         console.log(users.id)
//     }
// })
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortId = users.slice();
//     sortId.sort((a,b)  => a.id - b.id);
// console.log(sortId);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order){
        this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order || []
    }
}
//
// let client1 = new Client(121, 'viktor', 'petrovich', '68022244@ukr.net', +380636072263, [{product: 'item', quality: 1}])
// let client2 = new Client(122, 'max', 'sidral', 'uahee4@ukr.net', 380672072263, [{product: 'item', quality: 23}])
// let client3 = new Client(131, 'yuriy', 'Konstantinovich', 'sizua@gmail.com', 380445224242, [{product: 'item', quality: 13}])
// let client4 = new Client(141, 'Segiy', 'Sergiyovuch', 'serj@ukr.net', 380676052205, [{product: 'item', quality: 2}])
// let client5 = new Client(111,  'Marina', 'Pavlovna', 'Mar100500@ukr.net', 380636072699 ,[{product: 'item', quality: 3}])
// let client6 = new Client(1221, 'Yudjin', 'Sergeyevich', '0837662188ukr.net',380677344331, [{product: 'item', quality: 7}])
// let client7 = new Client(115, 'Semen', 'Semenovich', 'semasema777@ukr.net', 380985310101,[{product: 'item', quality: 11}])
// let client8 = new Client(101, 'Natasha', 'Maximovna', 'Nataliya1988@gmail.com', 380739821740, [{product: 'item', quality: 8}])
// let client9 = new Client(107, 'Katya', 'Petrovna', 'ultrabomba@meta.ua', 380936802244, [{product: 'item', quality: 4}])
// let client10 = new Client(107, 'Mark', 'Olegovich', '666333777@ukr.net', 380734467715, [{product: 'item', quality: 9}])
// let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]
// // console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortOrder = clients.slice();
// sortOrder.sort((a,b) => a.order[0].quality - b.order[0].quality);
//
// console.log(sortOrder)

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} `);
//     };
//     this.info = () => {
//         console.log(`
//         Модель - ${this.model}
//         Виробник - ${this.manufacturer}
//         Рік випуску - ${this.year}
//         Максимальна швидкість - ${this.maxSpeed}
//         Обьєм двигуна - ${this.engine}
//         `);
//     }
//     this.increaseMaxSpeed = (newSpeed) =>{
//         console.log(`Нова максимальна швидкість - ${this.maxSpeed + newSpeed} `);
//     }
//     this.changeYear = (newValue) =>{
//        this.year = newValue;
//         console.log(`Рік випуску - ${newValue}`)
//     }
//     this.addDriver = (driver) =>{
//         this.addDriver = driver;
//         console.log(`Новий водій авто - ${driver}`);
//     }
// }
//
// let myCar = new Car('audi', 'germany', 2015, 260, 2.0);
// console.log(myCar)
// myCar.drive()
// myCar.info()
// myCar.increaseMaxSpeed(20)
// myCar.changeYear(2016)
// let driver = 'Vlad';
// myCar.addDriver(driver)
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     // -- drive () - яка виводить в консоль ` їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
//     }
//     // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info(){
//         console.log(`
//     Модель - ${this.model}
//     Виробник - ${this.manufacturer}
//     Рік випуску - ${this.year}
//     Максимальна швидкість - ${this.maxSpeed}
//     Обьєм двигуна - ${this.engine}
//          `);
//     }
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed){
//         console.log(`Нова максимальна швидкість - ${this.maxSpeed + newSpeed} `);
//     }
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue){
//         this.year = newValue
//         console.log(`Рік випуску - ${newValue}`)
//     }
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver){
//         console.log(`Новий водій ${driver}`)
//     }
// }
//
//
// // let newCar1 = new Car('Audi A4', 'Germany', 2015, 260, 2.0)
//
// newCar1.drive()
// newCar1.info()
// newCar1.increaseMaxSpeed(10)
// newCar1.changeYear(2015)
// newCar1.addDriver('Vlad')

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Girls(name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let princess1 = new Girls('Marina', 22, 37)
let princess2 = new Girls('Katya', 23, 36)
let princess3 = new Girls('Alexandra', 24, 38)
let princess4 = new Girls('Sveta', 25, 40)
let princess5 = new Girls('Lena', 26, 35)
let princess6 = new Girls('Olya', 27, 39)
let princess7 = new Girls('Yulia', 20, 37)
let princess8 = new Girls('Margo', 33, 35)
let princess9 = new Girls('Natasha', 25, 36)
let princess10 = new Girls('Lubov', 35, 38)

let princess = [princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10]

console.log(princess);
//
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Boys(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;

    this.findMatchingGirl = function (girlsArray) {
        for (let i = 0; i < girlsArray.length; i++) {
            if (girlsArray[i].footSize === this.footSize) {
                return girlsArray[i];
            }
        }
        return null;
    }
}
let prince1 = new Boys('Tolik', 21, 37)

let foundGirl = prince1.findMatchingGirl(princess);
console.log(foundGirl)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// function Girls(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let princess7 = new Girls('Yulia', 20, 37);
// let princess1 = new Girls('Marina', 22, 37);
// let princess2 = new Girls('Katya', 23, 36);
// let princess3 = new Girls('Alexandra', 24, 38);
// let princess4 = new Girls('Sveta', 25, 40);
// let princess5 = new Girls('Lena', 26, 35);
// let princess6 = new Girls('Olya', 27, 39);
// let princess8 = new Girls('Margo', 33, 35);
// let princess9 = new Girls('Natasha', 25, 36);
// let princess10 = new Girls('Lubov', 35, 38);
//
// let princess = [ princess7, princess2, princess3, princess4, princess5, princess6, princess1, princess8, princess9, princess10];
//
// console.log(princess);
//
// function Boys(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
//     this.findMatchingGirl = function(girlsArray) {
//         return girlsArray.find(girl => girl.footSize === this.footSize);
//     };
// }
//
// let prince1 = new Boys('Tolik', 21, 37);
//
// let foundGirl = prince1.findMatchingGirl(princess);
//
// console.log(foundGirl);