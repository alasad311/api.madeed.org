const sql = require("./db.js");

const Event = function(event) {
};
Event.getAll = (result) => {
    let query = "SELECT * FROM events ORDER BY id DESC LIMIT 0,3";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Event;