(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9Lx5":function(i,e,n){"use strict";n.r(e),n.d(e,"CurriculumModule",(function(){return l}));var t=n("ofXK"),o=n("fXoL"),a=n("R0Ic");let c=(()=>{class i{constructor(){this.animationViewCv="off",this.animationViewCvEmitter=new o.n}ngOnInit(){}toggleCv(){const i=this.animationViewCvList;for(let e=0;e<i.length;e++)i[e].isViewCvAnimation=e===this.viewCvElementPos&&"off"===this.animationViewCv?"on":"off";this.animationViewCvEmitter.emit(i)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Ab({type:i,selectors:[["app-slider-cv"]],inputs:{animationViewCv:"animationViewCv",viewCvElementPos:"viewCvElementPos",animationViewCvList:"animationViewCvList",nameCv:"nameCv",urlImgCv:"urlImgCv"},outputs:{animationViewCvEmitter:"animationViewCvEmitter"},decls:7,vars:5,consts:[[1,"cvSlider","flex_center"],[1,"cvSlider_tap","flex_center",3,"click"],[1,"cvSlider_cv"],["alt","",1,"cvSlider_cv_image",3,"src"]],template:function(i,e){1&i&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Sb("click",(function(){return e.toggleCv()})),o.Lb(2,"p"),o.kc(3),o.Vb(4,"uppercase"),o.Kb(),o.Kb(),o.Lb(5,"div",2),o.Hb(6,"img",3),o.Kb(),o.Kb()),2&i&&(o.vb(3),o.mc(" ",o.Wb(4,3,e.nameCv)," "),o.vb(2),o.Zb("@toggleViewCv",e.animationViewCv),o.vb(1),o.Zb("src",e.urlImgCv,o.gc))},pipes:[t.o],styles:[".cvSlider[_ngcontent-%COMP%]{height:90vh}.cvSlider_tap[_ngcontent-%COMP%]{width:1.875em;height:90vh;background-color:rgba(0,0,0,.8);border-right:2px solid red;cursor:pointer}.cvSlider_tap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:1em;color:#fff;writing-mode:vertical-rl}.cvSlider_cv[_ngcontent-%COMP%]{width:0;height:100%;overflow-y:scroll;overflow-x:hidden;transform-origin:left;scrollbar-color:#151515 #ccd8cc;scrollbar-width:thin}.cvSlider_cv[_ngcontent-%COMP%]::-webkit-scrollbar{background-color:#ccd8cc;width:.3125em}.cvSlider_cv[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#151515;width:.3125em}.cvSlider_cv_image[_ngcontent-%COMP%]{width:80.5em}@keyframes move{0%{width:0}to{width:80.5em}}@media screen and (min-width:1061px) and (max-width:1360px) and (orientation:landscape){.cvSlider[_ngcontent-%COMP%]{font-size:.75em}}@media screen and (min-width:701px) and (max-width:1060px) and (orientation:landscape){.cvSlider[_ngcontent-%COMP%]{font-size:.5em}}@media screen and (max-width:700px) and (orientation:landscape){.cvSlider[_ngcontent-%COMP%]{font-size:.7em}}"],data:{animation:[Object(a.j)("toggleViewCv",[Object(a.g)("off",Object(a.h)({width:"0"})),Object(a.g)("on",Object(a.h)({width:"80.5em"})),Object(a.i)("off => on",Object(a.e)("700ms ease-in-out")),Object(a.i)("on => off",Object(a.e)("700ms ease-in-out"))])]}}),i})(),r=(()=>{class i{constructor(){this.isViewCvAnimationList=[{isViewCvAnimation:"off"},{isViewCvAnimation:"on"}]}ngOnInit(){console.log(screen.width),console.log(screen.height)}toggleCv(){console.log(this.isViewCvAnimationList)}toggleCv1(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Ab({type:i,selectors:[["app-curriculum-vitae"]],decls:2,vars:10,consts:[[3,"animationViewCv","viewCvElementPos","nameCv","animationViewCvList","urlImgCv","animationViewCvEmitter"],[3,"nameCv","animationViewCv","animationViewCvList","viewCvElementPos","urlImgCv"]],template:function(i,e){1&i&&(o.Lb(0,"app-slider-cv",0),o.Sb("animationViewCvEmitter",(function(i){return e.isViewCvAnimationList=i})),o.Kb(),o.Hb(1,"app-slider-cv",1)),2&i&&(o.Zb("animationViewCv",e.isViewCvAnimationList[0].isViewCvAnimation)("viewCvElementPos",0)("nameCv","Junior Java Backend")("animationViewCvList",e.isViewCvAnimationList)("urlImgCv","assets/CVBackendJunior.jpg"),o.vb(1),o.Zb("nameCv","Junior Angular Frontend")("animationViewCv",e.isViewCvAnimationList[1].isViewCvAnimation)("animationViewCvList",e.isViewCvAnimationList)("viewCvElementPos",1)("urlImgCv","assets/CVFrontendJunior.jpg"))},directives:[c],styles:["[_nghost-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}"]}),i})();var s=n("tyNb");const v=[{path:"",component:r}];let m=(()=>{class i{}return i.\u0275mod=o.Eb({type:i}),i.\u0275inj=o.Db({factory:function(e){return new(e||i)},imports:[[s.c.forChild(v)],s.c]}),i})(),l=(()=>{class i{}return i.\u0275mod=o.Eb({type:i}),i.\u0275inj=o.Db({factory:function(e){return new(e||i)},imports:[[t.c,m]]}),i})()}}]);