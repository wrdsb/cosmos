!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function t(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{s8kx:function(n,s,o){"use strict";o.r(s),o.d(s,"ReleasesModule",(function(){return p}));var i,c,r,l,a=o("2kYt"),b=o("sEIs"),u=o("Yzzg"),f=o("BnzL"),d=o("EM62"),h=((i=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Hb({type:i,selectors:[["cosmos-releases-home"]],decls:48,vars:0,consts:[[1,"release-summary"],["href","https://github.com/wrdsb/cosmos/milestone/43?closed=1"],["href","https://github.com/wrdsb/cosmos/milestone/40?closed=1"],["href","https://github.com/wrdsb/cosmos/milestone/39?closed=1"]],template:function(e,n){1&e&&(d.Tb(0,"div",0),d.Tb(1,"h2"),d.vc(2,"Release 2038 Highlights"),d.Sb(),d.Tb(3,"ul"),d.Tb(4,"li"),d.vc(5,"No user-facing changes in this release. Only backend work."),d.Sb(),d.Sb(),d.vc(6," ("),d.Tb(7,"a",1),d.vc(8,"Full details for Release 2038"),d.Sb(),d.vc(9,")\n"),d.Sb(),d.Tb(10,"div",0),d.Tb(11,"h2"),d.vc(12,"Release 2037 Highlights"),d.Sb(),d.Tb(13,"ul"),d.Tb(14,"li"),d.vc(15,"Client-side caching of data fetched from IGOR. This should result in much faster load times when fetching data from backend systems."),d.Sb(),d.Tb(16,"li"),d.vc(17,'Viewfinder is now a Progressive Web App (PWA), meaning it can be "installed" on client devices.'),d.Sb(),d.Tb(18,"li"),d.vc(19,"New, stable URL for Viewfinder console"),d.Sb(),d.Tb(20,"li"),d.vc(21,"Cleaner handling of verion updates on the client side. No more Ctrl+F5 all the time."),d.Sb(),d.Tb(22,"li"),d.vc(23,"Fixed 404 error for all routes in Viewfinder console"),d.Sb(),d.Sb(),d.vc(24," ("),d.Tb(25,"a",2),d.vc(26,"Full details for Release 2037"),d.Sb(),d.vc(27,")\n"),d.Sb(),d.Tb(28,"div",0),d.Tb(29,"h2"),d.vc(30,"Release 2036 Highlights"),d.Sb(),d.Tb(31,"ul"),d.Tb(32,"li"),d.vc(33,"Better feedback from Ping functions while they're running."),d.Sb(),d.Tb(34,"li"),d.vc(35,"Better error messages from Ping functions when there's an issue. This should help us trouble shoot authentication issues when accessing backend systems."),d.Sb(),d.Tb(36,"li"),d.vc(37,"Created new menu in footer and added link to Pings."),d.Sb(),d.Tb(38,"li"),d.vc(39,"Added 'Logout' link to Account menu."),d.Sb(),d.Tb(40,"li"),d.vc(41,"Added 'Profile' link to Account menu."),d.Sb(),d.Tb(42,"li"),d.vc(43,"Added release number to footer."),d.Sb(),d.Sb(),d.vc(44," ("),d.Tb(45,"a",3),d.vc(46,"Full details for Release 2036"),d.Sb(),d.vc(47,")\n"),d.Sb())},styles:["a[_ngcontent-%COMP%]{color:#fff}.release-summary[_ngcontent-%COMP%]{padding:50px}"]}),i),m=[{path:"release",component:(c=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}(),c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=d.Hb({type:c,selectors:[["cosmos-release-info"]],decls:2,vars:0,template:function(e,n){1&e&&(d.Tb(0,"p"),d.vc(1,"release-info works!"),d.Sb())},styles:[""]}),c),data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[u.d,f.a]},{path:"",component:h,data:{roles:["cosmos-superuser","cosmos-user-its"]},canActivate:[u.d,f.a]}],v=((l=function n(){e(this,n)}).\u0275mod=d.Lb({type:l}),l.\u0275inj=d.Kb({factory:function(e){return new(e||l)},imports:[[b.e.forChild(m)],b.e]}),l),p=((r=function n(){e(this,n)}).\u0275mod=d.Lb({type:r}),r.\u0275inj=d.Kb({factory:function(e){return new(e||r)},imports:[[a.c,v]]}),r)}}])}();