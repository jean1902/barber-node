const base = require("../database/data");

const dataAdmin = class {
  static   insertionUser=(into)  =>{
      console.log(into);
        let{genre,titre,description,texte}=into;
        let sql = "INSERT INTO `admin`( `genre`, `titre`, `description`, `texte`) VALUES (?,?,?,?)";
        base.query(sql,[genre,titre,description,texte],(err,result) =>{
            if (result) {
                console.log('result',result);
            } else {
               console.log('error',err); 
            }
        })
    }
}

module.exports= dataAdmin;