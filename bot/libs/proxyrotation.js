const freeProxies = [

]

const paidProxies = [
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-iD37eQWS',
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-h63PGUCv',
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-ExoQ7bKN',
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-gpeTDs56',
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-Pnpw4lRK',
    'basic.dreamproxies.io:31112:yzor1c6scv:Bj9VYo37X7JbdEOs_country-Germany_session-VwgV6ax8'
]

let lastRandNumForPaidProxies = 0

let lastRandNumForFreeProxies = 0

let generateRandNum  = function (proxyArray) {
    return Math.floor(Math.random() * proxyArray.length)
}


// Rotate free proxies
let rotateFreeProxies = function () {
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

// Rotate paid proxies
let rotatePaidProxies = function () {
    let randNum = generateRandNum(paidProxies)
    if (lastRandNumForPaidProxies != randNum) {
        lastRandNumForPaidProxies = randNum
        return paidProxies[randNum]
    } else {
        randNum = generateRandNum(paidProxies)
        lastRandNumForPaidProxies = randNum
        return paidProxies[randNum]
    }    
}


module.exports = {
    rotateFreeProxies,
    rotatePaidProxies
}