"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const React = require("react");
const reactIntl = require("react-intl");
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const Input = React__namespace.forwardRef((props, ref) => {
  const { attribute, disabled, label, name, onChange, required, value } = props;
  const { formatMessage } = reactIntl.useIntl();
  const handleChange = (e) => {
    onChange({
      target: { name, type: attribute.type, value: e.currentTarget.value }
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsx("label", { children: /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.TextInput,
    {
      placeholder: formatMessage({ id: label }),
      ref,
      name,
      disabled,
      value,
      required,
      onChange: handleChange
    }
  ) });
});
exports.default = Input;
//# sourceMappingURL=Input-DLcLsBDr.js.map
