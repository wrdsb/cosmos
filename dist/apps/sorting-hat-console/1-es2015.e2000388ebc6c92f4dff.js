(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{aJgJ:function(t,e,i){"use strict";i.r(e),i.d(e,"PeopleSetsModule",function(){return r}),i.d(e,"PeopleSetDefinitionsModule",function(){return mt}),i.d(e,"PeopleSetMembershipsModule",function(){return vt}),i.d(e,"InMemoryDataService",function(){return wt});var s=i("ofXK"),n=i("fXoL");let r=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[s.c]]}),t})();var o=i("3Pt+"),a=i("vxfF"),h=i("nLfN"),l=i("8LU1"),c=i("XNiG"),d=i("quSY"),_=i("HDdC"),p=i("D0XW"),g=i("Y7HM");function u(t){const{subscriber:e,counter:i,period:s}=t;e.next(i),this.schedule({subscriber:e,counter:i+1,period:s},s)}var m=i("eNwd"),f=(i("VRyK"),i("1G5W")),b=(i("JX91"),i("lJxs"),i("IzEk"),i("vkgz"));function v(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function w(t,e){const i=e?"":"none";v(t.style,{touchAction:e?"":"none",webkitUserDrag:e?"":"none",webkitTapHighlightColor:e?"":"transparent",userSelect:i,msUserSelect:i,webkitUserSelect:i,MozUserSelect:i})}function y(t,e){const i=t.style;i.position=e?"":"fixed",i.top=i.opacity=e?"":"0",i.left=e?"":"-999em"}function S(t){const e=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*e}function P(t,e){return t.getPropertyValue(e).split(",").map(t=>t.trim())}function D(t){const e=t.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}function E(t,e,i){const{top:s,bottom:n,left:r,right:o}=t;return i>=s&&i<=n&&e>=r&&e<=o}function R(t,e,i){t.top+=e,t.bottom=t.top+t.height,t.left+=i,t.right=t.left+t.width}function x(t,e,i,s){const{top:n,right:r,bottom:o,left:a,width:h,height:l}=t,c=h*e,d=l*e;return s>n-d&&s<o+d&&i>a-c&&i<r+c}i("eIep"),i("cH1L");class C{constructor(t,e){this._document=t,this._viewportRuler=e,this.positions=new Map}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this._viewportRuler.getViewportScrollPosition()}),t.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:D(t)})})}handleScroll(t){const e=t.target,i=this.positions.get(e);if(!i)return null;const s=e===this._document?e.documentElement:e,n=i.scrollPosition;let r,o;if(e===this._document){const t=this._viewportRuler.getViewportScrollPosition();r=t.top,o=t.left}else r=e.scrollTop,o=e.scrollLeft;const a=n.top-r,h=n.left-o;return this.positions.forEach((t,i)=>{t.clientRect&&e!==i&&s.contains(i)&&R(t.clientRect,a,h)}),n.top=r,n.left=o,{top:a,left:h}}}function I(t){const e=t.cloneNode(!0),i=e.querySelectorAll("[id]"),s=t.nodeName.toLowerCase();e.removeAttribute("id");for(let n=0;n<i.length;n++)i[n].removeAttribute("id");return"canvas"===s?M(t,e):"input"!==s&&"select"!==s&&"textarea"!==s||L(t,e),T("canvas",t,e,M),T("input, textarea, select",t,e,L),e}function T(t,e,i,s){const n=e.querySelectorAll(t);if(n.length){const e=i.querySelectorAll(t);for(let t=0;t<n.length;t++)s(n[t],e[t])}}let O=0;function L(t,e){"file"!==e.type&&(e.value=t.value),"radio"===e.type&&e.name&&(e.name=`mat-clone-${e.name}-${O++}`)}function M(t,e){const i=e.getContext("2d");if(i)try{i.drawImage(t,0,0)}catch(s){}}const j=Object(h.f)({passive:!0}),k=Object(h.f)({passive:!1});class z{constructor(t,e,i,s,n,r){this._config=e,this._document=i,this._ngZone=s,this._viewportRuler=n,this._dragDropRegistry=r,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._moveEvents=new c.a,this._pointerMoveSubscription=d.a.EMPTY,this._pointerUpSubscription=d.a.EMPTY,this._scrollSubscription=d.a.EMPTY,this._resizeSubscription=d.a.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this.dragStartDelay=0,this._disabled=!1,this.beforeStarted=new c.a,this.started=new c.a,this.released=new c.a,this.ended=new c.a,this.entered=new c.a,this.exited=new c.a,this.dropped=new c.a,this.moved=this._moveEvents,this._pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){const e=this._handles.find(e=>{const i=t.target;return!!i&&(i===e||e.contains(i))});!e||this._disabledHandles.has(e)||this.disabled||this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)},this._pointerMove=t=>{const e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging){if(Math.abs(e.x-this._pickupPositionOnPage.x)+Math.abs(e.y-this._pickupPositionOnPage.y)>=this._config.dragStartThreshold){const e=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),i=this._dropContainer;if(!e)return void this._endDragSequence(t);i&&(i.isDragging()||i.isReceiving())||(this._hasStartedDragging=!0,this._ngZone.run(()=>this._startDragSequence(t)))}return}this._boundaryElement&&(this._previewRect&&(this._previewRect.width||this._previewRect.height)||(this._previewRect=(this._preview||this._rootElement).getBoundingClientRect())),t.preventDefault();const i=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,e);else{const t=this._activeTransform;t.x=i.x-this._pickupPositionOnPage.x+this._passiveTransform.x,t.y=i.y-this._pickupPositionOnPage.y+this._passiveTransform.y,this._applyRootElementTransform(t.x,t.y),"undefined"!=typeof SVGElement&&this._rootElement instanceof SVGElement&&this._rootElement.setAttribute("transform",`translate(${t.x} ${t.y})`)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:t,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})},this._pointerUp=t=>{this._endDragSequence(t)},this.withRootElement(t),this._parentPositions=new C(i,n),r.registerDragItem(this)}get disabled(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)}set disabled(t){const e=Object(l.b)(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions(),this._handles.forEach(t=>w(t,e)))}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(t=>Object(l.d)(t)),this._handles.forEach(t=>w(t,this.disabled)),this._toggleNativeDragInteractions();const e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){const e=Object(l.d)(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),this._ngZone.runOutsideAngular(()=>{e.addEventListener("mousedown",this._pointerDown,k),e.addEventListener("touchstart",this._pointerDown,j)}),this._initialTransform=void 0,this._rootElement=e),"undefined"!=typeof SVGElement&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?Object(l.d)(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}dispose(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&V(this._rootElement),V(this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._anchor=null}isDragging(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),w(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),w(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){const t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}_sortFromLastPointerPosition(){const t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeSubscriptions(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe()}_destroyPreview(){this._preview&&V(this._preview),this._previewRef&&this._previewRef.destroy(),this._preview=this._previewRef=null}_destroyPlaceholder(){this._placeholder&&V(this._placeholder),this._placeholderRef&&this._placeholderRef.destroy(),this._placeholder=this._placeholderRef=null}_endDragSequence(t){this._dragDropRegistry.isDragging(this)&&(this._removeSubscriptions(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),this._hasStartedDragging&&(this.released.next({source:this}),this._dropContainer?(this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)})):(this._passiveTransform.x=this._activeTransform.x,this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(this._getPointerPositionOnPage(t))})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this))))}_startDragSequence(t){Z(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();const e=this._dropContainer;if(e){const t=this._rootElement,i=t.parentNode,s=this._preview=this._createPreviewElement(),n=this._placeholder=this._createPlaceholderElement(),r=this._anchor=this._anchor||this._document.createComment(""),o=this._getShadowRoot();i.insertBefore(r,t),y(t,!1),this._document.body.appendChild(i.replaceChild(n,t)),function(t,e){return e||t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement||t.body}(this._document,o).appendChild(s),this.started.next({source:this}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this)}else this.started.next({source:this}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[])}_initializeDragSequence(t,e){this._config.parentDragRef&&e.stopPropagation();const i=this.isDragging(),s=Z(e),n=!s&&0!==e.button,r=this._rootElement,o=!s&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now();if(e.target&&e.target.draggable&&"mousedown"===e.type&&e.preventDefault(),i||n||o)return;this._handles.length&&(this._rootElementTapHighlight=r.style.webkitTapHighlightColor||"",r.style.webkitTapHighlightColor="transparent"),this._hasStartedDragging=this._hasMoved=!1,this._removeSubscriptions(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scroll.subscribe(t=>{this._updateOnScroll(t)}),this._boundaryElement&&(this._boundaryRect=D(this._boundaryElement));const a=this._previewTemplate;this._pickupPositionInElement=a&&a.template&&!a.matchSize?{x:0,y:0}:this._getPointerPositionInElement(t,e);const h=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:h.x,y:h.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){y(this._rootElement,!0),this._anchor.parentNode.replaceChild(this._rootElement,this._anchor),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=void 0,this._ngZone.run(()=>{const e=this._dropContainer,i=e.getItemIndex(this),s=this._getPointerPositionOnPage(t),n=this._getDragDistance(this._getPointerPositionOnPage(t)),r=e._isOverContainer(s.x,s.y);this.ended.next({source:this,distance:n}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:n}),e.drop(this,i,this._initialIndex,this._initialContainer,r,n),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:i,y:s}){let n=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!n&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(n=this._initialContainer),n&&n!==this._dropContainer&&this._ngZone.run(()=>{this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._dropContainer=n,this._dropContainer.enter(this,t,e,n===this._initialContainer&&n.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:n,currentIndex:n.getItemIndex(this)})}),this._dropContainer._startScrollingIfNecessary(i,s),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this._preview.style.transform=A(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y)}_createPreviewElement(){const t=this._previewTemplate,e=this.previewClass,i=t?t.template:null;let s;if(i&&t){const e=t.matchSize?this._rootElement.getBoundingClientRect():null,n=t.viewContainer.createEmbeddedView(i,t.context);n.detectChanges(),s=H(n,this._document),this._previewRef=n,t.matchSize?J(s,e):s.style.transform=A(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{const t=this._rootElement;s=I(t),J(s,t.getBoundingClientRect())}return v(s.style,{pointerEvents:"none",margin:"0",position:"fixed",top:"0",left:"0",zIndex:`${this._config.zIndex||1e3}`}),w(s,!1),s.classList.add("cdk-drag-preview"),s.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(t=>s.classList.add(t)):s.classList.add(e)),s}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();const t=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._preview.style.transform=A(t.left,t.top);const e=function(t){const e=getComputedStyle(t),i=P(e,"transition-property"),s=i.find(t=>"transform"===t||"all"===t);if(!s)return 0;const n=i.indexOf(s),r=P(e,"transition-duration"),o=P(e,"transition-delay");return S(r[n])+S(o[n])}(this._preview);return 0===e?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{const i=e=>{(!e||e.target===this._preview&&"transform"===e.propertyName)&&(this._preview.removeEventListener("transitionend",i),t(),clearTimeout(s))},s=setTimeout(i,1.5*e);this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){const t=this._placeholderTemplate,e=t?t.template:null;let i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),i=H(this._placeholderRef,this._document)):i=I(this._rootElement),i.classList.add("cdk-drag-placeholder"),i}_getPointerPositionInElement(t,e){const i=this._rootElement.getBoundingClientRect(),s=t===this._rootElement?null:t,n=s?s.getBoundingClientRect():i,r=Z(e)?e.targetTouches[0]:e,o=this._getViewportScrollPosition();return{x:n.left-i.left+(r.pageX-n.left-o.left),y:n.top-i.top+(r.pageY-n.top-o.top)}}_getPointerPositionOnPage(t){const e=this._getViewportScrollPosition(),i=Z(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,s=i.pageX-e.left,n=i.pageY-e.top;if(this._ownerSVGElement){const t=this._ownerSVGElement.getScreenCTM();if(t){const e=this._ownerSVGElement.createSVGPoint();return e.x=s,e.y=n,e.matrixTransform(t.inverse())}}return{x:s,y:n}}_getConstrainedPointerPosition(t){const e=this._dropContainer?this._dropContainer.lockAxis:null;let{x:i,y:s}=this.constrainPosition?this.constrainPosition(t,this):t;if("x"===this.lockAxis||"x"===e?s=this._pickupPositionOnPage.y:"y"!==this.lockAxis&&"y"!==e||(i=this._pickupPositionOnPage.x),this._boundaryRect){const{x:t,y:e}=this._pickupPositionInElement,n=this._boundaryRect,r=this._previewRect,o=n.top+e,a=n.bottom-(r.height-e);i=N(i,n.left+t,n.right-(r.width-t)),s=N(s,o,a)}return{x:i,y:s}}_updatePointerDirectionDelta(t){const{x:e,y:i}=t,s=this._pointerDirectionDelta,n=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-n.x),o=Math.abs(i-n.y);return r>this._config.pointerDirectionChangeThreshold&&(s.x=e>n.x?1:-1,n.x=e),o>this._config.pointerDirectionChangeThreshold&&(s.y=i>n.y?1:-1,n.y=i),s}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;const t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,w(this._rootElement,t))}_removeRootElementListeners(t){t.removeEventListener("mousedown",this._pointerDown,k),t.removeEventListener("touchstart",this._pointerDown,j)}_applyRootElementTransform(t,e){const i=A(t,e);null==this._initialTransform&&(this._initialTransform=this._rootElement.style.transform||""),this._rootElement.style.transform=this._initialTransform?i+" "+this._initialTransform:i}_getDragDistance(t){const e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(0===t&&0===e||this.isDragging()||!this._boundaryElement)return;const i=this._boundaryElement.getBoundingClientRect(),s=this._rootElement.getBoundingClientRect();if(0===i.width&&0===i.height||0===s.width&&0===s.height)return;const n=i.left-s.left,r=s.right-i.right,o=i.top-s.top,a=s.bottom-i.bottom;i.width>s.width?(n>0&&(t+=n),r>0&&(t-=r)):t=0,i.height>s.height?(o>0&&(e+=o),a>0&&(e-=a)):e=0,t===this._passiveTransform.x&&e===this._passiveTransform.y||this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){const e=this.dragStartDelay;return"number"==typeof e?e:Z(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){const e=this._parentPositions.handleScroll(t);if(e){const i=t.target;this._boundaryRect&&(i===this._document||i!==this._boundaryElement&&i.contains(this._boundaryElement))&&R(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){const t=this._parentPositions.positions.get(this._document);return t?t.scrollPosition:this._viewportRuler.getViewportScrollPosition()}_getShadowRoot(){return void 0===this._cachedShadowRoot&&(this._cachedShadowRoot=Object(h.c)(this._rootElement)),this._cachedShadowRoot}}function A(t,e){return`translate3d(${Math.round(t)}px, ${Math.round(e)}px, 0)`}function N(t,e,i){return Math.max(e,Math.min(i,t))}function V(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Z(t){return"t"===t.type[0]}function H(t,e){const i=t.rootNodes;if(1===i.length&&i[0].nodeType===e.ELEMENT_NODE)return i[0];const s=e.createElement("div");return i.forEach(t=>s.appendChild(t)),s}function J(t,e){t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.transform=A(e.left,e.top)}function G(t,e){return Math.max(0,Math.min(e,t))}class W{constructor(t,e,i,s,n){this._dragDropRegistry=e,this._ngZone=s,this._viewportRuler=n,this.disabled=!1,this.sortingDisabled=!1,this.autoScrollDisabled=!1,this.autoScrollStep=2,this.enterPredicate=()=>!0,this.sortPredicate=()=>!0,this.beforeStarted=new c.a,this.entered=new c.a,this.exited=new c.a,this.dropped=new c.a,this.sorted=new c.a,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0,overlaps:!1},this._draggables=[],this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",this._viewportScrollSubscription=d.a.EMPTY,this._verticalScrollDirection=0,this._horizontalScrollDirection=0,this._stopScrollTimers=new c.a,this._cachedShadowRoot=null,this._startScrollInterval=()=>{this._stopScrolling(),function(t=0,e=p.a){return(!Object(g.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=p.a),new _.a(i=>(i.add(e.schedule(u,t,{subscriber:i,counter:0,period:t})),i))}(0,m.a).pipe(Object(f.a)(this._stopScrollTimers)).subscribe(()=>{const t=this._scrollNode,e=this.autoScrollStep;1===this._verticalScrollDirection?$(t,-e):2===this._verticalScrollDirection&&$(t,e),1===this._horizontalScrollDirection?B(t,-e):2===this._horizontalScrollDirection&&B(t,e)})},this.element=Object(l.d)(t),this._document=i,this.withScrollableParents([this.element]),e.registerDropContainer(this),this._parentPositions=new C(i,n)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,i,s){let n;this._draggingStarted(),null==s?(n=this.sortingDisabled?this._draggables.indexOf(t):-1,-1===n&&(n=this._getItemIndexFromPointerPosition(t,e,i))):n=s;const r=this._activeDraggables,o=r.indexOf(t),a=t.getPlaceholderElement();let h=r[n];if(h===t&&(h=r[n+1]),o>-1&&r.splice(o,1),h&&!this._dragDropRegistry.isDragging(h)){const e=h.getRootElement();e.parentElement.insertBefore(a,e),r.splice(n,0,t)}else if(this._shouldEnterAsFirstChild(e,i)){const e=r[0].getRootElement();e.parentNode.insertBefore(a,e),r.unshift(t)}else Object(l.d)(this.element).appendChild(a),r.push(t);a.style.transform="",this._cacheItemPositions(),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,s,n,r){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i,container:this,previousContainer:s,isPointerOverContainer:n,distance:r})}withItems(t){const e=this._draggables;return this._draggables=t,t.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(t=>t.isDragging()).every(e=>-1===t.indexOf(e))?this._reset():this._cacheItems()),this}withDirection(t){return this._direction=t,this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){return this._orientation=t,this}withScrollableParents(t){const e=Object(l.d)(this.element);return this._scrollableElements=-1===t.indexOf(e)?[e,...t]:t.slice(),this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?F("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions,e=>e.drag===t):this._draggables.indexOf(t)}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,s){if(this.sortingDisabled||!this._clientRect||!x(this._clientRect,.05,e,i))return;const n=this._itemPositions,r=this._getItemIndexFromPointerPosition(t,e,i,s);if(-1===r&&n.length>0)return;const o="horizontal"===this._orientation,a=F(n,e=>e.drag===t),h=n[r],l=h.clientRect,c=a>r?1:-1,d=this._getItemOffsetPx(n[a].clientRect,l,c),_=this._getSiblingOffsetPx(a,n,c),p=n.slice();!function(t,e,i){const s=G(e,t.length-1),n=G(i,t.length-1);if(s===n)return;const r=t[s],o=n<s?-1:1;for(let a=s;a!==n;a+=o)t[a]=t[a+o];t[n]=r}(n,a,r),this.sorted.next({previousIndex:a,currentIndex:r,container:this,item:t}),n.forEach((e,i)=>{if(p[i]===e)return;const s=e.drag===t,n=s?d:_,r=s?t.getPlaceholderElement():e.drag.getRootElement();e.offset+=n,o?(r.style.transform=`translate3d(${Math.round(e.offset)}px, 0, 0)`,R(e.clientRect,0,n)):(r.style.transform=`translate3d(0, ${Math.round(e.offset)}px, 0)`,R(e.clientRect,n,0))}),this._previousSwap.overlaps=E(l,e,i),this._previousSwap.drag=h.drag,this._previousSwap.delta=o?s.x:s.y}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let i,s=0,n=0;if(this._parentPositions.positions.forEach((r,o)=>{o!==this._document&&r.clientRect&&!i&&x(r.clientRect,.05,t,e)&&([s,n]=function(t,e,i,s){const n=U(e,s),r=q(e,i);let o=0,a=0;if(n){const e=t.scrollTop;1===n?e>0&&(o=1):t.scrollHeight-e>t.clientHeight&&(o=2)}if(r){const e=t.scrollLeft;1===r?e>0&&(a=1):t.scrollWidth-e>t.clientWidth&&(a=2)}return[o,a]}(o,r.clientRect,t,e),(s||n)&&(i=o))}),!s&&!n){const{width:r,height:o}=this._viewportRuler.getViewportSize(),a={width:r,height:o,top:0,right:r,bottom:o,left:0};s=U(a,e),n=q(a,t),i=window}!i||s===this._verticalScrollDirection&&n===this._horizontalScrollDirection&&i===this._scrollNode||(this._verticalScrollDirection=s,this._horizontalScrollDirection=n,this._scrollNode=i,(s||n)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){const t=Object(l.d)(this.element).style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._cacheItems(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){const t=Object(l.d)(this.element);this._parentPositions.cache(this._scrollableElements),this._clientRect=this._parentPositions.positions.get(t).clientRect}_cacheItemPositions(){const t="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(t=>{const e=t.getVisibleElement();return{drag:t,offset:0,clientRect:D(e)}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_reset(){this._isDragging=!1;const t=Object(l.d)(this.element).style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._activeDraggables.forEach(t=>{const e=t.getRootElement();e&&(e.style.transform="")}),this._siblings.forEach(t=>t._stopReceiving(this)),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1,this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_getSiblingOffsetPx(t,e,i){const s="horizontal"===this._orientation,n=e[t].clientRect,r=e[t+-1*i];let o=n[s?"width":"height"]*i;if(r){const t=s?"left":"top",e=s?"right":"bottom";-1===i?o-=r.clientRect[t]-n[e]:o+=n[t]-r.clientRect[e]}return o}_getItemOffsetPx(t,e,i){const s="horizontal"===this._orientation;let n=s?e.left-t.left:e.top-t.top;return-1===i&&(n+=s?e.width-t.width:e.height-t.height),n}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;const i=this._itemPositions,s="horizontal"===this._orientation;if(i[0].drag!==this._activeDraggables[0]){const n=i[i.length-1].clientRect;return s?t>=n.right:e>=n.bottom}{const n=i[0].clientRect;return s?t<=n.left:e<=n.top}}_getItemIndexFromPointerPosition(t,e,i,s){const n="horizontal"===this._orientation,r=F(this._itemPositions,({drag:r,clientRect:o},a,h)=>{if(r===t)return h.length<2;if(s){const t=n?s.x:s.y;if(r===this._previousSwap.drag&&this._previousSwap.overlaps&&t===this._previousSwap.delta)return!1}return n?e>=Math.floor(o.left)&&e<Math.floor(o.right):i>=Math.floor(o.top)&&i<Math.floor(o.bottom)});return-1!==r&&this.sortPredicate(r,t,this)?r:-1}_cacheItems(){this._activeDraggables=this._draggables.slice(),this._cacheItemPositions(),this._cacheParentPositions()}_isOverContainer(t,e){return null!=this._clientRect&&E(this._clientRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(s=>s._canReceive(t,e,i))}_canReceive(t,e,i){if(!this._clientRect||!E(this._clientRect,e,i)||!this.enterPredicate(t,this))return!1;const s=this._getShadowRoot().elementFromPoint(e,i);if(!s)return!1;const n=Object(l.d)(this.element);return s===n||n.contains(s)}_startReceiving(t,e){const i=this._activeSiblings;!i.has(t)&&e.every(t=>this.enterPredicate(t,this)||this._draggables.indexOf(t)>-1)&&(i.add(t),this._cacheParentPositions(),this._listenToScrollEvents())}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe()}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scroll.subscribe(t=>{if(this.isDragging()){const e=this._parentPositions.handleScroll(t);e&&(this._itemPositions.forEach(({clientRect:t})=>{R(t,e.top,e.left)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()}))}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){const t=Object(h.c)(Object(l.d)(this.element));this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){const t=this._activeDraggables.filter(t=>t.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}}function F(t,e){for(let i=0;i<t.length;i++)if(e(t[i],i,t))return i;return-1}function $(t,e){t===window?t.scrollBy(0,e):t.scrollTop+=e}function B(t,e){t===window?t.scrollBy(e,0):t.scrollLeft+=e}function U(t,e){const{top:i,bottom:s,height:n}=t,r=.05*n;return e>=i-r&&e<=i+r?1:e>=s-r&&e<=s+r?2:0}function q(t,e){const{left:i,right:s,width:n}=t,r=.05*n;return e>=i-r&&e<=i+r?1:e>=s-r&&e<=s+r?2:0}const K=Object(h.f)({passive:!1,capture:!0});let Y=(()=>{class t{constructor(t,e){this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=[],this._globalListeners=new Map,this._draggingPredicate=t=>t.isDragging(),this.pointerMove=new c.a,this.pointerUp=new c.a,this.scroll=new c.a,this._preventDefaultWhileDragging=t=>{this._activeDragInstances.length>0&&t.preventDefault()},this._persistentTouchmoveListener=t=>{this._activeDragInstances.length>0&&(this._activeDragInstances.some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t))},this._document=e}registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t)}registerDragItem(t){this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(()=>{this._document.addEventListener("touchmove",this._persistentTouchmoveListener,K)})}removeDropContainer(t){this._dropInstances.delete(t)}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._persistentTouchmoveListener,K)}startDragging(t,e){if(!(this._activeDragInstances.indexOf(t)>-1)&&(this._activeDragInstances.push(t),1===this._activeDragInstances.length)){const t=e.type.startsWith("touch");this._globalListeners.set(t?"touchend":"mouseup",{handler:t=>this.pointerUp.next(t),options:!0}).set("scroll",{handler:t=>this.scroll.next(t),options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:K}),t||this._globalListeners.set("mousemove",{handler:t=>this.pointerMove.next(t),options:K}),this._ngZone.runOutsideAngular(()=>{this._globalListeners.forEach((t,e)=>{this._document.addEventListener(e,t.handler,t.options)})})}}stopDragging(t){const e=this._activeDragInstances.indexOf(t);e>-1&&(this._activeDragInstances.splice(e,1),0===this._activeDragInstances.length&&this._clearGlobalListeners())}isDragging(t){return this._activeDragInstances.indexOf(t)>-1}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_clearGlobalListeners(){this._globalListeners.forEach((t,e)=>{this._document.removeEventListener(e,t.handler,t.options)}),this._globalListeners.clear()}}return t.\u0275fac=function(e){return new(e||t)(n.Wb(n.A),n.Wb(s.d))},t.\u0275prov=Object(n.Ib)({factory:function(){return new t(Object(n.Wb)(n.A),Object(n.Wb)(s.d))},token:t,providedIn:"root"}),t})();const X={dragStartThreshold:5,pointerDirectionChangeThreshold:5};let Q=(()=>{class t{constructor(t,e,i,s){this._document=t,this._ngZone=e,this._viewportRuler=i,this._dragDropRegistry=s}createDrag(t,e=X){return new z(t,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)}createDropList(t){return new W(t,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)}}return t.\u0275fac=function(e){return new(e||t)(n.Wb(s.d),n.Wb(n.A),n.Wb(a.e),n.Wb(Y))},t.\u0275prov=Object(n.Ib)({factory:function(){return new t(Object(n.Wb)(s.d),Object(n.Wb)(n.A),Object(n.Wb)(a.e),Object(n.Wb)(Y))},token:t,providedIn:"root"}),t})(),tt=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},providers:[Q],imports:[a.b]}),t})();var et=i("tyNb"),it=i("z6cu"),st=i("UXun"),nt=i("JIr8"),rt=i("tk/3"),ot=i("j1NB");let at=(()=>{class t{constructor(t,e){this.http=t,this.messageService=e,this.apiURL="api/definitions",this.definitions$=this.http.get(this.apiURL).pipe(Object(b.a)(t=>console.log("getDefinitions: ",JSON.stringify(t))),Object(st.a)(),Object(nt.a)(this.handleError))}createDefinition(t){}updateDefinition(t){}deleteDefinition(t){}handleError(t){let e;return e=t.error instanceof ErrorEvent?`An error occurred: ${t.error.message}`:`Backend returned code ${t.status}: ${t.body.error}`,console.error(t),Object(it.a)(e)}log(t){this.messageService.add(`PeopleSetDefinitionService: ${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.Wb(rt.b),n.Wb(ot.b))},t.\u0275prov=n.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ht=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-people-set-definitions-search"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Sb(0,"p"),n.tc(1,"definitions-search works!"),n.Rb())},styles:[""]}),t})();var lt=i("LRne");function ct(t,e){if(1&t&&(n.Sb(0,"li"),n.tc(1),n.Rb()),2&t){const t=e.$implicit;n.Cb(1),n.vc(" ",t.name," ")}}function dt(t,e){if(1&t&&(n.Sb(0,"div"),n.Sb(1,"ul"),n.rc(2,ct,2,1,"li",1),n.Rb(),n.Rb()),2&t){const t=e.ngIf;n.Cb(2),n.hc("ngForOf",t)}}let _t=(()=>{class t{constructor(t,e,i){this.route=t,this.router=e,this.peopleSetDefinitionsService=i,this.pageTitle="People Set Definitions",this.definitions$=this.peopleSetDefinitionsService.definitions$.pipe(Object(nt.a)(t=>(this.errorMessage=t,Object(lt.a)(null))))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(et.a),n.Mb(et.b),n.Mb(at))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-people-set-definitions-list"]],decls:4,vars:4,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.Sb(0,"h1"),n.tc(1),n.Rb(),n.rc(2,dt,3,1,"div",0),n.dc(3,"async")),2&t&&(n.Cb(1),n.uc(e.pageTitle),n.Cb(1),n.hc("ngIf",n.ec(3,2,e.definitions$)))},directives:[s.l,s.k],pipes:[s.b],styles:[""],changeDetection:0}),t})(),pt=(()=>{class t{constructor(t){this.peopleSetDefinitionsService=t,this.pageTitle="People Set Definitions"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(at))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-people-set-definitions-layout"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Nb(0,"app-people-set-definitions-search"),n.Nb(1,"app-people-set-definitions-list"))},directives:[ht,_t],styles:[""]}),t})();const gt=[{path:":id",component:pt},{path:"",component:pt}];let ut=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[et.e.forChild(gt)],et.e]}),t})(),mt=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[s.c,o.b,tt,ut]]}),t})();const ft=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-people-set-memberships-list"]],decls:2,vars:0,template:function(t,e){1&t&&(n.Sb(0,"p"),n.tc(1,"people-set-memberships-list works!"),n.Rb())},styles:[""]}),t})()}];let bt=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[et.e.forChild(ft)],et.e]}),t})(),vt=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[s.c,o.b,tt,bt]]}),t})(),wt=(()=>{class t{createDb(){return{definitions:[{created_at:"2020-03-06T00:00:00.000Z",updated_at:"2020-03-06T00:00:00.000Z",deleted_at:"",deleted:!1,id:"planning-website-editors",atomic:!1,type:"manual",name:"Planning Website Editors",short_name:"Planning Editors",aliases:[],categories:["website-editors"],tags:["websites","roles","editors"],definition:[["emily_bumbaco@wrdsb.ca","sarah_galliher@wrdsb.ca","carrie_hamilton@wrdsb.ca","andrea_kean@wrdsb.ca","lauren_agar@wrdsb.ca","shelby_fried@wrdsb.ca"]],constituent_sets:["emily_bumbaco@wrdsb.ca","sarah_galliher@wrdsb.ca","carrie_hamilton@wrdsb.ca","andrea_kean@wrdsb.ca","lauren_agar@wrdsb.ca","shelby_fried@wrdsb.ca"]},{created_at:"2020-02-13T13:59:22.967Z",updated_at:"2020-02-13T13:59:22.967Z",deleted_at:"",deleted:!1,id:"JC-8128EL",atomic:!0,type:"ipps-job",name:"LTO - Elem EL",short_name:"LTO - Elem EL",aliases:[],categories:["IPPS","ipps-jobs","job-codes"],tags:[],constituent_sets:["JC-8128EL"]},{created_at:"2020-02-03T18:44:15.171Z",updated_at:"2020-02-13T13:56:21.833Z",deleted_at:"",deleted:!1,id:"GC-PRINSUPE",atomic:!0,type:"ipps-group",name:"Principal/VP Supply Secondary",short_name:"Principal/VP Supply Secondary",aliases:["OCC-ADMIN"],categories:["IPPS","ipps-groups","group-codes"],tags:[],constituent_sets:["GC-PRINSUPE"]},{created_at:"2020-02-03T15:14:12.369Z",updated_at:"2020-02-13T14:00:28.712Z",deleted_at:"",deleted:!1,id:"elementary-head-secretaries-job-codes",atomic:!1,type:"igor-legacy",name:"elementary-head-secretaries-job-codes",short_name:"elementary-head-secretaries-job-codes",aliases:[],categories:[],tags:[],definition:[["JC-1533","JC-1500"]],constituent_sets:["JC-1533","JC-1500"]},{created_at:"2020-02-03T15:14:12.369Z",updated_at:"2020-02-13T14:00:28.712Z",deleted_at:"",deleted:!1,id:"elementary-c-secretaries-job-codes",atomic:!1,type:"igor-legacy",name:"elementary-c-secretaries-job-codes",short_name:"elementary-c-secretaries-job-codes",aliases:[],categories:[],tags:[],definition:[["JC-1340","JC-6123LTHR"]],constituent_sets:["JC-1340","JC-6123LTHR"]}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);