import {
  Kudo,
  SelectBox,
  UserCircle,
  colorMap,
  emojiMap,
  require_kudos
} from "/build/_shared/chunk-PO2GIN4J.js";
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

// app/routes/home/kudo.$userId.tsx
var import_user = __toESM(require_user());
var import_auth = __toESM(require_auth());
var import_react2 = __toESM(require_react());
var import_auth2 = __toESM(require_auth());
var import_kudos = __toESM(require_kudos());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function KudoModal() {
  const actionData = useActionData();
  const [formError] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.error) || "");
  const [formData, setFormData] = (0, import_react2.useState)({
    message: "",
    style: {
      backgroundColor: "RED",
      textColor: "WHITE",
      emoji: "THUMBSUP"
    }
  });
  const handleChange = (e, field) => {
    setFormData((data) => ({ ...data, [field]: e.target.value }));
  };
  const { recipient, user } = useLoaderData();
  const handleStyleChange = (e, field) => {
    setFormData((data) => ({
      ...data,
      style: {
        ...data.style,
        [field]: e.target.value
      }
    }));
  };
  const getOptions = (data) => Object.keys(data).reduce((acc, curr) => {
    acc.push({
      name: curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase(),
      value: curr
    });
    return acc;
  }, []);
  const colors = getOptions(colorMap);
  const emojis = getOptions(emojiMap);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal, {
    isOpen: true,
    className: "w-2/3 p-10",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2",
        children: formError
      }, void 0, false, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 126,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            value: recipient.id,
            name: "recipientId"
          }, void 0, false, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 130,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col md:flex-row gap-y-2 md:gap-y-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center flex flex-col items-center gap-y-2 pr-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircle, {
                    profile: recipient.profile,
                    className: "h-24 w-24"
                  }, void 0, false, {
                    fileName: "app/routes/home/kudo.$userId.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-blue-300",
                    children: [
                      recipient.profile.firstName,
                      " ",
                      recipient.profile.lastName
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/home/kudo.$userId.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                  }, this),
                  recipient.profile.department && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto",
                    children: recipient.profile.department[0].toUpperCase() + recipient.profile.department.toLowerCase().slice(1)
                  }, void 0, false, {
                    fileName: "app/routes/home/kudo.$userId.tsx",
                    lineNumber: 138,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 132,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-1 flex flex-col gap-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    name: "message",
                    className: "w-full rounded-xl h-40 p-4",
                    value: formData.message,
                    onChange: (e) => handleChange(e, "message"),
                    placeholder: `Say something nice about ${recipient.profile.firstName}...`
                  }, void 0, false, {
                    fileName: "app/routes/home/kudo.$userId.tsx",
                    lineNumber: 145,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col items-center md:flex-row md:justify-start gap-x-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectBox, {
                        options: colors,
                        name: "backgroundColor",
                        value: formData.style.backgroundColor,
                        onChange: (e) => handleStyleChange(e, "backgroundColor"),
                        label: "Background Color",
                        containerClassName: "w-36",
                        className: "w-full rounded-xl px-3 py-2 text-gray-400"
                      }, void 0, false, {
                        fileName: "app/routes/home/kudo.$userId.tsx",
                        lineNumber: 153,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectBox, {
                        options: colors,
                        name: "textColor",
                        value: formData.style.textColor,
                        onChange: (e) => handleStyleChange(e, "textColor"),
                        label: "Text Color",
                        containerClassName: "w-36",
                        className: "w-full rounded-xl px-3 py-2 text-gray-400"
                      }, void 0, false, {
                        fileName: "app/routes/home/kudo.$userId.tsx",
                        lineNumber: 162,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectBox, {
                        options: emojis,
                        label: "Emoji",
                        name: "emoji",
                        value: formData.style.emoji,
                        onChange: (e) => handleStyleChange(e, "emoji"),
                        containerClassName: "w-36",
                        className: "w-full rounded-xl px-3 py-2 text-gray-400"
                      }, void 0, false, {
                        fileName: "app/routes/home/kudo.$userId.tsx",
                        lineNumber: 171,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/home/kudo.$userId.tsx",
                    lineNumber: 152,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 144,
                columnNumber: 6
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 131,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 183,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-blue-600 font-semibold mb-2",
            children: "Preview"
          }, void 0, false, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 184,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col items-center md:flex-row gap-x-24 gap-y-2 md:gap-y-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Kudo, {
                profile: user.profile,
                kudo: formData
              }, void 0, false, {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 186,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-1"
              }, void 0, false, {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 187,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 w-80 h-12 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
                children: "Send"
              }, void 0, false, {
                fileName: "app/routes/home/kudo.$userId.tsx",
                lineNumber: 188,
                columnNumber: 6
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/home/kudo.$userId.tsx",
            lineNumber: 185,
            columnNumber: 5
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/home/kudo.$userId.tsx",
        lineNumber: 129,
        columnNumber: 4
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/home/kudo.$userId.tsx",
    lineNumber: 125,
    columnNumber: 3
  }, this);
}
export {
  KudoModal as default
};
//# sourceMappingURL=/build/routes/home/kudo.$userId-VRZAVHQS.js.map
