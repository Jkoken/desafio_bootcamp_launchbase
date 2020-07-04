const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const data = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rocketseat",
        role: "Plataforma de Cursos Online de Programação",
        description: 'Os melhores cursos para Devs você só encontra aqui!! (Curso da <a href="https://rocketseat.com.br" target="_blank"> Rocketseat</a>)',
        links : [
            { name: "Github", url: "https://github.com/Jkoken" }, 
            { name: "Linkedin", url: "https://www.linkedin.com/in/jackson-wandekoken/" }, 
            { name: "Rocketseat", url: "https://rocketseat.com.br/" }
        ]
    }

    return res.render("about", { about: data})
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found.")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function (){
    console.log("server is running")
})