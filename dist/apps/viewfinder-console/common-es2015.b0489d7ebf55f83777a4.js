(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{y0KH:function(e,t,s){"use strict";s.d(t,"a",function(){return g});var r=s("tk/3"),o=s("2Vo4"),a=s("vkgz"),i=s("un/a"),n=s("JIr8"),p=s("t5bl"),u=s("fXoL");let g=(()=>{class e{constructor(e){this.http=e,this.apiTargetAppName="IGOR",this.serviceName=`${this.apiTargetAppName} Service`,this.pingURL="https://wrdsb-igor3.azurewebsites.net/api/ping",this.googleGroupsCommandURL="https://wrdsb-igor3.azurewebsites.net/api/google-group-command",this.googleGroupsQueryURL="https://wrdsb-igor3.azurewebsites.net/api/group-query",this.googleGroupsSearchURL="",this.usersURL="",this.pingState=new o.a({header:{status:0,message:"",chatter:"",timestamp:"",authenticated:!1,authorized:!1,userName:"",userEmail:"",userRoles:[]},payload:{status:0,message:"",chatter:"",timestamp:""}}),this.pingRequestState=new o.a({status:p.a.UNKNOWN,response:"response",error:"error"}),this.pingState$=this.pingState.asObservable(),this.pingRequestState$=this.pingRequestState.asObservable(),this.listGroupsResponse=new o.a({payload:[{name:"Loading...",email:"Loading..."}]}),this.listGroupsRequestState=new o.a({status:p.a.UNKNOWN,response:"response",error:"error"}),this.listGroupsResponse$=this.listGroupsResponse.asObservable(),this.listGroupsRequestState$=this.listGroupsRequestState.asObservable(),this.httpOptions={headers:new r.d({"Content-Type":"application/json"})}}doPing(){console.log(`${this.serviceName}: doPing()`),console.log(`Pinging ${this.apiTargetAppName}...`),this.pingRequestState.next({status:p.a.LOADING,response:"unknown",error:"unknown"}),this.http.get(this.pingURL,this.httpOptions).pipe(Object(a.a)(e=>console.log("ping request")),Object(i.a)(2),Object(n.a)(e=>{throw console.log("catch ping request error"),this.pingRequestState.next({status:p.a.ERROR,response:"",error:e}),this.pingState.next({header:{status:200,message:"error",chatter:"error",timestamp:"timestamp"},payload:{status:200,message:"error",chatter:"error",timestamp:"timestamp"}}),`error pinging ${this.apiTargetAppName}`}),Object(a.a)(e=>{this.pingRequestState.next({status:p.a.SUCCESS,response:"success",error:""}),console.log(`success pinging ${this.apiTargetAppName}`)})).subscribe(e=>this.pingState.next(e))}listGroups(e){console.log("IGOR: list groups"),this.listGroupsRequestState.next({status:p.a.LOADING,response:"unknown",error:"unknown"});let t={headers:new r.d({"Content-Type":"application/json"}),params:(new r.e).set("operation","list").set("payload",e)};this.http.get(this.googleGroupsQueryURL,t).pipe(Object(a.a)(e=>console.log("tap")),Object(i.a)(2),Object(n.a)(e=>{throw console.log("catch error"),this.listGroupsRequestState.next({status:p.a.ERROR,response:"",error:e}),this.listGroupsResponse.next({payload:[]}),"error listing groups"}),Object(a.a)(e=>{this.listGroupsRequestState.next({status:p.a.SUCCESS,response:"success",error:""}),console.log("success listing groups")})).subscribe(e=>this.listGroupsResponse.next(e))}}return e.\u0275fac=function(t){return new(t||e)(u.Yb(r.b))},e.\u0275prov=u.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);