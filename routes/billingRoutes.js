const keys = require("../config/keys");

const stripe = require("stripe")(keys.stripeSecretKey);

const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      source: req.body.id,
      description:
        "My First Test Charge (created for API docs at https://www.stripe.com/docs/api)",
    });
    console.log(charge);
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
