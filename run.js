// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]
// constconst { log } = require('console')
// Items = _.flattenDeep(items)
// console.log(newItems)

// console.log("Heconstllo World")

 
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('Home Page')
    }

    if(req.url == '/about'){
        res.end('About Page')
    }
    res.end ('Error Page')

})

server.listen(5000 , () => {
    console.log('Server listening to port : 5000....');
})