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








