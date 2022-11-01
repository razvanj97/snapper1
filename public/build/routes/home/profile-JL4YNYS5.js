import {
  FormField,
  require_validators
} from "/build/_shared/chunk-NDQU2PUG.js";
import {
  Modal
} from "/build/_shared/chunk-PMGZ64ZQ.js";
import "/build/_shared/chunk-VVWQWLFZ.js";
import {
  require_user
} from "/build/_shared/chunk-COVU6HTZ.js";
import {
  require_auth
} from "/build/_shared/chunk-OZVJ2KGS.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-K6LETVOU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/home/profile.tsx
var import_auth = __toESM(require_auth());
var import_react2 = __toESM(require_react());
var import_validators = __toESM(require_validators());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProfileSettings() {
  var _a, _b, _c, _d, _e, _f;
  const { user } = useLoaderData();
  const actionData = useActionData();
  const [formError, setFormError] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.error) || "");
  const firstLoad = (0, import_react2.useRef)(true);
  const [formData, setFormData] = (0, import_react2.useState)({
    firstName: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.firstName) || ((_b = user == null ? void 0 : user.profile) == null ? void 0 : _b.firstName),
    lastName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || ((_d = user == null ? void 0 : user.profile) == null ? void 0 : _d.lastName)
  });
  (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);
  (0, import_react2.useEffect)(() => {
    firstLoad.current = false;
  }, []);
  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, {
    isOpen: true,
    className: "w-1/3",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-4xl font-semibold text-blue-600 text-center mb-4",
          children: "Your Profile"
        }, void 0, false, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 104,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2",
          children: [
            "+ ",
            formError,
            "+",
            " "
          ]
        }, void 0, true, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 107,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
              method: "post",
              onSubmit: (e) => !confirm("Are you sure?") ? e.preventDefault() : true,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "firstName",
                  label: "First Name",
                  value: formData.firstName,
                  onChange: (e) => handleInputChange(e, "firstName"),
                  error: (_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.firstName
                }, void 0, false, {
                  fileName: "app/routes/home/profile.tsx",
                  lineNumber: 117,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "lastName",
                  label: "Last Name",
                  value: formData.lastName,
                  onChange: (e) => handleInputChange(e, "lastName"),
                  error: (_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.lastName
                }, void 0, false, {
                  fileName: "app/routes/home/profile.tsx",
                  lineNumber: 124,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  name: "_action",
                  value: "delete",
                  className: "rounded-xl w-full bg-red-300 font-semibold text-white mt-4 px-16 py-2 transition duration-300 ease-in-out hover:bg-red-400 hover:-translate-y-1",
                  children: "Delete Account"
                }, void 0, false, {
                  fileName: "app/routes/home/profile.tsx",
                  lineNumber: 131,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-full text-right mt-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
                    name: "_action",
                    value: "save",
                    children: "Save"
                  }, void 0, false, {
                    fileName: "app/routes/home/profile.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/home/profile.tsx",
                  lineNumber: 137,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/home/profile.tsx",
              lineNumber: 112,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: "app/routes/home/profile.tsx",
            lineNumber: 111,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: "app/routes/home/profile.tsx",
          lineNumber: 110,
          columnNumber: 5
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/home/profile.tsx",
      lineNumber: 103,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: "app/routes/home/profile.tsx",
    lineNumber: 102,
    columnNumber: 3
  }, this);
}
export {
  ProfileSettings as default
};
//# sourceMappingURL=/build/routes/home/profile-JL4YNYS5.js.map
