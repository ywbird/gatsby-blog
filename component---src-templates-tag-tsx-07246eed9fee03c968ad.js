"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[902],{4084:function(e,t,a){a.d(t,{Z:function(){return b}});var o=a(7294),r=a(3494),n=a(1597),i=a(6296),l=(0,r.default)(n.rU).withConfig({displayName:"postCard__PostLinkItem",componentId:"sc-13jce2h-0"})(["color:var(--font-color);text-decoration:none;&:visited{color:var(--font-color);}"]),d=r.default.article.withConfig({displayName:"postCard__Card",componentId:"sc-13jce2h-1"})(["height:200px;background-color:var(--button-color);border-radius:7px;transition:color 0.15s ease-out,background 0.15s ease-out,transform 0.15s ease-out,box-shadow 0.15s ease-out,border 0.15s ease-out;display:flex;flex-direction:row;&:hover{}"]),c=r.default.div.withConfig({displayName:"postCard__Frontmatter",componentId:"sc-13jce2h-2"})(["padding:0.2em 0.5em;font-family:var(--main-font);h2{margin:0;padding:0;font-size:1.3em;}"]),s=r.default.p.withConfig({displayName:"postCard__Excerpt",componentId:"sc-13jce2h-3"})(["overflow:hidden;display:-webkit-box;-webkit-line-clamp:6;-moz-box-orient:vertical;-webkit-box-orient:vertical;height:125px;margin:0px 0 0 0;"]),m=r.default.p.withConfig({displayName:"postCard__Posted",componentId:"sc-13jce2h-4"})(["margin:8px 0;"]),p=(0,r.default)(i.G).withConfig({displayName:"postCard__Image",componentId:"sc-13jce2h-5"})(["width:200px;border-top-left-radius:7px;border-bottom-left-radius:7px;"]),u=function(e){var t=e.slug,a=e.title,r=e.date,u=e.excerpt,g=e.cover,f=(0,i.c)(g);return o.createElement(d,null,o.createElement(n.rU,{to:"/post/"+t},f&&o.createElement(p,{image:f,alt:"cover image"})),o.createElement(c,{image:!!f},o.createElement(l,{to:"/post/"+t},o.createElement("h2",null,a),o.createElement(m,null,"Posted: ",r),o.createElement(s,null,u))))},g=r.default.div.withConfig({displayName:"pagination__PagenationWrapper",componentId:"sc-l092xv-0"})(["display:flex;justify-content:center;margin:1em 0;"]),f=(0,r.default)(n.rU).withConfig({displayName:"pagination__PagenationLink",componentId:"sc-l092xv-1"})(["width:30px;height:30px;border:0px;background-color:var(--button-color);border-radius:2px;color:var(--text-color);text-decoration:none;display:grid;place-items:center;margin:0.15em;&:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px;}&:last-child{border-top-right-radius:5px;border-bottom-right-radius:5px;}"]),h=function(e){var t=e.numPages,a=e.tag;return o.createElement(g,null,Array.from({length:t}).map((function(e,t){return o.createElement(f,{key:t,to:t+1===1?"/"+(a?"tag/"+a:""):"/"+(a?"tag/"+a:"")+"?page="+(t+1)},t+1)})))},x=r.default.div.withConfig({displayName:"postList__Posts",componentId:"sc-1b9y6dp-0"})(["grid-template-columns:repeat(auto-fill,minmax(400px,1fr));display:grid;gap:32px;"]),b=function(e){var t=e.data,a=e.numPages,r=e.tag;return o.createElement(o.Fragment,null,o.createElement(x,null,t.map((function(e,t){var a,r;return o.createElement(u,{key:t,slug:e.frontmatter.slug,title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.frontmatter.description,cover:null!==(a=null===(r=e.frontmatter.cover)||void 0===r?void 0:r.childImageSharp.gatsbyImageData)&&void 0!==a?a:void 0})}))),o.createElement(h,{tag:r,numPages:a}))}},5848:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l}});var o=a(7294),r=a(3287),n=a(4001),i=a(4084),l=function(e){var t=e.pageContext;return o.createElement(n.Z,{title:t.tag})};t.default=function(e){var t,a=e.pageContext,n=e.data,l=a.tagNumPages;if("object"==typeof document){var d,c=new URLSearchParams(document.location.search),s=parseInt(null!==(d=c.get("page"))&&void 0!==d?d:"1");t=n.allMarkdownRemark.nodes.slice((s-1)*a.limit,(s-1)*a.limit+a.limit)}var m={numPages:l};return o.createElement(r.Z,{pageTitle:a.tag},o.createElement(i.Z,Object.assign({data:t||[],tag:a.tag},m)))}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-07246eed9fee03c968ad.js.map