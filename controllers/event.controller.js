const Event = require("../models/event.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    Event.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }