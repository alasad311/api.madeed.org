const sql = require("./db.js");

const Promo = function(romo) {
};
Promo.getAll = (result) => {
    let query = "SELECT * FROM promos ORDER BY id DESC LIMIT 0,5";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Promo;