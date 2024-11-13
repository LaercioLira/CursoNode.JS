//arrow function - menor verbosidade

function squareArea(side) {
    return `${Math.pow(side, 2)} meters`
}

console.log(squareArea(3))

const squareAreaArrow = side => `${ Math.pow(side, 2)} meters`

console.log(squareAreaArrow(2))