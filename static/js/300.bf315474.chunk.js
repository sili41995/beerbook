/*! For license information please see 300.bf315474.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbeerbook=self.webpackChunkbeerbook||[]).push([[300],{2661:function(e,t,n){n.d(t,{Z:function(){return c}});var r,o=n(168),i={ErrorText:n(5706).Z.p(r||(r=(0,o.Z)(["\n  font-weight: 700;\n  color: red;\n"])))},s=n(184),u=i.ErrorText,c=function(e){var t=e.error;return(0,s.jsx)(u,{children:t})}},1300:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r,o=n(2791),i=n(5218),s=n(4164),u=n(168),c=n(5706),a=c.Z.button(r||(r=(0,u.Z)(["\n  width: 200px;\n  height: 80px;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n"]))),l=n(5861),d=n(3433),f=n(4687),p=n.n(f),v=n(4942);function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=n(9439),b=n(1413),x=["enabled","anonymousActionType","store"],y=["connection"],S=new Map,j=function(e){var t=S.get(e);return t?Object.fromEntries(Object.entries(t.stores).map((function(e){var t=(0,g.Z)(e,2);return[t[0],t[1].getState()]}))):{}},m=function(e,t,n){if(void 0===e)return{type:"untracked",connection:t.connect(n)};var r=S.get(n.name);if(r)return(0,b.Z)({type:"tracked",store:e},r);var o={connection:t.connect(n),stores:{}};return S.set(n.name,o),(0,b.Z)({type:"tracked",store:e},o)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n,r,o){var i,s=t.enabled,u=t.anonymousActionType,c=t.store,a=h(t,x);try{i=(null==s||s)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(D){}if(!i)return s&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(n,r,o);var l=m(c,i,a),d=l.connection,f=h(l,y),p=!0;o.setState=function(e,t,i){var s=n(e,t);if(!p)return s;var l=void 0===i?{type:u||"anonymous"}:"string"===typeof i?{type:i}:i;return void 0===c?(null==d||d.send(l,r()),s):(null==d||d.send((0,b.Z)((0,b.Z)({},l),{},{type:"".concat(c,"/").concat(l.type)}),(0,b.Z)((0,b.Z)({},j(a.name)),{},(0,v.Z)({},c,o.getState()))),s)};var S=function(){var e=p;p=!1,n.apply(void 0,arguments),p=e},w=e(o.setState,r,o);if("untracked"===f.type?null==d||d.init(w):(f.stores[f.store]=o,null==d||d.init(Object.fromEntries(Object.entries(f.stores).map((function(e){var t=(0,g.Z)(e,2),n=t[0],r=t[1];return[n,n===f.store?w:r.getState()]}))))),o.dispatchFromDevtools&&"function"===typeof o.dispatch){var Z=!1,O=o.dispatch;o.dispatch=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"__setState"!==t[0].type||Z||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),Z=!0),O.apply(void 0,t)}}return d.subscribe((function(e){var t;switch(e.type){case"ACTION":return"string"!==typeof e.payload?void console.error("[zustand devtools middleware] Unsupported action format"):E(e.payload,(function(e){if("__setState"!==e.type)o.dispatchFromDevtools&&"function"===typeof o.dispatch&&o.dispatch(e);else{if(void 0===c)return void S(e.state);1!==Object.keys(e.state).length&&console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');var t=e.state[c];if(void 0===t||null===t)return;JSON.stringify(o.getState())!==JSON.stringify(t)&&S(t)}}));case"DISPATCH":switch(e.payload.type){case"RESET":return S(w),void 0===c?null==d?void 0:d.init(o.getState()):null==d?void 0:d.init(j(a.name));case"COMMIT":return void 0===c?void(null==d||d.init(o.getState())):null==d?void 0:d.init(j(a.name));case"ROLLBACK":return E(e.state,(function(e){if(void 0===c)return S(e),void(null==d||d.init(o.getState()));S(e[c]),null==d||d.init(j(a.name))}));case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return E(e.state,(function(e){void 0!==c?JSON.stringify(o.getState())!==JSON.stringify(e[c])&&S(e[c]):S(e)}));case"IMPORT_STATE":var n=e.payload.nextLiftedState,r=null==(t=n.computedStates.slice(-1)[0])?void 0:t.state;if(!r)return;return S(void 0===c?r:r[c]),void(null==d||d.send(null,n));case"PAUSE_RECORDING":return p=!p}return}})),w}},E=function(e,t){var n;try{n=JSON.parse(e)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}void 0!==n&&t(n)};var Z=function(e){var t,n=new Set,r=function(e,r){var o="function"===typeof e?e(t):e;if(!Object.is(o,t)){var i=t;t=(null!=r?r:"object"!==typeof o)?o:Object.assign({},t,o),n.forEach((function(e){return e(t,i)}))}},o=function(){return t},i={setState:r,getState:o,subscribe:function(e){return n.add(e),function(){return n.delete(e)}},destroy:function(){console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i},O=function(e){return e?Z(e):Z},D=n(327).useSyncExternalStoreWithSelector;var T,k,_,I,P,R,C=function(e){"function"!==typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");var t="function"===typeof e?O(e):e,n=function(e,n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getState,n=arguments.length>2?arguments[2]:void 0,r=D(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r}(t,e,n)};return Object.assign(n,t),n},A=function(e){return e?C(e):C},N=n(5790),M=n(3242),F=A(w((function(e,t){return{recipes:[],recipesIdToDelete:[],status:"idle",error:null,page:1,lastPage:!1,incrementPage:function(){e({page:t().page+1})},deleteRecipes:function(){var n=t().recipesIdToDelete,r=t().recipes;e({recipes:(0,d.Z)(r.filter((function(e){var t=e.id;return!n.includes(t)}))),recipesIdToDelete:[]})},addRecipeIdToDeleteCollection:function(n){if(t().recipesIdToDelete.includes(n))e({recipesIdToDelete:(0,d.Z)(t().recipesIdToDelete.filter((function(e){return e!==n})))});else{var r=t().recipes.find((function(e){return e.id===n})).id;e({recipesIdToDelete:[].concat((0,d.Z)(t().recipesIdToDelete),[r])})}},fetchRecipes:function(){var n=(0,l.Z)(p().mark((function n(){var r,o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({status:M.D.pending,error:null}),n.prev=1,n.next=4,fetch("".concat(N.Z,"?page=").concat(t().page));case 4:if((r=n.sent).ok){n.next=7;break}throw new Error("Failed to loading! Please, try again!");case 7:return n.next=9,r.json();case 9:if((o=n.sent).length){n.next=13;break}return e({lastPage:!0,status:M.D.resolved}),n.abrupt("return");case 13:e({recipes:o,status:M.D.resolved}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),e({error:n.t0.message,status:M.D.rejected});case 19:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(){return n.apply(this,arguments)}}()}}))),J=F,U=function(e){return e.fetchRecipes},V=function(e){return e.recipes},z=function(e){return e.status},L=function(e){return e.incrementPage},W=function(e){return e.error},q=function(e){return e.addRecipeIdToDeleteCollection},B=function(e){return e.recipesIdToDelete},H=function(e){return e.deleteRecipes},X=function(e){return e.lastPage},G=n(184),K=function(){var e=J(H);return(0,s.createPortal)((0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(a,{type:"button",onClick:function(){e(),i.ZP.success("Recipes have been deleted")},children:"Delete"}),(0,G.jsx)(i.x7,{})]}),document.querySelector("#button-root"))},Q=n(2661),Y=n(4044),$=n(7689),ee=c.Z.article(T||(T=(0,u.Z)(["\n  border: 1px solid black;\n  display: flex;\n  padding: 12px;\n  border-radius: 10px;\n  gap: 20px;\n  &:hover,\n  &:focus {\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  }\n"]))),te=c.Z.img(k||(k=(0,u.Z)(["\n  width: 200px;\n"]))),ne=c.Z.span(_||(_=(0,u.Z)(["\n  font-weight: 700;\n"]))),re=c.Z.p(I||(I=(0,u.Z)(["\n  color: red;\n"]))),oe=n(3922),ie=function(e){var t=e.recipe,n=t.name,r=t.description,o=t.image_url,i=t.abv,s=t.attenuation_level,u=t.brewers_tips,c=t.contributed_by,a=o||oe;return(0,G.jsxs)(ee,{children:[(0,G.jsx)(te,{src:"".concat(a),alt:"bottle of beer"}),(0,G.jsxs)("div",{children:[(0,G.jsx)("h2",{children:n}),(0,G.jsxs)("p",{children:[(0,G.jsx)(ne,{children:"Description:"})," ",r]}),(0,G.jsxs)("p",{children:[(0,G.jsx)(ne,{children:"abv:"})," ",i,"%"]}),(0,G.jsxs)("p",{children:[(0,G.jsx)(ne,{children:"Attenuation level:"})," ",s]}),(0,G.jsxs)("p",{children:[(0,G.jsx)(ne,{children:"Brewers tips:"})," ",u]}),(0,G.jsxs)("p",{children:[(0,G.jsx)(ne,{children:"Contributed by:"})," ",c]}),(0,G.jsx)(re,{children:"*To move a card to the deletion queue - right-click on a group of cards and confirm deletion"})]})]})},se=n(1087),ue=c.Z.ul(P||(P=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  position: relative;\n"]))),ce=c.Z.li(R||(R=(0,u.Z)(["\n  width: 100%;\n  & a {\n    text-decoration: none;\n    display: block;\n    color: inherit;\n  }\n"]))),ae=function(e){var t=e.recipes,n=e.link,r=(0,o.useState)(0),s=(0,g.Z)(r,2),u=s[0],c=s[1],a=(0,o.useState)(5),l=(0,g.Z)(a,1)[0],d=(0,o.useState)([]),f=(0,g.Z)(d,2),p=f[0],v=f[1],h=(0,o.useState)(!1),b=(0,g.Z)(h,2),x=b[0],y=b[1],S=(0,$.TH)(),j=(0,o.useRef)(),m=J(q),w=J(B),E=function(e,t){e.preventDefault(),m(t),w.includes(t)?i.ZP.error("Recipe remove from delete list"):i.ZP.success("Recipe add to delete list")};return(0,o.useEffect)((function(){!p.length&&x&&c((function(e){return e-l}))}),[p,l,x]),(0,o.useEffect)((function(){v(t.filter((function(e,t){return t>=u&&t<=u+4})))}),[t,u]),(0,o.useEffect)((function(){if(!x){var e=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var r,o;if((null===(r=p[p.length-1])||void 0===r?void 0:r.id)===t[t.length-1].id)return n.unobserve(e.target),void y(!0);window.scrollTo(0,0),c((function(e){return e+l})),console.log(null===(o=p[p.length-1])||void 0===o?void 0:o.id),console.log(t[t.length-1].id)}}))}),{root:null,rootMargin:"0px"}),n=j.current;return n&&e.observe(n),function(){n&&e.unobserve(n)}}}),[t,p,u,l,x]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ue,{children:p.map((function(e){return(0,G.jsx)(ce,{onContextMenu:function(t){E(t,e.id)},children:(0,G.jsx)(se.rU,{to:"".concat(n).concat(e.id),state:{from:S},children:(0,G.jsx)(ie,{recipe:e})})},e.id)}))}),(0,G.jsx)("div",{ref:j})]})},le=function(e){var t=e.link,n=J(V).filter((function(e,t){return t>=0&&t<=14}));return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ae,{recipes:n,link:t}),(0,G.jsx)(i.x7,{})]})},de=function(e){var t=e.link,n=void 0===t?"":t,r=J(B),s=J(U),u=J(V),c=J(z),a=J(L),l=J(W),d=J(X);return(0,o.useEffect)((function(){d&&i.ZP.error("We're sorry, but you've reached the last page.")}),[d]),(0,o.useEffect)((function(){u.length||c!==M.D.resolved||d||a()}),[a,d,u,c]),(0,o.useEffect)((function(){u.length||s()}),[s,u]),(0,G.jsxs)(G.Fragment,{children:[c===M.D.resolved&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(le,{recipes:u,link:n}),!!r.length&&(0,G.jsx)(K,{})]}),c===M.D.rejected&&(0,G.jsx)(Q.Z,{error:l}),c===M.D.pending&&(0,G.jsx)(Y.Z,{}),d&&(0,G.jsx)(i.x7,{})]})}},5790:function(e,t){t.Z="https://api.punkapi.com/v2/beers"},3242:function(e,t,n){n.d(t,{D:function(){return r}});var r={idle:"idle",pending:"pending",resolved:"resolved",rejected:"rejected"}},1561:function(e,t,n){var r=n(2791);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,s=r.useEffect,u=r.useLayoutEffect,c=r.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return u((function(){o.value=n,o.getSnapshot=t,a(o)&&l({inst:o})}),[e,n,t]),s((function(){return a(o)&&l({inst:o}),e((function(){a(o)&&l({inst:o})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},7595:function(e,t,n){var r=n(2791),o=n(7248);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},s=o.useSyncExternalStore,u=r.useRef,c=r.useEffect,a=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=u(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=a((function(){function e(e){if(!c){if(c=!0,s=e,e=r(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return u=t}return u=e}if(t=u,i(s,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(s=e,u=n)}var s,u,c=!1,a=void 0===n?null:n;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]}),[t,n,r,o]);var p=s(e,d[0],d[1]);return c((function(){f.hasValue=!0,f.value=p}),[p]),l(p),p}},7248:function(e,t,n){e.exports=n(1561)},327:function(e,t,n){e.exports=n(7595)},3922:function(e,t,n){e.exports=n.p+"static/media/default-recipe-image.b4c105cdb05c67b429e6.png"}}]);
//# sourceMappingURL=300.bf315474.chunk.js.map