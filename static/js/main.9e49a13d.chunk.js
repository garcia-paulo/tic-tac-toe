(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,c,a){"use strict";a.r(c);var n=a(1),s=a(5),t=a.n(s),r=a(2),i=(a(4),a(0));function o(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s0",className:"square",onClick:a,children:c})}function u(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s1",className:"square",onClick:a,children:c})}function l(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s2",className:"square",onClick:a,children:c})}function j(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s3",className:"square",onClick:a,children:c})}function v(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s4",className:"square",onClick:a,children:c})}function d(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s5",className:"square",onClick:a,children:c})}function f(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s6",className:"square",onClick:a,children:c})}function h(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s7",className:"square",onClick:a,children:c})}function b(e){var c=e.val,a=e.chooseSquare;return Object(i.jsx)("div",{id:"s8",className:"square",onClick:a,children:c})}var O=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];var q=function(){var e=Object(n.useState)(["","","","","","","","",""]),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(n.useState)("X"),q=Object(r.a)(t,2),x=q[0],S=q[1],m=Object(n.useState)({winner:"",state:""}),N=Object(r.a)(m,2),k=N[0],w=N[1];Object(n.useEffect)((function(){C(),p()}),[a]),Object(n.useEffect)((function(){if(""!=k.state)switch(k.winner){case"X":alert("Game finished! Winning Player: O");break;case"O":alert("Game finished! Winning Player: X");break;case"":alert("Game finished! It's a tie!")}}),[k]);var C=function(){O.forEach((function(e){var c=a[e[0]];if(""!=c){var n=!0;e.forEach((function(e){a[e]!=c&&(n=!1)})),n&&w({winner:x,state:"won"})}}))},p=function(){var e=!0;a.forEach((function(c){""==c&&(e=!1)})),e&&w({winner:"",state:"tie"})},E=function(e){s(a.map((function(c,a){return a==e&&""==c?(S("X"==x?"O":"X"),x):c})))};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"board",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(o,{val:a[0],chooseSquare:function(){E(0)}}),Object(i.jsx)(u,{val:a[1],chooseSquare:function(){E(1)}}),Object(i.jsx)(l,{val:a[2],chooseSquare:function(){E(2)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{val:a[3],chooseSquare:function(){E(3)}}),Object(i.jsx)(v,{val:a[4],chooseSquare:function(){E(4)}}),Object(i.jsx)(d,{val:a[5],chooseSquare:function(){E(5)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(f,{val:a[6],chooseSquare:function(){E(6)}}),Object(i.jsx)(h,{val:a[7],chooseSquare:function(){E(7)}}),Object(i.jsx)(b,{val:a[8],chooseSquare:function(){E(8)}})]})]})})};t.a.render(Object(i.jsx)(q,{}),document.getElementById("root"))},4:function(e,c,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.9e49a13d.chunk.js.map