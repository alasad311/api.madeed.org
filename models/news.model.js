const sql = require("./db.js");

const News = function(news) {
};
News.getAll = (result) => {
    let query = "SELECT * FROM news ORDER BY id DESC LIMIT 0,6";
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