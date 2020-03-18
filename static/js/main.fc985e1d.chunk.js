(this["webpackJsonpassignment-two"]=this["webpackJsonpassignment-two"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),l=n.n(r),o=(n(13),n(3)),c=n(4),s=n(6),h=n(5),u=n(7);n(14);var m=function(e){return i.a.createElement("div",{className:"validation-banner",style:{color:e.textLength>=5?"green":"red"}},"Text ",e.textLength>=5?"long enough":"too short")};n(15);var p=function(e){return i.a.createElement("div",{className:"instructions"},i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"This is the second assignment from the course ",i.a.createElement("a",{href:"https://www.udemy.com/course/react-the-complete-guide-incl-redux"},"React The Complete Guide"),"."),i.a.createElement("p",null,"Enter characters in the text input, and boxes representing the characters will appear. Click the boxes to remove characters from the input."),i.a.createElement("h3",null,"Assignment"),i.a.createElement("ol",{className:"instructions__list"},i.a.createElement("li",null,"Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)."),i.a.createElement("li",null,"Create a new component (=> ValidationComponent) which receives the text length as a prop"),i.a.createElement("li",null,'Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)'),i.a.createElement("li",null,"Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)."),i.a.createElement("li",null,"Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop."),i.a.createElement("li",null,"When you click a CharComponent, it should be removed from the entered text.")))};n(16);var d=function(e){return i.a.createElement("div",{className:"char-box",onClick:function(t){e.handleRemoveChar(e.i)}},i.a.createElement("p",null,e.char))},g=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleInputTextChange=function(e){n.setState({inputText:e.target.value})},n.handleRemoveChar=function(e){var t=n.state.inputText.split("");t.splice(e,1),t=t.join(""),n.setState({inputText:t})},n.state={inputText:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.inputText.split("").map((function(t,n){return i.a.createElement(d,{key:n,char:t,i:n,handleRemoveChar:e.handleRemoveChar})}));return i.a.createElement("div",{className:"app"},i.a.createElement("h1",{className:"app__page-title"},"Assignment Two - React Complete Guide"),i.a.createElement("div",{className:"app__assignment-container"},i.a.createElement(m,{textLength:this.state.inputText.length}),i.a.createElement("input",{className:"app__text-input",type:"text",value:this.state.inputText,onChange:this.handleInputTextChange}),i.a.createElement("p",null,"Text length: ",this.state.inputText.length),i.a.createElement("div",{className:"char-list"},t)),i.a.createElement(p,null))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fc985e1d.chunk.js.map