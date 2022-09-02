const Projects = require("../models/projects.model.js");
var path = require('path');

exports.getAllProjectsDetails = (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]  
  
    Projects.fetchAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send({
        response: data
      });
    });
  }