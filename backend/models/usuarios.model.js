const mongoose = require("mongoose");
const Schema = mongoose.Shema;

const UsuarioShema = new Shema ({
	usuario:	{type:String, required: true, max: 100},
	pass:		{type:String, required: true, max: 128}
});

Module .exports = mongoose.model("usuarios", Usuario.Shema);
