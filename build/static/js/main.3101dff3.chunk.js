(this.webpackJsonpcodesprint=this.webpackJsonpcodesprint||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(9),s=a.n(n),u=a(50),o=a.n(u),c=a(69),i=a(16),m=a(166),b=a(163),d=a(162),E=a(171),p=a(177),f=a(167),v=a(157),x=a(70),g=a.n(x);a(104),a(105),a(106);function h(e){return r.a.createElement(g.a,{mode:"java",theme:"github",onChange:e.onChange,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0},value:e.codeValue,height:"500px",width:"80%"})}a(46);var C=a(164),O=a(173),T=a(165),k=(a(172),a(74)),N=a(175),w=a(174),y=Object(v.a)((function(e){return Object(N.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"80%"}}})}));function j(e){var t=y(),a=function(t){var a=Object(k.a)({},e.test);a[t.target.name]=t.target.value,e.setTests((function(t){return t.map((function(t){return t.index===e.test.index?a:t}))}))};return r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(w.a,{label:"Input",multiline:!0,rows:5,variant:"outlined",style:{textAlign:"center"},value:e.test.input,onChange:a,name:"input"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,{label:"Expected Output",multiline:!0,rows:5,variant:"outlined",style:{textAlign:"center"},value:e.test.expectedOutput,onChange:a,name:"expectedOutput"})))}var R=Object(v.a)((function(e){return{root:{flexGrow:1,width:"80%",backgroundColor:e.palette.background.paper}}}));function S(e){var t=R(),a=Object(l.useState)(0),n=Object(i.a)(a,2),s=n[0],u=n[1];return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{position:"static",color:"default"},r.a.createElement(O.a,{value:s,onChange:function(e,t){u(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},r.a.createElement(T.a,{label:"Test 1"}),r.a.createElement(T.a,{label:"Test 2"}),r.a.createElement(T.a,{label:"Test 3"}),r.a.createElement(T.a,{label:"Test 4"}),r.a.createElement(T.a,{label:"Test 5"}),r.a.createElement(T.a,{label:"Test 6"}),r.a.createElement(T.a,{label:"Test 7"}),r.a.createElement(T.a,{label:"Test 8"}),r.a.createElement(T.a,{label:"Test 9"}),r.a.createElement(T.a,{label:"Test 10"}))),r.a.createElement("br",null),r.a.createElement("br",null),0===s&&r.a.createElement(j,{test:e.tests[0],setTests:e.setTests}),1===s&&r.a.createElement(j,{test:e.tests[1],setTests:e.setTests}),2===s&&r.a.createElement(j,{test:e.tests[2],setTests:e.setTests}),3===s&&r.a.createElement(j,{test:e.tests[3],setTests:e.setTests}),4===s&&r.a.createElement(j,{test:e.tests[4],setTests:e.setTests}),5===s&&r.a.createElement(j,{test:e.tests[5],setTests:e.setTests}),6===s&&r.a.createElement(j,{test:e.tests[6],setTests:e.setTests}),7===s&&r.a.createElement(j,{test:e.tests[7],setTests:e.setTests}),8===s&&r.a.createElement(j,{test:e.tests[8],setTests:e.setTests}),9===s&&r.a.createElement(j,{test:e.tests[9],setTests:e.setTests}),r.a.createElement("br",null),r.a.createElement("br",null))}var W=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"80%"}},output:{borderColor:"#000000",textColor:"#ffffff",textAlign:"center"}}}));function V(e){var t=W();return e.result?"Compilation Error"===e.result.result.status.description?r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h5"},"Compilation Error"),r.a.createElement("br",null),r.a.createElement(w.a,{multiline:!0,rows:12,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.compile_output}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))):e.result.result.status.description.includes("Runtime Error")?r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("br",null),r.a.createElement(b.a,{variant:"h5"},"Run-Time Error"),r.a.createElement("div",null,r.a.createElement(w.a,{label:"System Error",multiline:!0,rows:5,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.stderr?e.result.result.stderr:" "}),r.a.createElement("br",null),r.a.createElement(w.a,{label:"System Output",multiline:!0,rows:5,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.stdout?e.result.result.stdout:" "}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null,"Execution Time: ",e.result.result.time))):"Time Limit Exceeded"===e.result.result.status.description?r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("br",null),r.a.createElement(b.a,{variant:"h5"},"Time Limit Exceeded"),r.a.createElement("div",null,r.a.createElement(w.a,{label:"System Error",multiline:!0,rows:4,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.stderr?e.result.result.stderr:" "}),r.a.createElement("br",null),r.a.createElement(w.a,{label:"System Output",multiline:!0,rows:4,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.stdout?e.result.result.stdout:" "}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null,"Execution Time: ",e.result.result.time))):r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(w.a,{label:"Expected Output",multiline:!0,rows:5,variant:"outlined",disabled:!0,className:t.output,value:e.result.expectedOutput}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,{label:"Received Output",multiline:!0,rows:5,variant:"outlined",disabled:!0,className:t.output,value:e.result.result.stdout}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,null,"Execution Time: ",e.result.result.time," seconds"))):r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"h6"},"You did not enter an expected output for this test."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}var A=Object(v.a)((function(e){return{root:{flexGrow:1,width:"80%",backgroundColor:e.palette.background.paper},tabs:{border:"1px solid ".concat(e.palette.divider)}}}));function $(e){var t=A(),a=Object(l.useState)(0),n=Object(i.a)(a,2),s=n[0],u=n[1];function o(e){return null===e?"#adad97":"Accepted"===e.result.status.description&&e.result.stdout.replace(/^\s+|\s+$/g,"")===e.expectedOutput.replace(/^\s+|\s+$/g,"")?"#3ce895":"#e36d6d"}return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{position:"static",color:"default"},r.a.createElement(O.a,{value:s,onChange:function(e,t){u(t)},indicatorColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},r.a.createElement(T.a,{label:"Result 1",className:t.tabs,style:{backgroundColor:o(e.results[0]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 2",className:t.tabs,style:{backgroundColor:o(e.results[1]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 3",className:t.tabs,style:{backgroundColor:o(e.results[2]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 4",className:t.tabs,style:{backgroundColor:o(e.results[3]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 5",className:t.tabs,style:{backgroundColor:o(e.results[4]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 6",className:t.tabs,style:{backgroundColor:o(e.results[5]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 7",className:t.tabs,style:{backgroundColor:o(e.results[6]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 8",className:t.tabs,style:{backgroundColor:o(e.results[7]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 9",className:t.tabs,style:{backgroundColor:o(e.results[8]),textColor:"#000000",fontWeight:"bold"}}),r.a.createElement(T.a,{label:"Result 10",className:t.tabs,style:{backgroundColor:o(e.results[9]),textColor:"#000000",fontWeight:"bold"}}))),0===s&&r.a.createElement(V,{result:e.results[0]}),1===s&&r.a.createElement(V,{result:e.results[1]}),2===s&&r.a.createElement(V,{result:e.results[2]}),3===s&&r.a.createElement(V,{result:e.results[3]}),4===s&&r.a.createElement(V,{result:e.results[4]}),5===s&&r.a.createElement(V,{result:e.results[5]}),6===s&&r.a.createElement(V,{result:e.results[6]}),7===s&&r.a.createElement(V,{result:e.results[7]}),8===s&&r.a.createElement(V,{result:e.results[8]}),9===s&&r.a.createElement(V,{result:e.results[9]}),r.a.createElement("br",null),r.a.createElement("br",null))}var B=a(51),F=a.n(B),G=a(168),I=Object(v.a)((function(e){return{root:{flexGrow:1},subHeaderText:{color:"#690e0e"},formControl:{minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function J(){var e=I(),t=["java","c","c++","python","javascript"],a=Object(l.useState)(0),n=Object(i.a)(a,2),s=n[0],u=n[1],v=Object(l.useState)(""),x=Object(i.a)(v,2),g=x[0],C=x[1],O=Object(l.useState)([{index:0,input:"",expectedOutput:""},{index:1,input:"",expectedOutput:""},{index:2,input:"",expectedOutput:""},{index:3,input:"",expectedOutput:""},{index:4,input:"",expectedOutput:""},{index:5,input:"",expectedOutput:""},{index:6,input:"",expectedOutput:""},{index:7,input:"",expectedOutput:""},{index:8,input:"",expectedOutput:""},{index:9,input:"",expectedOutput:""}]),T=Object(i.a)(O,2),k=T[0],N=T[1],w=Object(l.useState)([]),y=Object(i.a)(w,2),j=y[0],R=y[1],W=Object(l.useState)(!1),V=Object(i.a)(W,2),A=V[0],B=V[1],J=Object(l.useState)(!1),P=Object(i.a)(J,2),_=P[0],L=P[1];var M=function(){var e=Object(c.a)(o.a.mark((function e(){var a,l,r,n,u,c,i,m,b,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(!0),a=k.filter((function(e){return""!==e.expectedOutput})),l=a.map((function(e){return{source_code:g,stdin:e.input,language:t[s],index:e.index}})),r=[],n=0;case 5:if(!(n<l.length)){e.next=13;break}return e.next=8,F.a.post("http://localhost:3001/api/compile",l[n]);case 8:u=e.sent,r[n]={postResponse:u,index:l[n].index};case 10:n++,e.next=5;break;case 13:for(c=r.map((function(e){return{token:e.postResponse.data,index:e.index}})),i=c.map((function(e){return{submission:F.a.get("http://localhost:3001/api/".concat(e.token),{token:e.token}),index:e.index}})),m=[],b=0;b<10;b++)m[b]=Promise.resolve(null);for(d=0;d<i.length;d++)m[i[d].index]=i[d].submission;Promise.all(m).then((function(e){var t=e.map((function(e,t){return e?{result:e.data,expectedOutput:k[t].expectedOutput}:null}));R(t),B(!1),L(!0)}));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(m.a,{align:"center"},r.a.createElement("br",null),r.a.createElement(b.a,{variant:"h4",className:e.subHeaderText},"Focused Competetive Coding Editor"),r.a.createElement("br",null),r.a.createElement(d.a,{variant:"outlined",className:e.formControl},r.a.createElement(E.a,{id:"language-choice-form",value:s,onChange:function(e){u(e.target.value)}},r.a.createElement(p.a,{value:0},"Java"),r.a.createElement(p.a,{value:1},"C"),r.a.createElement(p.a,{value:2},"C++"),r.a.createElement(p.a,{value:3},"Python"),r.a.createElement(p.a,{value:4},"Javascript"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h,{mode:t[s].toLowerCase(),onChange:function(e){!function(e){C(e)}(e)},codeValue:g}),r.a.createElement(b.a,null,'Note for Java users: Put your main (execution) method in a class named "Main"'),r.a.createElement("br",null),r.a.createElement("br",null),!A&&r.a.createElement(f.a,{size:"large",variant:"contained",onClick:M,style:""===g.replace(/^\s+|\s+$/g,"")?{color:"#000000",backgroundColor:"#807373"}:{color:"#ffffff",backgroundColor:"#9c5a5a",fontWeight:"bold"},disabled:""===g.replace(/^\s+|\s+$/g,"")},"Run Tests"),A&&r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{color:"secondary",size:60})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,{tests:k,setTests:N}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),_&&r.a.createElement($,{results:j})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}var P=a(170),_=a(169),L=Object(v.a)((function(e){return{root:{flexGrow:1},titleText:{flexGrow:1,fontWeight:"bold",color:"#962f2f"}}}));function M(e){var t=L();return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{position:"static",style:{background:"#fffbfa"}},r.a.createElement(_.a,null),r.a.createElement(P.a,null,r.a.createElement(b.a,{variant:"h4",className:t.titleText},"Code Sprint"))))}function z(){return r.a.createElement("div",{style:{background:"#fff5fb"}},r.a.createElement(M,null),r.a.createElement(J,null))}function D(){return r.a.createElement(z,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(125)}},[[91,1,2]]]);
//# sourceMappingURL=main.3101dff3.chunk.js.map