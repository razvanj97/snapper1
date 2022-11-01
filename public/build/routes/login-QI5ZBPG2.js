import {
  Layout
} from "/build/_shared/chunk-IEZ3KXV3.js";
import {
  FormField,
  require_validators
} from "/build/_shared/chunk-NDQU2PUG.js";
import {
  require_auth
} from "/build/_shared/chunk-OZVJ2KGS.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useActionData
} from "/build/_shared/chunk-K6LETVOU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/login.tsx
var import_react = __toESM(require_react());
var import_validators = __toESM(require_validators());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  var _a, _b, _c, _d;
  const [action, setAction] = (0, import_react.useState)("login");
  const actionData = useActionData();
  const firstLoad = (0, import_react.useRef)(true);
  const [errors, setErrors] = (0, import_react.useState)((actionData == null ? void 0 : actionData.errors) || {});
  const [formError, setFormError] = (0, import_react.useState)((actionData == null ? void 0 : actionData.error) || "");
  const [formData, setFormData] = (0, import_react.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  });
  (0, import_react.useEffect)(() => {
    if (!firstLoad.current) {
      const newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState);
      setFormError("");
      setFormData(newState);
    }
  }, [action]);
  (0, import_react.useEffect)(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);
  (0, import_react.useEffect)(() => {
    firstLoad.current = false;
  }, []);
  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full justify-center items-center flex flex-col gap-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: () => setAction(action == "login" ? "register" : "login"),
          className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
          children: action === "login" ? "Sign Up" : "Sign In"
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 128,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-5xl font-extrabold text-yellow-300",
          children: "Welcome to Snapper!"
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 133,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-semibold text-slate-300",
          children: [
            "+",
            " ",
            action === "login" ? "Log In To Give Some Praise!" : "Sign Up To Get Started!",
            "+",
            " "
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 137,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          className: "rounded-2xl bg-gray-200 p-6 w-96",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
              children: formError
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 146,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "email",
              label: "Email",
              value: formData.email,
              onChange: (e) => handleInputChange(e, "email"),
              error: errors == null ? void 0 : errors.email
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 149,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "password",
              type: "password",
              label: "Password",
              value: formData.password,
              onChange: (e) => handleInputChange(e, "password"),
              error: errors == null ? void 0 : errors.password
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 156,
              columnNumber: 6
            }, this),
            action === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "firstName",
                  label: "First Name",
                  onChange: (e) => handleInputChange(e, "firstName"),
                  value: formData.firstName,
                  error: errors == null ? void 0 : errors.firstName
                }, void 0, false, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 166,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "lastName",
                  label: "Last Name",
                  onChange: (e) => handleInputChange(e, "lastName"),
                  value: formData.lastName,
                  error: errors == null ? void 0 : errors.lastName
                }, void 0, false, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 173,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/login.tsx",
              lineNumber: 165,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full text-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "_action",
                value: action,
                className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
                children: action === "login" ? "Sign In" : "Sign Up"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 183,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 182,
              columnNumber: 6
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 145,
          columnNumber: 5
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 127,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 126,
    columnNumber: 3
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-QI5ZBPG2.js.map
