const Admin = require("../models/admin.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Admin.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }