(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},8894:function(e,t,n){"use strict";n.d(t,{y:function(){return f},Z:function(){return d}});var r=n(5893),a=n(9008),o=n(536),i=n.n(o),l=n(5696),s=n.n(l),c=n(1664),u="\u59dc\u59dc",f="Next.js Sample Website";function d(e){var t=e.children,n=e.home;return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.now.sh/".concat(encodeURI(f),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"og:title",content:f}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)("header",{className:i().header,children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/images/profile.jpg",className:"".concat(i().headerHomeImage," ").concat(s().borderCircle),alt:u}),(0,r.jsx)("h1",{className:s().heading2Xl,children:u})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/profile.jpg",className:"".concat(i().headerImage," ").concat(s().borderCircle),alt:u})})}),(0,r.jsx)("h2",{className:s().headingLg,children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{className:s().colorInherit,children:u})})})]})}),(0,r.jsx)("main",{children:t}),!n&&(0,r.jsx)("div",{className:i().backToHome,children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back to home"})})})]})}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1003),s=n(880),c=n(9246);var u={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,h=o.as,g=e.children,m=e.replace,p=e.shallow,_=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var v=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,x=a(c.useIntersection({rootMargin:"200px"}),2),j=x[0],b=x[1],w=i.default.useCallback((function(e){j(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,j]);i.default.useEffect((function(){var e=b&&n&&l.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(r,d,h,{locale:t})}),[h,d,b,y,n,r]);var I={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}))}(e,r,d,h,m,p,_,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:r&&r.locale,N=r&&r.isLocaleDomain&&l.getDomainLocale(h,L,r&&r.locales,r&&r.domainLocales);I.href=N||l.addBasePath(l.addLocale(h,L,r&&r.defaultLocale))}return i.default.cloneElement(t,I)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],g=a(o.useState(t?t.current:null),2),m=g[0],p=g[1],_=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:o,elements:a}),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&p(t.current)}),[t]),[_,d]};var o=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return c}});var r=n(5893),a=n(9008),o=n(8894),i=n(5696),l=n.n(i),s=(n(4298),!0);function c(e){var t=e.allPostsData;return console.log(t,"index-allpost==>"),(0,r.jsxs)(o.Z,{home:!0,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:o.y}),(0,r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-TY4SCFLTD6"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-TY4SCFLTD6'); \n          "}})]}),(0,r.jsxs)("section",{className:l().headingMd,children:[(0,r.jsx)("p",{children:"[Your Self Introduction]"}),(0,r.jsxs)("p",{children:["(This is a sample website - you\u2019ll be building a site like this on"," ",(0,r.jsx)("a",{href:"https://www.nextjs.cn/learn",children:"our Next.js tutorial"}),".)"]})]}),(0,r.jsxs)("section",{className:"".concat(l().headingMd," ").concat(l().padding1px),children:[(0,r.jsx)("h2",{className:l().headingLg,children:"Blog"}),(0,r.jsx)("ul",{className:l().list,children:t.map((function(e){var t=e.id,n=e.date,a=e.title;return(0,r.jsxs)("li",{className:l().listItem,children:[a,(0,r.jsx)("br",{}),t,(0,r.jsx)("br",{}),n]},t)}))})]})]})}},536:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",headerImage:"layout_headerImage__b37zH",headerHomeImage:"layout_headerHomeImage__qKKc7",backToHome:"layout_backToHome__9sjx_"}},5696:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4298:function(e,t,n){n(3573)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);