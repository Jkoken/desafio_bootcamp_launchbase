const name = "Fulano"
const weight = 97
const height = 1.82

imc = weight / (height * height)

if (imc >= 30) {
    console.log(`${name} você está acima do peso!`)
}else {
    console.log(`${name} você não está acima do peso!`)
}