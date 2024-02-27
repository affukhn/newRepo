const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("./router/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "mySecretNewRepo",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/v1", router);

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
