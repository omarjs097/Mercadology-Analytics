'use strict'

var Project = require('../models/project');
/*var fs = require('fs');
var path = require('path');
*/
var controller = {
	
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de project"
		});
	},

	save_col: function(req, res){
		var project = new Project();

		var params = req.body;
		project.dominio  = params.dominio;
		project.empresas	 = params.empresas;
		project.direccion_ip = params.direccion_ip;
		project.bd_name = params.bd_name;
		project.bd_user = params.bd_user;
		project.bd_pass = params.bd_pass;
		project.user_ftp= params.user_ftp;
		project.user_ftp_pass= params.user_ftp_pass;	
		project.hospedaje= params.hospedaje;
		project.vencimiento= params.vencimiento;	
		project.correo_hospedaje= params.correo_hospedaje;
		project.pass_hospedaje= params.pass_hospedaje;
		project.donde_dominio= params.donde_dominio;	
		project.vencimiento_dominio= params.vencimiento_dominio;	
		project.correo_registrador= params.correo_registrador;
		project.pass_registrador= params.pass_registrador;
		project.cuenta_admin_zoho= params.cuenta_admin_zoho;
		project.correo_zoho= params.correo_zoho;
		project.pass_zoho= params.pass_zoho;
		project.cpanel2082_correo= params.cpanel2082_correo;
		project.cpanel2082_pass= params.cpanel2082_pass;
		project.comentarios= params.comentarios;
		project.vencimiento_ssl= params.vencimiento_ssl;

		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({project: projectStored});
			

		});
	},
	getProject: function(req, res){
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Project.findById(projectId, (err, project) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!project) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				project
			});

		});
	},

	getProjects: function(req, res){

		Project.find({}).sort('-year').exec((err, projects) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({projects});
		});

	},

	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				project: projectUpdated
			});
		});

	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!projectRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				project: projectRemoved
			});
		});
	},

};

module.exports = controller;