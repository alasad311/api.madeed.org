const Program = require("../models/program.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Program.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }