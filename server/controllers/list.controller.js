const { List } = require("../models/list.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Home Page Loading...",
  });
};
