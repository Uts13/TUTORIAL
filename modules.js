//modulees

// const john = 'john'
// const peter  = 'peter'

// const SayHi = (name) => {
//     console.log(`Hello There ${name}`)
// }

// SayHi('susan')
// SayHi(john)
// SayHi(peter)
const Names = require('./Names')
const SayHi = require('./4- functon')

SayHi('susan')
SayHi(Names.john)
SayHi(Names .peter)

require('./mind-grenade')