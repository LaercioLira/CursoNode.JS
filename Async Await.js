// Async: Await

function evaluateNumber() {
    let t= 2

    return new Promise(resolve => {
        setTimeout(()=> {
            t=5

            resolve(t)
        }, 5000)
        
})

}

evaluateNumber().then(response => console.log(response))

//função assincrona

async function showEvaluated() {
    console.log(await evaluateNumber())
}

// async await em arrow function

const arrow = async() => console.log(await evaluateNumber())

showEvaluated()

arrow()