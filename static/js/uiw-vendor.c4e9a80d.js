/*! For license information please see uiw-vendor.c4e9a80d.js.LICENSE.txt */
(self.webpackChunkui_color=self.webpackChunkui_color||[]).push([[382],{411:function(e,t,r){"use strict";r.d(t,{$_:function(){return x},A:function(){return b},Gg:function(){return c},HW:function(){return h},MA:function(){return g},S7:function(){return l},XL:function(){return v}});var n=r(885),o=r(272),a=r(680),i=255,s=100,l=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),l=a-Math.min(t,r,n),c=l?a===t?(r-n)/l:a===r?2+(n-t)/l:4+(t-r)/l:0;return{h:60*(c<0?c+6:c),s:a?l/a*s:0,v:a/i*s,a:o}},c=function(e){var t=u(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},u=function(e){var t=e.h,r=e.s,n=e.v,o=e.a,a=(200-r)*n/s;return{h:t,s:a>0&&a<200?r*n/s/(a<=s?a:200-a)*s:0,l:a/2,a:o}},d=(Math.PI,function(e){var t,r=e.r,n=e.g,o=e.b;return"#"+(t=(r<<16|n<<8|o).toString(16),new Array(7-t.length).join("0")+t)}),f=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a="number"===typeof o&&(255*o|256).toString(16).slice(1);return""+d({r:t,g:r,b:n,a:o})+(a||"")},h=function(e){return l(p(e))},p=function(e){var t=e.replace("#","");/^#?/.test(e)&&3===t.length&&(e="#"+t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2));var r=new RegExp("[A-Za-z0-9]{2}","g"),o=e.match(r).map((function(e){return parseInt(e,16)})),a=(0,n.Z)(o,4),s=a[0],l=a[1],c=a[2],u=void 0===c?0:c,d=a[3];return{r:s,g:l,b:u,a:d?d/i:1}},g=function(e){var t=e.h,r=e.s,n=e.v,a=e.a,l=t/60,c=r/s,u=n/s,d=Math.floor(l)%6,f=l-Math.floor(l),h=i*u*(1-c),p=i*u*(1-c*f),g=i*u*(1-c*(1-f));u*=i;var v={};switch(d){case 0:v.r=u,v.g=g,v.b=h;break;case 1:v.r=p,v.g=u,v.b=h;break;case 2:v.r=h,v.g=u,v.b=g;break;case 3:v.r=h,v.g=p,v.b=u;break;case 4:v.r=g,v.g=h,v.b=u;break;case 5:v.r=u,v.g=h,v.b=p}return v.r=Math.round(v.r),v.g=Math.round(v.g),v.b=Math.round(v.b),(0,o.Z)({},v,{a:a})},v=function(e){var t=g(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},b=function(e){return d(g(e))},x=function(e){var t,r,n,o,i,s,l,c,d,p,v;return"string"===typeof e&&(0,a.Ff)(e)?(s=h(e),l=e):"string"!==typeof e&&(s=e),s&&(n={h:(v=s).h,s:v.s,v:v.v},i=u(s),o=g(s),c=f(o),l=b(s),r={h:(p=i).h,s:p.s,l:p.l},t={r:(d=o).r,g:d.g,b:d.b}),{rgb:t,hsl:r,hsv:n,rgba:o,hsla:i,hsva:s,hex:l,hexa:c}}},680:function(e,t,r){"use strict";r.d(t,{Ff:function(){return n}});var n=function(e){return/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e)}},984:function(e){e.exports=function(){"use strict";function e(e,t){var r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style={position:"absolute",left:"-9999px"},document.body.appendChild(r);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);r.select();var o=!1;try{o=!!document.execCommand("copy")}catch(a){o=!1}document.body.removeChild(r),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(o)}return e}()},496:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(507),l=r(364),c=function(e){var t=e.className,r=e.prefixCls,n=e.left,o=e.top,i={position:"absolute",left:n,top:o};return(0,a.useMemo)((function(){return(0,l.jsx)("div",{className:r+"-pointer "+(t||""),style:i,children:(0,l.jsx)("div",{className:r+"-fill",style:{width:18,height:18,transform:n?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})}),[t,n,o,r])},u=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],d=a.forwardRef((function(e,t){var r=e.prefixCls,d=void 0===r?"w-color-alpha":r,f=e.className,h=e.hsva,p=e.background,g=e.bgProps,v=void 0===g?{}:g,b=e.innerProps,x=void 0===b?{}:b,m=e.radius,y=void 0===m?0:m,C=e.width,w=e.height,Z=void 0===w?16:w,A=e.direction,k=void 0===A?"horizontal":A,j=e.style,N=e.onChange,R=e.pointer,S=(0,o.Z)(e,u),B=(0,a.useCallback)((function(e){N&&N((0,n.Z)({},h,{a:"horizontal"===k?e.left:e.top}),e)}),[h]),E=(0,i.Gg)(Object.assign({},h,{a:1})),L="linear-gradient(to "+("horizontal"===k?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+E+" 100%)",M={};return"horizontal"===k?M.left=100*h.a+"%":M.top=100*h.a+"%",(0,l.jsxs)("div",(0,n.Z)({},S,{className:[d,d+"-"+k,f||""].filter(Boolean).join(" "),style:(0,n.Z)({borderRadius:y,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},j,{position:"relative"},{width:C,height:Z}),ref:t,children:[(0,l.jsx)("div",(0,n.Z)({},v,{style:(0,n.Z)({inset:0,position:"absolute",background:p||L,borderRadius:y},v.style)})),(0,l.jsx)(s.ZP,(0,n.Z)({},x,{style:(0,n.Z)({},x.style,{inset:0,zIndex:1,position:"absolute"}),onMove:B,onDown:B,children:a.createElement(R||c,(0,n.Z)({prefixCls:d},M))}))]}))}));d.displayName="Aplha";var f=d},226:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(680),l=r(621),c=r(364);function u(e){var t=e.style,r=e.title,o=e.checked,i=e.color,s=e.onClick,l=e.rectProps,u=(0,a.useRef)(null),d=(0,a.useCallback)((function(e){u.current.style.transform="scale(1.2)"}),[]),f=(0,a.useCallback)((function(e){u.current.style.transform="scale(1)"}),[]);return(0,c.jsx)("div",{ref:u,onClick:s,onMouseEnter:d,onMouseLeave:f,title:r,style:(0,n.Z)({},t,{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:3,borderRadius:"50%",marginRight:12,marginBottom:12,boxSizing:"border-box",transform:"scale(1)",boxShadow:i+" 0px 0px "+(o?5:0)+"px",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"}),children:(0,c.jsx)("div",(0,n.Z)({},l,{style:(0,n.Z)({height:o?"100%":0,width:o?"100%":0,borderRadius:"50%",backgroundColor:"#fff",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},l.style)}))})}var d=["prefixCls","className","color","colors","rectProps","onChange"],f=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-circle":r,f=e.className,h=e.color,p=e.colors,g=void 0===p?[]:p,v=e.rectProps,b=void 0===v?{}:v,x=e.onChange,m=(0,o.Z)(e,d),y="string"===typeof h&&(0,s.Ff)(h)?(0,i.HW)(h):h||{},C=h?(0,i.A)(y):"";return(0,c.jsx)(l.Z,(0,n.Z)({ref:t,colors:g,color:C},m,{className:[a,f].filter(Boolean).join(" "),rectRender:function(e){var t=(0,n.Z)({},e);return(0,c.jsx)(u,(0,n.Z)({},t,{rectProps:b}))},onChange:function(e){x&&x((0,i.$_)(e))}}))}));f.displayName="Circle";var h=f},495:function(e,t,r){"use strict";var n=r(272),o=r(366),a=r(879),i=r(411),s=r(496),l=r(364),c=["prefixCls","className","onChange","direction","hsva"],u=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-saturation":r,u=e.className,d=e.onChange,f=e.direction,h=void 0===f?"horizontal":f,p=e.hsva,g=(0,o.Z)(e,c),v=(0,i.Gg)(Object.assign({},p,{a:1,s:100,v:100}));return(0,l.jsx)(s.Z,(0,n.Z)({ref:t},g,{className:a+" "+(u||""),hsva:{h:p.h,s:100,v:p.v,a:1-p.v/100},direction:h,background:"linear-gradient(to "+("horizontal"===h?"right":"bottom")+", "+v+", rgb(0, 0, 0))",onChange:function(e,t){d&&d({v:"horizontal"===h?100-100*t.left:100-100*t.top,s:100})}}))}));u.displayName="ShadeSlider",t.Z=u},384:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(885),o=r(272),a=r(366),i=r(879),s=r(411),l=r(507),c=r(364),u=function(e){var t=e.className,r=e.color,n=e.left,o=e.top,a=e.prefixCls,s={position:"absolute",top:o,left:n};return(0,i.useMemo)((function(){return(0,c.jsx)("div",{className:a+"-pointer "+(t||""),style:s,children:(0,c.jsx)("div",{className:a+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[o,n,r,t,a])},d=["prefixCls","radius","pointer","className","style","hsva","onChange"],f=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-saturation":r,f=e.radius,h=void 0===f?0:f,p=e.pointer,g=e.className,v=e.style,b=e.hsva,x=e.onChange,m=(0,a.Z)(e,d),y=(0,o.Z)({width:200,height:200,borderRadius:h},v,{position:"relative"}),C=function(e,t){x&&x({h:b.h,s:100*e.left,v:100*(1-e.top),a:b.a})},w={top:100-b.v+"%",left:b.s+"%",color:(0,s.Gg)(b)};return(0,c.jsx)(l.ZP,(0,o.Z)({className:[n,g||""].filter(Boolean).join(" ")},m,{style:(0,o.Z)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+b.h+", 100%, 50%))"},y),ref:t,onMove:C,onDown:C,children:i.createElement(p||u,(0,o.Z)({prefixCls:n},w))}))}));f.displayName="Saturation";var h=f,p=r(496),g=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],v=i.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-editable-input":r,l=e.placement,u=void 0===l?"bottom":l,d=e.label,f=e.value,h=e.className,p=e.style,v=e.labelStyle,b=e.inputStyle,x=e.onChange,m=e.onBlur,y=(0,a.Z)(e,g),C=(0,i.useState)(f),w=(0,n.Z)(C,2),Z=w[0],A=w[1],k=(0,i.useRef)(!1);(0,i.useEffect)((function(){e.value!==Z&&(k.current||A(e.value))}),[e.value]);var j={};return"bottom"===u&&(j.flexDirection="column"),"top"===u&&(j.flexDirection="column-reverse"),"left"===u&&(j.flexDirection="row-reverse"),(0,c.jsxs)("div",{className:[s,h||""].filter(Boolean).join(" "),style:(0,o.Z)({position:"relative",alignItems:"center",display:"flex",fontSize:11},j,p),children:[(0,c.jsx)("input",(0,o.Z)({ref:t,value:Z,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&x&&x(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||x&&x(e,n),A(r)},onBlur:function(t){k.current=!1,A(e.value),m&&m(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},y,{style:(0,o.Z)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},b)})),d&&(0,c.jsx)("span",{style:(0,o.Z)({color:"rgb(153, 153, 153)",textTransform:"capitalize"},v),children:d})]})}));v.displayName="EditableInput";var b=v,x=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],m=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input-rgba":r,i=e.hsva,l=e.placement,u=void 0===l?"bottom":l,d=e.rProps,f=void 0===d?{}:d,h=e.gProps,p=void 0===h?{}:h,g=e.bProps,v=void 0===g?{}:g,m=e.aProps,y=void 0===m?{}:m,C=e.className,w=e.style,Z=e.onChange,A=(0,a.Z)(e,x),k=i?(0,s.MA)(i):{};function j(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var N=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},k,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},k,{r:e})))),"g"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},k,{g:e})))),"b"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},k,{b:e})))))};return(0,c.jsxs)("div",(0,o.Z)({ref:t,className:[n,C||""].filter(Boolean).join(" ")},A,{style:(0,o.Z)({fontSize:11,display:"flex"},w),children:[(0,c.jsx)(b,(0,o.Z)({label:"R",value:k.r||0,onBlur:j,placement:u,onChange:function(e,t){return N(t,"r",e)}},f,{style:(0,o.Z)({},f.style)})),(0,c.jsx)(b,(0,o.Z)({label:"G",value:k.g||0,onBlur:j,placement:u,onChange:function(e,t){return N(t,"g",e)}},p,{style:(0,o.Z)({marginLeft:5},f.style)})),(0,c.jsx)(b,(0,o.Z)({label:"B",value:k.b||0,onBlur:j,placement:u,onChange:function(e,t){return N(t,"b",e)}},v,{style:(0,o.Z)({marginLeft:5},v.style)})),y&&(0,c.jsx)(b,(0,o.Z)({label:"A",value:k.a?parseInt(String(100*k.a),10):0,onBlur:j,placement:u,onChange:function(e,t){return N(t,"a",e)}},y,{style:(0,o.Z)({marginLeft:5},y.style)}))]}))}));m.displayName="EditableInputRGBA";var y=m,C=["prefixCls","className","hue","onChange","direction"],w=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-hue":r,i=e.className,s=e.hue,l=void 0===s?0:s,u=e.onChange,d=e.direction,f=void 0===d?"horizontal":d,h=(0,a.Z)(e,C);return(0,c.jsx)(p.Z,(0,o.Z)({ref:t,className:n+" "+(i||"")},h,{direction:f,background:"linear-gradient(to "+("horizontal"===f?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:l,s:100,v:100,a:l/360},onChange:function(e,t){u&&u({h:"horizontal"===f?360*t.left:360*t.top})}}))}));w.displayName="Hue";var Z=w,A=r(680),k=r(621),j=["prefixCls","className","onChange","width","presetColors","color","editableDisable","style"],N=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],R=function(e){return(0,c.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},S=i.forwardRef((function(e,t){var r=e.prefixCls,l=void 0===r?"w-color-sketch":r,u=e.className,d=e.onChange,f=e.width,g=void 0===f?218:f,v=e.presetColors,x=void 0===v?N:v,m=e.color,C=e.editableDisable,w=void 0===C||C,S=e.style,B=(0,a.Z)(e,j),E=(0,i.useState)({h:209,s:36,v:90,a:1}),L=(0,n.Z)(E,2),M=L[0],P=L[1];(0,i.useEffect)((function(){"string"===typeof m&&(0,A.Ff)(m)&&P((0,s.HW)(m)),"object"===typeof m&&P(m)}),[m]);var z=(0,i.useCallback)((function(e){P(e),d&&d((0,s.$_)(e))}),[M]);return(0,c.jsxs)("div",(0,o.Z)({},B,{className:l+" "+(u||""),ref:t,style:(0,o.Z)({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:g},S),children:[(0,c.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,c.jsx)(h,{hsva:M,style:{width:"auto",height:150},onChange:function(e){return z((0,o.Z)({},M,e,{a:M.a}))}}),(0,c.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,c.jsxs)("div",{style:{flex:1},children:[(0,c.jsx)(Z,{width:"auto",height:10,hue:M.h,pointer:R,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return z((0,o.Z)({},M,e))}}),(0,c.jsx)(p.Z,{width:"auto",height:10,hsva:M,pointer:R,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){z((0,o.Z)({},M,{a:e.a}))}})]}),(0,c.jsx)(p.Z,{width:24,height:24,hsva:M,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:(0,s.XL)(M),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return(0,c.jsx)(i.Fragment,{})}})]})]}),w&&(0,c.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,c.jsx)(b,{label:"Hex",value:(0,s.A)(M).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&(0,A.Ff)(r)&&/(3|6)/.test(String(r.length))&&z((0,s.HW)(r))},style:{minWidth:58}}),(0,c.jsx)(y,{hsva:M,style:{marginLeft:6},onChange:function(e){return z(e.hsva)}})]}),x&&x.length>0&&(0,c.jsx)(k.Z,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:x,color:(0,s.A)(M),onChange:function(e){return z(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));S.displayName="Sketch";var B=S},621:function(e,t,r){"use strict";var n=r(272),o=r(366),a=r(879),i=r(411),s=r(364),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=a.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-swatch":r,u=e.className,d=e.color,f=e.colors,h=void 0===f?[]:f,p=e.style,g=e.rectProps,v=void 0===g?{}:g,b=e.onChange,x=e.addonAfter,m=e.addonBefore,y=e.rectRender,C=(0,o.Z)(e,l),w=(0,n.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},v.style),Z=function(e){b&&b((0,i.HW)(e))};return(0,s.jsxs)("div",(0,n.Z)({ref:t},C,{className:[c,u||""].filter(Boolean).join(" "),style:(0,n.Z)({display:"flex",flexWrap:"wrap",position:"relative"},p),children:[m&&a.isValidElement(m)&&m,h&&Array.isArray(h)&&h.map((function(e,t){var r="",o="";"string"===typeof e&&(r=e,o=e),"object"===typeof e&&e.color&&(r=e.title||e.color,o=e.color);var i=d&&d.toLocaleLowerCase()===o.toLocaleLowerCase();if(y)return y({key:t,title:r,color:o,checked:!!i,style:(0,n.Z)({},w,{background:o}),onClick:function(){return Z(o)}});var l=v.children&&a.isValidElement(v.children)?a.cloneElement(v.children,{color:o,checked:i}):null;return(0,s.jsx)("div",(0,n.Z)({tabIndex:0,title:r,onClick:function(){return Z(o)}},v,{children:l,style:(0,n.Z)({},w,{background:o})}),t)})),x&&a.isValidElement(x)&&x]}))}));c.displayName="Swatch",t.Z=c},300:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(680),l=r(507),c=r(364),u=function(e){var t=e.className,r=e.color,o=e.left,i=e.top,s=e.style,l=e.prefixCls,u=(0,n.Z)({},s,{position:"absolute",top:i,left:o});return(0,a.useMemo)((function(){return(0,c.jsx)("div",{className:l+"-pointer "+(t||""),style:u,children:(0,c.jsx)("div",{className:l+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,c.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})}),[i,o,r,t,l])},d=2*Math.PI,f=function(e,t){return Math.sqrt(e*e+t*t)};function h(e){var t=e.width,r=void 0===t?0:t,n=r/2;return{width:r,radius:n,cx:n,cy:n}}function p(e){var t=e.width;return(void 0===t?0:t)/2}function g(e,t,r){var n,o=e.angle||0,a=e.direction;return r&&"clockwise"===a?t=o+t:"clockwise"===a?t=360-o+t:r&&"anticlockwise"===a?t=o+180-t:"anticlockwise"===a&&(t=o-t),(t%(n=360)+n)%n}var v=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"],b=a.forwardRef((function(e,t){var r=e.prefixCls,b=void 0===r?"w-color-wheel":r,x=(e.radius,e.pointer),m=e.className,y=e.style,C=e.width,w=void 0===C?200:C,Z=e.height,A=void 0===Z?200:Z,k=e.direction,j=void 0===k?"anticlockwise":k,N=e.angle,R=void 0===N?180:N,S=e.color,B=e.onChange,E=(0,o.Z)(e,v),L="string"===typeof S&&(0,s.Ff)(S)?(0,i.HW)(S):S||{},M=S?(0,i.A)(L):"",P=function(e,t){var r=h(e),n=r.cx,o=r.cy,a=p(e),i=(180+g(e,t.h,!0))*(d/360),s=t.s/100*a,l="clockwise"===e.direction?-1:1;return{x:n+s*Math.cos(i)*l,y:o+s*Math.sin(i)*l}}({width:w},L),z={top:"0",left:"0",color:M},D=function(e,t){var r=function(e,t,r){var n=h(e),o=n.cx,a=n.cy,i=p(e);t=o-t,r=a-r;var s=g(e,Math.atan2(-r,-t)*(360/d)),l=Math.min(f(t,r),i);return{h:Math.round(s),s:Math.round(100/i*l)}}({width:w},w-e.x,A-e.y),n={h:r.h,s:r.s,v:L.v,a:L.a};B&&B((0,i.$_)(n))};return(0,c.jsxs)(l.ZP,(0,n.Z)({className:[b,m||""].filter(Boolean).join(" ")},E,{style:(0,n.Z)({},y,{position:"relative",width:w,height:A}),ref:t,onMove:D,onDown:D,children:[a.createElement(x||u,(0,n.Z)({prefixCls:b,style:{zIndex:1,transform:"translate("+P.x+"px, "+P.y+"px)"}},z)),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===j?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(R+90)+"deg)",inset:0}}),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,c.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof L.v?1-L.v/100:0}})]}))}));b.displayName="Wheel";var x=b},507:function(e,t,r){"use strict";r.d(t,{ZP:function(){return g}});var n=r(885),o=r(272),a=r(366),i=r(879);function s(e){var t=(0,i.useRef)(e);return(0,i.useEffect)((function(){t.current=e})),(0,i.useCallback)((function(e,r){return t.current&&t.current(e,r)}),[])}var l=function(e){return"touches"in e},c=function(e){!l(e)&&e.preventDefault&&e.preventDefault()},u=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},d=function(e,t){var r=e.getBoundingClientRect(),n=l(t)?t.touches[0]:t;return{left:u((n.pageX-(r.left+window.pageXOffset))/r.width),top:u((n.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:n.pageX-(r.left+window.pageXOffset),y:n.pageY-(r.top+window.pageYOffset)}},f=r(364),h=["prefixCls","className","onMove","onDown"],p=i.forwardRef((function(e,t){var r=e.prefixCls,u=void 0===r?"w-color-interactive":r,p=e.className,g=e.onMove,v=e.onDown,b=(0,a.Z)(e,h),x=(0,i.useRef)(null),m=(0,i.useRef)(!1),y=(0,i.useState)(!1),C=(0,n.Z)(y,2),w=C[0],Z=C[1],A=s(g),k=s(v),j=(0,i.useCallback)((function(e){c(e),(l(e)?e.touches.length>0:e.buttons>0)&&x.current?A&&A(d(x.current,e),e):Z(!1)}),[A]),N=(0,i.useCallback)((function(){return Z(!1)}),[]),R=(0,i.useCallback)((function(e){var t=e?window.addEventListener:window.removeEventListener;t(m.current?"touchmove":"mousemove",j),t(m.current?"touchend":"mouseup",N)}),[]);(0,i.useEffect)((function(){return R(w),function(){w&&R(!1)}}),[w,R]);var S=(0,i.useCallback)((function(e){c(e.nativeEvent),function(e){return!(m.current&&!l(e))&&(m.current=l(e),!0)}(e.nativeEvent)&&(k&&k(d(x.current,e.nativeEvent),e.nativeEvent),Z(!0))}),[k]);return(0,f.jsx)("div",(0,o.Z)({},b,{className:[u,p||""].filter(Boolean).join(" "),style:(0,o.Z)({},b.style,{touchAction:"none"}),ref:x,tabIndex:0,onMouseDown:S,onTouchStart:S}))}));p.displayName="Interactive";var g=p},933:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(272),o=r(366),a=(r(879),r(982)),i=r(671),s=r(144),l=r(136),c=r(104),u=r(737),d=document.createElement("template");d.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';var f=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=t.call(this)).right="0",e.shadow=e.attachShadow({mode:"open"}),e.shadow.appendChild(e.ownerDocument.importNode(d.content,!0)),e.update(),e}return(0,s.Z)(r,[{key:"setAttr",value:function(e,t){var r=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?r.lastElementChild.setAttribute("xlink:href",t):/(color|fill)/.test(e.toLocaleLowerCase())?r.firstElementChild.style[e]=t:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?r.style[e]=t:r.setAttribute(e,t)}},{key:"update",value:function(){var e=this;[].concat((0,a.Z)(this.getAttributeNames()),["right"]).forEach((function(t){var r=e.getAttribute(t)||e[t]||"";e.setAttr(t,r)}))}},{key:"attributeChangedCallback",value:function(e,t,r){t!==r&&this.setAttr(e,r)}}],[{key:"observedAttributes",get:function(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}}]),r}((0,u.Z)(HTMLElement));customElements.define("github-corners",f);var h=r(364),p=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function g(e){var t=e.size,r=void 0===t?80:t,a=e.fixed,i=void 0!==a&&a,s=e.bottom,l=e.zIndex,c=e.style,u=e.bgColor,d=void 0===u?"#151513":u,f=e.color,g=void 0===f?"#fff":f,v=e.position,b=void 0===v?"right":v,x=(0,o.Z)(e,p),m="left"===b?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return s?(m.bottom=0,m.top="initial",m.transform="left"===b?"scale(-1, -1)":"scale(1, -1)"):(m.bottom="initial",m.top=0),(0,h.jsx)("github-corners",(0,n.Z)({target:"__blank",width:r,height:r,href:e.href,position:i?"fixed":"absolute","z-index":l,style:c,fill:d,color:g},m,x))}}}]);
//# sourceMappingURL=uiw-vendor.c4e9a80d.js.map