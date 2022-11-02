/*
const Entidad = require("../models/entidad.model");    
*/
//*hacer la busqueda con ayudad del vs code de esta ruta para que la vincula correctamente*/

/*
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let entidad = new Entidad({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    })

    entidad.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la entidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La entidad se guardó correctamente"
        res.json(response)
    })
}   

exports.find = function( req, res){
    Entidad.find(function(err, entidad){
        res.json(entidad)
    })
}

exports.findOne = function(req,res){
    Entidad.findOne({_id: req.params.id},function(err, entidad){
        res.json(entidad)
    })
}

exports.update = function(req,res){
    let entidad = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion : req.body.direccion
    }

    Entidad.findByIdAndUpdate(req.params.id, {$set: entidad}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar la entidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La entidad modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Entidad.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la entidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La entidad se ha eliminado correctamente"
        res.json(response)
    })
}

*/