const ProjectDetails = require("../models/storiesdetails.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    ProjectDetails.getAll(req.params.id,(err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }