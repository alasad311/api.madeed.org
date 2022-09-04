const finance = require("../models/finance.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    finance.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }