import fs from 'fs'

const freeProxies = [

]

let lastRandNumForFreeProxies = 0


fs.readFile('proxies.txt', 'utf8', function(err,data) {
    if(err) throw err;
    console.log(data)
})


let generateRandNum  = function (proxyArray) {
    return Math.floor(Math.random() * proxyArray.length)
}


let rotateProxies = function () {
    let randNum = generateRandNum(freeProxies)
    if (lastRandNumForFreeProxies != randNum) {
        lastRandNumForFreeProxies = randNum
        return freeProxies[randNum]
    } else {
        randNum = generateRandNum(freeProxies)
        lastRandNumForFreeProxies = randNum
        return freeProxies[randNum]
    }
}


export {
    rotateProxies
}