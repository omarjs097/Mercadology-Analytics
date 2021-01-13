'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();
/*
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });
*/
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save_col', ProjectController.save_col);
router.get('/one/:id?', ProjectController.getProject);
router.get('/all', ProjectController.getProjects);
router.put('/update/:id', ProjectController.updateProject);
router.delete('/delete/:id', ProjectController.deleteProject);
//router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
//router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;