"use strict";(self.webpackChunklotus=self.webpackChunklotus||[]).push([[927],{4084:function(e,t,o){o.d(t,{Z:function(){return h}});var r=o(259),i=o(1597),a=o(5893),n=(0,r.default)(i.rU).withConfig({displayName:"postCard__PostLinkItem",componentId:"sc-1jktgyi-0"})(["color:var(--theme-ui-colors-text);text-decoration:none;&:visited{color:var(--theme-ui-colors-text);}"]),d=r.default.article.withConfig({displayName:"postCard__Card",componentId:"sc-1jktgyi-1"})(["border:1px solid var(--theme-ui-colors-border);border-radius:4px;transition:color 0.15s ease-out,background 0.15s ease-out,transform 0.15s ease-out,box-shadow 0.15s ease-out,border 0.15s ease-out;display:flex;flex-direction:row;@media only screen and (max-device-width:600px){}"]),s=r.default.div.withConfig({displayName:"postCard__Frontmatter",componentId:"sc-1jktgyi-2"})(["padding:0.2em 0.5em;font-family:var(--main-font);h2{margin:0;padding:0;font-size:1.3em;}"]),l=r.default.h2.withConfig({displayName:"postCard__Title",componentId:"sc-1jktgyi-3"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-text);"]),c=r.default.p.withConfig({displayName:"postCard__Excerpt",componentId:"sc-1jktgyi-4"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-mute);"]),p=r.default.div.withConfig({displayName:"postCard__Data",componentId:"sc-1jktgyi-5"})(["display:flex;flex-direction:column;justify-content:space-between;"]),m=function(e){var t=e.slug,o=e.title,r=(e.date,e.excerpt);return(0,a.jsx)(d,{children:(0,a.jsx)(s,{children:(0,a.jsxs)(n,{to:"/post/"+t,children:[(0,a.jsx)(l,{children:o}),(0,a.jsx)(p,{children:(0,a.jsx)(c,{children:r})})]})})})},u=r.default.div.withConfig({displayName:"pagination__PagenationWrapper",componentId:"sc-b6h10r-0"})(["display:flex;justify-content:center;margin:2em 0;"]),f=(0,r.default)(i.rU).withConfig({displayName:"pagination__PagenationLink",componentId:"sc-b6h10r-1"})(["width:30px;height:30px;border:0px;border-radius:2px;border:1px solid var(--theme-ui-colors-border);color:var(--theme-ui-colors-text);text-decoration:none;display:grid;place-items:center;margin:0.15em;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}"]),x=function(e){var t=e.numPages,o=e.tag;return(0,a.jsx)(u,{children:Array.from({length:t}).map((function(e,t){return(0,a.jsx)(f,{to:t+1===1?"/"+(o?"tag/"+o:""):"/"+(o?"tag/"+o+"/":"")+(t+1),children:t+1},t)}))})},g=r.default.div.withConfig({displayName:"postList__Posts",componentId:"sc-1xnmpxy-0"})(["grid-template-columns:repeat(auto-fill,minmax(400px,1fr));display:grid;gap:20px;@media only screen and (max-device-width:600px){grid-template-columns:1fr;}"]),h=function(e){var t=e.posts,o=e.numPages,r=e.usePagination,i=e.tag;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{children:t&&t.map((function(e,t){return(0,a.jsx)(m,{slug:e.frontmatter.slug,title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt||""},e.id)}))}),void 0===r&&o||r&&o?(0,a.jsx)(x,{tag:i,numPages:o}):""]})}},8638:function(e,t,o){o.r(t),o.d(t,{Head:function(){return d}});var r=o(4307),i=o(4001),a=o(4084),n=o(5893),d=function(){return(0,n.jsx)(i.Z,{title:"Home"})};t.default=function(e){var t=e.pageContext,o=e.data,i={numPages:t.numPages};return(0,n.jsx)(r.Z,{pageTitle:"",children:(0,n.jsx)(a.Z,Object.assign({posts:o.allMarkdownRemark.nodes},i))})}}}]);
//# sourceMappingURL=component---src-templates-posts-tsx-40499eba0c668f91a5f9.js.map