
import monitorAPI  from './libs/monitorAPI.js'
import Workers from './libs/workers.js'

let readyWorkers = []

Workers(async function(pubsub) {

    pubsub.subscribe('ready_worker', function (data) {
        console.log(`Worker ${data.workerName} is ready`)
        if(readyWorkers.length == 0) {
            setTimeout(function (pubsub) {
                pubsub.publish('monitor_api')
            }, 50000, pubsub)
        }
        readyWorkers.push(data.workerName)
    })

    pubsub.publish('start_worker', {
        workerName: 'worker1',
        userEmail: 'monyo.kapa88@gmail.com',
        userPassword: 'QWERT12345',
        proxyServer: 'deu.resi.dreamproxies.io:26371',
        proxyUser: '6M1mec8j',
        proxyPassword: 'Q2W2Y50dh7RJDfP6NaCg9u9n66tRdpykRLO74Ob23hBoZryeLYc6Q1qdlrXgPB2MY3xji-3VDrjf4P4Z'
    })

    pubsub.publish('start_worker', {
        workerName: 'worker2',
        userEmail: 'nemeth.judit8806@gmail.com',
        userPassword: 'QWERT12345',
        proxyServer: 'deu.resi.dreamproxies.io:26329',
        proxyUser: '6M1mec8j',
        proxyPassword: 'Q2W2Y50dh7RJDfP6NaCg9u9n66tRdpykRLO74Ob23hBoZryeLYc6Q1qdlrXgPB2MY3xji-4HlCrWPSq4'
    })

    monitorAPI(pubsub, async function(found) {
        console.log(found)
        try {
            let readyWorker = readyWorkers.shift()
            if (readyWorker) {
                pubsub.publish(`${readyWorker}_checkout`, {
                    found: found
                })
            } else {
                console.log('Workers unavailabe to handle discovered product...')
            }
        } catch (error) {
            console.log(error)
        }
    })
})





