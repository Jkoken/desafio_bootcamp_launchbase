const name = "Fulano"
const sex = "F"
const age = 55
const contribution = 30

if (sex == "M") {
    totaltime = contribution + age
    if (totaltime >= 95 && contribution >= 35) {
        console.log(`${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você ainda não pode se aposentar!`)
    }
} else {
    totaltime = contribution + age
    if (totaltime >= 85 && contribution >= 30) {
        console.log(`$${name}, você pode se aposentar!`)
    } else {
        console.log(`${name}, você ainda não pode se aposentar!`)
    }
}