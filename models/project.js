'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	
	dominio: String,
	empresas: String,
	direccion_ip: String,	 
	bd_name: String,	
	bd_user: String,	
	bd_pass: String,	
	user_ftp: String, 
	user_ftp_pass: String,	
	hospedaje: String,	
	vencimiento: String,	
	correo_hospedaje: String,
	pass_hospedaje: String,	
	donde_dominio: String,	
	vencimiento_dominio: String,	
	correo_registrador: String,
	pass_registrador: String,
	cuenta_admin_zoho: String,	
	correo_zoho: String,	
	pass_zoho: String,
	cpanel2082_correo: String,
	cpanel2082_pass: String,
	comentarios: String,
	vencimiento_ssl: String,
	});

module.exports = mongoose.model('colaboradores', ProjectSchema);
// projects  --> guarda los documents en la coleccion