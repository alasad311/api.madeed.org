const sql = require("./db.js");

const Slider = function(slider) {
    this.image = slider.image;
    this.desc_ar = slider.desc_ar;
    this.desc_en = slider.desc_en;
    this.link = slider.link;
};
Slider.getAll = (result) => {
    let query = "SELECT * FROM sliders ORDER BY id DESC";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};
module.exports = Slider;