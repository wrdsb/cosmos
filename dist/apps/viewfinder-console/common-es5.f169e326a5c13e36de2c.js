!function(){function t(e,n,s){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(s){var o=Object.getOwnPropertyDescriptor(s,e);return o.get?o.get.call(n):o.value}})(e,n,s||e)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Jo0":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var s,r=n("vobO"),i=n("C05f"),u=n("8j5Y"),c=n("bl/x"),p=n("4e/d"),l=n("8bJt"),h=n("EM62"),f=((s=function(){function t(e){o(this,t),this.http=e,this.pingURL="https://wrdsb-igor3.azurewebsites.net/api/ping",this.googleGroupsCommandURL="https://wrdsb-igor3.azurewebsites.net/api/google-group-command",this.googleGroupsQueryURL="https://wrdsb-igor3.azurewebsites.net/api/group-query",this.googleGroupsSearchURL="",this.usersURL="",this.pingState=new i.a({payload:{message:"",chatter:"",status:0,timestamp:""}}),this.pingRequestState=new i.a({status:l.a.UNKNOWN,response:"response",error:"error"}),this.pingState$=this.pingState.asObservable(),this.pingRequestState$=this.pingRequestState.asObservable(),this.listGroupsResponse=new i.a({payload:[{name:"Loading...",email:"Loading..."}]}),this.listGroupsRequestState=new i.a({status:l.a.UNKNOWN,response:"response",error:"error"}),this.listGroupsResponse$=this.listGroupsResponse.asObservable(),this.listGroupsRequestState$=this.listGroupsRequestState.asObservable(),this.httpOptions={headers:new r.e({"Content-Type":"application/json"})}}return a(t,[{key:"doPing",value:function(){var t=this;console.log("Pinging IGOR..."),this.pingRequestState.next({status:l.a.LOADING,response:"unknown",error:"unknown"}),this.http.get(this.pingURL,this.httpOptions).pipe(Object(u.a)((function(t){return console.log("tap")})),Object(c.a)(2),Object(p.a)((function(e){throw console.log("catch error"),t.pingRequestState.next({status:l.a.ERROR,response:"",error:e}),t.pingState.next({payload:{message:"error",chatter:"error",status:200,timestamp:"timestamp"}}),"error pinging IGOR"})),Object(u.a)((function(e){t.pingRequestState.next({status:l.a.SUCCESS,response:"success",error:""}),console.log("success pinging IGOR")}))).subscribe((function(e){return t.pingState.next(e)}))}},{key:"listGroups",value:function(t){var e=this;console.log("IGOR: list groups"),this.listGroupsRequestState.next({status:l.a.LOADING,response:"unknown",error:"unknown"});var n={headers:new r.e({"Content-Type":"application/json"}),params:(new r.f).set("operation","list").set("payload",t)};this.http.get(this.googleGroupsQueryURL,n).pipe(Object(u.a)((function(t){return console.log("tap")})),Object(c.a)(2),Object(p.a)((function(t){throw console.log("catch error"),e.listGroupsRequestState.next({status:l.a.ERROR,response:"",error:t}),e.listGroupsResponse.next({payload:[]}),"error listing groups"})),Object(u.a)((function(t){e.listGroupsRequestState.next({status:l.a.SUCCESS,response:"success",error:""}),console.log("success listing groups")}))).subscribe((function(t){return e.listGroupsResponse.next(t)}))}}]),t}()).\u0275fac=function(t){return new(t||s)(h.Xb(r.b))},s.\u0275prov=h.Jb({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},"8bJt":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s=function(t){return t.UNKNOWN="UNKNOWN",t.LOADING="LOADING",t.SUCCESS="SUCCESS",t.ERROR="ERROR",t}({})},Nbsh:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var s,r=n("vobO"),i=n("C05f"),u=n("8j5Y"),c=n("bl/x"),p=n("4e/d"),l=n("8bJt"),h=n("EM62"),f=((s=function(){function t(e){o(this,t),this.http=e,this.pingURL="https://wrdsb-codex.azurewebsites.net/api/ping",this.searchURL="https://wrdsb-codex.azurewebsites.net/api/igor-groups-groups-search",this.pingState=new i.a({payload:{message:"",chatter:"",status:0,timestamp:""}}),this.pingRequestState=new i.a({status:l.a.UNKNOWN,response:"response",error:"error"}),this.pingState$=this.pingState.asObservable(),this.pingRequestState$=this.pingRequestState.asObservable(),this.httpOptions={headers:new r.e({"Content-Type":"application/json"})}}return a(t,[{key:"doPing",value:function(){var t=this;console.log("Pinging Codex..."),this.pingRequestState.next({status:l.a.LOADING,response:"unknown",error:"unknown"}),this.http.get(this.pingURL,this.httpOptions).pipe(Object(u.a)((function(t){return console.log("tap")})),Object(c.a)(2),Object(p.a)((function(e){throw console.log("catch error"),t.pingRequestState.next({status:l.a.ERROR,response:"",error:e}),t.pingState.next({payload:{message:"error",chatter:"error",status:200,timestamp:"timestamp"}}),"error pinging Codex"})),Object(u.a)((function(e){t.pingRequestState.next({status:l.a.SUCCESS,response:"success",error:""}),console.log("success pinging Codex")}))).subscribe((function(e){return t.pingState.next(e)}))}},{key:"search",value:function(){return console.log("search codex"),this.httpOptions={headers:new r.e({"Content-Type":"application/json"})},this.http.post(this.searchURL,{payload:{}},this.httpOptions)}}]),t}()).\u0275fac=function(t){return new(t||s)(h.Xb(r.b))},s.\u0275prov=h.Jb({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},"bl/x":function(s,i,u){"use strict";u.d(i,"a",(function(){return p}));var c=u("5uGe");function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return function(e){return e.lift(new l(t,e))}}var l=function(){function t(e,n){o(this,t),this.count=e,this.source=n}return a(t,[{key:"call",value:function(t,e){return e.subscribe(new h(t,this.count,this.source))}}]),t}(),h=function(s){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(u,s);var i=n(u);function u(t,e,n){var s;return o(this,u),(s=i.call(this,t)).count=e,s.source=n,s}return a(u,[{key:"error",value:function(e){if(!this.isStopped){var n=this.source,s=this.count;if(0===s)return t(r(u.prototype),"error",this).call(this,e);s>-1&&(this.count=s-1),n.subscribe(this._unsubscribeAndRecycle())}}}]),u}(c.a)}}])}();