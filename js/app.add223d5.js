(function(e){function t(t){for(var s,c,i=t[0],a=t[1],r=t[2],f=0,b=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&b.push(l[c][0]),l[c]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,r||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],s=!0,i=1;i<o.length;i++){var a=o[i];0!==l[a]&&(s=!1)}s&&(n.splice(t--,1),e=c(c.s=o[0]))}return e}var s={},l={app:0},n=[];function c(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=s,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(o,s,function(t){return e[t]}.bind(null,s));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var d=a;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("7a23"),l={class:"font-raleway text-main-text"},n={class:""};function c(e,t,o,c,i,a){var r=Object(s["r"])("Header"),d=Object(s["r"])("Hero"),f=Object(s["r"])("Skills"),b=Object(s["r"])("Projects"),m=Object(s["r"])("Contact"),u=Object(s["r"])("Footer");return Object(s["o"])(),Object(s["e"])("div",l,[Object(s["i"])(r,{onClick:a.scroll,scrollPosition:i.scrollPosition},null,8,["onClick","scrollPosition"]),Object(s["f"])("main",n,[Object(s["i"])(d,{onClick:a.scroll},null,8,["onClick"]),Object(s["i"])(f,{scrollPosition:i.scrollPosition},null,8,["scrollPosition"]),Object(s["i"])(b,{scrollPosition:i.scrollPosition},null,8,["scrollPosition"]),Object(s["i"])(m,{scrollPosition:i.scrollPosition},null,8,["scrollPosition"])]),Object(s["i"])(u)])}var i={class:"flex justify-between px-4 md:px-24 md:py-6"},a=Object(s["f"])("span",{class:"font-bold"},"IKHFAN",-1),r=Object(s["h"])("YUSUF"),d=[a,r],f=Object(s["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"},null,-1),b=[f],m=Object(s["f"])("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),u=[m];function p(e,t,o,l,n,c){return Object(s["o"])(),Object(s["e"])("nav",{class:Object(s["k"])(["block md:flex w-full font-outfit py-5 md:py-0 justify-between bg-hero fixed z-20",{"bg-white/95":o.scrollPosition>=n.elementOffsetTop.skillsOffsetTop,"bg-hero/95":o.scrollPosition<n.elementOffsetTop.skillsOffsetTop}])},[Object(s["f"])("div",i,[Object(s["f"])("a",{href:"",class:Object(s["k"])(["transition ease-out duration-700",{"-translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},d,2),(Object(s["o"])(),Object(s["e"])("svg",{onClick:t[0]||(t[0]=function(){return c.showMobileNav&&c.showMobileNav.apply(c,arguments)}),xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-main-text md:hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},b))]),Object(s["f"])("div",{class:Object(s["k"])(["bg-white md:bg-transparent md:px-24 w-2/3 md:w-fit top-0 min-h-screen md:min-h-0 fixed md:static right-0 transition ease-out duration-300 bg-opacity-95 md:translate-x-0",{"translate-x-full":!1===n.mobileNavShow,"translate-x-0":!0===n.mobileNavShow}])},[(Object(s["o"])(),Object(s["e"])("svg",{onClick:t[1]||(t[1]=function(){return c.showMobileNav&&c.showMobileNav.apply(c,arguments)}),xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 ml-6 mt-7 md:hidden",viewBox:"0 0 20 20",fill:"currentColor"},u)),Object(s["f"])("ul",{class:Object(s["k"])(["flex flex-col md:flex-row transition ease-out duration-700 pt-8 md:pt-0",{"translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},[Object(s["f"])("li",{onClick:t[2]||(t[2]=function(t){e.$emit("click","hero"),c.showMobileNav()}),class:Object(s["k"])(["py-3 md:py-6 px-6 md:px-0 cursor-pointer",{"border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom":o.scrollPosition>=n.elementOffsetTop.heroOffsetTop&&o.scrollPosition<n.elementOffsetTop.heroOffsetTop+n.elementHeight.heroHeight}])}," Hero ",2),Object(s["f"])("li",{onClick:t[3]||(t[3]=function(t){e.$emit("click","skills"),c.showMobileNav()}),class:Object(s["k"])(["py-3 md:py-6 px-6 md:px-0 md:ml-20 cursor-pointer",{"border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom":o.scrollPosition>=n.elementOffsetTop.skillsOffsetTop&&o.scrollPosition<n.elementOffsetTop.skillsOffsetTop+n.elementHeight.skillsHeight}])}," Skills ",2),Object(s["f"])("li",{onClick:t[4]||(t[4]=function(t){e.$emit("click","projects"),c.showMobileNav()}),class:Object(s["k"])(["py-3 md:py-6 px-6 md:px-0 md:ml-20 cursor-pointer",{"border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom":o.scrollPosition>=n.elementOffsetTop.projectsOffsetTop&&o.scrollPosition<n.elementOffsetTop.projectsOffsetTop+n.elementHeight.projectsHeight}])}," Projects ",2),Object(s["f"])("li",{onClick:t[5]||(t[5]=function(t){e.$emit("click","contact"),c.showMobileNav()}),class:Object(s["k"])(["py-3 md:py-6 px-6 md:px-0 md:ml-20 cursor-pointer",{"border-l-4 md:border-b-4 md:border-l-0 border-yellow-custom":o.scrollPosition>=n.elementOffsetTop.contactOffsetTop&&o.scrollPosition<n.elementOffsetTop.contactOffsetTop+n.elementHeight.contactHeight}])}," Contact ",2)],2)],2)],2)}var h={name:"Header",data:function(){return{translate:!1,mobileNavShow:!1,elementOffsetTop:{heroOffsetTop:null,skillsOffsetTop:null,projectsOffsetTop:null,contactOffsetTop:null},elementHeight:{heroHeight:null,skillsHeight:null,projectsHeight:null,contactHeight:null}}},mounted:function(){this.translate=!0,this.getElementOffset(),this.getElementHeight()},methods:{showMobileNav:function(){this.mobileNavShow=!this.mobileNavShow},getElementOffset:function(){this.elementOffsetTop.heroOffsetTop=document.getElementById("hero").offsetTop,this.elementOffsetTop.skillsOffsetTop=document.getElementById("skills").offsetTop,this.elementOffsetTop.projectsOffsetTop=document.getElementById("projects").offsetTop,this.elementOffsetTop.contactOffsetTop=document.getElementById("contact").offsetTop},getElementHeight:function(){this.elementHeight.heroHeight=document.getElementById("hero").offsetHeight,this.elementHeight.skillsHeight=document.getElementById("skills").offsetHeight,this.elementHeight.projectsHeight=document.getElementById("projects").offsetHeight,this.elementHeight.contactHeight=document.getElementById("contact").offsetHeight}},watch:{},props:["scrollPosition"],emits:["click"]},O=o("6b0d"),g=o.n(O);const j=g()(h,[["render",p]]);var x=j,v=o("a402"),w=o.n(v),y={id:"hero",class:"hero relative pt-24 pb-8 md:pb-0 px-4 md:px-24 bg-hero min-h-screen"},k=Object(s["h"])(" Hello, "),P=Object(s["f"])("br",null,null,-1),M=Object(s["h"])(" I'm Ikhfan "),H=[k,P,M],T=Object(s["f"])("span",{class:"block mb-4 md:mb-8 leading-relaxed"},[Object(s["h"])(" I really love being a front end developer,"),Object(s["f"])("br"),Object(s["h"])(" but I can also work on the back end.")],-1),C=Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block mr-1 animate-bounce",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{"fill-rule":"evenodd",d:"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),S=Object(s["h"])(" HIRE ME "),B=[C,S],I=Object(s["f"])("a",{href:"https://wa.me/6285810923499",class:"rounded-full font-outfit py-2 px-4 bg-green-custom text-white text-sm"},[Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),Object(s["f"])("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]),Object(s["h"])(" WHATSAPP ")],-1),L=Object(s["f"])("span",{class:"block mb-8 md:mb-8 leading-relaxed text-center"},[Object(s["h"])(" I really love being a front end developer,"),Object(s["f"])("br"),Object(s["h"])(" but I can also work on the back end.")],-1),E={class:"text-center"},z=Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block mr-1 animate-bounce",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{"fill-rule":"evenodd",d:"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),N=Object(s["h"])(" HIRE ME "),V=[z,N],A=Object(s["f"])("a",{href:"https://wa.me/6285810923499",class:"rounded-full font-outfit py-2 px-4 bg-green-custom text-white text-sm"},[Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block mr-1",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),Object(s["f"])("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})]),Object(s["h"])(" WHATSAPP ")],-1),_=Object(s["f"])("span",{class:"inline-block text-6xl font-semibold mr-2"},"2",-1),F=Object(s["f"])("span",{class:"inline-block text-sm"},[Object(s["h"])("FRONT END"),Object(s["f"])("br"),Object(s["h"])("PROJECTS")],-1),R=[_,F];function D(e,t,o,l,n,c){return Object(s["o"])(),Object(s["e"])("div",y,[Object(s["f"])("h1",{class:Object(s["k"])(["font-bold text-4xl mb-8 md:mb-0 md:text-7xl leading-tight md:absolute transition ease-out duration-700 z-10",{"-translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},H,2),Object(s["f"])("div",{class:Object(s["k"])(["hidden md:block absolute mt-6 md:mt-40 right-4 md:right-24 transition ease-out duration-700",{"translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},[T,Object(s["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("click","contact")}),class:"rounded-full font-outfit py-2 px-4 bg-red-custom text-white mr-4 text-sm"},B),I],2),Object(s["f"])("img",{class:Object(s["k"])(["w-11/12 md:w-7/12 md:ml-48 transition ease-in-out duration-700",{"translate-y-24":!1===n.translate,"translate-y-0":!0===n.translate}]),src:w.a,alt:""},null,2),Object(s["f"])("div",{class:Object(s["k"])(["md:hidden mt-8 transition ease-out duration-700",{"translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},[L,Object(s["f"])("div",E,[Object(s["f"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("click","contact")}),class:"rounded-full font-outfit py-2 px-4 bg-red-custom text-white mr-4 text-sm"},V),A])],2),Object(s["f"])("div",{class:Object(s["k"])(["hidden md:block absolute bottom-16 transition ease-in-out duration-700",{"-translate-x-16":!1===n.translate,"translate-x-0":!0===n.translate}])},R,2)])}var W={name:"Hero",data:function(){return{translate:!1}},mounted:function(){this.translate=!0}};const $=g()(W,[["render",D]]);var Y=$,J={id:"skills",class:"skills grid grid-cols-12 md:gap-24 px-4 md:px-32 py-24 items-center overflow-hidden"},U={class:"col-span-12 md:col-span-6"},K=Object(s["g"])('<div class="col-span-3 w-16 h-16 rounded-full bg-red-custom flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"></path></svg></div><div class="col-span-9"><h4 class="block text-lg md:text-xl font-semibold mb-1"> Front End Developer </h4><span class="block font-outfit">2 Projects</span></div>',2),q=[K],Z=Object(s["g"])('<div class="col-span-3 w-16 h-16 rounded-full bg-yellow-custom flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></div><div class="col-span-9"><h4 class="block text-lg md:text-xl font-semibold mb-1"> Back End Developer </h4><span class="block font-outfit">2 Projects</span></div>',2),G=[Z],Q=Object(s["g"])('<div class="col-span-3 w-16 h-16 rounded-full bg-green-custom flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg></div><div class="col-span-9"><h4 class="block text-lg md:text-xl font-semibold mb-1"> Content Creator </h4><span class="block font-outfit">2 Projects</span></div>',2),X=[Q],ee=Object(s["g"])('<h4 class="text-4xl md:text-6xl font-semibold mb-4">What can I help?</h4><div class="mb-8"><span class="inline-block mr-4 font-outfit">2+ Projects Completed</span><span class="inline-block mr-4 font-outfit">2+ Clients</span></div><p class="leading-loose"> You can hire me as a front end developer. But if your project is not very big I can do it myself as a full stack developer. I work on the front end using Vue or Reactjs framework. On the css side, I use Bootstrap or Tailwindcss framework. I&#39;ve also worked on projects using Laravel 8 and Codeigninter 4. </p>',3),te=[ee];function oe(e,t,o,l,n,c){return Object(s["o"])(),Object(s["e"])("section",J,[Object(s["f"])("div",U,[Object(s["f"])("div",{class:Object(s["k"])(["transition ease-in-out duration-700 card shadow-lg grid grid-cols-12 py-6 px-6 md:px-12 rounded-lg items-center mb-8",{invisible:o.scrollPosition<=350,"-translate-x-16":o.scrollPosition<=350,visible:o.scrollPosition>350,"translate-x-0":o.scrollPosition>350}])},q,2),Object(s["f"])("div",{class:Object(s["k"])(["transition ease-in-out duration-700 card shadow-lg grid grid-cols-12 py-6 px-6 md:px-12 rounded-lg items-center mb-8",{invisible:o.scrollPosition<=450,"-translate-x-16":o.scrollPosition<=450,visible:o.scrollPosition>450,"translate-x-0":o.scrollPosition>450}])},G,2),Object(s["f"])("div",{class:Object(s["k"])(["transition ease-in-out duration-700 card shadow-lg grid grid-cols-12 py-6 px-6 md:px-12 rounded-lg items-center mb-8",{invisible:o.scrollPosition<=550,"-translate-x-16":o.scrollPosition<=550,visible:o.scrollPosition>550,"translate-x-0":o.scrollPosition>550}])},X,2)]),Object(s["f"])("div",{class:Object(s["k"])(["col-span-12 md:col-span-6 transition-all ease-in-out duration-700 mt-8 md:mt-0",{"opacity-0":o.scrollPosition<=400,"translate-x-16":o.scrollPosition<=400,"opacity-100":o.scrollPosition>400,"translate-x-0":o.scrollPosition>400}])},te,2)])}var se={name:"Skills",props:["scrollPosition"]};const le=g()(se,[["render",oe]]);var ne=le,ce=o("e047"),ie=o.n(ce),ae=o("90a0"),re=o.n(ae),de={id:"projects",class:"projects py-16 bg-yellow-custom overflow-hidden"},fe=Object(s["f"])("h2",{class:"text-4xl md:text-5xl font-bold mb-4"},"My Latest Projects",-1),be=Object(s["f"])("span",{class:"inline-block"},"We create beautifull websites with modern frameworks.",-1),me=[fe,be],ue=Object(s["f"])("div",{class:"bg-white pt-6 rounded-xl overflow-hidden"},[Object(s["f"])("div",{class:"px-6"},[Object(s["f"])("h4",{class:"mb-1 text-xl font-semibold"},"Laravel 8"),Object(s["f"])("span",{class:"block mb-4 text-sm"},"Landing page projects esports community.")]),Object(s["f"])("img",{src:ie.a,alt:""})],-1),pe=Object(s["f"])("div",{class:"bg-white pt-6 rounded-xl overflow-hidden"},[Object(s["f"])("div",{class:"px-6"},[Object(s["f"])("h4",{class:"mb-1 text-xl font-semibold"},"Vue Web App"),Object(s["f"])("span",{class:"block mb-4 text-sm"},"Single page recipes create with Vue & Tailwindcss.")]),Object(s["f"])("img",{src:re.a,alt:""})],-1);function he(e,t,o,l,n,c){var i=Object(s["r"])("SplideSlide"),a=Object(s["r"])("Splide");return Object(s["o"])(),Object(s["e"])("section",de,[Object(s["f"])("div",{class:Object(s["k"])(["px-4 md:px-24 transition ease-in-out duration-1000",{"-translate-x-16":o.scrollPosition<=1200,"translate-x-0":o.scrollPosition>1200}])},me,2),Object(s["f"])("div",{class:Object(s["k"])(["transition ease-in-out duration-1000",{"translate-x-1/2":o.scrollPosition<=1200,"translate-x-0":o.scrollPosition>1200}])},[Object(s["i"])(a,{options:{loop:!0,drag:"free",arrows:!1,fixedWidth:375,gap:16,pagination:!1}},{default:Object(s["u"])((function(){return[Object(s["i"])(i,{class:"py-6 md:py-8 drop-shadow-xl"},{default:Object(s["u"])((function(){return[ue]})),_:1}),Object(s["i"])(i,{class:"py-6 md:py-8 drop-shadow-xl"},{default:Object(s["u"])((function(){return[pe]})),_:1})]})),_:1})],2)])}var Oe=o("ffe7"),ge=(o("c89d"),{name:"Projects",components:{Splide:Oe["a"],SplideSlide:Oe["b"]},props:["scrollPosition"]});o("6dce");const je=g()(ge,[["render",he]]);var xe=je,ve=(o("b0c0"),{id:"contact",class:"contact px-4 md:px-24 py-16"}),we=Object(s["f"])("div",{class:"col-span-12 md:col-span-7 mb-8 md:mb-0 flex items-center"},[Object(s["f"])("p",{class:"hidden md:block text-6xl font-semibold font-outfit"},[Object(s["h"])(" Just say "),Object(s["f"])("span",{class:"text-red-custom"},"hello.")])],-1),ye={class:"col-span-12 md:col-span-5"},ke=Object(s["f"])("h4",{class:"font-semibold text-2xl mb-3"},"Contact Me",-1),Pe=Object(s["f"])("span",{class:"mb-8 block"},'Say "Hi" and I will reply to your message soon.',-1),Me={class:"mb-8"},He={class:"mb-8"},Te={class:"mb-10"},Ce={class:"mb-6 flex justify-between items-center",id:"btn-send"},Se={key:0,class:"mr-2"},Be=Object(s["f"])("svg",{width:"24",height:"24",class:"mr-1 inline-block",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(s["f"])("path",{d:"M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z",fill:"#8BD2BD"})],-1),Ie=Object(s["h"])("Message has been sent!"),Le=[Be,Ie],Ee={key:1,class:"mr-2"},ze=Object(s["f"])("svg",{class:"animate-spin -ml-1 mr-3 h-4 w-4 inline-block text-red-custom",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[Object(s["f"])("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(s["f"])("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Ne=Object(s["h"])("Please wait for a while...."),Ve=[ze,Ne],Ae={key:2},_e=Object(s["f"])("button",{class:"flex items-center bg-green-custom px-5 py-2 rounded-full text-sm text-white font-semibold font-outfit"},[Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline-block mr-2 rotate-90",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})]),Object(s["f"])("span",null,"SEND")],-1);function Fe(e,t,o,l,n,c){return Object(s["o"])(),Object(s["e"])("section",ve,[Object(s["f"])("h2",{class:Object(s["k"])(["md:w-7/12 text-4xl md:text-6xl font-bold mb-4 transition-opacity ease-in-out duration-700",{"opacity-0":o.scrollPosition<=1750,"opacity-100":o.scrollPosition>1750}])}," Let’s make something better with us. ",2),Object(s["f"])("div",{class:Object(s["k"])(["grid grid-cols-12 transition ease-in-out duration-700",{"opacity-0":o.scrollPosition<=1900,"translate-y-16":o.scrollPosition<=1900,"opacity-100":o.scrollPosition>1900,"translate-y-0":o.scrollPosition>1900}])},[we,Object(s["f"])("div",ye,[ke,Pe,Object(s["f"])("form",{action:"",id:"contact-form",class:"",onSubmit:t[3]||(t[3]=Object(s["w"])((function(){return c.sendMessage&&c.sendMessage.apply(c,arguments)}),["prevent"]))},[Object(s["f"])("div",Me,[Object(s["v"])(Object(s["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.bodyMessage.name=e}),id:"name",autocomplete:"name",placeholder:"Name",class:"w-full bg-transparent border-b border-text-main focus:border-green-custom py-2 focus:outline-none text-sm font-semibold"},null,512),[[s["s"],n.bodyMessage.name]])]),Object(s["f"])("div",He,[Object(s["v"])(Object(s["f"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.bodyMessage.email=e}),id:"email",autocomplete:"email",placeholder:"example@mail.com",class:"w-full bg-transparent border-b border-text-main focus:border-green-custom py-2 focus:outline-none text-sm font-semibold"},null,512),[[s["s"],n.bodyMessage.email]])]),Object(s["f"])("div",Te,[Object(s["f"])("div",{name:"message",onKeyup:t[2]||(t[2]=function(){return c.getTextMessage&&c.getTextMessage.apply(c,arguments)}),id:"message",role:"textbox",class:"textarea w-full border-b border-text-main focus:border-green-custom py-2 focus:outline-none text-sm font-semibold",contenteditable:""}," your message here... ",32)]),Object(s["f"])("div",Ce,["sent"===n.sent?(Object(s["o"])(),Object(s["e"])("small",Se,Le)):"sending"===n.sent?(Object(s["o"])(),Object(s["e"])("small",Ee,Ve)):(Object(s["o"])(),Object(s["e"])("small",Ae)),_e])],32)])],2)])}var Re=o("1da1"),De=(o("96cf"),o("bc3a")),We=o.n(De),$e={name:"Contact",data:function(){return{bodyMessage:{name:null,email:null,message:null},sent:!1}},methods:{getTextMessage:function(){this.bodyMessage.message=document.getElementById("message").textContent},sendMessage:function(){var e=this;return Object(Re["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.sent="sending",t.next=4,We()({method:"post",url:"https://contact-form-api-ikhfan.herokuapp.com/send",data:e.bodyMessage});case 4:o=t.sent,200===o.status&&(document.querySelector("form").reset(),e.sent="sent",e.bodyMessage.name=null,e.bodyMessage.email=null,e.bodyMessage.message=null),console.log(o),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},watch:{bodyMessage:{handler:function(){console.log("name : "+this.bodyMessage.name),console.log("email : "+this.bodyMessage.email),console.log("message : "+this.bodyMessage.message)},deep:!0}},props:["scrollPosition"]};const Ye=g()($e,[["render",Fe]]);var Je=Ye,Ue={class:"text-sm text-center py-8"},Ke=Object(s["h"])(" Created with "),qe=Object(s["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-red-custom inline-block",viewBox:"0 0 20 20",fill:"currentColor"},[Object(s["f"])("path",{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"})],-1),Ze=Object(s["h"])(" by "),Ge=Object(s["f"])("a",{href:"https://instagram.com/ikhfan_yusuf",class:"text-blue-500"},"Ikhfan Yusuf",-1),Qe=[Ke,qe,Ze,Ge];function Xe(e,t,o,l,n,c){return Object(s["o"])(),Object(s["e"])("footer",Ue,Qe)}var et={name:"Footer"};const tt=g()(et,[["render",Xe]]);var ot=tt,st={name:"App",components:{Header:x,Hero:Y,Skills:ne,Projects:xe,Contact:Je,Footer:ot},data:function(){return{scrollPosition:0}},methods:{updateScroll:function(){this.scrollPosition=scrollY},scroll:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}},beforeMount:function(){document.title="Ikhfan Yusuf"},mounted:function(){window.addEventListener("scroll",this.updateScroll)},watch:{scrollPosition:function(){console.log(this.scrollPosition)}}};const lt=g()(st,[["render",c]]);var nt=lt;o("a766");Object(s["c"])(nt).mount("#app")},"6dce":function(e,t,o){"use strict";o("f279")},"90a0":function(e,t,o){e.exports=o.p+"img/vue-recipes.c232f9ff.png"},a402:function(e,t,o){e.exports=o.p+"img/avatar-crop.385d3ab8.png"},a766:function(e,t,o){},e047:function(e,t,o){e.exports=o.p+"img/beatme.49097a12.png"},f279:function(e,t,o){}});
//# sourceMappingURL=app.add223d5.js.map