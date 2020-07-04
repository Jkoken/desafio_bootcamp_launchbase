const express = require('express')
const nunjucks = require('nunjucks')

const server = express ()
const info = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {
    return res.render("courses", { informations: info })
})

server.get("/about", function(req, res) {
    const data_about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0.jpg",
        name: "Rocketseat",
        description: `As melhores tecnologias em programação, direto ao ponto e do jeito certo. Cursos para você entrar com o pé direito nas tecnologias mais desejadas do mercado. Mais informações no site da <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>.`,
        title: "Principais tecnologias:",
        tech_1: "Javascript",
        tech_2: "NodeJS",
        tech_3: "ReactJS",
        tech_4: "ReactNative",
        links: [
            { url: "https://github.com/Rocketseat", name: "Github" },
            { url: "https://www.instagram.com/rocketseat_oficial/", name: "Instagram" },
            { url: "https://www.facebook.com/rocketseat/", name: "Facebook" }
        ]
    }
    return res.render("about", { about: data_about })
})

server.get('/courses/:id', function(req, res){
    const id = req.params.id

    const cour = info.find(function(data){
        return data.id == id
    }) 
    if (cour === null){
        return res.render("not-found");
    }

    return res.render('course', { 
        information: cour
    })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(5000, function() {
})