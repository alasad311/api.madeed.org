const sql = require("./db.js");

const Core = function(core) {
   
};
Core.getAll = (result) => {
    let query = "SELECT * FROM core limit 0,1";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Core;