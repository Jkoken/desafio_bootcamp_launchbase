const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipe = require("./data")

server.use(express.static(__dirname + '/public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    return res.render("index", { recipe: recipe })
});

server.get("/about", function(req, res) {
    return res.render("about")
});

server.get("/recipes", function(req, res) {
    return res.render("recipes", { recipe })
});

server.get("/recipes/:id", function (req, res) {
    const recipeId = req.params.id;

    const recip = recipe.find(function(recip){
        if (recip.id == recipeId) {
            return true
        }
    })
    if (!recip) {
        return res.send("Page not Found!")
    }
    return res.render("recip", { recip })
})

server.listen(3000, function () {
    console.log("server is running")
});
