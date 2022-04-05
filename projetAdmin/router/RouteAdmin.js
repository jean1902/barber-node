let express = require('express')
const admin = require('../controllers/ControllerAdmin')
let router = express.Router()

router.get('/',admin.accueilGet)
router.post('/',admin.accueilPost)






module.exports= router