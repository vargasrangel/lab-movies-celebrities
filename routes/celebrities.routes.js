const router = require("express").Router()
// const Movies = require("../routes/celebrities.routes")

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then((celebridades) => {
        res.render("celebrities/celebrities", { celebridades})
    })
    .catch(console.log)
})


router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity")
});

// router.post("/celebrities/create"), (req, res, next) => {
//     const {name, occupation, catchPhrase} = req.body}
//     Celebrity.create(req.body)
//         .then(celebridades => {
//             res.redirect("/celebrities")
//         })
//         .catch(err => console.log(err))
        
router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
    .then(celebridades => {
        res.redirect('/celebrities')
    })
 .catch (err => console.log(err))
})
module.exports = router;