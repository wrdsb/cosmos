(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{VvOC:function(e,t,n){"use strict";n.r(t),n.d(t,"GoogleCalendarModule",function(){return N});var a=n("ofXK"),c=n("tk/3"),s=n("E8bv"),r=n("f6nW"),i=n("3Pt+"),o=n("6NWb"),l=n("bTqV"),d=n("+0xr"),b=n("0IaG"),h=n("tyNb"),u=n("Ttig"),g=n("fXoL"),p=n("2Vo4"),f=n("twK/"),m=n("wHSu"),v=n("vkgz"),w=n("un/a"),C=n("JIr8"),R=n("t5bl"),k=n("a6nC"),S=n("Goz9");let x=(()=>{class e{constructor(e,t){this.messagesService=e,this.viewfinderService=t,this.searchRequestState=new p.a({status:R.a.UNKNOWN,response:"response",error:"error"}),this.searchRequestState$=this.searchRequestState.asObservable(),this.searchResponse=new p.a({header:{message:"",chatter:"",status:0,timestamp:""},payload:{}}),this.searchResponse$=this.searchResponse.asObservable(),this.calendarsList=new p.a([]),this.calendarsList$=this.calendarsList.asObservable(),this.calendarSelected=new p.a(!1),this.calendarSelected$=this.calendarSelected.asObservable(),this.selectedCalendar=new p.a(null),this.selectedCalendar$=this.selectedCalendar.asObservable()}selectCalendar(e){this.findCalendar(e)}deselectCalendar(){this.calendarSelected.next(!1),this.selectedCalendar.next(null)}findCalendar(e){console.log("Google Calendar Service: findCalendar()"),this.searchRequestState.next({status:R.a.LOADING,response:"unknown",error:"unknown"}),this.viewfinderService.findGoogleCalendar(e).pipe(Object(v.a)(e=>console.log("Google Calendar Service: find request")),Object(w.a)(2),Object(C.a)(e=>{throw console.log("Google Calendar Service: catch find request error"),this.searchRequestState.next({status:R.a.ERROR,response:"",error:e}),this.searchResponse.next({header:{status:200,message:"error",chatter:"error",timestamp:"timestamp"},payload:{}}),"Google Calendar Service: error finding Google Calendar"}),Object(v.a)(e=>{this.searchRequestState.next({status:R.a.SUCCESS,response:"success",error:""}),console.log("Google Calendar Service: success finding Google Calendar")})).subscribe(e=>{this.calendarSelected.next(!0),this.selectedCalendar.next(e.payload.documents[0])})}searchCalendars(e){console.log("Google Calendar Service: searchCalendars()");let t=Object.assign({includeTotalCount:!0,orderBy:["email asc"],skip:0,top:20},e);this.searchRequestState.next({status:R.a.LOADING,response:"unknown",error:"unknown"}),this.viewfinderService.searchGoogleCalendars(t).pipe(Object(v.a)(e=>console.log("Google Calendars Service: search request")),Object(w.a)(2),Object(C.a)(e=>{throw console.log("Google Calendars Service: catch search request error"),this.searchRequestState.next({status:R.a.ERROR,response:"",error:e}),this.searchResponse.next({header:{status:200,message:"error",chatter:"error",timestamp:"timestamp"},payload:{}}),"Google Calendars Service: error searching Viewfinder"}),Object(v.a)(e=>{this.searchRequestState.next({status:R.a.SUCCESS,response:"success",error:""}),console.log("Google Calendars Service: success searching Viewfinder")})).subscribe(e=>{this.searchResponse.next(e),this.calendarsList.next(e.payload.documents)})}}return e.\u0275fac=function(t){return new(t||e)(g.Vb(k.a),g.Vb(S.a))},e.\u0275prov=g.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var y=n("lJxs"),O=n("Kj3r"),Q=n("/uUt");function P(e,t){if(1&e&&(g.Pb(0),g.Rb(1,"h1",1),g.vc(2),g.Qb(),g.Rb(3,"div",2),g.Rb(4,"div",3),g.Rb(5,"span",4),g.vc(6,"Name (Summary):"),g.Qb(),g.Rb(7,"span",5),g.vc(8),g.Qb(),g.Qb(),g.Rb(9,"div",3),g.Rb(10,"span",4),g.vc(11,"Description:"),g.Qb(),g.Rb(12,"span",5),g.vc(13),g.Qb(),g.Qb(),g.Rb(14,"div",3),g.Rb(15,"span",4),g.vc(16,"Calendar ID:"),g.Qb(),g.Rb(17,"span",5),g.vc(18),g.Qb(),g.Qb(),g.Qb(),g.Rb(19,"div",6),g.Rb(20,"button",7),g.vc(21,"Close"),g.Qb(),g.Qb(),g.Ob()),2&e){const e=t.ngIf;g.Ab(2),g.wc(e.summary),g.Ab(6),g.wc(e.summary),g.Ab(5),g.wc(e.description),g.Ab(5),g.wc(e.id),g.Ab(2),g.gc("mat-dialog-close",!0)}}let I=(()=>{class e{constructor(e){this.calendarService=e,this.selectedCalendar$=this.calendarService.selectedCalendar$}}return e.\u0275fac=function(t){return new(t||e)(g.Lb(x))},e.\u0275cmp=g.Fb({type:e,selectors:[["cosmos-calendar-meta-dialog"]],decls:2,vars:3,consts:[[4,"ngIf"],["mat-dialog-title",""],["mat-dialog-content","",1,"detail"],[1,"detail-row"],[1,"detail-attribute"],[1,"detail-value"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"]],template:function(e,t){1&e&&(g.tc(0,P,22,5,"ng-container",0),g.cc(1,"async")),2&e&&g.gc("ngIf",g.dc(1,1,t.selectedCalendar$))},directives:[a.l,b.f,b.d,b.b,l.a,b.c],pipes:[a.b],styles:[".detail[_ngcontent-%COMP%]{font-family:Jura,sans-serif;font-size:20px;font-weight:400;color:#fff;text-decoration:none;line-height:1.5}.detail-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start}.detail-attribute[_ngcontent-%COMP%]{font-weight:700}.users-list[_ngcontent-%COMP%]{list-style:none}"]}),e})();function $(e,t){1&e&&(g.Rb(0,"th",19),g.vc(1," ID "),g.Qb())}function D(e,t){if(1&e){const e=g.Sb();g.Rb(0,"td",20),g.Zb("click",function(){g.kc(e);const n=t.$implicit;return g.bc().selectCalendar(n.searchID)}),g.vc(1),g.Qb()}if(2&e){const e=t.$implicit;g.Ab(1),g.xc(" ",e.searchID," ")}}function A(e,t){1&e&&(g.Rb(0,"th",19),g.vc(1," Name "),g.Qb())}function M(e,t){if(1&e){const e=g.Sb();g.Rb(0,"td",20),g.Zb("click",function(){g.kc(e);const n=t.$implicit;return g.bc().selectCalendar(n.searchID)}),g.vc(1),g.Qb()}if(2&e){const e=t.$implicit;g.Ab(1),g.xc(" ",e.summary," ")}}function j(e,t){1&e&&(g.Rb(0,"th",19),g.vc(1," Description "),g.Qb())}function G(e,t){if(1&e){const e=g.Sb();g.Rb(0,"td",20),g.Zb("click",function(){g.kc(e);const n=t.$implicit;return g.bc().selectCalendar(n.searchID)}),g.vc(1),g.Qb()}if(2&e){const e=t.$implicit;g.Ab(1),g.xc(" ",e.description," ")}}function _(e,t){1&e&&g.Mb(0,"tr",21)}function q(e,t){1&e&&g.Mb(0,"tr",22)}const V=function(){return{color:"orange"}};let Z=(()=>{class e{constructor(e,t){this.calendarService=e,this.dialog=t,this.FalseIcon=f.a,this.MaybeIcon=m.a,this.TrueIcon=m.e,this.angleUpIcon=m.c,this.angleDownIcon=m.b,this.beginningIcon=m.f,this.backwardIcon=m.d,this.forwardIcon=m.h,this.endIcon=m.g,this.displayedColumns$=new p.a(["summary","description","id"]),this.searchFormControl=new i.c,this.currentPage=new p.a(1),this.currentSearch=new p.a("*"),this.pageSize=new p.a(20),this.maxPage=new p.a(1),this.searchResponse$=this.calendarService.searchResponse$,this.totalRecords$=this.searchResponse$.pipe(Object(y.a)(e=>e.payload.count)),this.calendarsPage$=this.calendarService.calendarsList$,this.maxPage$=this.totalRecords$.pipe(Object(y.a)(e=>Math.ceil(e/this.pageSize.value))),this.maxPage$.subscribe(this.maxPage),this.calendarSelected$=this.calendarService.calendarSelected$,this.selectedCalendar$=this.calendarService.selectedCalendar$}ngOnInit(){this.searchCalendars()}ngAfterViewInit(){this.searchFormControl.valueChanges.pipe(Object(O.a)(400),Object(Q.a)()).subscribe(e=>{console.log(e),this.currentSearch.next(e),this.currentPage.next(1),this.searchCalendars()})}pageBeginning(){this.currentPage.next(1),this.searchCalendars()}pageUp(){const e=this.currentPage.value-1;this.nextPageValid(e)&&(this.currentPage.next(e),this.searchCalendars())}pageDown(){const e=this.currentPage.value+1;this.nextPageValid(e)&&(this.currentPage.next(e),this.searchCalendars())}pageEnd(){this.currentPage.next(this.maxPage.value),this.searchCalendars()}nextPageValid(e){return e>=1&&e<=this.maxPage.value}selectCalendar(e){console.log("Show details for "+e),this.calendarService.selectCalendar(e),this.calendarMetaDialogRef=this.dialog.open(I,{width:"800px"})}deselectCalendar(){console.log("Deselect selected calendar"),this.calendarService.deselectCalendar()}searchCalendars(){this.calendarService.searchCalendars({search:this.currentSearch.value,skip:(this.currentPage.value-1)*this.pageSize.value})}}return e.\u0275fac=function(t){return new(t||e)(g.Lb(x),g.Lb(b.a))},e.\u0275cmp=g.Fb({type:e,selectors:[["cosmos-calendar-search"]],decls:45,vars:36,consts:[[1,"calendars-list"],[1,"widget","list"],[1,"widget-content"],[1,"widget-header"],[1,"widget-title"],["type","text","placeholder","Search\u2026",1,"form-control",3,"formControl"],[3,"click"],[1,"widget-info"],[1,"widget-main"],[1,"page-button"],["size","lg",3,"icon","styles","click"],["cdk-table","",3,"dataSource"],["cdkColumnDef","id"],["cdk-header-cell","",4,"cdkHeaderCellDef"],["cdk-cell","","class","clickable",3,"click",4,"cdkCellDef"],["cdkColumnDef","summary"],["cdkColumnDef","description"],["cdk-header-row","",4,"cdkHeaderRowDef","cdkHeaderRowDefSticky"],["cdk-row","",4,"cdkRowDef","cdkRowDefColumns"],["cdk-header-cell",""],["cdk-cell","",1,"clickable",3,"click"],["cdk-header-row",""],["cdk-row",""]],template:function(e,t){1&e&&(g.Rb(0,"div",0),g.Rb(1,"div",1),g.Rb(2,"div",2),g.Rb(3,"div",3),g.Rb(4,"div",4),g.vc(5," Search Google Calendars "),g.Qb(),g.Rb(6,"div"),g.Mb(7,"input",5),g.Rb(8,"button",6),g.Zb("click",function(){return t.searchFormControl.setValue("")}),g.vc(9,"Clear"),g.Qb(),g.Qb(),g.Rb(10,"div",7),g.vc(11),g.cc(12,"async"),g.cc(13,"async"),g.Qb(),g.Qb(),g.Rb(14,"div",8),g.Rb(15,"div"),g.Rb(16,"span",9),g.Rb(17,"fa-icon",10),g.Zb("click",function(){return t.pageBeginning()}),g.Qb(),g.Qb(),g.Rb(18,"span",9),g.Rb(19,"fa-icon",10),g.Zb("click",function(){return t.pageUp()}),g.Qb(),g.Qb(),g.Rb(20,"span",9),g.Rb(21,"fa-icon",10),g.Zb("click",function(){return t.pageDown()}),g.Qb(),g.Qb(),g.Rb(22,"span",9),g.Rb(23,"fa-icon",10),g.Zb("click",function(){return t.pageEnd()}),g.Qb(),g.Qb(),g.Qb(),g.Rb(24,"table",11),g.Pb(25,12),g.tc(26,$,2,0,"th",13),g.tc(27,D,2,1,"td",14),g.Ob(),g.Pb(28,15),g.tc(29,A,2,0,"th",13),g.tc(30,M,2,1,"td",14),g.Ob(),g.Pb(31,16),g.tc(32,j,2,0,"th",13),g.tc(33,G,2,1,"td",14),g.Ob(),g.tc(34,_,1,0,"tr",17),g.tc(35,q,1,0,"tr",18),g.Qb(),g.Rb(36,"div"),g.Rb(37,"span",9),g.Rb(38,"fa-icon",10),g.Zb("click",function(){return t.pageBeginning()}),g.Qb(),g.Qb(),g.Rb(39,"span",9),g.Rb(40,"fa-icon",10),g.Zb("click",function(){return t.pageUp()}),g.Qb(),g.Qb(),g.Rb(41,"span",9),g.Rb(42,"fa-icon",10),g.Zb("click",function(){return t.pageDown()}),g.Qb(),g.Qb(),g.Rb(43,"span",9),g.Rb(44,"fa-icon",10),g.Zb("click",function(){return t.pageEnd()}),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&e&&(g.Ab(7),g.gc("formControl",t.searchFormControl),g.Ab(4),g.zc(" ",g.dc(12,24,t.totalRecords$)," total records | Showing Page ",t.currentPage.value," of ",g.dc(13,26,t.maxPage$),"\xa0\xa0 "),g.Ab(6),g.gc("icon",t.beginningIcon)("styles",g.hc(28,V)),g.Ab(2),g.gc("icon",t.backwardIcon)("styles",g.hc(29,V)),g.Ab(2),g.gc("icon",t.forwardIcon)("styles",g.hc(30,V)),g.Ab(2),g.gc("icon",t.endIcon)("styles",g.hc(31,V)),g.Ab(1),g.gc("dataSource",t.calendarsPage$),g.Ab(10),g.gc("cdkHeaderRowDef",t.displayedColumns$.value)("cdkHeaderRowDefSticky",!0),g.Ab(1),g.gc("cdkRowDefColumns",t.displayedColumns$.value),g.Ab(3),g.gc("icon",t.beginningIcon)("styles",g.hc(32,V)),g.Ab(2),g.gc("icon",t.backwardIcon)("styles",g.hc(33,V)),g.Ab(2),g.gc("icon",t.forwardIcon)("styles",g.hc(34,V)),g.Ab(2),g.gc("icon",t.endIcon)("styles",g.hc(35,V)))},directives:[i.b,i.j,i.d,o.a,r.p,r.e,r.k,r.c,r.m,r.o,r.j,r.b,r.l,r.n],pipes:[a.b],styles:[".widget[_ngcontent-%COMP%], [_nghost-%COMP%]{display:grid}.widget[_ngcontent-%COMP%]{border:2px solid #6d6d6b;border-top:14px solid #6d6d6b;padding:10px;overflow:auto;font-family:Jura,sans-serif;font-size:18px;font-weight:400;color:#fff;text-decoration:none;line-height:1.5}.widget-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;color:#0a1a43;background-color:#29c2d7}table[_ngcontent-%COMP%]{width:100%}.calendars-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start}.list[_ngcontent-%COMP%]{flex:1 1 auto}.clickable[_ngcontent-%COMP%]{cursor:pointer}.cdk-row[_ngcontent-%COMP%]{background-color:#1f3d73}.cdk-column-email[_ngcontent-%COMP%]{width:30%}.cdk-column-name[_ngcontent-%COMP%]{width:45%}.cdk-column-adminCreated[_ngcontent-%COMP%], .cdk-column-membership_automation_active[_ngcontent-%COMP%]{text-align:center}.page-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px;cursor:pointer}"]}),e})(),L=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Fb({type:e,selectors:[["cosmos-calendar-home"]],decls:1,vars:0,template:function(e,t){1&e&&g.Mb(0,"cosmos-calendar-search")},directives:[Z],styles:[""]}),e})();const z=[{path:"calendar",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Fb({type:e,selectors:[["cosmos-calendar-detail"]],decls:2,vars:0,template:function(e,t){1&e&&(g.Rb(0,"p"),g.vc(1,"calendar-detail works!"),g.Qb())},styles:[""]}),e})(),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[s.d,u.a]},{path:"",component:L,data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[s.d,u.a]}];let F=(()=>{class e{}return e.\u0275mod=g.Jb({type:e}),e.\u0275inj=g.Ib({factory:function(t){return new(t||e)},imports:[[h.e.forChild(z)],h.e]}),e})(),N=(()=>{class e{}return e.\u0275mod=g.Jb({type:e}),e.\u0275inj=g.Ib({factory:function(t){return new(t||e)},providers:[{provide:c.a,useClass:s.e,multi:!0}],imports:[[a.c,r.q,i.f,i.l,o.b,l.b,d.a,b.e,F]]}),e})()}}]);