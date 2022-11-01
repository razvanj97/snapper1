import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-K6LETVOU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/utils/kudos.server
var require_kudos = __commonJS({
  "empty-module:~/utils/kudos.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/user-circle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UserCircle({ profile, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} cursor-pointer bg-gray-400 rounded-full flex justify-center items-center`,
    onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
      children: [
        profile.firstName.charAt(0).toUpperCase(),
        profile.lastName.charAt(0).toUpperCase()
      ]
    }, void 0, true, {
      fileName: "app/components/user-circle.tsx",
      lineNumber: 15,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: "app/components/user-circle.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/utils/constants.ts
var colorMap = {
  RED: "text-red-400",
  GREEN: "text-green-400",
  BLUE: "text-blue-400",
  WHITE: "text-white",
  YELLOW: "text-yellow-300"
};
var backgroundColorMap = {
  RED: "bg-red-400",
  GREEN: "bg-green-400",
  BLUE: "bg-blue-400",
  WHITE: "bg-white",
  YELLOW: "bg-yellow-300"
};
var emojiMap = {
  THUMBSUP: "\u{1F44D}",
  PARTY: "\u{1F389}",
  HANDSUP: "\u{1F64C}\u{1F3FB}"
};
var sortOptions = [
  {
    name: "Date",
    value: "date"
  },
  {
    name: "Sender Name",
    value: "sender"
  },
  {
    name: "Emoji",
    value: "emoji"
  }
];

// app/components/kudo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Kudo({
  profile,
  kudo
}) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex ${backgroundColorMap[((_a = kudo.style) == null ? void 0 : _a.backgroundColor) || "RED"]} p-4 rounded-xl w-full gap-x-2 relative`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircle, {
          profile,
          className: "h-16 w-16"
        }, void 0, false, {
          fileName: "app/components/kudo.tsx",
          lineNumber: 20,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 19,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: `${colorMap[((_b = kudo.style) == null ? void 0 : _b.textColor) || "WHITE"]} font-bold text-lg whitespace-pre-wrap break-all`,
            children: [
              profile.firstName,
              " ",
              profile.lastName
            ]
          }, void 0, true, {
            fileName: "app/components/kudo.tsx",
            lineNumber: 23,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: `${colorMap[((_c = kudo.style) == null ? void 0 : _c.textColor) || "WHITE"]} whitespace-pre-wrap break-all`,
            children: kudo.message
          }, void 0, false, {
            fileName: "app/components/kudo.tsx",
            lineNumber: 29,
            columnNumber: 5
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 22,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute bottom-4 right-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl",
        children: emojiMap[((_d = kudo.style) == null ? void 0 : _d.emoji) || "THUMBSUP"]
      }, void 0, false, {
        fileName: "app/components/kudo.tsx",
        lineNumber: 36,
        columnNumber: 4
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/kudo.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/components/select-box.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SelectBox({
  options = [],
  onChange = () => {
  },
  className = "",
  containerClassName = "",
  name,
  id,
  value,
  label
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor: id,
        className: "text-blue-600 font-semibold",
        children: label
      }, void 0, false, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 27,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `flex items-center ${containerClassName} my-2`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
            className: `${className} appearance-none`,
            id,
            name,
            onChange,
            value: value || "",
            children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
              value: option.value,
              children: option.name
            }, option.name, false, {
              fileName: "app/components/select-box.tsx",
              lineNumber: 38,
              columnNumber: 7
            }, this))
          }, void 0, false, {
            fileName: "app/components/select-box.tsx",
            lineNumber: 31,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
            className: "w-4 h-4 fill-current text-gray-400 -ml-7 mt-1 pointer-events-none",
            viewBox: "0 0 140 140",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
              }, void 0, false, {
                fileName: "app/components/select-box.tsx",
                lineNumber: 48,
                columnNumber: 7
              }, this)
            }, void 0, false, {
              fileName: "app/components/select-box.tsx",
              lineNumber: 47,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: "app/components/select-box.tsx",
            lineNumber: 43,
            columnNumber: 5
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/select-box.tsx",
        lineNumber: 30,
        columnNumber: 4
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/select-box.tsx",
    lineNumber: 26,
    columnNumber: 3
  }, this);
}

export {
  UserCircle,
  require_kudos,
  colorMap,
  emojiMap,
  sortOptions,
  Kudo,
  SelectBox
};
//# sourceMappingURL=/build/_shared/chunk-PO2GIN4J.js.map
