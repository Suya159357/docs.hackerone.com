(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+VNo":function(D,u){D.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0Mpl":function(D,u,e){},"EU/P":function(D,u,e){var F=e("P8UN"),t=e("ap2Z"),E=e("96qb"),r=e("+VNo"),n="["+r+"]",a=RegExp("^"+n+n+"*"),C=RegExp(n+n+"*$"),i=function(D,u,e){var t={},n=E((function(){return!!r[D]()||"​"!="​"[D]()})),a=t[D]=n?u(c):r[D];e&&(t[e]=a),F(F.P+F.F*n,"String",t)},c=i.trim=function(D,u){return D=String(t(D)),1&u&&(D=D.replace(a,"")),2&u&&(D=D.replace(C,"")),D};D.exports=i},HXzo:function(D,u,e){"use strict";e("EU/P")("trim",(function(D){return function(){return D(this,3)}}))},NrX9:function(D,u,e){"use strict";e.r(u),e.d(u,"pageQuery",(function(){return c}));e("rzGZ"),e("Dq+y"),e("8npG"),e("Ggvi");var F=e("q1tI"),t=e.n(F),E=e("qhky"),r=(e("+ZDr"),e("jFb6")),n=e.n(r),a=e("ZVJz"),C=e.n(a);e("0Mpl");var i=function(D){var u,e;function F(){return D.apply(this,arguments)||this}e=D,(u=F).prototype=Object.create(e.prototype),u.prototype.constructor=u,u.__proto__=e;var r=F.prototype;return r.slug=function(D){return(new C.a).slug(D)},r.render=function(){var D=this,u=this.props.data.allMarkdownRemark.edges,e={};u.map((function(D,u){var F=D.node.frontmatter.title.charAt(0);null==e[F]&&(e[F]=[]),e[F].push(D)}));var F=Object.keys(e);return t.a.createElement("div",{className:"glossary article"},t.a.createElement(E.default,{title:"Glossary | "+n.a.siteMetadata.title}),t.a.createElement("div",{className:"sidebar"},t.a.createElement("div",{className:"sidebar__wrapper"},t.a.createElement("div",{className:"sidebar__body"},F.map((function(u,F){return t.a.createElement("div",{className:"sidebar__section",key:F},t.a.createElement("h3",{className:"sidebar__title sidebar__title--active"},u),t.a.createElement("ul",{className:"sidebar__items sidebar__items--active"},e[u].map((function(u,e){return t.a.createElement("li",{className:"sidebar__item",key:e},t.a.createElement("a",{href:"#"+D.slug(u.node.frontmatter.title)},u.node.frontmatter.title))}))))}))))),t.a.createElement("div",{className:"article__inner"},t.a.createElement("h1",null,"Glossary"),u.map((function(u,e){return t.a.createElement("div",{className:"glossary__wrapper",key:u.node.frontmatter.title},t.a.createElement("h2",{id:D.slug(u.node.frontmatter.title)},u.node.frontmatter.title),t.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.node.html}}))}))))},F}(t.a.Component);u.default=i;var c="360534678"},Roim:function(D,u){D.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},ZVJz:function(D,u,e){e("HXzo"),e("sC2a"),e("pS08");var F=e("Roim");D.exports=n;var t=Object.hasOwnProperty,E=/\s/g,r=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;function n(){if(!(this instanceof n))return new n;this.reset()}function a(D,u){return"string"!=typeof D?"":(u||(D=D.toLowerCase()),D.trim().replace(r,"").replace(F(),"").replace(E,"-"))}n.prototype.slug=function(D,u){for(var e=a(D,!0===u),F=e;t.call(this.occurrences,e);)this.occurrences[F]++,e=F+"-"+this.occurrences[F];return this.occurrences[e]=0,e},n.prototype.reset=function(){this.occurrences=Object.create(null)},n.slug=a}}]);
//# sourceMappingURL=component---src-pages-glossary-index-js-bc1b5c276f340def80c3.js.map