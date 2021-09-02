const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./server/config/mongoose.config");
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/list.routes")(app);

app.listen(3000, () => console.log("Listening on port: 3000"));
