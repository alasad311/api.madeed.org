const sql = require("./db.js");

const Program = function(program) {

};
Program.getAll = (result) => {
    let query = "SELECT * FROM programs";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Program;