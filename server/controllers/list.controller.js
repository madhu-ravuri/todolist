const { List } = require("../models/list.models");

module.exports.index = (req, res) => {
  res.json({
    message: "Home Page Loading...",
  });
};
