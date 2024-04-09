var express = require("express");
const responSchema = require("../models/responsabilidades")


const router = express.Router();

router.post("/get", (req, res) => {
    const responsabilidad= responSchema(req.body);
    responsabilidad
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));

});



// // Consultar  usuarios 
router.get("/get", (req, res) => {
    responSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});




module.exports = router;
