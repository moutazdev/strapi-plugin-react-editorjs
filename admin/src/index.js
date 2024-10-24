import pluginPkg from "../../package.json";
import Wysiwyg from "./components/Wysiwyg";
import pluginId from "./pluginId";
import wysiwyg_field_register from "../../custom_fields/wysiwyg_field_register";
export default {
  register(app) {
    // executes as soon as the plugin is loaded
    const pluginDescription =
      pluginPkg.strapi.description || pluginPkg.description;

    app.registerPlugin({
      blockerComponent: null,
      blockerComponentProps: {},
      description: pluginDescription,
      icon: pluginPkg.strapi.icon,
      intlLabel: {
        id: pluginId,
        defaultMessage: pluginId,
      },
      id: pluginId,
      initializer: () => null,
      injectedComponents: [],
      isReady: true,
      isRequired: pluginPkg.strapi.required || false,
      mainComponent: null,
      name: pluginPkg.strapi.name,
      preventComponentRendering: false,
      settings: null,
      trads: {},
    });
    // OLD WAY (DEPRECATED in newer versions of Strapi v4)
    // app.addFields({ type: 'wysiwyg', Component: Wysiwyg });
    // NEW WAY
    wysiwyg_field_register.adminRegister(app);
  },
  bootstrap() {},
};
