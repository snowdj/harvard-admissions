(this["webpackJsonpharvard-admissions"]=this["webpackJsonpharvard-admissions"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),r=a.n(i),c=(a(14),a(2)),s=a(3),o=a(1),h=a(5),m=a(4),u=a(6),p=[[0,6.32,.03,3.19,0,0,0,6.29,.01,5.27],[.39,12.2,1.03,6.61,.32,11.54,.2,7.16,.53,10.47],[.56,16.67,5.19,25.36,1.95,8.15,.64,11.53,1.65,15.56],[1.82,22.62,12.76,39.94,5.5,30.2,.86,23.9,3.29,23.72],[2.57,26.18,22.41,48.92,9.13,42.45,1.86,21.28,4.4,28.39],[4.2,31.85,29.72,54.73,13.65,41.46,2.49,29.78,5.64,33.7],[4.79,36.04,41.12,82.43,17.28,48.49,3.98,40.45,6.61,38.51],[7.53,47.49,44.48,75.01,22.93,49.85,5.12,53.17,8.22,47.66],[10.77,56.94,54.59,99.9,26.16,43.98,7.55,56.45,10.4,56.67],[15.27,57.07,56.06,83.43,31.32,95.1,12.69,63.02,14.58,60.64]],d=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getColor",value:function(e){return e<2.5?"red":e>=2.5&&e<4?"yellow":"green"}},{key:"calculatePercentage",value:function(){var e=-1,t=this.props.athletics,a=this.props.ethnicity,n=this.props.connections;if(!this.props.citizenship)return l.a.createElement("p",null,"Your admissions chances are unknown!");var i=this.calculateDecile();return e=n?"white"===a?p[i][1]:"african-american"===a?p[i][3]:"hispanic"===a?p[i][5]:"asian-american"===a?p[i][7]:p[i][9]:"white"===a?p[i][0]:"african-american"===a?p[i][2]:"hispanic"===a?p[i][4]:"asian-american"===a?p[i][6]:p[i][8],t&&(i<1?e=50:i>=1&&i<=3?e=79.52:i>=4&&i<=6?e=87.21:i>=7&&i<=9&&(e=94.04)),l.a.createElement("p",null,l.a.createElement("span",{style:{color:this.getColor(e)},className:"bigger"},e,"%")," of students with your attributes were accepted to Harvard.")}},{key:"calculateAcademicIndex",value:function(){return(+this.props.mathSAT+ +this.props.verbalSAT)/20+20*+this.props.GPA+ +this.props.subjectSAT/10}},{key:"calculateDecile",value:function(){var e,t=+this.calculateAcademicIndex();return 40<=t&&t<=193.5?e=1:193.5<t&&t<=205.5?e=2:205.5<t&&t<=213?e=3:213<t&&t<=218.5?e=4:218.5<t&&t<=223?e=5:223<t&&t<=226.5?e=6:226.5<t&&t<=229.5?e=7:229.5<t&&t<=232.5?e=8:232.5<t&&t<=235.8?e=9:235.8<t&&t<=240&&(e=10),--e}},{key:"render",value:function(){return l.a.createElement("div",{className:"probability"},l.a.createElement("h4",null,this.calculatePercentage()),l.a.createElement("p",null,l.a.createElement("b",null,"Stats for nerds:")),l.a.createElement("p",null,"Total SAT: ",+this.props.mathSAT+ +this.props.verbalSAT),l.a.createElement("p",null,"Academic Index: ",(+this.props.mathSAT+ +this.props.verbalSAT)/20+20*+this.props.GPA+ +this.props.subjectSAT/10),l.a.createElement("p",null,"Academic Index Decile: ",+this.calculateDecile()+1))}}]),a}(l.a.Component),v=(a(15),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={mathSAT:500,verbalSAT:500,GPA:2,subjectSAT:500,citizenship:!0,ethnicity:"white",athletics:!1,connections:!1},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.check=n.check.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){if(e.preventDefault(),"GPA"===e.target.name)if(e.target.value>4||e.target.value<0);else{var t=+e.target.value;100*t%1!==0&&(t=parseFloat(e.target.value).toFixed(2)),this.setState(Object(u.a)({},e.target.name,t))}else this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"check",value:function(e){e.target.checked?this.setState(Object(u.a)({},e.target.name,!0)):this.setState(Object(u.a)({},e.target.name,!1))}},{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"What was your highest score on the math section of the SAT?"))),l.a.createElement("div",{className:"column right"},l.a.createElement("input",{type:"range",min:200,max:800,value:this.state.mathSAT,step:10,name:"mathSAT",onChange:this.handleChange}),l.a.createElement("span",null,this.state.mathSAT))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"What was your highest score on the verbal section of the SAT?"))),l.a.createElement("div",{className:"column right"},l.a.createElement("input",{type:"range",min:200,max:800,value:this.state.verbalSAT,step:10,name:"verbalSAT",onChange:this.handleChange}),l.a.createElement("span",null,this.state.verbalSAT))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"What is your average score across all of the SAT II subject tests that you've taken?"))),l.a.createElement("div",{className:"column right"},l.a.createElement("input",{type:"range",min:200,max:800,value:this.state.subjetSAT,step:10,name:"subjectSAT",onChange:this.handleChange}),l.a.createElement("span",null,this.state.subjectSAT))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"What was your high school GPA (normalized to a 4-point scale)?"))),l.a.createElement("div",{className:"column right"},l.a.createElement("input",{type:"range",min:0,max:4,value:this.state.GPA,step:.01,name:"GPA",onChange:this.handleChange}),l.a.createElement("input",{type:"number",min:0,max:4,step:.01,value:this.state.GPA,maxLength:3,name:"GPA",size:75,onChange:this.handleChange}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"Are you a US citizen or permanent resident?"))),l.a.createElement("div",{className:"column right"},"Yes",l.a.createElement("input",{type:"checkbox",checked:this.state.citizenship,name:"citizenship",onChange:this.check}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"What is your race/ethnicity?"))),l.a.createElement("div",{className:"column right"},l.a.createElement("select",{name:"ethnicity",checked:this.state.ethnicity,onChange:this.handleChange},l.a.createElement("option",{value:"white"},"White"),l.a.createElement("option",{value:"african-american"},"African American"),l.a.createElement("option",{value:"hispanic"},"Hispanic"),l.a.createElement("option",{value:"asian-american"},"Asian-American"),l.a.createElement("option",{value:"other"},"Other"),l.a.createElement("option",{value:"undisclosed"},"Prefer not to say")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"Are you being recruited by Harvard for varsity athletics?"))),l.a.createElement("div",{className:"column right"},"Yes",l.a.createElement("input",{type:"checkbox",name:"athletics",checked:this.state.athletics,onChange:this.check}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column left"},l.a.createElement("p",null,l.a.createElement("label",null,"Do any of the following cases apply to you?")),l.a.createElement("ul",null,l.a.createElement("li",null,"You have relatives who are Harvard alumni."),l.a.createElement("li",null,"You have relatives who are Harvard employees."),l.a.createElement("li",null,"You have relatives who made large donations to Harvard in the past."))),l.a.createElement("div",{className:"column right"},"Yes",l.a.createElement("input",{type:"checkbox",name:"connections",checked:this.state.connections,onChange:this.check}))),l.a.createElement("div",null,l.a.createElement(d,{mathSAT:this.state.mathSAT,verbalSAT:this.state.verbalSAT,GPA:this.state.GPA,subjectSAT:this.state.subjectSAT,citizenship:this.state.citizenship,ethnicity:this.state.ethnicity,athletics:this.state.athletics,connections:this.state.connections})))}}]),a}(l.a.Component)),E=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("p",null,"The purpose of this website is to inform interested parties about their likelihood of admission to Harvard University based on academic credentials, race/ethnicity, and special connections."),l.a.createElement("p",null,"The admissions statistics are based on Harvard admissions data from the Classes of 2014-2019 made public through the SFFA v. Harvard (2018) lawsuit. See below for specific references."),l.a.createElement("p",null,"Harvard employs a holistic admissions process, which means that there are many other factors than academics that determine your admissions chances."),l.a.createElement("p",null,"Holistic admissions are inherently random, so even the most academically qualified applicants may not have a large admissions probability."),l.a.createElement("p",null,"The designers of this website hope that you will use this information when deciding which colleges to apply to. Our primary motivation is providing information to the public."),l.a.createElement("p",null,"The underlying research behind this site was done by Drs. Tyler Ransom, Josh Kinsler, and Peter Arcidiacono. Web development was done by Will Koury."),l.a.createElement("span",null,l.a.createElement("center",null,l.a.createElement("a",{href:"https://tyleransom.github.io/research/legacyathlete.pdf",rel:"noopener noreferrer",target:"_blank"},"Research")," | ",l.a.createElement("a",{href:"https://github.com/wkoury/harvard-admissions",rel:"noopener noreferrer",target:"_blank"},"GitHub"))))},b=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("a",{href:"#top",onClick:e.onClick},e.about?"Back":"About"))},g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={about:!1},n.toggle=n.toggle.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"toggle",value:function(e){var t=!this.state.about;this.setState({about:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"parent"},l.a.createElement("div",{className:"app"},l.a.createElement("h3",{className:"title"},"What is your probability of being admitted to Harvard?"),this.state.about?l.a.createElement(E,null):l.a.createElement(v,null)),l.a.createElement(b,{about:this.state.about,onClick:this.toggle}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f3d4f0e6.chunk.js.map