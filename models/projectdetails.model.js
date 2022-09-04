const sql = require("./db.js");

const ProjectDetails = function(projectdetails) {
};
ProjectDetails.getAll = (id,result) => {
    let query = "SELECT * FROM projects WHERE id = ?";
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
module.exports = ProjectDetails;