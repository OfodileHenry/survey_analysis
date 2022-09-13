const passport = require("passport");

const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const cookieSession = require("cookie-session");

require("./models/User");

const passportConfig = require("./services/passport");

const keys = require("./config/keys");

// const billingRoutes = require("./routes/billingRoutes");
//
// const authRoutes = require("./routes/authRoutes");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("mongodb not connected");
    console.log(error);
  });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
//
// billingRoutes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("clienty/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clienty", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
