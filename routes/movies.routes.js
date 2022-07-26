// const CelebrityModel = require("../models/Celebrity.model");

const router = require("express").Router()

router.get("/celebrities", (req, res, next) => {
    CelebrityModel.find()
        .then((celebridades) => {
            res.render("celebrities/movies", {movies})
        })
        .catch(console.log)
})

router.get("/celebrities/movies", (req,res,next) =>{
    res.render("celebrities/new-movie")
})
module.exports = router;

