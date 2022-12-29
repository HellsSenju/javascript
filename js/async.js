//асинхронность
//Event loop

// setTimeout(() => {
//     console.log('after timeout')
// }, 2500)
// возвращает объект таймаута и его можно очищать с помощью clearTimeout

// const interval = setInterval(() => {
//     console.log('after timeout')
// }, 1000)


// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('after timeout') 
// }, 2000)


//можем обернуть асинхронный код в промис
//промисы нужны для того, чтобы убрать большой уровень вложенности
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

// delay(2500)
//     .then(() => {
//         console.log('after 2 seconds')
//     })
//     .catch(err => console.error(err))
//     .finally(() => console.log('finally'))


const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

//getData().then(data => console.log(data))


async function asyncExample(){
    await delay(3000) // будем ждать пока выполниться эта строчка кода и уже потом будет переход к следующей
    const data = await getData()
    console.log('Data: ', data)
}

asyncExample()