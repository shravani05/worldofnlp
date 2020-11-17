(this["webpackJsonpreact-flask-app"]=this["webpackJsonpreact-flask-app"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a(28),i=a.n(r),c=a(11),l=a(12),o=a(14),j=a(13),h=a(72),m=a(7),d=a(16),u=a(69),b=a(68),x=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{src:"./images/nlp2.jpeg",fluid:!0,className:"img"}),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("h4",{children:"Dive into the world of  Natural Languagae Processing by exploring following options. Play with the text and experience the power of Machine Learning Algorithms. "}),Object(n.jsx)("div",{className:"cards",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(d.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"mb-2",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:"Sentiment Analysis"}),Object(n.jsx)(d.a.Text,{children:"Get a quick analysis of whether your Review belongs to the Positive or Negative class."}),Object(n.jsx)(d.a.Link,{href:"/sentiment_analysis",children:"Explore now"})]})}),Object(n.jsx)(d.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"mb-2",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:"Emotion Analysis"}),Object(n.jsx)(d.a.Text,{children:"Get a quick analysis of the emotion of the writer based on the writer's content."}),Object(n.jsx)(d.a.Link,{href:"/emotion_analysis",children:"Explore now"})]})}),Object(n.jsx)(d.a,{bg:"dark",text:"white",style:{width:"18rem"},className:"mb-2",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)(d.a.Title,{children:"Text Summarization"}),Object(n.jsx)(d.a.Text,{children:"Get a quick summary of a given number of sentences for your data."}),Object(n.jsx)(d.a.Link,{href:"/text_summary",children:"Explore now"})]})})]})})]})]})}}]),a}(s.Component),O=a(33),p=a.n(O),f=a(36),v=a(29),y=a(26),g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={sentimentClassification:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"intro-text",children:[Object(n.jsx)("h1",{children:"Sentiment Analysis"}),Object(n.jsx)("h4",{style:{margin:"30px",marginBottom:"40px"},children:"Sentiment Analysis aims to detect positive or negative feelings from text"})]}),Object(n.jsx)(f.a,{initialValues:{review:"I am good review!"},onSubmit:function(t){p.a.post("/sentiment/",t).then((function(t){e.setState({sentimentClassification:t.data.result})}))},children:function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),s=e.handleBlur,r=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:r,children:[Object(n.jsx)("div",{className:"text-input",children:Object(n.jsx)(v.a,{as:"textarea",type:"text",name:"review",onChange:a,onBlur:s,value:t.review,placeholder:"Enter review",className:"text-area","aria-label":"With textarea"})}),Object(n.jsx)(y.a,{variant:"secondary",size:"lg",type:"submit",active:!0,children:"Classify"}),Object(n.jsx)("br",{})]})}}),""===this.state.sentimentClassification?null:"1"===this.state.sentimentClassification?Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"positive",src:"./images/positive.webp"}),"POSITIVE"]})}):Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"negative",src:"./images/negative.png"}),"NEGATIVE"]})})]})}}]),a}(s.Component),N=a(51),w=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={summary:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"intro-text",children:[Object(n.jsx)("h1",{children:"Text Summarization"}),Object(n.jsx)("h4",{style:{margin:"25px",marginBottom:"40px"},children:"Text Summarization aims to reduce the size of the text while preserving its important information and overall meaning."})]}),Object(n.jsx)(f.a,{initialValues:{content:"Solo travel is not for everyone. Some people return home soon after departing, others cry for weeks before embracing it, and some just embrace it right away. But you\u2019ll never learn that if you don\u2019t travel once by yourself. Whether a weekend away, a two-week vacation, or trip around the world, try it at least once. Don\u2019t wait for people or hold back from living your dreams. You could be waiting a long time until someone finally says yes. There\u2019s only now \u2014 and if you don\u2019t go, you\u2019ll regret it.",sentences:"2"},onSubmit:function(t){p.a.post("/summary/",t).then((function(t){e.setState({summary:t.data.result})}))},children:function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),s=e.handleBlur,r=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:r,children:[Object(n.jsxs)("div",{className:"text-input",children:[Object(n.jsx)(v.a,{as:"textarea",type:"text",name:"content",onChange:a,onBlur:s,value:t.content,placeholder:"Enter text",className:"text-area-summary","aria-label":"With textarea"}),Object(n.jsxs)(N.a,{className:"text-sentence",children:[Object(n.jsx)(N.a.Prepend,{children:Object(n.jsx)(N.a.Text,{id:"inputGroup-sizing-default",children:"Number of Sentences"})}),Object(n.jsx)(v.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"text",name:"sentences",onChange:a,onBlur:s,value:t.sentences,placeholder:"Enter number of sentences"})]})]}),Object(n.jsx)(y.a,{variant:"secondary",size:"lg",type:"submit",active:!0,children:"Summarize"}),Object(n.jsx)("br",{})]})}}),""===this.state.summary?null:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"result-summary",children:"Summary:"}),Object(n.jsx)("div",{className:"text-input",children:Object(n.jsx)(v.a,{as:"textarea",type:"text",name:"summary",value:this.state.summary,placeholder:"Summary",className:"text-area-summary","aria-label":"With textarea",readOnly:!0})})]})]})}}]),a}(s.Component),S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={mood:""},e}return Object(l.a)(a,[{key:"renderSwitch",value:function(e){switch(e){case"0":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"angry",src:"./images/angry.png"}),"ANGER"]})});case"1":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"fear",src:"./images/fear.png"}),"FEAR"]})});case"2":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"joy",src:"./images/joy.png"}),"JOY"]})});case"3":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"love",src:"./images/love.png"}),"LOVE"]})});case"4":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"sad",src:"./images/sad.png"}),"SADNESS"]})});case"5":return Object(n.jsx)("div",{className:"result",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("img",{className:"sentiment-img",alt:"surprise",src:"./images/surprise.png"}),"SURPRISE"]})});default:return null}}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"intro-text",children:[Object(n.jsx)("h1",{children:"Emotion Analysis"}),Object(n.jsx)("h4",{style:{margin:"30px",marginBottom:"40px"},children:"Emotion Analysis aims to detect and recognize types of feelings through the expression of texts, such as anger, fear, joy, sadness, love, and surprise."})]}),Object(n.jsx)(f.a,{initialValues:{text:"I now feel compromised and skeptical of the value of every unit of work I put in"},onSubmit:function(t){p.a.post("/mood/",t).then((function(t){e.setState({mood:t.data.result})}))},children:function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),s=e.handleBlur,r=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:r,children:[Object(n.jsx)("div",{className:"text-input",children:Object(n.jsx)(v.a,{as:"textarea",type:"text",name:"text",onChange:a,onBlur:s,value:t.text,placeholder:"Enter text",className:"text-area","aria-label":"With textarea"})}),Object(n.jsx)(y.a,{variant:"secondary",size:"lg",type:"submit",active:!0,children:"Classify"}),Object(n.jsx)("br",{})]})}}),this.renderSwitch(this.state.mood)]})}}]),a}(s.Component),k=a(32),C=a(43),E=a(42),A=(a(67),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(k.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(k.a.Brand,{href:"/",className:"header-nav",children:"WORLD OF NLP"}),Object(n.jsx)(k.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(k.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsx)(C.a,{className:"mr-auto"}),Object(n.jsxs)(C.a,{className:"header-nav",children:[Object(n.jsx)(C.a.Link,{href:"/",style:{fontFamily:"'Josefin Sans', sans-serif"},children:"Home"}),Object(n.jsxs)(E.a,{title:"Explore",id:"collasible-nav-dropdown",style:{fontFamily:"'Josefin Sans', sans-serif"},children:[Object(n.jsx)(E.a.Item,{href:"/sentiment_analysis",children:"Sentiment Analysis"}),Object(n.jsx)(E.a.Item,{href:"/emotion_analysis",children:"Emotion Analysis"}),Object(n.jsx)(E.a.Item,{href:"/text_summary",children:"Text Summary"})]}),Object(n.jsx)(C.a.Link,{href:"/about",style:{fontFamily:"'Josefin Sans', sans-serif"},children:"About"})]})]})]})}}]),a}(s.Component)),B=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)(k.a.Brand,{href:"/",className:"header-nav",children:"WORLD OF NLP"})})}}]),a}(s.Component),T=a(54),z=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h3",{children:"About the Developer"}),Object(n.jsx)("h5",{children:"Hello, I am Shravani Chavan, a Machine Learning Enthusiast with an aim to develop cool ML Web Apps."}),Object(n.jsxs)("h5",{children:["You can contact me at: ",Object(n.jsx)("a",{href:"mailto:chavanshravani357@gmail.com",children:"chavanshravani357@gmail.com"})]})]}),Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h3",{children:"References"}),Object(n.jsx)("h5",{children:Object(n.jsx)(T.a,{href:"https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33",children:"Create a complete Machine learning web application using React and Flask"})}),Object(n.jsx)("h5",{children:Object(n.jsx)(T.a,{href:"https://towardsdatascience.com/understand-text-summarization-and-create-your-own-summarizer-in-python-b26a9f09fc70",children:"Understand Text Summarization and create your own summarizer in python"})})]})]})}}]),a}(s.Component),L=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(A,{}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/about",component:z}),Object(n.jsx)(m.a,{path:"/text_summary",component:w}),Object(n.jsx)(m.a,{path:"/emotion_analysis",component:S}),Object(n.jsx)(m.a,{path:"/sentiment_analysis",component:g}),Object(n.jsx)(m.a,{path:"/",component:x})]}),Object(n.jsx)(B,{})]})}}]),a}(s.Component);i.a.render(Object(n.jsx)(L,{}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.0666308b.chunk.js.map