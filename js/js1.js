const mainName = 'jaba'
const dopName = 'sript'
const days = 5

console.log('')

// const areYouAgree = prompt(mainName + ' ' + dopName + ' : ' + ' правильно?')
// alert(areYouAgree)

//------------------------------------------------------------------------------

const isProgger = true
console.log(typeof isProgger) //выводит тип

//Объекты
const someShit = {
    mainName: 'jaba',
    dopName: 'script',
    daysUntil: 5,
    likelyMark: [4,5],
    isShit: true,
    printShit: function(){
        console.log('shit shit shit')
    }
}
console.log(someShit) //выведет все
console.log(someShit.mainName) //выведет jaba
console.log(someShit['dopName']) //выведет script
console.log(someShit.daysUntil) //выведет 5
console.log(someShit.isShit) //выведет true
someShit.printShit(); //выведет shit shit shit

someShit.daysUntil = 4 // изменение ключа объекта
someShit.isFuckingShit = true // Добавление ключа к объекту

console.log(someShit) //выведет все
//----------------------------------------------------------------------------------
const name = 'жаба срипт'
const output = 'Привет, меня зовут ' + name + ' и до меня осталось ' + days + ' дней.'
const outputAnother = `Привет, меня зовут ${name} и до меня осталось ${days < 2 ? 'мало ' : 'более менее '} дней`
console.log(output)
console.log(outputAnother)

//----------------------------------------------------------------------------------

//Function Declaration - можем обращаться к  функции когда захотим (например, обращение будет выше, чем объявление)
function greet(name){
    console.log('hello - ', name )
}

//Function Expression - невозможно вызвать до объявления, но у этого метода есть преимущества, связанные с синтаксисом
const greet2 = function greet2(name){
    console.log('hello 2 - ', name )
}

//анонимная функция
// let counter = 0
// const interval = setInterval(function(){
//     if(counter == 5)clearInterval(interval)
//     else console.log(++counter)
// }, 1000)


//стрелочная функция
const arrow = (name) => console.log('hello - ', name )

arrow('jaba')

//параметры по умолчанию
const sum = (a = 2, b = a * 2) => a + b
 
function printAll(...all){
    console.log(all)
}

printAll(1,2,3,4)
printAll(1,2,3,4,5,6,7,8)

//замыкание
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('jaba')
console.log(logWithLastName('sript')) //сохраняется имя жаба, а вот остальное меняется
console.log(logWithLastName('script'))

