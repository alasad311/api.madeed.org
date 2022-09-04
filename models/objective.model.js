const sql = require("./db.js");

const Objective = function(objective) {
};
Objective.getAll = (result) => {
    let query = "SELECT * FROM objectives";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Objective;