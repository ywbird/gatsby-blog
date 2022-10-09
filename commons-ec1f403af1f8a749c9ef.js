"use strict";(self.webpackChunklotus=self.webpackChunklotus||[]).push([[351],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,i=0;i<e.length;i++){var r=e[i];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,a=n,n=!0,i++):n&&a&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,i-1)+"-"+e.slice(i-1),a=n,n=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,a=n,n=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},6296:function(e,t,n){n.d(t,{G:function(){return T},L:function(){return g},M:function(){return C},P:function(){return b},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return c},c:function(){return d},g:function(){return u},h:function(){return l}});var a=n(7294),i=(n(4811),n(5697)),r=n.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(i[n]=e[n]);return i}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var d=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,n,a,i){return void 0===i&&(i={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function u(e,t,n,a,i,r,s,l){var d={};r&&(d.backgroundColor=r,"fixed"===n?(d.width=a,d.height=i,d.backgroundColor=r,d.position="relative"):("constrained"===n||"fullWidth"===n)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),l&&(d.objectPosition=l);var c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}var m,p=["children"],h=function(e){var t=e.layout,n=e.width,i=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,n=s(e,p);return a.createElement(a.Fragment,null,a.createElement(h,o({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,n=e.srcSet,i=e.loading,r=e.alt,l=void 0===r?"":r,d=e.shouldLoad,c=s(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:i,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?n:void 0,"data-srcset":d?void 0:n,alt:l}))},x=function(e){var t=e.fallback,n=e.sources,i=void 0===n?[]:n,r=e.shouldLoad,l=void 0===r||r,d=s(e,v),c=d.sizes||(null==t?void 0:t.sizes),u=a.createElement(y,o({},d,t,{sizes:c,shouldLoad:l}));return i.length?a.createElement("picture",null,i.map((function(e){var t=e.media,n=e.srcSet,i=e.type;return a.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:c})})),u):u};y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},x.displayName="Picture",x.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,n=s(e,w);return t?a.createElement(x,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};b.displayName="Placeholder",b.propTypes={fallback:i.string,sources:null==(m=x.propTypes)?void 0:m.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var C=function(e){return a.createElement(a.Fragment,null,a.createElement(x,o({},e)),a.createElement("noscript",null,a.createElement(x,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=x.propTypes;var j,_,k=function(e,t,n){for(var a=arguments.length,i=new Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:r().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],N=new Set,E=function(e){var t=e.as,i=void 0===t?"div":t,r=e.image,d=e.style,c=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,h=e.onLoad,g=e.onError,f=s(e,L),v=r.width,y=r.height,x=r.layout,w=function(e,t,n){var a={},i="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:a}}(v,y,x),b=w.style,C=w.className,k=s(w,S),I=(0,a.useRef)(),E=(0,a.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);m&&(u=m);var T=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(x,v,y);return(0,a.useEffect)((function(){j||(j=Promise.all([n.e(774),n.e(344)]).then(n.bind(n,9344)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return _=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=I.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(E)):_&&N.has(E)?void 0:(j.then((function(n){var a=n.renderImageToString,i=n.swapPlaceholderImage;I.current&&(I.current.innerHTML=a(o({isLoading:!0,isLoaded:N.has(E),image:r},f)),N.has(E)||(e=requestAnimationFrame((function(){I.current&&(t=i(I.current,E,N,d,p,h,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[r]),(0,a.useLayoutEffect)((function(){N.has(E)&&_&&(I.current.innerHTML=_(o({isLoading:N.has(E),isLoaded:N.has(E),image:r},f)),null==p||p({wasCached:!0}),null==h||h({wasCached:!0}))}),[r]),(0,a.createElement)(i,o({},k,{style:o({},b,d,{backgroundColor:c}),className:C+(u?" "+u:""),ref:I,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(E,e):null}));T.propTypes=I,T.displayName="GatsbyImage";var z,M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),A={src:r().string.isRequired,alt:k,width:O,height:O,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(z=T,function(e){var t=e.src,n=e.__imageData,i=e.__error,r=s(e,M);return i&&console.warn(i),n?a.createElement(z,o({image:n},r)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=A},4307:function(e,t,n){n.d(t,{Z:function(){return A}});var a=n(259),i=n(1597),r=n(6296),o=n(7294),s=n(5078),l=n(5893);var d=(0,o.createContext)({});function c(e){var t=e.children,n=(0,s.If)();return(0,l.jsx)(d.Provider,{value:n,children:t})}var u=a.default.div.withConfig({displayName:"header__SiteTitleDiv",componentId:"sc-18xzbxt-0"})(["margin:1rem auto 1rem 0;@media only screen and (max-device-width:600px){margin:0rem auto;height:50px;width:100%;}display:grid;place-items:center;"]),m=a.default.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-18xzbxt-1"})(["font-size:2rem;margin:0;color:gray;font-weight:700;display:flex;align-items:center;justify-content:space-between;"]),p=(0,a.default)(i.Link).withConfig({displayName:"header__SiteTitleLink",componentId:"sc-18xzbxt-2"})(["text-decoration:none;color:var(--theme-ui-colors-text);font-family:var(--main-font);"]),h=(0,a.default)(i.Link).withConfig({displayName:"header__SiteLogo",componentId:"sc-18xzbxt-3"})(["display:flex;flex-direction:column;padding-right:7px;"]),g=a.default.ul.withConfig({displayName:"header__NavLinks",componentId:"sc-18xzbxt-4"})(["display:flex;list-style:none;padding-left:0;"]),f=a.default.li.withConfig({displayName:"header__NavItem",componentId:"sc-18xzbxt-5"})(["margin:0 2rem 0 0;&:first-child{padding-left:0;}"]),v=(0,a.default)(i.Link).withConfig({displayName:"header__NavLink",componentId:"sc-18xzbxt-6"})(["color:var(--theme-ui-colors-text);font-family:var(--main-font);text-decoration:none;"]),y=a.default.a.withConfig({displayName:"header__NavLinkA",componentId:"sc-18xzbxt-7"})(["color:var(--theme-ui-colors-text);font-family:var(--main-font);text-decoration:none;"]),x=a.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-18xzbxt-8"})(["border-bottom:1px solid var(--theme-ui-colors-border);position:sticky;width:100%;top:0;z-index:2000;opacity:90%;@media only screen and (max-device-width:600px){position:sticky;top:-57px;}"]),w=a.default.header.withConfig({displayName:"header__HeaderInner",componentId:"sc-18xzbxt-9"})(["margin:auto;max-width:1000px;margin-top:1rem;display:flex;flex-direction:row;background-color:var(--theme-ui-colors-background);z-index:1000;align-items:center;@media only screen and (max-device-width:1000px) and (min-device-width:601px){min-width:max-content;padding:0 1em;}@media only screen and (max-device-width:600px){flex-direction:column;}"]),b=a.default.li.withConfig({displayName:"header__ToggleColorTheme",componentId:"sc-18xzbxt-10"})(["font-family:var(--main-font);margin:0 2rem 0 0;width:2.5em;margin-right:0;cursor:pointer;"]),C=function(){var e,t,a,s,c,C=function(){var e=(0,o.useContext)(d);if(void 0===e)throw new Error("useThemeState should be used within ThemeProvider");return e}(),j=C[0],_=C[1],k="light"===j?"dark":"light",I=(0,i.useStaticQuery)("4226490459");return(0,l.jsx)(x,{children:(0,l.jsxs)(w,{children:[(0,l.jsx)(u,{children:(0,l.jsxs)(m,{children:[(0,l.jsx)(h,{to:"/",children:(0,l.jsx)(r.S,{src:"../images/logo.svg",alt:"logo",width:40,__imageData:n(1832)})}),(0,l.jsx)(p,{to:"/",children:null===(e=I.site)||void 0===e||null===(t=e.siteMetadata)||void 0===t?void 0:t.title})]})}),(0,l.jsxs)(g,{children:[null===(a=I.site)||void 0===a||null===(s=a.siteMetadata)||void 0===s||null===(c=s.navigation)||void 0===c?void 0:c.map((function(e,t){var n,a,i;return(0,l.jsx)(f,{children:null!=e&&null!==(n=e.url)&&void 0!==n&&n.startsWith("https://")?(0,l.jsx)(y,{href:null!==(a=null==e?void 0:e.url)&&void 0!==a?a:"/",children:null==e?void 0:e.name}):(0,l.jsx)(v,{to:null!==(i=null==e?void 0:e.url)&&void 0!==i?i:"/",children:null==e?void 0:e.name})},t)})),(0,l.jsx)(f,{children:(0,l.jsx)(v,{to:"/search",children:"Search"})}),(0,l.jsx)(b,{onClick:function(){_(k)},children:"dark"===j?"Dark":"light"===j?"Light":"Init"})]})]})})},j={main:"Noto Sans KR, Noto Sans CJK KR, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif",code:"Source Code Pro, Noto Sans KR, Noto Sans CJK KR, monospace"},_=a.default.div.withConfig({displayName:"theme__Style",componentId:"sc-1dhgtzo-0"})(["margin:0;color:var(--theme-ui-colors-text);background:var(--theme-ui-colors-background);"]),k=(0,a.createGlobalStyle)([":root{--main-font:",";--code-font:",";}body{margin:0;position:relative;background-color:var(--theme-ui-colors-background);}html{height:100%;}*{font-weight:300 !important;}* strong{font-weight:500 !important}h1,h2,h3,h4,h5,h6{font-weight:400 !important;}"],(function(e){return e.fonts.main}),(function(e){return e.fonts.code})),I=function(e){var t=e.children;return(0,l.jsx)(_,{children:(0,l.jsxs)(c,{children:[(0,l.jsx)(k,{fonts:j}),t]})})},L=a.default.footer.withConfig({displayName:"footer__FooterElement",componentId:"sc-alxmn2-0"})(["display:grid;place-items:center;width:100%;height:140px;position:absolute;bottom:0;"]),S=a.default.div.withConfig({displayName:"footer__FooterInner",componentId:"sc-alxmn2-1"})(["height:140px;margin:auto;max-width:1000px;font-family:var(--main-font);font-size:15px;display:flex;flex-direction:column;color:var(--theme-ui-colors-text);justify-content:space-evenly;@media only screen and (max-device-width:1000px){min-width:auto;}"]),N=a.default.div.withConfig({displayName:"footer__CopyRight",componentId:"sc-alxmn2-2"})(["display:flex;justify-content:center;padding:1em 0;"]),E=a.default.a.withConfig({displayName:"footer__Link",componentId:"sc-alxmn2-3"})(["color:var(--theme-ui-colors-primary);text-decoration:none;&:hover{color:var(--theme-ui-colors-primary);}"]),T=function(){var e,t,n,a,r=(0,i.useStaticQuery)("2430717156");return(0,l.jsx)(L,{children:(0,l.jsx)(S,{children:(0,l.jsxs)(N,{children:["© 2022 ",(0,l.jsx)(E,{href:"https://github.com/"+(null===(e=r.site)||void 0===e||null===(t=e.siteMetadata)||void 0===t?void 0:t.github),children:null===(n=r.site)||void 0===n||null===(a=n.siteMetadata)||void 0===a?void 0:a.nickname})," powered by ",(0,l.jsx)(E,{href:"https://github.com/ywbird/lotus",children:"Lotus"}),". All Rights Reserved."]})})})},z=a.default.div.withConfig({displayName:"layout__Body",componentId:"sc-138nslb-0"})(["margin:auto;min-height:100vh;"]),M=a.default.div.withConfig({displayName:"layout__Container",componentId:"sc-138nslb-1"})(["margin:0 1em;padding-bottom:160px;"]),O=a.default.h1.withConfig({displayName:"layout__Heading",componentId:"sc-138nslb-2"})(["color:var(--theme-ui-colors-text);font-family:var(--main-font);"]),R=a.default.main.withConfig({displayName:"layout__Main",componentId:"sc-138nslb-3"})(["max-width:","px;margin:auto;font-family:var(--main-font);"],(function(e){var t;return null!==(t=e.maxWidth)&&void 0!==t?t:"1000"})),A=function(e){var t=e.pageTitle,n=e.maxWidth,a=e.aside,i=e.children;return(0,l.jsx)(I,{children:(0,l.jsxs)(z,{children:[(0,l.jsx)(C,{}),(0,l.jsxs)(M,{children:[(0,l.jsxs)(R,{maxWidth:n,children:[(0,l.jsx)(O,{children:null!=t?t:""}),i]}),a&&(0,l.jsx)(a.node,Object.assign({},a.props))]}),(0,l.jsx)(T,{})]})})}},4001:function(e,t,n){var a=n(1597),i=n(5893);t.Z=function(e){var t=e.title,n=e.date,r=e.description,o=e.slug,s=(0,a.useStaticQuery)("684682641");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("title",{children:[t," | ",s.site.siteMetadata.title]}),(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"description",content:s.site.siteMetadata.description}),(0,i.jsx)("meta",{"http-equiv":"Author",content:s.site.siteMetadata.nickname}),(0,i.jsx)("meta",{property:"og:image",content:s.site.siteMetadata.logo}),(0,i.jsx)("meta",{property:"og:title",content:t+" | "+s.site.siteMetadata.title}),(0,i.jsx)("meta",{property:"og:site_name",content:s.site.siteMetadata.title}),n&&(0,i.jsx)("meta",{name:"Date",content:n}),r&&(0,i.jsx)("meta",{property:"og:description",content:r}),(0,i.jsx)("meta",{property:"og:url",content:s.site.siteMetadata.nickname+"/post/"+o})]})}},1832:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/32d25744a68866fc82e2ff6c61319067/34190/logo.svg","srcSet":"/static/32d25744a68866fc82e2ff6c61319067/ca966/logo.svg 9w,\\n/static/32d25744a68866fc82e2ff6c61319067/a2464/logo.svg 18w,\\n/static/32d25744a68866fc82e2ff6c61319067/34190/logo.svg 36w","sizes":"(min-width: 36px) 36px, 100vw"},"sources":[{"srcSet":"/static/32d25744a68866fc82e2ff6c61319067/a8d60/logo.webp 9w,\\n/static/32d25744a68866fc82e2ff6c61319067/4f7ad/logo.webp 18w,\\n/static/32d25744a68866fc82e2ff6c61319067/9a807/logo.webp 36w","type":"image/webp","sizes":"(min-width: 36px) 36px, 100vw"}]},"width":40,"height":40}')}}]);
//# sourceMappingURL=commons-ec1f403af1f8a749c9ef.js.map