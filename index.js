const passport = require("passport");

const express = require("express");

const mongoose = require("mongoose");

const cookieSession = require("cookie-session");

require("./models/User");

const passportConfig = require("./services/passport");

const keys = require("./config/keys");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("mongodb not connected");
    console.log(error);
  });

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
