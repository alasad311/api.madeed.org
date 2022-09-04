const sql = require("./db.js");

const News = function(news) {
};
News.getAll = (result) => {
    let query = "SELECT * FROM success_stories";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = News;