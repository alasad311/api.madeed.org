const sql = require("./db.js");

const Projects = function(project) {
};
Projects.getAll = (id,result) => {
    let query = "SELECT * FROM projects WHERE program_id = ?";
    sql.query(query,[id], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }
        console.log("users: ", res);
        result(null, res);
    });
};
module.exports = Projects;