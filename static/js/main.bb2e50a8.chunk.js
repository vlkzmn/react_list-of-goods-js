(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(6),c=n.n(s),o=n(7),r=n(8),i=(n(13),n(14),n(4)),u=n.n(i),a=n(2),l=n(0),b=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d="az",h="length",g="reverse";var f=function(){var t=Object(a.useState)(["",""]),e=Object(o.a)(t,2),n=e[0],s=e[1],c=function(t,e){var n=Object(r.a)(t);return e[0]===d&&n.sort((function(t,e){return t.localeCompare(e)})),e[0]===h&&n.sort((function(t,e){return t.length-e.length})),e[1]===g&&n.reverse(),n}(j,n);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n[0]!==d}),onClick:function(){return s([d,n[1]])},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n[0]!==h}),onClick:function(){return s([h,n[1]])},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":n[1]!==g}),onClick:function(){return s(n[1]===g?[n[0],""]:[n[0],g])},children:"Reverse"}),(""!==n[0]||""!==n[1])&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return s(["",""])},children:"Reset"})]}),Object(l.jsx)(b,{goods:c})]})};c.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bb2e50a8.chunk.js.map