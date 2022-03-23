const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const db_name = "productsDB";

require("./configs/mongoose.config")(db_name);

app.use(express.json(), express.urlencoded({ extended: true }));

require("./route/products.routes")(app);
app.get("/api", (req, res) => {
  res.json("Random comment");
});

// make sure this is on the very bottom
app.listen(8000, () => console.log(`The port is over 8000!`));
