const Projects = require("../models/projects.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Projects.getAll(req.params.id,(err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }