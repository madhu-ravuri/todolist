const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("./server/config/mongoose.config");
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./server/routes/list.routes")(app);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(3000, () => console.log("Listening on port: 3000"));
