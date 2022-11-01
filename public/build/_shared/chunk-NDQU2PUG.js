import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-K6LETVOU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/utils/validators.server
var require_validators = __commonJS({
  "empty-module:~/utils/validators.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/form-field.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  const [errorText, setErrorText] = (0, import_react.useState)(error);
  (0, import_react.useEffect)(() => {
    setErrorText(error);
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor,
        className: "text-blue-600 font-semibold",
        children: label
      }, void 0, false, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 26,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        onChange: (e) => {
          onChange(e);
          setErrorText("");
        },
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2",
        value
      }, void 0, false, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 29,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, false, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 40,
        columnNumber: 4
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 25,
    columnNumber: 3
  }, this);
}

export {
  FormField,
  require_validators
};
//# sourceMappingURL=/build/_shared/chunk-NDQU2PUG.js.map
