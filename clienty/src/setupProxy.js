// const proxy = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(proxy("/auth/google", { target: "<http://localhost:5000/>" }));
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/google", {
      target: "http://localhost:5000",
    }),
    createProxyMiddleware("/api/**", {
      target: "http://localhost:5000",
    })
  );
};
