const Mongose = require("mongoose");

const database = "RegisterDB", port="27017", host="localhost";
const uri = `mongodb://${host}:${port}/${database}`;

const connect = async ()=>{
   
        try{
           await Mongose.connect(uri, {
                useNewUrlParser:true,
                useUnifiedTopology:true
            });
                console.log("conectado");
        } catch (e) {
            console.log(e);
        }
    };

    module.exports = {connect};