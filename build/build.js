!function e(t,n,a){function i(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,a)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(e,t){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=n.Prism={util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=a.util.type(e);switch(t){case"Object":var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=a.util.clone(e[i]));return n;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i=i||a.languages;var r=i[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=r[l]}return a.languages.DFS(a.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=s)}),i[e]=s},DFS:function(e,t,n,i){i=i||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==a.util.type(e[r])||i[a.util.objId(e[r])]?"Array"!==a.util.type(e[r])||i[a.util.objId(e[r])]||(i[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],t,r,i)):(i[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],t,null,i)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var i,r=n.elements||document.querySelectorAll(n.selector),o=0;i=r[o++];)a.highlightElement(i,e===!0,n.callback)},highlightElement:function(t,i,r){for(var o,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1],s=a.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=t.textContent,u={element:t,language:o,grammar:s,code:c};if(!c||!s)return a.hooks.run("complete",u),void 0;if(a.hooks.run("before-highlight",u),i&&n.Worker){var p=new Worker(a.filename);p.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var r=a.tokenize(e,t);return i.stringify(a.util.encode(r),n)},tokenize:function(e,t){var n=a.Token,i=[e],r=t.rest;if(r){for(var o in r)t[o]=r[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var s=t[o];s="Array"===a.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var c=s[l],u=c.inside,p=!!c.lookbehind,d=!!c.greedy,f=0,g=c.alias;c=c.pattern||c;for(var h=0;h<i.length;h++){var m=i[h];if(i.length>e.length)break e;if(!(m instanceof n)){c.lastIndex=0;var b=c.exec(m),k=1;if(!b&&d&&h!=i.length-1){var y=i[h+1].matchedStr||i[h+1],v=m+y;if(h<i.length-2&&(v+=i[h+2].matchedStr||i[h+2]),c.lastIndex=0,b=c.exec(v),!b)continue;var w=b.index+(p?b[1].length:0);if(w>=m.length)continue;var x=b.index+b[0].length,C=m.length+y.length;if(k=3,C>=x){if(i[h+1].greedy)continue;k=2,v=v.slice(0,C)}m=v}if(b){p&&(f=b[1].length);var w=b.index+f,b=b[0].slice(f),x=w+b.length,z=m.slice(0,w),j=m.slice(x),E=[h,k];z&&E.push(z);var A=new n(o,u?a.tokenize(b,u):b,g,b,d);E.push(A),j&&E.push(j),Array.prototype.splice.apply(i,E)}}}}}return i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}}},i=a.Token=function(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!i};if(i.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var r={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}a.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=(s?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,r=t.code,o=t.immediateClose;n.postMessage(a.highlight(r,a.languages[i],i)),o&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",a.highlightAll)),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=a),"undefined"!=typeof e&&(e.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,i=t.getAttribute("data-src"),r=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(i.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",i,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):l.textContent=c.status>=400?"✖ Error "+c.status+" while fetching file: "+c.statusText:"✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var a=document.createElement("div");return a.className=n,a.classList.add("bespoke-backdrop"),e.parent.appendChild(a),a}}function n(t){if(t){var n=r.indexOf(t),o=e.slide();a(t,"active"),a(t,"inactive"),a(t,"before"),a(t,"after"),n!==o?(i(t,"inactive"),i(t,o>n?"before":"after")):i(t,"active")}}function a(e,t){e.classList.remove("bespoke-backdrop-"+t)}function i(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),a=parseInt(t,10);t&&(a?n(a-1):e.slides.forEach(function(e,a){e.getAttribute("data-bespoke-hash")===t&&n(a)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],4:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],5:[function(e,t,n){(function(a){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof a?i=a:"undefined"!=typeof self&&(i=self);var r=i;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.nebula=e()}}(function(){return function t(n,a,i){function r(s,l){if(!a[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=a[s]={exports:{}};n[s][0].call(u.exports,function(e){var t=n[s][1][e];return r(t?t:e)},u,u.exports,t,n,a,i)}return a[s].exports}for(var o="function"==typeof e&&e,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t){var n=e("bespoke-classes"),a=e("insert-css");t.exports=function(){var e='/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#ddd;font-family:futura,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;width:940px;height:480px;position:absolute;top:50%;left:50%;margin-left:-470px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.5s;transition-delay:.5s}.bespoke-active[data-bespoke-backdrop]{-webkit-transition-delay:.75s;transition-delay:.75s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#ddd;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}hr{width:50%;margin:1rem auto;height:1px;border:0;background:#ddd}h3,p,li{padding-left:20px;padding-right:20px}h3,h4,p,li,pre{font-weight:200}h1{line-height:1.4em;padding:1em;border:1px solid #ddd;border-left-width:0;border-right-width:0;min-width:8em}h1,h2{letter-spacing:.3em;text-transform:uppercase;font-weight:400;margin:.17em 0;position:relative}h2{line-height:1.1em;padding:0 0 0 .3em}h3{font-family:didot,times new roman,serif;font-style:italic;font-size:1.2em;line-height:1.6em;margin:.5em 0}h4{text-transform:uppercase;font-size:.8em;line-height:1.8em;letter-spacing:.3em;margin:1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{padding-left:.3em;color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.bespoke-backdrop{opacity:0;-webkit-transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0)scale(1.3);transform:translateZ(0)scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0);transform:translateZ(0)}.bespoke-backdrop-before{-webkit-transition-delay:.2s;transition-delay:.2s}.bespoke-backdrop-active{opacity:.5}';return a(e,{prepend:!0}),function(e){n()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},a=function(a,i){var r=e.slides[e.slide()],o=i-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,a)),a!==r&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,a))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(a),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var a=document.createElement("style");a.setAttribute("type","text/css"),"textContent"in a?a.textContent=e:a.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(a,i.childNodes[0]):i.appendChild(a)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t){t.exports=function(e){return function(t){var n,a,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],a=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),a=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(a)>50&&t[a>0?"prev":"next"]()})}}},{}],7:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),a=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=a[0],r={},o=function(e,t){a[e]&&(p("deactivate",d(i,t)),i=a[e],p("activate",d(i,t)))},s=function(e,t){return arguments.length?(p("slide",d(a[e],t))&&o(e,t),void 0):a.indexOf(i)},l=function(e,t){var n=a.indexOf(i)+e;p(e>0?"next":"prev",d(i,t))&&o(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},p=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=a.indexOf(e),t.slide=e,t},f={on:c,off:u,fire:p,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:a};return(t||[]).forEach(function(e){e(f)}),o(0),f};t.exports={from:n}},{}],8:[function(e){var t=e("bespoke"),n=e("bespoke-theme-nebula"),a=e("bespoke-keys"),i=e("bespoke-touch"),r=e("bespoke-backdrop"),o=e("bespoke-hash");t.from("article",[n(),a(),i(),r(),o()]),e("./../../bower_components/prism/prism.js"),!function(e,t){"use strict";function n(e){var n=e.keyCode,i=a.filter(function(e){return n===e.keyCode});i.length>0&&(t.body.style.zoom=i[0].factor)}var a=[{keyCode:48,factor:0},{keyCode:49,factor:1.2},{keyCode:50,factor:1.8},{keyCode:51,factor:2},{keyCode:52,factor:2.3},{keyCode:53,factor:2.8},{keyCode:54,factor:3},{keyCode:55,factor:3.5},{keyCode:56,factor:4},{keyCode:57,factor:5}],i=t.body;i.addEventListener("keypress",n)}(window,document)},{"./../../bower_components/prism/prism.js":1,bespoke:7,"bespoke-backdrop":2,"bespoke-hash":3,"bespoke-keys":4,"bespoke-theme-nebula":5,"bespoke-touch":6}]},{},[8]);