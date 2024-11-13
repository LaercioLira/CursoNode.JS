//try catch

try {
    let t = 3
     console.log(t)

     if (t === 3) {
        throw 'erro'
     }
} catch(error) {
    console.log(error)
}