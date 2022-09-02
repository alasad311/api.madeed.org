const sql = require("./db.js");

const Account = function(account) {
   
};
Account.getAll = (result) => {
    let query = "SELECT * FROM bank_details limit 0,2";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Account;