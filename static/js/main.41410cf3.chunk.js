(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMakeAndWithStyles=t.TssCacheProvider=t.getTssDefaultEmotionCache=t.GlobalStyles=t.keyframes=t.createWithStyles=t.createMakeStyles=t.useCssAndCx=void 0;var n=r(233);Object.defineProperty(t,"useCssAndCx",{enumerable:!0,get:function(){return n.useCssAndCx}});var o=r(237);Object.defineProperty(t,"createMakeStyles",{enumerable:!0,get:function(){return o.createMakeStyles}});var a=r(471);Object.defineProperty(t,"createWithStyles",{enumerable:!0,get:function(){return a.createWithStyles}});var c=r(50);Object.defineProperty(t,"keyframes",{enumerable:!0,get:function(){return c.keyframes}});var s=r(476);Object.defineProperty(t,"GlobalStyles",{enumerable:!0,get:function(){return s.GlobalStyles}});var i=r(236);Object.defineProperty(t,"getTssDefaultEmotionCache",{enumerable:!0,get:function(){return i.getTssDefaultEmotionCache}}),Object.defineProperty(t,"TssCacheProvider",{enumerable:!0,get:function(){return i.TssCacheProvider}}),t.createMakeAndWithStyles=function(e){return Object.assign(Object.assign({},(0,o.createMakeStyles)(e)),(0,a.createWithStyles)(e))}},233:function(e,t,r){"use strict";var n=r(154);Object.defineProperty(t,"__esModule",{value:!0}),t.useCssAndCx=t.createCssAndCx=void 0,r(453);var o=r(454),a=r(458),c=r(51),s=r(42),i=r(461),l=r(236),u=r(467),d="ref";t.createCssAndCx=function(){function e(e,t,r){var n=[],o=(0,s.getRegisteredStyles)(e,n,r);return n.length<2?r:o+t(n)}return{createCssAndCx:function(t){var r=t.cache,o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a=void 0;if(1===t.length){var i=t,l=n(i,1),b=l[0];if(b instanceof Object&&d in b){var h=b.ref;if("string"===typeof h||void 0===h){a=h;var v=Object.assign({},b);delete v.ref,t=[v]}}}var p=(0,c.serializeStyles)(t,r.registered);(0,s.insertStyles)(r,p,!1);var y="".concat(r.key,"-").concat(p.name).concat(void 0===a?"":" ".concat(a)),m=t[0];return(0,u.matchCSSObject)(m)&&f.saveClassNameCSSObjectMapping(r,y,m),y};return{css:o,cx:function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];var s=(0,a.classnames)(n),i=f.fixClassName(r,s,o);return e(r.registered,o,i)}}}}}().createCssAndCx,t.useCssAndCx=function(){var e=(0,l.useTssEmotionCache)(),r=(0,i.useGuaranteedMemo)((function(){return(0,t.createCssAndCx)({cache:e})}),[e]);return{css:r.css,cx:r.cx}};var f=function(){var e=new o.Polyfill;return{saveClassNameCSSObjectMapping:function(t,r,n){var o=e.get(t);void 0===o&&(o=new Map,e.set(t,o)),o.set(r,n)},fixClassName:function(t,r,o){var c=e.get(t);return(0,a.classnames)(function(e){var t=!1;return e.map((function(e){var r,o=n(e,2),a=o[0],c=o[1];return void 0===c?a:(t?r={"&&":c}:(r=a,void 0!==Object.keys(c).find((function(e){return e.startsWith("@media")}))&&(t=!0)),r)}))}(r.split(" ").map((function(e){return[e,null===c||void 0===c?void 0:c.get(e)]}))).map((function(e){return"string"===typeof e?e:o(e)})))}}}()},236:function(e,t,r){"use strict";var n,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TssCacheProvider=t.useTssEmotionCache=t.getDoExistsTssDefaultEmotionCacheMemoizedValue=t.getTssDefaultEmotionCache=void 0;var a=r(2),c=r(1),s=o(r(78));n=function(){var e=void 0;return{getTssDefaultEmotionCache:function(t){var r=(null!==t&&void 0!==t?t:{}).doReset;return void 0!==r&&r&&(e=void 0),void 0===e&&(e=(0,s.default)({key:"tss"})),e},getDoExistsTssDefaultEmotionCacheMemoizedValue:function(){return void 0!==e}}}(),t.getTssDefaultEmotionCache=n.getTssDefaultEmotionCache,t.getDoExistsTssDefaultEmotionCacheMemoizedValue=n.getDoExistsTssDefaultEmotionCacheMemoizedValue;var i=(0,c.createContext)(void 0);t.useTssEmotionCache=function(){var e=(0,c.useContext)(i);return null!==e&&void 0!==e?e:(0,t.getTssDefaultEmotionCache)()},t.TssCacheProvider=function(e){var t=e.children,r=e.value;return(0,a.jsx)(i.Provider,Object.assign({value:r},{children:t}),void 0)}},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createMakeStyles=void 0;var n=r(1),o=r(468),a=r(469),c=r(233),s=r(470);t.createMakeStyles=function(e){var t=e.useTheme,r=function(){var e=0;return function(){return e++}}();return{makeStyles:function(){return function(e){var i="function"===typeof e?e:function(){return e},l=r();return function(e){var r=t(),u=(0,c.useCssAndCx)(),d=u.cx,f=u.css;return(0,n.useMemo)((function(){var t=i(r,e,function(){var e=0;return function(){return"tss-react-ref_".concat(l,"_").concat(e++)}}());return{classes:(0,o.objectFromEntries)((0,a.objectKeys)(t).map((function(e){return[e,f(t[e])]}))),theme:r,css:f,cx:d}}),[d,f,r,(0,s.getDependencyArrayRef)(e)])}}},useStyles:function(){var e=t(),r=(0,c.useCssAndCx)();return{theme:e,css:r.css,cx:r.cx}}}}},453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var a=t[o];if(e.call(n,a,o,t))return a;o++}},configurable:!0,writable:!0})},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Polyfill=void 0;var n=r(455);t.Polyfill="undefined"!==typeof WeakMap?WeakMap:n.Polyfill},455:function(e,t,r){"use strict";var n=r(154),o=r(456),a=r(457);Object.defineProperty(t,"__esModule",{value:!0}),t.Polyfill=t.LightMapImpl=void 0;var c=function(){function e(){o(this,e),this.record=[]}return a(e,[{key:"has",value:function(e){return this.record.map((function(e){return n(e,1)[0]})).indexOf(e)>=0}},{key:"get",value:function(e){var t=this.record.filter((function(t){return n(t,1)[0]===e})),r=n(t,1)[0];if(void 0!==r)return r[1]}},{key:"set",value:function(e,t){var r=this.record.filter((function(t){return n(t,1)[0]===e})),o=n(r,1)[0];return void 0===o?this.record.push([e,t]):o[1]=t,this}},{key:"delete",value:function(e){var t=this.record.map((function(e){return n(e,1)[0]})).indexOf(e);return!(t<0)&&(this.record.splice(t,1),!0)}},{key:"keys",value:function(){return this.record.map((function(e){return n(e,1)[0]}))}}]),e}();t.LightMapImpl=c,Symbol.toStringTag,t.Polyfill="undefined"!==typeof Map?Map:c},458:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.classnames=void 0;var n=r(459),o=r(460);t.classnames=function(e){for(var r=e.length,a=0,c="";a<r;a++){var s=e[a];if(null!=s){var i=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))i=(0,t.classnames)(s);else for(var l in(0,n.assert)(!(0,o.typeGuard)(s,!1)),i="",s)s[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=s}i&&(c&&(c+=" "),c+=i)}}return c}},459:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assert=void 0,t.assert=function(e,t){if(!e)throw new Error(t)}},460:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},461:function(e,t,r){"use strict";var n=r(462);Object.defineProperty(t,"__esModule",{value:!0}),t.useGuaranteedMemo=void 0;var o=r(1);t.useGuaranteedMemo=function(e,t){var r=(0,o.useRef)();return(!r.current||t.length!==r.current.prevDeps.length||r.current.prevDeps.map((function(e,r){return e===t[r]})).indexOf(!1)>=0)&&(r.current={v:e(),prevDeps:n(t)}),r.current.v}},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matchCSSObject=void 0,t.matchCSSObject=function(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)}},468:function(e,t,r){"use strict";var n=r(154);Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=Object.fromEntries?Object.fromEntries:function(e){if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");var t={};return Object.keys(e).forEach((function(r){var o=n(e[r],2),a=o[0],c=o[1];t[a]=c})),t}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDependencyArrayRef=void 0,t.getDependencyArrayRef=function(e){if(!(e instanceof Object))return e;var t=[];for(var r in e){var n=e[r];if("string"!==typeof n&&("number"!==typeof n||isNaN(n))&&"boolean"!==typeof n&&void 0!==n&&null!==n)return e;t.push("".concat(r,":").concat(JSON.stringify(n)))}return"xSqLiJdLMd9s"+t.join("|")}},471:function(e,t,r){"use strict";var n=r(472),o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.createWithStyles=void 0;var a=r(2),c=r(1),s=r(237),i=r(473);function l(e){var t={},r={};return Object.keys(e).forEach((function(n){return(n.startsWith("@media")?r:t)[n]=e[n]})),Object.keys(r).forEach((function(e){var o=r[e];Object.keys(o).forEach((function(r){var a;return t[r]=Object.assign(Object.assign({},null!==(a=t[r])&&void 0!==a?a:{}),n({},e,o[r]))}))})),t}t.createWithStyles=function(e){var t=e.useTheme,r=(0,s.createMakeStyles)({useTheme:t}).makeStyles;return{withStyles:function(e,t){var n="string"===typeof e?function(){var t=e,r=function(e){var r=e.children,n=o(e,["children"]);return(0,c.createElement)(t,n,r)};return Object.defineProperty(r,"name",{value:(0,i.capitalize)(t)}),r}():e,s=r()("function"===typeof t?function(e,r,n){return l(t(e,r,n))}:l(t)),u=(0,c.forwardRef)((function(t,r){var c=s(t),i=c.classes,l=c.cx,u=t.className,d=o(t,["className"]);return(0,a.jsx)(n,Object.assign({ref:r,className:l(i.root,u)},"string"===typeof e?{}:{classes:i},d),void 0)})),d=n.name;return"string"===typeof d&&Object.defineProperty(u,"name",{value:"".concat(d,"WithStyles")}),u}}}},473:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=void 0,t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},476:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyles=void 0;var c=r(2),s=a(r(50));t.GlobalStyles=function(e){var t=e.styles;return(0,c.jsx)(s.Global,{styles:s.css(t)},void 0)}},481:function(e,t,r){"use strict";r.r(t);r(250),r(262);var n=r(239),o=r(121),a=r(497),c=Object(o.createMakeAndWithStyles)({useTheme:a.a}),s=c.makeStyles,i=c.useStyles,l=c.withStyles,u=r(12),d=r(243),f=r(20),b=r(508),h=r(504),v=r(2),p=s()((function(e,t,r){var n={ref:r(),background:"blue",border:"1px solid black"},o={ref:r(),color:"red"},a={border:"1px solid black",margin:30,height:100,color:"black"},c=Object(d.a)({ref:r()},a);return{root:{"& > h1:nth-child(2)":{color:e.palette.primary.main}},ovStyled:{color:"darkred"},ovInternal:{backgroundColor:"darkblue"},parent:Object(u.a)({border:"1px solid black",padding:30},"&:hover .".concat(n.ref),{background:"red"}),child:n,breadcrumbs_className:{backgroundColor:"lightblue","& .MuiBreadcrumbs-separator":{color:"red"},"&:hover .MuiBreadcrumbs-separator":{color:"blue"}},breadcrumbs2_root:Object(u.a)({backgroundColor:"lightblue"},"&:hover .".concat(o.ref),{color:"blue"}),breadcrumbs2_separator:o,button2_className:{backgroundColor:"red"},button2_root:{backgroundColor:"red"},testCx_bgYellow:{backgroundColor:"yellow"},testCx_bgCyan:{backgroundColor:"cyan"},childRefTest_wrapper:Object(u.a)({border:"1px solid black"},"&:hover .".concat(c.ref),{backgroundColor:"cyan"}),childRefTest_wrapper1:c,childRefTest_wrapper2:a,childRefTest_textColorPink:{color:"pink"},mq:{height:100,backgroundColor:"lightgreen","@media (max-width: 960px)":{backgroundColor:"cyan"}}}})),y=Object(f.a)("h1")({color:"yellow"});function m(e){var t=e.className,r=p(),n=r.classes,a=r.css,c=r.cx;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.GlobalStyles,{styles:{body:{backgroundColor:"pink"},".foo":{color:"cyan"}}}),Object(v.jsxs)("div",{className:n.root,children:[Object(v.jsx)("h1",{children:"Black"}),Object(v.jsx)("h1",{children:"Should be lime green"}),Object(v.jsx)("h1",{className:c(a({border:"1px solid black"}),t),children:"Black, should have border and shadow"}),Object(v.jsx)("h1",{className:"foo",children:"Should be cyan"}),Object(v.jsx)(y,{children:"Should be yellow"}),Object(v.jsx)(y,{className:n.ovStyled,children:"Should be dark red"}),Object(v.jsx)(b.a,{variant:"contained",color:"primary",children:" Background should be lime green "}),Object(v.jsx)(b.a,{variant:"contained",color:"primary",className:n.ovInternal,children:"Background should be dark blue"}),Object(v.jsx)("div",{className:n.parent,children:Object(v.jsx)("div",{className:n.child,children:"Background should turn red when mouse is hover the parent."})}),Object(v.jsxs)(h.a,{className:n.breadcrumbs_className,color:"primary",children:[Object(v.jsx)("span",{children:"background should be lightblue"}),Object(v.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(v.jsx)("div",{style:{height:10}}),Object(v.jsxs)(h.a,{classes:{root:n.breadcrumbs2_root,separator:n.breadcrumbs2_separator},color:"primary",children:[Object(v.jsx)("span",{children:"background should be lightblue"}),Object(v.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(v.jsx)(b.a,{variant:"contained",color:"primary",className:n.button2_className,children:Object(v.jsx)("span",{children:"The background should be red"})}),Object(v.jsx)(b.a,{variant:"contained",color:"primary",classes:{root:n.button2_root},children:Object(v.jsx)("span",{children:"The background should be red"})}),Object(v.jsx)("div",{className:c(n.testCx_bgYellow,n.testCx_bgCyan),children:"Background should be cyan"}),Object(v.jsx)("div",{className:c(n.testCx_bgCyan,n.testCx_bgYellow),children:"Background should be yellow"}),Object(v.jsxs)("div",{className:n.childRefTest_wrapper,children:[Object(v.jsx)("div",{className:c(n.childRefTest_textColorPink,n.childRefTest_wrapper1),children:"Background should turn cyan when mouse hover the parent. Also the text should NOT be pink"}),Object(v.jsx)("div",{className:c(n.childRefTest_wrapper2),children:"Background should NOT turn cyan when mouse hover the parent."})]}),Object(v.jsx)("div",{className:n.mq,children:"The background color should turn from lightgreen to cyan when the window inner with goes is below 960px"}),Object(v.jsx)(j,{className:a({color:"red"}),colorSmall:"cyan"}),Object(v.jsx)(g,{children:"The text should turn from red to blue when the window inner width goes below 960px"}),Object(v.jsx)("br",{}),Object(v.jsx)(O,{href:"http://exampe.com",children:"Background should be red"}),Object(v.jsx)(O,{href:"https://exampe.com",children:"Background should be limegreen"}),Object(v.jsx)("div",{className:c(a({"@media screen and (min-width: 1px)":{backgroundColor:"red"},height:50}),a({backgroundColor:"lightgreen"})),children:"background should be lightgreen"})]})]})}var j=l((function(e){return Object(v.jsx)("div",{className:e.className,children:"The background color should turn from limegreen to cyan when the window inner with goes below 960px. Font should be red"})}),(function(e,t){return{root:{backgroundColor:e.palette.primary.main,height:100,marginTop:20},"@media (max-width: 960px)":{root:{backgroundColor:t.colorSmall}}}})),g=l(b.a,{text:{color:"red"},"@media (max-width: 960px)":{text:{color:"blue"}}}),O=l("a",(function(e,t){var r=t.href;return{root:{border:"1px solid black",backgroundColor:(null===r||void 0===r?void 0:r.startsWith("https"))?e.palette.primary.main:"red"}}})),x=r(28),k=r(506),C=r(244),_=r(507),w=r(78),S=Object(w.default)({key:"mui",prepend:!0}),M=Object(C.a)({palette:{primary:{main:"#32CD32"}}});function P(){var e=i().css;return Object(v.jsx)(m,{className:e({boxShadow:"10px 5px 5px teal"})})}Object(n.render)(Object(v.jsx)(x.a,{value:S,children:Object(v.jsxs)(k.a,{theme:M,children:[Object(v.jsx)(_.a,{}),Object(v.jsx)(P,{})]})}),document.getElementById("root"))}},[[481,1,2]]]);
//# sourceMappingURL=main.41410cf3.chunk.js.map