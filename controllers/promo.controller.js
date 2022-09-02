const Promo = require("../models/promo.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Promo.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }