const users = [
    { name: 'Fulano 1', technologies: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'Fulano 2', technologies: ['HTML', 'CSS', 'Ionic Framework', 'Angular']},
    { name: 'Fulano 3', technologies: ['HTML', 'Node.js']}
]

// for (let i = 0; i < users.length; i++) {
//    console.log(`${users[i].name} trabalha com ${users[i].technologies}!`)
// }

function checkIfUserUseCSS(user) {
    for (let technology of user.technologies){
        if (technology == 'CSS'){
            return true
        }
        
    }
    return false
}

for (let user of users) {
    const userWorksWithCSS = checkIfUserUseCSS(user)

    if (userWorksWithCSS == true) {
        console.log(`O Usuário ${user.name} trabalha com CSS!`)
    }
}