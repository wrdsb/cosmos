(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ilW1:function(e,o,t){"use strict";t.r(o),t.d(o,"GoogleModule",function(){return u});var n=t("ofXK"),s=t("tk/3"),r=t("E8bv"),i=t("tyNb"),a=t("Ttig"),d=t("fXoL");const l=[{path:"calendar",loadChildren:()=>Promise.all([t.e(1),t.e(12)]).then(t.bind(null,"VvOC")).then(e=>e.GoogleCalendarModule),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[r.d,a.a]},{path:"groups",loadChildren:()=>Promise.all([t.e(1),t.e(3),t.e(2),t.e(9)]).then(t.bind(null,"UDvM")).then(e=>e.GoogleGroupsModule),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[r.d,a.a]},{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d.Fb({type:e,selectors:[["cosmos-google-home"]],decls:5,vars:0,consts:[[1,"groups-list"],[1,"widget","list"],[1,"widget-content"]],template:function(e,o){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Rb(2,"div",2),d.Rb(3,"p"),d.vc(4,"home works!"),d.Qb(),d.Qb(),d.Qb(),d.Qb())},styles:[".widget[_ngcontent-%COMP%], [_nghost-%COMP%]{display:grid}.widget[_ngcontent-%COMP%]{border:2px solid #6d6d6b;border-top:14px solid #6d6d6b;padding:10px;overflow:auto;font-family:var(--default-font-family);font-size:var(--body-font-size);font-weight:var(--body-font-wieght);color:var(--body-text);text-decoration:none;line-height:1.5}.widget-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;color:#0a1a43;background-color:#29c2d7}"]}),e})(),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[r.d,a.a]}];let c=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(o){return new(o||e)},imports:[[i.e.forChild(l)],i.e]}),e})(),u=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(o){return new(o||e)},providers:[{provide:s.a,useClass:r.e,multi:!0}],imports:[[n.c,c]]}),e})()}}]);