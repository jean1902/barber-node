const { request,response } = require("express");
const dataAdmin = require("../middleware/requette");





const admin = class {
    static accueilGet = (req=request, res= response) =>{
        res.render('index')
    }
    static accueilPost = (req=request, res= response) =>{
        dataAdmin.insertionUser(req.body)
        res.send('enregistrer')
    }
}




module.exports=admin;