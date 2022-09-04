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
    const objectives = require("./controllers/objective.controller.js");
    const projects = require("./controllers/projects.controller.js");
    const projectdetails = require("./controllers/projectdetails.controller.js");
    const finance = require("./controllers/finance.controller.js");
    const admin = require("./controllers/admin.controller.js");
    const newsdetails = require("./controllers/newsdetails.controller.js");
    const stories = require("./controllers/stories.controller.js");
    const storiesdetails = require("./controllers/storiesdetails.controller.js");

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
    //objectives
    router.get("/objectives", objectives.getAll);
    //objectives
    router.get("/projects/:id", projects.getAll);
    //project Details
    router.get("/projects/details/:id", projectdetails.getAll);
    //finance
    router.get("/finance", finance.getAll);
    //admin
    router.get("/admin", admin.getAll);
    //admin
    router.get("/news/:id", newsdetails.getAll);
    //news
    router.get("/stories", stories.getAll);
    //admin
    router.get("/stories/:id", storiesdetails.getAll);
    app.use('/v1', router);
};