const Register = require("./../models/Register");

const insert = (req, res)=>{
    const student = new Register(req.body);
    student.save((error, document)=>{

     if(error)
     return res.status(500).json({
     msg: "Hubo un error"
    });

    return res.status(201).json({
     msg: "creado",
     register:document
    }) 
  });
};

const getRegister = (req, res)=>{
    Register.find({},(error, documents)=>{
        if (error)
        res.status(500).json({
            msg:"Hubo un error"
        });
        return res.status(200).json({
            msg:"OK",
            registers: documents
        });
    });

};

const getOneregister = (req, res)=> {
    Register.findById(req.params.id,(error, document)=>{
        if (error)
        res.status(500).json({
            msg:"Hubo un error"
        });
        return res.status(200).json({
            msg:"OK",
            register: document
        });
    });
}

module.exports = {
    getRegister,
    insert,
    getOneregister
};