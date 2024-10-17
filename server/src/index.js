"use strict";

const services = require("./services");
const routes = require("./routes");
const controllers = require("./controllers");
const pluginId = require("../../admin/src/pluginId");
const { serverRegister } = require("../../fieldRegister");

module.exports = {
  services,
  routes,
  controllers,
  register({ strapi }) {
    serverRegister();
  },
};
