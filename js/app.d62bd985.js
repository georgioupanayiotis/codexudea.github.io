(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function i(e){return s.p+"js/"+({events:"events","share-a-talk":"share-a-talk"}[e]||e)+"."+{events:"e8d12b60","share-a-talk":"64a5bfff"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,a[1](u)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var b=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05ca":function(e,t,a){e.exports=a.p+"img/logo_lis.aa35a044.jpeg"},"0653":function(e,t){e.exports={1:{date:"17/02/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"¡Hagamos una página web!(HTML)",speaker:"Jhon Tapias"}]},2:{date:"24/02/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"¡Hagamos una página web! - Introducción a CSS (CSS)",speaker:"Manuela Castrillon"}]},3:{date:"10/03/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"¡Hagamos una página web! - Introducción a Javascript(Javascript)",speaker:"Christian Delany"},{title:"¿Donde está el servidor?(NodeJS)",speaker:"Martin Quintero"}]},4:{date:"05/05/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"Creando nuestra página web(HTML/CSS/GitHub)",speaker:"Manuela Castrillon"}]},5:{date:"17/05/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"Desarrollo de aplicaciones móviles con Ionic 3 (Ionic)",speaker:"Manuela Castrillon"},{title:"El juego de la ballena azul con docker (Docker)",speaker:"Martin Quintero"}]},6:{date:"08/09/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"Como usar git y no perder la cabeza (Git)",speaker:"Carlos Rengifo"}]},7:{date:"22/09/2017",venue:"LIS",time:"16:00 - 18:00",talks:[{title:"Angular: Aplicaciones prácticas (Angular)",speaker:"Juan Herrera"}]},8:{date:"01/03/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Codex: Make it real (Bash/NodeJs/Angular/Docker)",speaker:"LIS"}]},9:{date:"22/03/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Javascript : Crash Course (Javascript)",speaker:"Martin Quintero"},{title:"Contraseñas Seguras (Seguridad)",speaker:"Alejandro Castaño"}]},10:{date:"19/04/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Accesibilidad web (Html / Accesibilidad)",speaker:"Juliana Gómez"},{title:"Introducción a React (React)",speaker:"Simón Hoyos"}]},11:{date:"10/05/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Firestore and angular (Firebase/Angular)",speaker:"Juan Herrera"},{title:"Hiking with scala (Scala)",speaker:"Santiago Cadavid"}]},12:{date:"31/05/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Desarrollo de Apps moviles nativas con React (React)",speaker:"Andres Pino"},{title:"Despliegue continuo con Circle CI (DevOps/Git/CircleCI)",speaker:"Camila Gomez"}]},13:{date:"02/08/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Clean Code: Como mantener tu código mas limpio que tu habitación",speaker:"Daniel Correa"},{title:"JSConf EU Experience + Design Mistakes in NodeJS",speaker:"Manuela Castrillón"}]},14:{date:"23/08/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Modelos predictivos en los e-sports",speaker:"Sebas Pelaez"},{title:"Team work and seniority",speaker:"Jose Naranjo"}]},15:{date:"13/09/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Testing en javascript",speaker:"Romel Perez"}]},16:{date:"11/10/2018",venue:"LIS",time:"14:00 - 16:00",talks:[{title:"Web basics: técnicas y estrategias para optimizar una página web",speaker:"Mateo Calle"},{title:"Una mirada vulgar a HTTPS",speaker:"Martin Quintero"}]},17:{date:"18/10/2018",venue:"LIS",time:"17:30 - 20:00",title:"Hacktober Fest celebration",talks:[{title:"Codex - Hacktober Fest",speaker:"Codex core team"}]},18:{date:"22/11/2018",venue:"LIS",time:"14:00 - 16:00",title:"UX & AdonisJS",talks:[{title:"Fundamentos de UX",speaker:"Jose Mario Gutierrez"},{title:"Desarrolla tu API con AdonisJS",speaker:"William Gomez"}]},19:{date:"6/12/2018",venue:"Huge inc",time:"17:00 - 19:00",title:"La última y nos vamos - celebración de fin de año",talks:[]},20:{date:"14/02/2019",venue:"LIS",time:"14:00 - 16:00",title:"Teoria del color para devs",talks:[]},21:{date:"7/03/2019",venue:"LIS",time:"14:00 - 16:00",title:"Animaciones en CSS",talks:[]}}},"066a":function(e,t,a){"use strict";a("e6e4")},"0ebf":function(e,t,a){e.exports=a.p+"img/logo_gce.9903ba30.png"},"15bd":function(e,t,a){var r={"./logo_gce.png":"0ebf","./logo_huge.jpg":"3cd0","./logo_ids.jpg":"8be3","./logo_lis.jpeg":"05ca"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="15bd"},"1ac2":function(e,t,a){},"1d3e":function(e,t,a){"use strict";a("1ac2")},"24e6":function(e,t){e.exports={YoQuinteroO:{name:"Martin Quintero",bio:"",picture:"https://avatars3.githubusercontent.com/u/10585976?s=400&v=4",github:"https://www.github.com/martineliasq",twitter:"https://www.twitter.com/YoQuinteroO"},am9805:{name:"Angelica Arroyave",bio:"Developer Engineer at Experimentality S.A.S",picture:"https://avatars0.githubusercontent.com/u/19578435?s=400&v=4",github:"https://github.com/am9805",twitter:"https://twitter.com/aam_9805"},manucastrillonm:{name:"Manu Castrillón",bio:"Web Developer at Huge - Co-organizer of @pionerasdev",picture:"https://avatars3.githubusercontent.com/u/10585946?s=400&v=4",github:"https://www.github.com/manucastrillonm",twitter:"https://www.twitter.com/manucastrillonm"},PilarArroyave:{name:"Pilar Arroyave",bio:"",picture:"https://avatars3.githubusercontent.com/u/30705652?s=400&u=276acb9ab1732ee3d069757b119945561e84b78b&v=4",github:"https://github.com/PilarArroyave",twitter:"https://twitter.com/PiliArroyave"},veluaru:{name:"Angie Castañeda",bio:"Systems Engineer Student and Lab administrator at UdeA",picture:"https://avatars1.githubusercontent.com/u/42279901?s=400&u=b0452b6a6eafb156a8f3315ad8babee650585823&v=4",github:"https://github.com/veluaru",twitter:""},cdanmontoya:{name:"Daniel Montoya",bio:"Systems Engineer Student and Lab administrator at UdeA",picture:"https://avatars2.githubusercontent.com/u/27966260?s=460&v=4",github:"https://github.com/cdanmontoya",twitter:""}}},"27e8":function(e,t,a){"use strict";a("7d49")},"3cd0":function(e,t,a){e.exports=a.p+"img/logo_huge.c49872c4.jpg"},5398:function(e,t,a){},"568f":function(e,t,a){e.exports=a.p+"img/bg-hero.2190bc64.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t){var a=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(a)}var o=a("d959"),i=a.n(o);const s={};var c=i()(s,[["render",n]]),u=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),l={class:"home-page"};function b(e,t,a,n,o,i){var s=Object(r["x"])("navbar-desktop"),c=Object(r["x"])("hero"),u=Object(r["x"])("text-section"),b=Object(r["x"])("next-events"),d=Object(r["x"])("heroes-section"),m=Object(r["x"])("hall-of-fame"),g=Object(r["x"])("organizing-team"),p=Object(r["x"])("sponsors"),h=Object(r["x"])("bottom");return Object(r["s"])(),Object(r["f"])("div",l,[Object(r["i"])(s),Object(r["i"])(c),Object(r["i"])(u,{title:"¿Quiénes somos?","use-button":!1,description:"Somos una comunidad de desarrollo de software formada por estudiantes de la Universidad de Antioquia, nuestro objetivo es compartir conocimiento sobre desarrollo web y mejorar nuestras habilidades de comunicación."}),Object(r["i"])(b),Object(r["i"])(d),Object(r["i"])(m),Object(r["i"])(g),Object(r["i"])(u,{id:"speaker",title:"Quiero dar una charla",description:"Nos encantaría tenerte como invitado especial, si quieres compartir tu conocimiento con nosotros, solo debes completar el formulario y nos pondremos en contacto contigo.","use-button":!0,"button-label":"Dar una charla","button-url":"https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform"}),Object(r["i"])(p),Object(r["i"])(h)])}var d=a("e347"),m=a.n(d),g={class:"footer"},p=Object(r["g"])("div",{class:"container-fluid"},[Object(r["g"])("div",{class:"row middle-xs"},[Object(r["g"])("div",{class:"footer-logo col-xs-3 col-sm-4 col-md-5 col-lg-6 center-xs"},[Object(r["g"])("img",{class:"footer-image",src:m.a,alt:"codex logo"})]),Object(r["g"])("div",{class:"footer-information col-xs-9 col-sm-8 col-md-7 col-lg-6"},[Object(r["g"])("div",{class:"row middle-xs"},[Object(r["g"])("div",{class:"footer-social"},[Object(r["g"])("a",{target:"blank","aria-label":"CodexUdeA Facebook",href:"https://www.facebook.com/groups/CodexUdeA/"},[Object(r["g"])("i",{class:"fa fa-facebook-official","aria-hidden":"true"}),Object(r["g"])("span",{class:"footer-social__text"},"/groups/CodexUdeA")])]),Object(r["g"])("div",{class:"footer-social"},[Object(r["g"])("a",{href:"mailto:codex@udea.edu.co"},[Object(r["g"])("i",{class:"fa fa-at","aria-hidden":"true"}),Object(r["g"])("span",{class:"footer-social__text"},"codex@udea.edu.co")])]),Object(r["g"])("div",{class:"footer-social"},[Object(r["g"])("a",{target:"blank","aria-label":"CodexUdeA GitHub repository",href:"https://github.com/CodexUdeA/codexudea.github.io"},[Object(r["g"])("span",null," Made with "),Object(r["g"])("i",{class:"fa fa-heart","aria-hidden":"true"})])])])])])],-1),h=[p];function v(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("div",g,h)}var f={name:"Bottom"},j=(a("5aef"),i()(f,[["render",v]])),O=(a("b0c0"),{id:"hall-of-fame",class:"hall-of-fame"}),w=Object(r["g"])("div",{class:"title"},[Object(r["g"])("h1",{class:"hall-of-fame__title"}," Salón de la fama "),Object(r["g"])("h2",{class:"hall-of-fame__subtitle subtitle"}," Gracias por aportar en la construcción de esta comunidad. ")],-1),k={class:"container"},S={class:"row around-xs"};function _(e,t,a,n,o,i){var s=Object(r["x"])("hero-card");return Object(r["s"])(),Object(r["f"])("section",O,[w,Object(r["g"])("div",k,[Object(r["g"])("div",S,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.celebrities,(function(e){return Object(r["s"])(),Object(r["d"])(s,{key:e.name,hero:e,theme:"white"},null,8,["hero"])})),128))])])])}var x=a("a8b2"),y=a.n(x),C={class:"hero-card"},A={class:"hero-card__image"},M=["src"],H={class:"hero-card__info"},L={class:"hero-card__name"},z={class:"hero-card__bio"},E={class:"hero-card__social"},D=["href"],I=Object(r["g"])("i",{class:"fa fa-twitter","aria-hidden":"true"},null,-1),P=[I],J=["href"],q=Object(r["g"])("i",{class:"fa fa-github","aria-hidden":"true"},null,-1),T=[q];function U(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("div",C,[Object(r["g"])("div",A,[Object(r["g"])("img",{src:a.hero.picture,alt:"foto del heroe"},null,8,M)]),Object(r["g"])("div",H,[Object(r["g"])("p",L,Object(r["A"])(a.hero.name),1),Object(r["g"])("p",z,Object(r["A"])(a.hero.bio),1),Object(r["g"])("div",E,[a.hero.twitter?(Object(r["s"])(),Object(r["f"])("a",{key:0,href:a.hero.twitter},P,8,D)):Object(r["e"])("",!0),a.hero.github?(Object(r["s"])(),Object(r["f"])("a",{key:1,href:a.hero.github},T,8,J)):Object(r["e"])("",!0)])])])}var G={name:"HeroCard",props:{hero:{type:Object,required:!0}}},B=(a("96e1"),i()(G,[["render",U]])),F={name:"HallOfFame",components:{HeroCard:B},data:function(){return{celebrities:y.a}}},Q=(a("eedf"),i()(F,[["render",_]])),N={class:"hero"},R={class:"hero__image"},W=["src"],K={class:"hero__body"},V=Object(r["g"])("h1",{class:"hero__headline"}," Codex UdeA ",-1),X=Object(r["g"])("h2",{class:"hero__sub-headline"}," Somos estudiantes a los que nos apasiona el desarrollo de software y nos reunimos para aprender juntos. ",-1);function Y(e,t,n,o,i,s){var c=Object(r["x"])("Button");return Object(r["s"])(),Object(r["f"])("div",N,[Object(r["g"])("div",R,[Object(r["g"])("img",{class:"hero__image-img",src:a("568f")},null,8,W)]),Object(r["g"])("div",K,[V,X,Object(r["i"])(c,{label:"Dar una charla",url:"https://docs.google.com/forms/d/e/1FAIpQLSfyeovAO7oIL4Zj3TdHXKJMKBzTo0d9EVxnpU4PgaEtEb4SxA/viewform",target:"_blank",type:"anchor",class:"hero__button"})])])}function Z(e,t,a,n,o,i){return Object(r["s"])(),Object(r["d"])(Object(r["y"])(e.component),{label:a.label,url:a.url,target:a.target},null,8,["label","url","target"])}var $={class:"button"},ee={class:"button-label"};function te(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("button",$,[Object(r["g"])("span",ee,Object(r["A"])(a.label),1)])}var ae={name:"ButtonLink",props:{label:{type:String,default:"Label"}}},re=i()(ae,[["render",te]]),ne=["target","href"],oe={class:"button-label"};function ie(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("a",{class:"button",target:a.target,href:a.url},[Object(r["g"])("span",oe,Object(r["A"])(a.label),1)],8,ne)}var se={name:"ButtonLink",props:{label:{type:String,default:"Label"},url:{type:String,default:"#"},target:{type:String,default:"_self"}}},ce=i()(se,[["render",ie]]),ue={name:"Cta",props:{label:{type:String,default:"Label"},url:{type:String,default:"#"},target:{type:String,default:"_self"},type:{type:String,default:"anchor",validator:function(e){return-1!==["anchor","button"].indexOf(e)}}},data:function(){return{component:"button"===this.type?re:ce}}},le=(a("1d3e"),i()(ue,[["render",Z]])),be={name:"Hero",components:{Button:le}},de=(a("f952"),i()(be,[["render",Y]])),me={id:"heroes",class:"heroes-section"},ge=Object(r["g"])("div",{class:"title"},[Object(r["g"])("h1",{class:"heroes-section__title"}," Héroes "),Object(r["g"])("h2",{class:"subtitle heroes-section__subtitle"}," Personas que nos han compartido conocimiento. ")],-1),pe={class:"container"},he={class:"row center-xs start-md"};function ve(e,t,a,n,o,i){var s=Object(r["x"])("hero-card");return Object(r["s"])(),Object(r["f"])("section",me,[ge,Object(r["g"])("div",pe,[Object(r["g"])("div",he,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.heroes,(function(e){return Object(r["s"])(),Object(r["d"])(s,{key:e.name,hero:e},null,8,["hero"])})),128))])])])}var fe=a("dfd8"),je=a.n(fe),Oe={name:"HeroesSection",components:{HeroCard:B},data:function(){return{heroes:je.a}}},we=(a("82af"),i()(Oe,[["render",ve]])),ke={class:"navbar-desktop"},Se=Object(r["g"])("ul",{class:"navbar-desktop_list"},[Object(r["g"])("li",{class:"menu-button"},[Object(r["g"])("i",{class:"fa fa-bars","aria-hidden":"true"})]),Object(r["g"])("li",{class:"navbar-desktop-brand"},[Object(r["g"])("img",{src:m.a,alt:"codex logo"})])],-1),_e=Object(r["g"])("ul",{class:"navbar-desktop_list"},[Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#events"},"Eventos")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#heroes"},"Héroes")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#hall-of-fame"},"Salón de la Fama")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#team"},"Equipo")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#speaker"},"Dar una charla")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"#sponsors"},"Patrocinadores")]),Object(r["g"])("li",{class:"navbar-desktop-item"},[Object(r["g"])("a",{href:"https://github.com/CodexUdeA/codigo-de-conducta"},"Código de conducta")])],-1),xe=[Se,_e];function ye(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("nav",ke,xe)}var Ce={name:"NavbarDesktop"},Ae=(a("27e8"),i()(Ce,[["render",ye]])),Me={id:"events",class:"next-events"},He=Object(r["g"])("div",{class:"title"},[Object(r["g"])("h1",{class:"next-events__title"}," Próximos eventos ")],-1),Le={class:"container"},ze={class:"row around-xs"};function Ee(e,t,a,n,o,i){var s=Object(r["x"])("event-card");return Object(r["s"])(),Object(r["f"])("section",Me,[He,Object(r["g"])("div",Le,[Object(r["g"])("div",ze,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(i.nextEvents,(function(e){return Object(r["s"])(),Object(r["d"])(s,{key:e.name,class:"col-sm-4",event:e},null,8,["event"])})),128))])])])}a("07ac"),a("fb6a");var De=a("0653"),Ie=a.n(De),Pe={class:"event-card"},Je={class:"event-card__content"},qe={class:"event-card__content__title"},Te={class:"event-card__content__detail"},Ue=Object(r["g"])("span",null,"Fecha:",-1),Ge={class:"event-card__content__detail"},Be=Object(r["g"])("span",null,"Hora:",-1),Fe={class:"event-card__content__detail"},Qe=Object(r["g"])("span",null,"Lugar:",-1);function Ne(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("div",Pe,[Object(r["g"])("div",Je,[Object(r["g"])("h1",qe,Object(r["A"])(a.event.title),1),Object(r["g"])("span",Te,[Ue,Object(r["h"])(" "+Object(r["A"])(a.event.date),1)]),Object(r["g"])("span",Ge,[Be,Object(r["h"])(" "+Object(r["A"])(a.event.time),1)]),Object(r["g"])("span",Fe,[Qe,Object(r["h"])(" "+Object(r["A"])(a.event.venue),1)])])])}var Re={name:"EventCard",props:{event:{type:Object,required:!0}}},We=(a("6cd8"),i()(Re,[["render",Ne]])),Ke={name:"NextEvents",components:{EventCard:We},data:function(){return{events:Ie.a}},computed:{nextEvents:function(){var e=Object.values(this.events);return e.slice(-3,e.length)}}},Ve=(a("066a"),i()(Ke,[["render",Ee]])),Xe={id:"team",class:"organizing-team"},Ye=Object(r["g"])("div",{class:"title"},[Object(r["g"])("h1",{class:"organizing-team__title"}," Equipo organizador ")],-1),Ze={class:"container"},$e={class:"row center-xs"};function et(e,t,a,n,o,i){var s=Object(r["x"])("team-card");return Object(r["s"])(),Object(r["f"])("section",Xe,[Ye,Object(r["g"])("div",Ze,[Object(r["g"])("div",$e,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(o.team,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.name,class:"organizing-team__item col-xs-12 col-sm-6 col-md-4 col-lg-3"},[Object(r["i"])(s,{"team-member":e},null,8,["team-member"])])})),128))])])])}var tt=a("24e6"),at=a.n(tt),rt={class:"team-card"},nt={class:"center-xs"},ot={class:"team-card-image-container"},it=["src"],st={class:"team-card-info"},ct={class:"team-card-name"},ut={class:"team-card-bio"},lt={class:"team-card-social"},bt=["href"],dt=Object(r["g"])("i",{class:"fa fa-2x fa-github","aria-hidden":"true"},null,-1),mt=[dt],gt=["href"],pt=Object(r["g"])("i",{class:"fa fa-2x fa-twitter","aria-hidden":"true"},null,-1),ht=[pt];function vt(e,t,a,n,o,i){return Object(r["s"])(),Object(r["f"])("div",rt,[Object(r["g"])("div",nt,[Object(r["g"])("div",ot,[Object(r["g"])("img",{class:"team-card-image",src:a.teamMember.picture,alt:"team member picture"},null,8,it)])]),Object(r["g"])("div",st,[Object(r["g"])("h4",ct,Object(r["A"])(a.teamMember.name),1),Object(r["g"])("p",ut,Object(r["A"])(a.teamMember.bio),1),Object(r["g"])("div",lt,[a.teamMember.github?(Object(r["s"])(),Object(r["f"])("a",{key:0,href:a.teamMember.github},mt,8,bt)):Object(r["e"])("",!0),a.teamMember.twitter?(Object(r["s"])(),Object(r["f"])("a",{key:1,href:a.teamMember.twitter},ht,8,gt)):Object(r["e"])("",!0)])])])}var ft={name:"TeamCard",props:{teamMember:{type:Object,required:!0}}},jt=(a("7637"),i()(ft,[["render",vt]])),Ot={name:"OrganizingTeam",components:{TeamCard:jt},data:function(){return{team:at.a}}},wt=(a("7731"),i()(Ot,[["render",et]])),kt={id:"sponsors",class:"sponsors"},St=Object(r["g"])("div",{class:"sponsors__title title"},[Object(r["g"])("h1",null,"Patrocinadores")],-1),_t={class:"row center-xs middle-xs"};function xt(e,t,a,n,o,i){var s=Object(r["x"])("card");return Object(r["s"])(),Object(r["f"])("div",kt,[St,Object(r["g"])("div",_t,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(e.sponsors,(function(e){return Object(r["s"])(),Object(r["f"])("div",{key:e.name,class:"col-xs-12 col-sm-6 col-md-3"},[Object(r["i"])(s,{logo:e.logo,"sponsor-name":e.name,"sponsor-url":e.url},null,8,["logo","sponsor-name","sponsor-url"])])})),128))])])}var yt={class:"sponsor-card"},Ct=["href"],At=["src","alt"];function Mt(e,t,n,o,i,s){return Object(r["s"])(),Object(r["f"])("div",yt,[Object(r["g"])("a",{href:e.sponsor_url},[Object(r["g"])("img",{src:a("15bd")("./".concat(n.logo)),alt:e.sponsor_name,class:"sponsor-card__image"},null,8,At)],8,Ct)])}var Ht={name:"SponsorCard",props:{logo:{type:String,required:!0},sponsorName:{type:String,required:!0},sponsorUrl:{type:String,required:!0}}},Lt=(a("ce04"),i()(Ht,[["render",Mt]])),zt={name:"Sponsors",components:{card:Lt},data:function(){return{sponsors:[{name:"Huge inc",logo:"logo_huge.jpg",url:"http://www.hugeinc.com"},{name:"GitHub Campus Experts",logo:"logo_gce.png",url:"http://www.github.com"},{name:"Laboratorio Integrado de Sistemas",logo:"logo_lis.jpeg",url:"http://lis.udea.edu.co"},{name:"Departamento de Ingenieria de Sistemas",logo:"logo_ids.jpg",url:"http://sistemas.udea.edu.co"}]}}},Et=(a("d68d"),i()(zt,[["render",xt]])),Dt=(a("a4d3"),a("e01a"),{class:"center-xs text-section"}),It={class:"text-section__description"},Pt={class:"text-section__button"};function Jt(e,t,a,n,o,i){var s=Object(r["x"])("Button");return Object(r["s"])(),Object(r["f"])("div",Dt,[Object(r["g"])("div",{class:Object(r["o"])([{"text-section__title--active":!a.useButton},"title text-section__title"])},[Object(r["g"])("h1",null,Object(r["A"])(a.title),1)],2),Object(r["g"])("div",It,[Object(r["g"])("span",null,Object(r["A"])(a.description),1)]),Object(r["g"])("div",Pt,[a.useButton?(Object(r["s"])(),Object(r["d"])(s,{key:0,label:a.buttonLabel,url:a.buttonUrl,class:"hero__button"},null,8,["label","url"])):Object(r["e"])("",!0)])])}var qt={name:"TextSection",components:{Button:le},props:{title:{type:String,required:!0,default:""},description:{type:String,required:!0,default:""},useButton:{type:Boolean,required:!0,default:!1},buttonLabel:{type:String,required:!1,default:""},buttonUrl:{type:String,required:!1,default:""}}},Tt=(a("9f93"),i()(qt,[["render",Jt]])),Ut={name:"HomePage",components:{Bottom:j,HallOfFame:Q,Hero:de,HeroesSection:we,NavbarDesktop:Ae,NextEvents:Ve,OrganizingTeam:wt,Sponsors:Et,TextSection:Tt}},Gt=i()(Ut,[["render",b]]),Bt=[{path:"/",name:"Home",component:Gt},{path:"/events",name:"Events",component:function(){return a.e("events").then(a.bind(null,"aa9c"))}},{path:"/share-a-talk",name:"share-a-talk",component:function(){return a.e("share-a-talk").then(a.bind(null,"e326"))}}],Ft=Object(u["a"])({history:Object(u["b"])("/"),routes:Bt}),Qt=Ft;a("fb98");Object(r["c"])(c).use(Qt).mount("#app")},"57b6":function(e,t,a){},5822:function(e,t,a){},"5aef":function(e,t,a){"use strict";a("5398")},6493:function(e,t,a){},"6cd8":function(e,t,a){"use strict";a("9653")},7637:function(e,t,a){"use strict";a("b690")},7731:function(e,t,a){"use strict";a("ab4d")},"7d49":function(e,t,a){},"82af":function(e,t,a){"use strict";a("969a")},"8be3":function(e,t,a){e.exports=a.p+"img/logo_ids.96e91e8f.jpg"},9653:function(e,t,a){},"969a":function(e,t,a){},"96e1":function(e,t,a){"use strict";a("a24c")},"9f93":function(e,t,a){"use strict";a("6493")},a24c:function(e,t,a){},a8b2:function(e,t){e.exports={raven920:{name:"Christian Delany",bio:"Software Magician",picture:"https://avatars3.githubusercontent.com/u/1153257?s=400&v=4",github:"https://www.github.com/raven920",twitter:""},Kemquiros:{name:"John Tapias",bio:"",picture:"https://avatars2.githubusercontent.com/u/9395764?s=400&v=4",github:"https://www.github.com/Kemquiros",twitter:""},andresMorenoG:{name:"Andres Moreno",bio:"",picture:"https://avatars3.githubusercontent.com/u/18253264?s=400&v=4",github:"https://github.com/andres-morenog",twitter:""}}},ab4d:function(e,t,a){},b690:function(e,t,a){},ce04:function(e,t,a){"use strict";a("f319")},d1fb:function(e,t,a){},d68d:function(e,t,a){"use strict";a("d1fb")},dfd8:function(e,t){e.exports={Kemquiros:{name:"Jhon Tapias",bio:"Software Magician",picture:"https://avatars2.githubusercontent.com/u/9395764?s=400&v=4",github:"https://github.com/Kemquiros",twitter:""},ManuCastrillonM:{name:"Manu Castrillon",bio:"Web Developer at Huge - Co-organizer of @pionerasdev",picture:"https://avatars3.githubusercontent.com/u/10585946?s=400&v=4",github:"https://github.com/ManuCastrillonM",twitter:"https://twitter.com/ManuCastrillonM"},raven920:{name:"Christian Delany",bio:"",picture:"https://avatars3.githubusercontent.com/u/1153257?s=400&v=4",github:"https://github.com/raven920",twitter:""},YoQuinteroO:{name:"Martin Quintero",bio:"",picture:"https://avatars3.githubusercontent.com/u/10585976?s=400&v=4",github:"https://github.com/MartinEliasQ",twitter:"https://www.twitter.com/YoQuinteroO"},CarlosRengifo:{name:"Carlos Rengifo",bio:"",picture:"https://avatars1.githubusercontent.com/u/6728576?s=460&v=4",github:"https://github.com/andresburns",twitter:""},jdjuan:{name:"Juan Herrera",bio:"Google Developer Expert in Angular",picture:"https://avatars0.githubusercontent.com/u/3171900?s=400&v=4",github:"https://github.com/jdjuan",twitter:"https://twitter.com/jdjuan"},alejocas:{name:"Alejandro Castaño",bio:"",picture:"https://avatars3.githubusercontent.com/u/23554717?s=400&v=4",github:"https://github.com/alejocas",twitter:""},gmzjuliana:{name:"Juliana Gómez",bio:"Web Engineer at Huge",picture:"https://avatars1.githubusercontent.com/u/21693619?s=400&v=4",github:"https://github.com/gomezjuliana",twitter:"https://twitter.com/gmzjuliana"},santiagocb:{name:"Santiago Cadavid",bio:"Software Developer at S4N",picture:"https://avatars0.githubusercontent.com/u/29154307?s=400&v=4",github:"https://github.com/santiagocb",twitter:""},andrespinov:{name:"Andres Pino",bio:"Software engineering student",picture:"https://avatars3.githubusercontent.com/u/23267995?s=400&v=4",github:"https://github.com/andrespinov",twitter:""},camigomez318:{name:"Maria Camila Gómez",bio:"Web Developer at Huge - Co-organizer of @pionerasdev",picture:"https://avatars3.githubusercontent.com/u/16061815?s=400&v=4",github:"https://www.github.com/camigomez35",twitter:"https://www.twitter.com/camigomez318"},danielcb29:{name:"Daniel Correa",bio:"Web Engineer at Huge",picture:"https://avatars3.githubusercontent.com/u/8260962?s=400&v=4",github:"https://github.com/danielcb29",twitter:"https://twitter.com/d"},SebasPVilla:{name:"Sebas Pelaez",bio:"Java Developer at Globant",picture:"https://avatars1.githubusercontent.com/u/15000005?s=400&v=4",github:"https://github.com/sebaspelaez",twitter:"https://twitter.com/SebasPVilla"},pa1d0s:{name:"Jose Naranjo",bio:"Director of Engineering at Huge",picture:"https://avatars0.githubusercontent.com/u/3025600?s=400&v=4",github:"https://github.com/josenaranjo",twitter:"http://twitter.com/pa1d0s"},romelperez07:{name:"Romel Pérez",bio:"Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan.",picture:"https://avatars3.githubusercontent.com/u/1393135?s=400&v=4",github:"https://github.com/romelperez",twitter:"https://twitter.com/romelperez07"},mathius17:{name:"Mateo Calle",bio:"Web Developer at Huge",picture:"https://avatars0.githubusercontent.com/u/6528566?s=400&v=4",github:"https://github.com/mathius17",twitter:"https://twitter.com/mathius17"},shmesa22:{name:"Simón Hoyos Mesa",bio:"Entrepreneur / Tech Blogger - Web Engineer @ Huge - Co-organizer @ React Medellin",picture:"https://avatars3.githubusercontent.com/u/23706543?s=400&v=4",github:"https://www.github.com/shmesa22",twitter:"https://www.twitter.com/shmesa22"},josemariogutierrez:{name:"Jose Mario Gutierrez",bio:"Web Engineer en Huge",picture:"https://avatars1.githubusercontent.com/u/27037672?s=460&v=4",github:"https://github.com/josemariogutierrez",twitter:"https://twitter.com/Josemarioguti"},PilarArroyave:{name:"Pilar Arroyave",bio:"Soy una persona en constante proceso de formación que se dedica a ser feliz.",picture:"https://avatars1.githubusercontent.com/u/30705652?s=460&v=4",github:"https://github.com/PilarArroyave",twitter:"https://www.twitter.com/PiliArroyave"},williamegomez:{name:"William Gomez",bio:"Ingeniero Electrónico de la Universidad de Antioquia. Desarrollador web de HUGE S.A.S.",picture:"https://avatars1.githubusercontent.com/u/33497419?s=460&v=4",github:"https://github.com/williamegomez",twitter:"https://twitter.com/williamgomex"},dbotia:{name:"Diego José Luis Botia",bio:"Jefe del Departamento de Ingeniería de Sistemas de la UdeA",picture:"https://avatars1.githubusercontent.com/u/8139619?s=460&v=4",github:"https://github.com/dbotia",twitter:"https://twitter.com/djlbv"},moralesbang:{name:"Juan Camilo Morales",bio:"Desarrollador Ruby on Rails y React",picture:"https://avatars2.githubusercontent.com/u/22043902?s=460&v=4",github:"https://github.com/moralesbang",twitter:"https://twitter.com/moralesbang"},joh95:{name:"Johan Ospina Hincapié",bio:"Estudiante de Ingeniería de sistemas ",picture:"https://avatars2.githubusercontent.com/u/38740217?s=460&v=4",github:"https://github.com/joh95",twitter:""},breakermoob:{name:"Leon Dario Arango Amaya",bio:"¡Me dedico a ver, entender e intentar cambiar el mundo!",picture:"https://avatars0.githubusercontent.com/u/26335558?s=460&v=4",github:"https://github.com/breakermoob",twitter:""},viktorarias:{name:"Victor Arias",bio:"¡Diseñador Visual dedicado al Desarrollo Front End!",picture:"https://avatars1.githubusercontent.com/u/6463096?s=400&v=4",github:"https://github.com/viktorarias",twitter:""}}},e347:function(e,t,a){e.exports=a.p+"img/logo.91128392.svg"},e6e4:function(e,t,a){},eedf:function(e,t,a){"use strict";a("57b6")},f319:function(e,t,a){},f952:function(e,t,a){"use strict";a("5822")},fb98:function(e,t,a){}});
//# sourceMappingURL=app.d62bd985.js.map