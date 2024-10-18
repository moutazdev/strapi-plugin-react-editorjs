const pluginId = require("../admin/src/pluginId");
const name = "wysiwyg";
const type = "string";

const serverRegister = () => {
  strapi.customFields.register({
    name,
    plugin: pluginId,
    type,
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};

const adminRegister = (app) => {
  app.customFields.register({
    name,
    pluginId,
    type,
    intlLabel: {
      id: name,
      defaultMessage: name,
    },
    intlDescription: {
      id: name,
      defaultMessage: name,
    },
    // icon: ColorPickerIcon, // don't forget to create/import your icon component
    components: {
      Input: async () =>
        import(
          /* webpackChunkName: "input-component" */ "../admin/src/components/Wysiwyg"
        ),
    },
    options: {
      // declare options here
    },
  });
};
module.exports = {
  serverRegister,
  adminRegister,
};
