import{a as f}from"/build/_shared/chunk-QDEC3CHI.js";import{a as u,b as c,m as d}from"/build/_shared/chunk-GMRJTKSK.js";import{c as a}from"/build/_shared/chunk-Q3IECNXJ.js";var p=a(f()),l=a(u()),v=o=>{let t=document.createElement("div");return t.setAttribute("id",o),document.body.appendChild(t),t},m=({children:o,wrapperId:t})=>{let[r,i]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=document.getElementById(t),s=!1;return e||(s=!0,e=v(t)),i(e),()=>{s&&(e==null?void 0:e.parentNode)&&e.parentNode.removeChild(e)}},[t]),r===null?null:(0,p.createPortal)(o,r)};var n=a(d()),h=({children:o,isOpen:t,ariaLabel:r,className:i})=>{let e=c();return t?(0,n.jsxs)(m,{wrapperId:"modal",children:[(0,n.jsx)("div",{className:"fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80","aria-labelledby":r!=null?r:"modal-title",role:"dialog","aria-modal":"true",onClick:()=>e("/home")}),(0,n.jsx)("div",{className:"fixed inset-0 pointer-events-none flex justify-center items-center max-h-screen overflow-scroll",children:(0,n.jsx)("div",{className:`${i} p-4 bg-gray-200 pointer-events-auto max-h-screen md:rounded-xl`,children:o})})]}):null};export{h as a};