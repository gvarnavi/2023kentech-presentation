"use strict";(self.webpackChunk_2023kentech_presentation=self.webpackChunk_2023kentech_presentation||[]).push([[439],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),f=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=f(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=f(n),g=r,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return n?a.createElement(y,o(o({ref:e},c),{},{components:n})):a.createElement(y,o({ref:e},c))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var f=2;f<i;f++)o[f]=n[f];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},152:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>p,default:()=>A,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var a,r,i=n(7462),o=n(7294),l=n(3905);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s.apply(this,arguments)}const f=t=>{let{title:e,titleId:n,...i}=t;return o.createElement("svg",s({fill:"currentColor",fontFamily:"system-ui, sans-serif",fontSize:10,textAnchor:"middle",width:1e3,height:600,viewBox:"0 0 1000 600",id:"svg8",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",background:"#fff",height:"intrinsic",maxWidth:"100%"},"aria-labelledby":n},i),e?o.createElement("title",{id:n},e):null,a||(a=o.createElement("style",{id:"style2"},".plot-d6a7b5 text,.plot-d6a7b5 tspan{white-space:pre}")),r||(r=o.createElement("g",{"aria-label":"raster",id:"g6",transform:"translate(114.66 110.794)"},o.createElement("image",{transform:"matrix(1 0 0 -1 .5 400)",width:799,height:399.5,preserveAspectRatio:"none",xlinkHref:"data:image/png;base64,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",id:"image4"}))),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:69.29,y:514.651,id:"text295-3",transform:"rotate(-30)"},o.createElement("tspan",{id:"tspan293-6",x:69.29,y:514.651,style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end"}},"Magnetism"),o.createElement("tspan",{x:69.29,y:554.651,id:"tspan384",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end"}},"Background")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:269.94,y:369.766,id:"text295-3-7",transform:"rotate(-30)"},o.createElement("tspan",{id:"tspan293-6-5",x:269.94,y:369.766,style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"start",textAnchor:"start",fill:"#afafaf",fillOpacity:1}},"Ptychography"),o.createElement("tspan",{x:269.94,y:409.766,id:"tspan384-3",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"start",textAnchor:"start",fill:"#afafaf",fillOpacity:1}},"Background")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:505.481,y:504.061,id:"text295-3-7-5",transform:"rotate(-30)"},o.createElement("tspan",{x:505.481,y:504.061,id:"tspan384-3-2",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",fill:"#afafaf",fillOpacity:1}},"Results")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:414.494,y:714.042,id:"text295-3-7-5-2",transform:"rotate(-30)"},o.createElement("tspan",{x:414.494,y:714.042,id:"tspan384-3-2-7",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Conclusions"),o.createElement("tspan",{x:414.494,y:754.042,id:"tspan584",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}}," & Outlook")),o.createElement("text",{xmlSpace:"preserve",style:{fontStyle:"normal",fontWeight:400,fontSize:40,lineHeight:1,fontFamily:"sans-serif",whiteSpace:"pre",fill:"#000",fillOpacity:1,stroke:"none"},x:240.186,y:613.304,id:"text295-3-7-5-9",transform:"rotate(-30)"},o.createElement("tspan",{x:240.186,y:613.304,id:"tspan384-3-2-1",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Tomography"),o.createElement("tspan",{x:240.186,y:653.304,id:"tspan549",style:{fontStyle:"normal",fontVariant:"normal",fontWeight:700,fontStretch:"normal",fontFamily:"sans-serif",InkscapeFontSpecification:"'sans-serif Bold'",textAlign:"end",textAnchor:"end",fill:"#afafaf",fillOpacity:1}},"Background")))},c={id:"mag-bg_outline",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},p=void 0,m={unversionedId:"mag-bg/mag-bg_outline",id:"mag-bg/mag-bg_outline",title:"Transition Outline",description:"",source:"@site/slides/mag-bg/mag-bg_outline.mdx",sourceDirName:"mag-bg",slug:"/mag-bg/mag-bg_outline",permalink:"/2023kentech-presentation/slides/mag-bg/mag-bg_outline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"mag-bg_outline",sidebar_position:1,title:"Transition Outline",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",next:{title:"4DSTEM",permalink:"/2023kentech-presentation/slides/mag-bg/ptycho-bg_4dstem"}},g={},y=[],d={toc:y},h="wrapper";function A(t){let{components:e,...n}=t;return(0,l.kt)(h,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(f,{width:"100%",height:"auto",mdxType:"OutlineImageLight"}))}A.isMDXComponent=!0}}]);