(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(5),s=t.n(a),i=t(2),r=(t(4),t(0));function o(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s0",className:"square",onClick:t,children:c})}function u(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s1",className:"square",onClick:t,children:c})}function j(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s2",className:"square",onClick:t,children:c})}function l(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s3",className:"square",onClick:t,children:c})}function d(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s4",className:"square",onClick:t,children:c})}function O(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s5",className:"square",onClick:t,children:c})}function v(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s6",className:"square",onClick:t,children:c})}function f(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s7",className:"square",onClick:t,children:c})}function b(e){var c=e.val,t=e.chooseSquare;return Object(r.jsx)("div",{id:"s8",className:"square",onClick:t,children:c})}var h=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[1,9,0]],x=0,q=0;var m=function(){var e=Object(n.useState)(["","","","","","","","","",""]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)("X"),m=Object(i.a)(s,2),S=m[0],N=m[1],k=Object(n.useState)({winner:"",state:""}),C=Object(i.a)(k,2),p=C[0],w=C[1],E=Object(n.useState)(0),X=Object(i.a)(E,2),g=X[0],I=X[1],J=Object(n.useState)(0),y=Object(i.a)(J,2),G=y[0],P=y[1];Object(n.useEffect)((function(){A(),R(),"O"===S&&(q=1,N(S))}),[t]),Object(n.useEffect)((function(){if(""!==p.state){switch(p.winner){case"X":alert("Game finished! Winning Player: O"),P(G+1);break;case"O":alert("Game finished! Winning Player: X"),I(g+1);break;case"":alert("Game finished! It's a tie!")}z(),w({winner:"",state:""})}}),[p]);var A=function(){h.forEach((function(e){var c=t[e[0]];if(""!==c){var n=!0;e.forEach((function(e){t[e]!==c&&(n=!1)})),n&&w({winner:S,state:"won"})}}))},R=function(){var e=!0;t.forEach((function(c){""===c&&(e=!1)})),e&&w({winner:"",state:"tie"})},W=function(e){a(t.map((function(c,t){return t===e&&""===c?(N("X"===S?"O":"X"),S):c})))},z=function(){a(["","","","","","","","","",""]),N("X")},B=Object(n.useState)("O: Jogador"),U=Object(i.a)(B,2),V=U[0],D=U[1];if("O"===S&&1===x&&1===q&&""===p.state){q=0;var F,H=0;t.map((function(e,c){if(""===e){var n=function(e){var c=1,n=0,a=0,s=0;return h.forEach((function(i){i.forEach((function(r){r===e&&(i.forEach((function(e){"X"===t[e]&&a++,"O"===t[e]&&s++})),1===s&&(c=2),1===a&&(c=.5),2===a&&(c=5),2===s&&(c=10),0!==e&&2!==e&&6!==e&&8!==e||(c+=.5),4===e&&(c+=1),9===e&&(c=.3),c>n&&(n=c),a=0,s=0)}))})),n}(c);n>H&&(H=n,F=c)}})),a(t.map((function(e,c){return c===F?(N("X"),H=0,S):e})))}return Object(r.jsxs)("div",{className:"Centro",children:[Object(r.jsxs)("div",{children:["X ",Object(r.jsx)("p",{}),g]}),Object(r.jsxs)("div",{className:"App",children:["Vez de: ",S," ",Object(r.jsx)("p",{}),Object(r.jsxs)("div",{className:"board",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(o,{val:t[0],chooseSquare:function(){W(0)}}),Object(r.jsx)(u,{val:t[1],chooseSquare:function(){W(1)}}),Object(r.jsx)(j,{val:t[2],chooseSquare:function(){W(2)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(l,{val:t[3],chooseSquare:function(){W(3)}}),Object(r.jsx)(d,{val:t[4],chooseSquare:function(){W(4)}}),Object(r.jsx)(O,{val:t[5],chooseSquare:function(){W(5)}})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(v,{val:t[6],chooseSquare:function(){W(6)}}),Object(r.jsx)(f,{val:t[7],chooseSquare:function(){W(7)}}),Object(r.jsx)(b,{val:t[8],chooseSquare:function(){W(8)}})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"ai",onClick:function(){0===x?(D("O: CPU"),x=1):(D("O: Jogador"),x=0)},children:V}),Object(r.jsx)("button",{onClick:z,children:"REINICIAR"})]})]}),Object(r.jsxs)("div",{children:["O ",Object(r.jsx)("p",{}),G]})]})};s.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))},4:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.cf864798.chunk.js.map