const News = require("../models/stories.model.js");

exports.getAll = (req, res) => {
    const authHeader = req.headers['authorization']  
    News.getAll((err, data) => {
      if (err)
        res.status(200).send({
          code:err.code,
        });
      else res.send(data);
    });
  }