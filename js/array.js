const things = [
    {name: 'java', cost: 3000},
    {name: 'jaba', cost: 1000},
    {name: 'jabasript', cost: 50}
]

const index = things.findIndex(function(thing){
    return thing.cost == 3000
})

// const thing = things.find(function(thing){
//     return thing.cost == 3000
// })

const thing = things.find(thing => thing.cost == 3000)

console.log(things[index])
console.log(thing)

const allCost = things
    .filter(thing => thing.cost > 100)
    .reduce((acc, thing) => {
        acc += thing.cost 
        return acc
    }, 0)

console.log(allCost)