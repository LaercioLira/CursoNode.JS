
//como criar objeto concatenando dois outros objetos
const obj = {
    nome: 'Laercio',
    sobrenome: 'Lira',
    email: 'laerciooooo@gmail.com'

}

const obj2 = {
    telefone: '918749132409123049'
}

const obj3 = {
    ...obj,
    ...obj2
}


console.log(obj)
console.log(obj2)
console.log(obj3)

//spreed operator
let arr = [10, 20, 30]
let arr2 = [50,80]

arr = [...arr, ...arr2]

console.log(arr)
console.log(arr)