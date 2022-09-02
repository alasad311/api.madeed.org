const { route } = require("express/lib/application");
module.exports = app => {
    var router = require("express").Router();
    const slider = require("./controllers/slider.controller.js");
    const accounts = require("./controllers/account.controller.js");
    const core = require("./controllers/core.controller.js");
    const programs = require("./controllers/program.controller.js");
    const events = require("./controllers/event.controller.js");
    const promos = require("./controllers/promo.controller.js");
    const news = require("./controllers/news.controller.js");
    //slider
    router.get("/slider", slider.getAll);
    //accountdetails
    router.get("/accounts", accounts.getAll);
    //core
    router.get("/core", core.getAll);
    //programs
    router.get("/programs", programs.getAll);
    //events
    router.get("/events", events.getAll);
    //promos
    router.get("/promos", promos.getAll);
    //news
    router.get("/news", news.getAll);

    app.use('/v1', router);
};