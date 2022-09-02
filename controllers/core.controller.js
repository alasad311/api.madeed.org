const Core = require("../models/core.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Core.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }