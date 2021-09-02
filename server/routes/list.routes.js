const ListController = require("../controllers/list.controller");

module.exports = function (app) {
  app.get("/api", ListController.index);
};
