(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"Password Generator","image":"https://i.imgur.com/p18OP6L.png","ghLink":"https://github.com/codymu45/passwordgenerator","dLink":"https://codymu45.github.io/passwordgenerator/"},{"id":2,"name":"Breaking Bad Quiz","image":"https://i.imgur.com/G6OAMPB.jpg","ghLink":"https://github.com/codymu45/quiz","dLink":"https://codymu45.github.io/quiz/"},{"id":3,"name":"Daily Planner","image":"https://i.imgur.com/mODKTOZ.jpg","ghLink":"https://github.com/codymu45/dailyPlanner","dLink":"https://codymu45.github.io/dailyPlanner/"},{"id":4,"name":"Weather Dashboard","image":"https://i.imgur.com/i2s4dCX.jpg","ghLink":"https://github.com/codymu45/weather_app","dLink":"https://codymu45.github.io/weather_app/"},{"id":5,"name":"Note Taker","image":"https://i.imgur.com/vhB6OoV.png","ghLink":"https://github.com/codymu45/noteTaker","dLink":"https://mullennotetaker.herokuapp.com/"},{"id":6,"name":"Task Manager","image":"https://i.imgur.com/ua5mlQ4.jpg","ghLink":"https://github.com/codymu45/workInProgress","dLink":"https://mecc-project2.herokuapp.com/"}]')},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},60:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(2),s=i.n(n),c=i(9),r=i.n(c),o=(i(37),i(38),i(24)),d=(i(39),i(10)),h=function(){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=e.current;t.width=window.innerWidth,t.height=window.innerHeight,t.style.width="".concat(window.innerWidth,"px"),t.style.height="".concat(window.innerHeight,"px");var i=t.getContext("2d"),a={x:void 0,y:void 0},n=["#033f63","#28666e","#7c9885","#b5b682","#fedc97"];function s(e,s,c,r,o){this.x=e,this.y=s,this.velx=c,this.vely=r,this.radius=o,this.minRadius=o,this.color=n[Math.floor(Math.random()*n.length)],this.draw=function(){i.beginPath(),i.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),i.fillStyle=this.color,i.fill()},this.update=function(){(this.x+this.radius>t.width||this.x-this.radius<0)&&(this.velx=-this.velx),(this.y+this.radius>t.height||this.y-this.radius<0)&&(this.vely=-this.vely),this.x+=this.velx,this.y+=this.vely,a.x-this.x<70&&a.x-this.x>-70&&a.y-this.y<70&&a.y-this.y>-70?this.radius<40&&(this.radius+=1):this.radius>this.minRadius&&(this.radius-=1),this.draw()}}window.addEventListener("mousemove",(function(e){a.x=e.x,a.y=e.y})),window.addEventListener("resize",(function(){var t=e.current;t.width=window.innerWidth,t.height=window.innerHeight,t.style.width="".concat(window.innerWidth,"px"),t.style.height="".concat(window.innerHeight,"px"),r()}));var c=[];function r(){c=[];for(var e=0;e<1e3;e++){var i=5*Math.random()+1,a=Math.random()*(t.width-2*i)+i,n=Math.random()*(t.height-2*i)+i,r=1.2*(Math.random()-.5),o=1.2*(Math.random()-.5);c.push(new s(a,n,r,o,i))}}r(),function e(){requestAnimationFrame(e),i.clearRect(0,0,t.width,t.height);for(var a=0;a<c.length;a++)c[a].update()}()}),[]),Object(a.jsxs)("div",{id:"canvasContainer",children:[Object(a.jsx)("div",{id:"topPage"}),Object(a.jsx)("div",{className:"backgroundCanvas",children:Object(a.jsx)("canvas",{ref:e})}),Object(a.jsxs)("div",{className:"headText",children:[Object(a.jsx)("h1",{children:"Cody Mullen"}),Object(a.jsx)("h2",{children:"Full Stack Web Developer"}),Object(a.jsx)("button",{className:"seeWork",type:"button",children:Object(a.jsx)(d.Link,{className:"downArrowToAbout",to:"aboutContainer",smooth:!0,duration:1e3,children:Object(a.jsx)("span",{children:Object(a.jsx)(o.a,{className:"downArrow"})})})})]})]})},l=(i(49),[{title:"Home",url:"topPage",cName:"nav-links"},{title:"About",url:"aboutContainer",cName:"nav-links"},{title:"Projects",url:"projectContainer",cName:"nav-links"},{title:"Contact",url:"contactContainer",cName:"nav-links"}]),j=function(){return Object(a.jsx)("div",{id:"navBarContainer",children:Object(a.jsx)("nav",{className:"NavBarItem",children:Object(a.jsx)("ul",{className:"nav-menu",children:l.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(d.Link,{className:e.cName,to:e.url,smooth:!0,duration:1e3,children:Object(a.jsx)("span",{children:e.title})})},t)}))})})})},u=(i(50),i(6)),m=i.n(u),b=(i(17),function(){return Object(n.useEffect)((function(){m.a.init({duration:1e3})}),[]),Object(a.jsxs)("div",{id:"aboutContainer",children:[Object(a.jsxs)("div",{className:"aboutTitle",children:[Object(a.jsx)("h1",{className:"aboutHeader",children:"About"}),Object(a.jsx)("hr",{className:"aboutUnderline"})]}),Object(a.jsxs)("div",{className:"headShotContainer",children:[Object(a.jsx)("div",{"data-aos":"fade-right",className:"profilePicture"}),Object(a.jsx)("p",{"data-aos":"fade-left",className:"aboutMe",children:"Hello, I'm Cody Mullen. I am a full stack web developer. I am a problem solver and have a strong work ethic. I have recently earned a certificate in full stack web development from the University of California, Riverside. I am creative and passionate about learning. I primarily focus on functionality and design. With each project, I strive to provide my team with eye-catching applications, and a user friendly process."}),Object(a.jsx)("p",{"data-aos":"fade-right",className:"skillsHead",children:"Skills"}),Object(a.jsx)("hr",{className:"skillsUnderline"}),Object(a.jsx)("p",{"data-aos":"fade-left",className:"skillsList",children:"JS | CSS | HTML5 | MongoDB | GitHub | MySQL | Express | React | Node | Handlebars | jQuery | Bootstrap | Adobe PS | Adobe Illustrator"})]})]})}),p=i(25),g=i(26),f=i(31),x=i(30);i(51);var O=function(e){return Object(n.useEffect)((function(){m.a.init({duration:800})}),[]),Object(a.jsxs)("div",{"data-aos":"flip-right",className:"card",children:[Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{alt:e.name,src:e.image})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Project:"})," ",e.name]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.ghLink,children:"Github"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.dLink,children:"Deployed App"})})]})})]})};i(52);var v=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})},y=i(27),w=(i(53),function(e){Object(f.a)(i,e);var t=Object(x.a)(i);function i(){var e;Object(p.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={projects:y},e}return Object(g.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"projectContainer",children:[Object(a.jsxs)("div",{className:"projectTitle",children:[Object(a.jsx)("h1",{className:"projectHeader",children:"Projects"}),Object(a.jsx)("hr",{className:"projectUnderline"})]}),Object(a.jsx)(v,{children:this.state.projects.map((function(e){return Object(a.jsx)(O,{id:e.id,name:e.name,image:e.image,ghLink:e.ghLink,dLink:e.dLink},e.id)}))})]})}}]),i}(n.Component)),k=(i(54),i(29)),N=i(5),L=function(){return Object(n.useEffect)((function(){m.a.init({duration:1e3})}),[]),Object(a.jsxs)("div",{id:"contactContainer",children:[Object(a.jsxs)("div",{className:"contactTitle",children:[Object(a.jsx)("h1",{className:"contactHeader",children:"Contact"}),Object(a.jsx)("hr",{className:"contactUnderline"})]}),Object(a.jsxs)("form",{action:"https://formspree.io/f/mjvpqjrz",method:"POST",className:"contactForm",children:[Object(a.jsx)("label",{"data-aos":"fade-right",for:"inputName",id:"nameLabel",children:"Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{"data-aos":"fade-left",type:"text",id:"inputName",name:"name"}),Object(a.jsx)("label",{"data-aos":"fade-right",for:"inputEmail",id:"emailLabel",children:"Email:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{"data-aos":"fade-left",type:"email",id:"inputEmail",name:"_replyto"}),Object(a.jsx)("label",{"data-aos":"fade-right",for:"inputMessage",id:"messageLabel",children:"Message:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{"data-aos":"fade-left",type:"text",id:"inputMessage",name:"message"}),Object(a.jsx)("button",{"data-aos":"fade-right",type:"submit",id:"contactSubmit",children:"Send!"})]}),Object(a.jsx)(k.a,{children:Object(a.jsx)("div",{className:"footContainer",children:Object(a.jsxs)("div",{className:"contactLinks",children:[Object(a.jsxs)("a",{className:"footLogo",href:"https://www.linkedin.com/in/codymu/",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)(N.d,{id:"linkedInLogo"}),"LinkedIn"]}),Object(a.jsxs)("a",{className:"footLogo",href:"https://github.com/codymu45",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)(N.b,{id:"githubLogo"}),"Github"]}),Object(a.jsxs)("a",{className:"footLogo",href:"https://www.instagram.com/c_murren/",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)(N.c,{id:"instagramLogo"}),"Instagram"]}),Object(a.jsxs)("a",{className:"footLogo",href:"https://docs.google.com/document/d/1pt4XwT198rftlTEp9oAScGZCWY0UyKX9_7We-1WaW10/edit",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)(N.a,{id:"resumeLogo"}),"Resume"]})]})})})]})};var C=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(h,{}),Object(a.jsx)(b,{}),Object(a.jsx)(w,{}),Object(a.jsx)(L,{})]})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,61)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.dd847233.chunk.js.map