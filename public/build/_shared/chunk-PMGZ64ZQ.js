import {
  require_react_dom
} from "/build/_shared/chunk-VVWQWLFZ.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useNavigate
} from "/build/_shared/chunk-K6LETVOU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/portal.tsx
var import_react_dom = __toESM(require_react_dom());
var import_react = __toESM(require_react());
var createWrapper = (wrapperId) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};
var Portal = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    let element = document.getElementById(wrapperId);
    let created = false;
    if (!element) {
      created = true;
      element = createWrapper(wrapperId);
    }
    setWrapper(element);
    return () => {
      if (created && (element == null ? void 0 : element.parentNode)) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  if (wrapper === null)
    return null;
  return (0, import_react_dom.createPortal)(children, wrapper);
};

// app/components/modal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Modal = ({
  children,
  isOpen,
  ariaLabel,
  className
}) => {
  const navigate = useNavigate();
  if (!isOpen)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, {
    wrapperId: "modal",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80",
        "aria-labelledby": ariaLabel != null ? ariaLabel : "modal-title",
        role: "dialog",
        "aria-modal": "true",
        onClick: () => navigate("/home")
      }, void 0, false, {
        fileName: "app/components/modal.tsx",
        lineNumber: 22,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-scroll",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `${className} p-4 bg-gray-200 pointer-events-auto max-h-screen md:rounded-xl`,
          children
        }, void 0, false, {
          fileName: "app/components/modal.tsx",
          lineNumber: 29,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: "app/components/modal.tsx",
        lineNumber: 28,
        columnNumber: 4
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/modal.tsx",
    lineNumber: 21,
    columnNumber: 3
  }, this);
};

export {
  Modal
};
//# sourceMappingURL=/build/_shared/chunk-PMGZ64ZQ.js.map
