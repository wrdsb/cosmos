(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{gGFp:function(e,s,t){"use strict";t.r(s),t.d(s,"AtsModule",function(){return M});var r=t("ofXK"),a=t("tk/3"),n=t("E8bv"),i=t("f6nW"),c=t("3Pt+"),o=t("6NWb"),l=t("bTqV"),h=t("+0xr"),u=t("0IaG"),d=t("qFsG"),g=t("1jcm"),m=t("jaxi"),p=t("f0Cb"),S=t("QibW"),A=t("d3UM"),b=t("tyNb"),v=t("Ttig"),F=t("fXoL");let w=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=F.Hb({type:e,selectors:[["cosmos-ats-home"]],decls:2,vars:0,template:function(e,s){1&e&&(F.Tb(0,"h1"),F.vc(1,"ATS Dashboard"),F.Sb())},styles:[""]}),e})();var f=t("2Vo4"),x=t("wHSu"),I=t("twK/"),C=t("lJxs"),$=t("Kj3r"),P=t("/uUt");let N=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=F.Hb({type:e,selectors:[["cosmos-asset-detail-dialog"]],decls:2,vars:0,template:function(e,s){1&e&&(F.Tb(0,"p"),F.vc(1,"asset-detail-dialog works!"),F.Sb())},styles:[""]}),e})();var O=t("vkgz"),y=t("un/a"),R=t("JIr8"),T=t("t5bl"),j=t("a6nC"),D=t("Goz9");let q=(()=>{class e{constructor(e,s){this.messagesService=e,this.viewfinderService=s,this.searchRequestState=new f.a({status:T.a.UNKNOWN,response:"response",error:"error"}),this.searchRequestState$=this.searchRequestState.asObservable(),this.searchResponse=new f.a({header:{message:"",chatter:"",status:0,timestamp:""},payload:{}}),this.searchResponse$=this.searchResponse.asObservable(),this.assetsList=new f.a([]),this.assetsList$=this.assetsList.asObservable(),this.assetSelected=new f.a(!1),this.assetSelected$=this.assetSelected.asObservable(),this.selectedAsset=new f.a(null),this.selectedAsset$=this.selectedAsset.asObservable()}selectAsset(e){this.findAsset(e)}deselectAsset(){this.assetSelected.next(!1),this.selectedAsset.next(null)}findAsset(e){console.log("ATS Assets Service: findAsset()"),this.searchRequestState.next({status:T.a.LOADING,response:"unknown",error:"unknown"}),this.viewfinderService.findATSAsset(e).pipe(Object(O.a)(e=>console.log("ATS Assets Service: find request")),Object(y.a)(2),Object(R.a)(e=>{throw console.log("ATS Assets Service: catch find request error"),this.searchRequestState.next({status:T.a.ERROR,response:"",error:e}),this.searchResponse.next({header:{status:200,message:"error",chatter:"error",timestamp:"timestamp"},payload:{}}),"ATS Assets Service: error finding Asset"}),Object(O.a)(e=>{this.searchRequestState.next({status:T.a.SUCCESS,response:"success",error:""}),console.log("ATS Assets Service: success finding Asset")})).subscribe(e=>{this.assetSelected.next(!0),this.selectedAsset.next(e.payload.documents[0])})}searchAssets(e){console.log("ATS Assets Service: searchAssets()");let s=Object.assign({includeTotalCount:!0,orderBy:["assetID asc"],skip:0,top:20},e);this.searchRequestState.next({status:T.a.LOADING,response:"unknown",error:"unknown"}),this.viewfinderService.searchATSAssets(s).pipe(Object(O.a)(e=>console.log("ATS Assets Service: search request")),Object(y.a)(2),Object(R.a)(e=>{throw console.log("ATS Assets Service: catch search request error"),this.searchRequestState.next({status:T.a.ERROR,response:"",error:e}),this.searchResponse.next({header:{status:200,message:"error",chatter:"error",timestamp:"timestamp"},payload:{}}),"ATS Assets Service: error searching Viewfinder"}),Object(O.a)(e=>{this.searchRequestState.next({status:T.a.SUCCESS,response:"success",error:""}),console.log("ATS Assets Service: success searching Viewfinder")})).subscribe(e=>{this.searchResponse.next(e),this.assetsList.next(e.payload.documents)})}}return e.\u0275fac=function(s){return new(s||e)(F.Xb(j.a),F.Xb(D.a))},e.\u0275prov=F.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const L=[{path:"assets/search",component:(()=>{class e{constructor(e,s){this.assetsService=e,this.dialog=s,this.CloseIcon=x.i,this.FalseIcon=I.a,this.MaybeIcon=x.a,this.TrueIcon=x.e,this.angleUpIcon=x.c,this.angleDownIcon=x.b,this.beginningIcon=x.f,this.backwardIcon=x.d,this.forwardIcon=x.h,this.endIcon=x.g,this.displayedColumns$=new f.a(["assetID","status","manufacturer","modelName","modelID","location","program","project","poDate","serial","assignedTo","note","position","employee"]),this.isAssignedFilterFormControl=new c.c,this.statusFilterFormControl=new c.c,this.modelNameFilterFormControl=new c.c,this.programFilterFormControl=new c.c,this.locationNameFilterFormControl=new c.c,this.assetIDSearchFormControl=new c.c,this.anyFieldSearchFormControl=new c.c,this.currentIsAssignedFilter=new f.a(""),this.currentStatusFilter=new f.a(""),this.currentModelNameFilter=new f.a(""),this.currentProgramFilter=new f.a(""),this.currentLocationNameFilter=new f.a(""),this.currentAssetIDSearch=new f.a(""),this.currentAnyFieldSearch=new f.a(""),this.currentSearch=new f.a("*"),this.currentPage=new f.a(1),this.pageSize=new f.a(20),this.maxPage=new f.a(1),this.searchResponse$=this.assetsService.searchResponse$,this.totalRecords$=this.searchResponse$.pipe(Object(C.a)(e=>e.payload.count)),this.assetsPage$=this.assetsService.assetsList$,this.maxPage$=this.totalRecords$.pipe(Object(C.a)(e=>Math.ceil(e/this.pageSize.value))),this.maxPage$.subscribe(this.maxPage),this.assetSelected$=this.assetsService.assetSelected$,this.selectedAsset$=this.assetsService.selectedAsset$}ngOnInit(){this.searchAssets()}ngAfterViewInit(){this.isAssignedFilterFormControl.valueChanges.subscribe(e=>{console.log(`isAssigned Filter: ${e}`),this.currentIsAssignedFilter.next(e),this.searchAssets()}),this.statusFilterFormControl.valueChanges.subscribe(e=>{console.log(`status Filter ${e}`),this.currentStatusFilter.next(e),this.searchAssets()}),this.modelNameFilterFormControl.valueChanges.subscribe(e=>{console.log(`modelName Filter ${e}`),this.currentModelNameFilter.next(e),this.searchAssets()}),this.programFilterFormControl.valueChanges.subscribe(e=>{console.log(`program Filter: ${e}`),this.currentProgramFilter.next(e),this.searchAssets()}),this.locationNameFilterFormControl.valueChanges.subscribe(e=>{console.log(`locationName Filter: ${e}`),this.currentLocationNameFilter.next(e),this.currentPage.next(1),this.searchAssets()}),this.assetIDSearchFormControl.valueChanges.pipe(Object($.a)(400),Object(P.a)()).subscribe(e=>{console.log(`assetID Search: ${e}`),this.currentAssetIDSearch.next(e),this.currentPage.next(1),this.searchAssets()}),this.anyFieldSearchFormControl.valueChanges.pipe(Object($.a)(400),Object(P.a)()).subscribe(e=>{console.log(`searchTerm Search: ${e}`),this.currentAnyFieldSearch.next(e),this.currentPage.next(1),this.searchAssets()})}pageBeginning(){this.currentPage.next(1),this.searchAssets()}pageUp(){const e=this.currentPage.value-1;this.nextPageValid(e)&&(this.currentPage.next(e),this.searchAssets())}pageDown(){const e=this.currentPage.value+1;this.nextPageValid(e)&&(this.currentPage.next(e),this.searchAssets())}pageEnd(){this.currentPage.next(this.maxPage.value),this.searchAssets()}nextPageValid(e){return e>=1&&e<=this.maxPage.value}selectAsset(e){console.log(`Show details for ${e}`),this.assetsService.selectAsset(e),this.assetDetailDialogRef=this.dialog.open(N,{width:"800px"})}deselectAsset(){console.log("Deselect selected asset"),this.assetsService.deselectAsset()}searchAssets(){let e="",s="*";this.currentIsAssignedFilter.value.length>0&&"all"!==this.currentIsAssignedFilter.value&&(e+=`isAssigned eq ${this.currentIsAssignedFilter.value}`),this.currentStatusFilter.value.length>0&&"all"!==this.currentStatusFilter.value&&(e.length>0&&(e+=" and "),e+=`status eq ${this.currentStatusFilter.value}`),this.currentModelNameFilter.value.length>0&&"all"!==this.currentModelNameFilter.value&&(e.length>0&&(e+=" and "),e+=`modelName eq ${this.currentModelNameFilter.value}`),this.currentProgramFilter.value.length>0&&"all"!==this.currentProgramFilter.value&&(e.length>0&&(e+=" and "),e+=`program eq ${this.currentProgramFilter.value}`),this.currentLocationNameFilter.value.length>0&&"all"!==this.currentLocationNameFilter.value&&(e.length>0&&(e+=" and "),e+=`locationName eq '${this.currentLocationNameFilter.value}'`),this.currentAssetIDSearch.value.length>0&&(s=this.currentAssetIDSearch.value),this.currentAnyFieldSearch.value.length>0&&(s=this.currentAnyFieldSearch.value);let t={search:s,skip:(this.currentPage.value-1)*this.pageSize.value};e.length>0&&(t.filter=e),console.log(t),this.assetsService.searchAssets(t)}}return e.\u0275fac=function(s){return new(s||e)(F.Nb(q),F.Nb(u.a))},e.\u0275cmp=F.Hb({type:e,selectors:[["cosmos-ats-assets-search"]],decls:3,vars:0,template:function(e,s){1&e&&(F.Tb(0,"h1"),F.vc(1,"Search ATS Assets"),F.Sb(),F.vc(2," Asset ID\nStatus\nSigned Out for Learn from Home\nReturned from Learn from Home\nManufacturer\nModel Name\nModel ID\nLocation\nProgram\nProject\nPO Date\nSerial\nAssigned To\nNote\nPosition\nEmployee "))},styles:[""]}),e})(),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[n.d,v.a]},{path:"",component:w,data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[n.d,v.a]}];let k=(()=>{class e{}return e.\u0275mod=F.Lb({type:e}),e.\u0275inj=F.Kb({factory:function(s){return new(s||e)},imports:[[b.e.forChild(L)],b.e]}),e})(),M=(()=>{class e{}return e.\u0275mod=F.Lb({type:e}),e.\u0275inj=F.Kb({factory:function(s){return new(s||e)},providers:[{provide:a.a,useClass:n.e,multi:!0}],imports:[[r.c,i.r,c.f,c.l,o.b,l.b,h.a,u.e,d.b,g.a,m.a,p.a,S.c,A.b,k]]}),e})()}}]);