const programador = {
    name: "Fulano",
    age: 29,
    technologies: [
        { nameT: 'C++', specialtyT: 'Desktop'} ,
        { nameT: 'JavaCript', specialtyT: 'Web/Mobile'}
    ]
}

console.log (`O Usuário ${programador.name} tem ${programador.age} anos e usa a Tecnologia ${programador.technologies[1].nameT} com especialidade em ${programador.technologies[1].specialtyT}.`)
