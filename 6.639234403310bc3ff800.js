(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"17Oh":function(e,t,n){"use strict";n.r(t),n.d(t,"HilsModule",(function(){return u}));var c=n("ofXK"),r=n("tyNb"),a=n("fXoL"),o=n("IM0g"),i=n("Xa2L"),s=n("Wp6s");let l=(()=>{class e{constructor(){this.projectIcons=["Audi","Bmw","Chana","Daimler","Fiat","Ford","GM","Mini","Other","Saic","Skoda","VW"]}transform(e,t){if(e){for(let t=0;t<this.projectIcons.length;t++)if(e.toLowerCase().includes(this.projectIcons[t].toLocaleLowerCase()))return"assets/images/projecticons/"+this.projectIcons[t]+".png";return e.toLowerCase().includes("mbc")?"assets/images/projecticons/Daimler.png":"assets/images/zf-logo.png"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Kb({name:"projectIcon",type:e,pure:!0}),e})();function d(e,t){1&e&&(a.Rb(0,"div",3),a.Rb(1,"div",4),a.Rb(2,"div"),a.Rb(3,"mat-progress-spinner",5),a.tc(4," > "),a.Qb(),a.Qb(),a.Qb(),a.Qb())}const b=function(e){return{"no-data":e}};function p(e,t){if(1&e&&(a.Rb(0,"mat-card",8),a.Rb(1,"mat-card-header"),a.Mb(2,"img",9),a.dc(3,"projectIcon"),a.Rb(4,"mat-card-title"),a.tc(5),a.Qb(),a.Rb(6,"mat-card-subtitle"),a.tc(7),a.Qb(),a.Qb(),a.Rb(8,"mat-card-content"),a.tc(9),a.Mb(10,"br"),a.tc(11),a.Mb(12,"br"),a.tc(13),a.dc(14,"date"),a.Mb(15,"br"),a.Qb(),a.Qb()),2&e){const e=a.cc().$implicit,t=a.cc();a.hc("ngClass",a.kc(12,b,t.cardClasses(e))),a.Ab(2),a.ic("src",a.ec(3,8,e.firsthilentry.projectname),a.oc),a.ic("alt",e.firsthilentry.projectname),a.Ab(3),a.uc(e.labcarname),a.Ab(2),a.vc(" ",e.firsthilentry.machinename,""),a.Ab(2),a.vc(" ",e.firsthilentry.osversion," "),a.Ab(2),a.vc(" ",e.firsthilentry.projectname," "),a.Ab(2),a.vc(" ",a.ec(14,10,e.firsthilentry.date)," ")}}function m(e,t){if(1&e&&(a.Rb(0,"div",6),a.sc(1,p,16,14,"mat-card",7),a.Qb()),2&e){const e=t.$implicit;a.Ab(1),a.hc("ngIf",e.firsthilentry)}}const g=[{path:"",component:(()=>{class e{constructor(e){this.hilService=e,this.hils=[],this.loading=!0}ngOnInit(){this.hilService.getHils().subscribe(e=>{const t=JSON.parse(localStorage.getItem("hils"));t?(this.loading=!1,this.hils=e.filter(e=>t.includes(e.labcarname)),console.log(e)):(this.loading=!1,this.hils=e,console.log(e))},e=>console.log(e))}cardClasses(e){const t=new Date(e.firsthilentry.date),n=Date.now()-t.getTime();return Math.floor(n/1e3/60)>30}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(o.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-index"]],decls:3,vars:2,consts:[["class","loader-wrapper",4,"ngIf"],[1,"row"],["class","col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4",4,"ngFor","ngForOf"],[1,"loader-wrapper"],[1,"loader-inner"],["color","primary","mode","indeterminate","value","50"],[1,"col-xl-3","col-lg-3","col-md-4","col-sm-6","col-12","mb-4"],["class","example-card",3,"ngClass",4,"ngIf"],[1,"example-card",3,"ngClass"],["mat-card-avatar","",1,"example-header-image",3,"src","alt"]],template:function(e,t){1&e&&(a.sc(0,d,5,0,"div",0),a.Rb(1,"div",1),a.sc(2,m,2,1,"div",2),a.Qb()),2&e&&(a.hc("ngIf",t.loading),a.Ab(2),a.hc("ngForOf",t.hils))},directives:[c.k,c.j,i.a,s.a,c.i,s.d,s.b,s.g,s.f,s.c],pipes:[l,c.d],styles:[".no-data[_ngcontent-%COMP%]{background-color:#fff3e0}.example-header-image[_ngcontent-%COMP%]{background-size:cover}.example-margin[_ngcontent-%COMP%]{margin:0 auto}.loader-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100vh - 20px)}.loader-wrapper[_ngcontent-%COMP%]   .loader-inner[_ngcontent-%COMP%]{padding:12px}"]}),e})(),pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[r.b.forChild(g)],r.b]}),e})();var h=n("PCNd");let u=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[c.b,f,h.a]]}),e})()}}]);