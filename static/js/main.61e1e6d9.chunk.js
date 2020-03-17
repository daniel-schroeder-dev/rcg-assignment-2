(this["webpackJsonpassignment-two"]=this["webpackJsonpassignment-two"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),l=n.n(r),o=(n(13),n(3)),c=n(4),u=n(6),s=n(5),h=n(7),p=n(20);n(14);var m=function(e){return i.a.createElement("div",{className:"validation-banner",style:{color:e.textLength>=5?"green":"red"}},"Text ",e.textLength>=5?"long enough":"too short")};n(15);var d=function(e){return i.a.createElement("div",{className:"instructions"},i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"This is the second assignment from the course ",i.a.createElement("a",{href:"https://www.udemy.com/course/react-the-complete-guide-incl-redux"},"React The Complete Guide"),"."),i.a.createElement("p",null,"Enter characters in the text input, and boxes representing the characters will appear. Click the boxes to remove characters from the input."),i.a.createElement("h3",null,"Assignment"),i.a.createElement("ol",{className:"instructions__list"},i.a.createElement("li",null,"Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)."),i.a.createElement("li",null,"Create a new component (=> ValidationComponent) which receives the text length as a prop"),i.a.createElement("li",null,'Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)'),i.a.createElement("li",null,"Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)."),i.a.createElement("li",null,"Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop."),i.a.createElement("li",null,"When you click a CharComponent, it should be removed from the entered text.")))};n(16);var g=function(e){return i.a.createElement("div",{className:"char-box",onClick:function(t){e.handleRemoveChar(e.uuid)}},i.a.createElement("p",null,e.char))},f=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleInputTextChange=function(e){var t=e.target.value,a=n.formatInputText();n.setState((function(e,n){var i=a.split("").findIndex((function(e,n){return e!==t[n]}));if(t.length<a.length)e.inputText.splice(i,1);else if(t.length>a.length&&i>-1){var r=t.split("")[i];e.inputText.splice(i,0,{char:r,uuid:Object(p.a)()})}else{var l=t.split("").pop();e.inputText.push({char:l,uuid:Object(p.a)()})}return e}))},n.formatInputText=function(){return n.state.inputText.map((function(e){return e.char})).join("")},n.handleRemoveChar=function(e){n.setState((function(t,n){return t.inputText=t.inputText.filter((function(t){return t.uuid!==e})),t}))},n.state={inputText:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.inputText.map((function(t){return i.a.createElement(g,{key:t.uuid,char:t.char,uuid:t.uuid,handleRemoveChar:e.handleRemoveChar})}));return i.a.createElement("div",{className:"app"},i.a.createElement("h1",{className:"app__page-title"},"Assignment Two - React Complete Guide"),i.a.createElement("div",{className:"app__assignment-container"},i.a.createElement(m,{textLength:this.state.inputText.length}),i.a.createElement("input",{className:"app__text-input",type:"text",value:this.formatInputText(),onChange:this.handleInputTextChange}),i.a.createElement("p",null,"Text length: ",this.state.inputText.length),i.a.createElement("div",{className:"char-list"},t)),i.a.createElement(d,null))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.61e1e6d9.chunk.js.map