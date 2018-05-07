/*! URI.js v1.19.1 http://medialize.github.io/URI.js/ */
/* build contains: punycode.js, URI.js, jquery.URI.js */
/*
 https://mths.be/punycode v1.4.0 by @mathias  URI.js - Mutating URLs

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 URI.js - Mutating URLs
 jQuery Plugin

 Version: 1.19.1

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/jquery-uri-plugin.html

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

*/
(function(k){function m(c){throw new RangeError(H[c]);}function t(c,g){for(var h=c.length,l=[];h--;)l[h]=g(c[h]);return l}function n(c,g){var h=c.split("@"),l="";1<h.length&&(l=h[0]+"@",c=h[1]);c=c.replace(G,".");h=c.split(".");h=t(h,g).join(".");return l+h}function c(c){for(var g=[],h=0,l=c.length,z,a;h<l;)z=c.charCodeAt(h++),55296<=z&&56319>=z&&h<l?(a=c.charCodeAt(h++),56320==(a&64512)?g.push(((z&1023)<<10)+(a&1023)+65536):(g.push(z),h--)):g.push(z);return g}function v(c){return t(c,function(c){var g=
"";65535<c&&(c-=65536,g+=u(c>>>10&1023|55296),c=56320|c&1023);return g+=u(c)}).join("")}function w(c,g){return c+22+75*(26>c)-((0!=g)<<5)}function q(c,h,l){var k=0;c=l?g(c/700):c>>1;for(c+=g(c/h);455<c;k+=36)c=g(c/35);return g(k+36*c/(c+38))}function C(c){var h=[],l=c.length,k=0,p=128,a=72,b,d;var e=c.lastIndexOf("-");0>e&&(e=0);for(b=0;b<e;++b)128<=c.charCodeAt(b)&&m("not-basic"),h.push(c.charCodeAt(b));for(e=0<e?e+1:0;e<l;){b=k;var f=1;for(d=36;;d+=36){e>=l&&m("invalid-input");var r=c.charCodeAt(e++);
r=10>r-48?r-22:26>r-65?r-65:26>r-97?r-97:36;(36<=r||r>g((2147483647-k)/f))&&m("overflow");k+=r*f;var F=d<=a?1:d>=a+26?26:d-a;if(r<F)break;r=36-F;f>g(2147483647/r)&&m("overflow");f*=r}f=h.length+1;a=q(k-b,f,0==b);g(k/f)>2147483647-p&&m("overflow");p+=g(k/f);k%=f;h.splice(k++,0,p)}return v(h)}function A(h){var l,k,p,n=[];h=c(h);var a=h.length;var b=128;var d=0;var e=72;for(p=0;p<a;++p){var f=h[p];128>f&&n.push(u(f))}for((l=k=n.length)&&n.push("-");l<a;){var r=2147483647;for(p=0;p<a;++p)f=h[p],f>=b&&
f<r&&(r=f);var F=l+1;r-b>g((2147483647-d)/F)&&m("overflow");d+=(r-b)*F;b=r;for(p=0;p<a;++p)if(f=h[p],f<b&&2147483647<++d&&m("overflow"),f==b){var D=d;for(r=36;;r+=36){f=r<=e?1:r>=e+26?26:r-e;if(D<f)break;var I=D-f;D=36-f;n.push(u(w(f+I%D,0)));D=g(I/D)}n.push(u(w(D,0)));e=q(d,F,l==k);d=0;++l}++d;++b}return n.join("")}var B="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,l="object"==typeof global&&global;if(l.global===l||l.window===
l||l.self===l)k=l;var p=/^xn--/,E=/[^\x20-\x7E]/,G=/[\x2E\u3002\uFF0E\uFF61]/g,H={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},g=Math.floor,u=String.fromCharCode,x;var y={version:"1.3.2",ucs2:{decode:c,encode:v},decode:C,encode:A,toASCII:function(c){return n(c,function(c){return E.test(c)?"xn--"+A(c):c})},toUnicode:function(c){return n(c,function(c){return p.test(c)?C(c.slice(4).toLowerCase()):
c})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return y});else if(B&&h)if(module.exports==B)h.exports=y;else for(x in y)y.hasOwnProperty(x)&&(B[x]=y[x]);else k.punycode=y})(this);
(function(k,m){"object"===typeof module&&module.exports?module.exports=m(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],m):k.URI=m(k.punycode,k.IPv6,k.SecondLevelDomains,k)})(this,function(k,m,t,n){function c(a,b){var d=1<=arguments.length,e=2<=arguments.length;if(!(this instanceof c))return d?e?new c(a,b):new c(a):new c;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&d)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==b?this.absoluteTo(b):this}function v(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function w(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function q(a){return"Array"===w(a)}function C(a,b){var d={},c;if("RegExp"===w(b))d=null;else if(q(b)){var f=0;for(c=b.length;f<c;f++)d[b[f]]=!0}else d[b]=
!0;f=0;for(c=a.length;f<c;f++)if(d&&void 0!==d[a[f]]||!d&&b.test(a[f]))a.splice(f,1),c--,f--;return a}function A(a,b){var d;if(q(b)){var c=0;for(d=b.length;c<d;c++)if(!A(a,b[c]))return!1;return!0}var f=w(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===f){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function B(a,b){if(!q(a)||!q(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var d=0,c=a.length;d<c;d++)if(a[d]!==b[d])return!1;return!0}function h(a){return a.replace(/^\/+|\/+$/g,
"")}function l(a){return escape(a)}function p(a){return encodeURIComponent(a).replace(/[!'()*]/g,l).replace(/\*/g,"%2A")}function E(a){return function(b,d){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!d);return this}}function G(a,b){return function(d,c){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===b&&(d=d.substring(1)));this._parts[a]=d;this.build(!c);return this}}var H=n&&n.URI;c.version="1.19.1";var g=c.prototype,u=Object.prototype.hasOwnProperty;
c._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:c.preventInvalidHostname,duplicateQueryParameters:c.duplicateQueryParameters,escapeQuerySpace:c.escapeQuerySpace}};c.preventInvalidHostname=!1;c.duplicateQueryParameters=!1;c.escapeQuerySpace=!0;c.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;c.idn_expression=/[^a-z0-9\._-]/i;c.punycode_expression=/(xn--)/i;c.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
c.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
c.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;c.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};c.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};c.hostProtocols=["http","https"];c.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;c.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};c.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();if("input"!==b||"image"===a.type)return c.domAttributes[b]}};c.encode=p;c.decode=decodeURIComponent;c.iso8859=
function(){c.encode=escape;c.decode=unescape};c.unicode=function(){c.encode=p;c.decode=decodeURIComponent};c.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};c.encodeQuery=function(a,b){var d=c.encode(a+"");void 0===b&&(b=c.escapeQuerySpace);return b?d.replace(/%20/g,"+"):d};c.decodeQuery=
function(a,b){a+="";void 0===b&&(b=c.escapeQuerySpace);try{return c.decode(b?a.replace(/\+/g,"%20"):a)}catch(d){return a}};var x={encode:"encode",decode:"decode"},y,z=function(a,b){return function(d){try{return c[b](d+"").replace(c.characters[a][b].expression,function(d){return c.characters[a][b].map[d]})}catch(e){return d}}};for(y in x)c[y+"PathSegment"]=z("pathname",x[y]),c[y+"UrnPathSegment"]=z("urnpath",x[y]);x=function(a,b,d){return function(e){var f=d?function(a){return c[b](c[d](a))}:c[b];
e=(e+"").split(a);for(var g=0,h=e.length;g<h;g++)e[g]=f(e[g]);return e.join(a)}};c.decodePath=x("/","decodePathSegment");c.decodeUrnPath=x(":","decodeUrnPathSegment");c.recodePath=x("/","encodePathSegment","decode");c.recodeUrnPath=x(":","encodeUrnPathSegment","decode");c.encodeReserved=z("reserved","encode");c.parse=function(a,b){b||(b={preventInvalidHostname:c.preventInvalidHostname});var d=a.indexOf("#");-1<d&&(b.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(b.query=
a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=c.parseAuthority(a,b)):(d=a.indexOf(":"),-1<d&&(b.protocol=a.substring(0,d)||null,b.protocol&&!b.protocol.match(c.protocol_expression)?b.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=c.parseAuthority(a,b)):(a=a.substring(d+1),b.urn=!0)));b.path=a;return b};c.parseHost=function(a,b){a||(a="");a=a.replace(/\\/g,"/");var d=a.indexOf("/");-1===d&&(d=a.length);if("["===a.charAt(0)){var e=
a.indexOf("]");b.hostname=a.substring(1,e)||null;b.port=a.substring(e+2,d)||null;"/"===b.port&&(b.port=null)}else{var f=a.indexOf(":");e=a.indexOf("/");f=a.indexOf(":",f+1);-1!==f&&(-1===e||f<e)?(b.hostname=a.substring(0,d)||null,b.port=null):(e=a.substring(0,d).split(":"),b.hostname=e[0]||null,b.port=e[1]||null)}b.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);b.preventInvalidHostname&&c.ensureValidHostname(b.hostname,b.protocol);b.port&&c.ensureValidPort(b.port);return a.substring(d)||
"/"};c.parseAuthority=function(a,b){a=c.parseUserinfo(a,b);return c.parseHost(a,b)};c.parseUserinfo=function(a,b){var d=a.indexOf("/"),e=a.lastIndexOf("@",-1<d?d:a.length-1);-1<e&&(-1===d||e<d)?(d=a.substring(0,e).split(":"),b.username=d[0]?c.decode(d[0]):null,d.shift(),b.password=d[0]?c.decode(d.join(":")):null,a=a.substring(e+1)):(b.username=null,b.password=null);return a};c.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},e=a.split("&"),
f=e.length,g,h,l=0;l<f;l++)if(g=e[l].split("="),h=c.decodeQuery(g.shift(),b),g=g.length?c.decodeQuery(g.join("="),b):null,u.call(d,h)){if("string"===typeof d[h]||null===d[h])d[h]=[d[h]];d[h].push(g)}else d[h]=g;return d};c.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=c.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===
typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};c.buildHost=function(a){var b="";if(a.hostname)b=c.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};c.buildAuthority=function(a){return c.buildUserinfo(a)+c.buildHost(a)};c.buildUserinfo=function(a){var b="";a.username&&(b+=c.encode(a.username));a.password&&(b+=":"+c.encode(a.password));b&&(b+="@");return b};c.buildQuery=function(a,b,d){var e="",f,g;for(f in a)if(u.call(a,
f)&&f)if(q(a[f])){var h={};var l=0;for(g=a[f].length;l<g;l++)void 0!==a[f][l]&&void 0===h[a[f][l]+""]&&(e+="&"+c.buildQueryParameter(f,a[f][l],d),!0!==b&&(h[a[f][l]+""]=!0))}else void 0!==a[f]&&(e+="&"+c.buildQueryParameter(f,a[f],d));return e.substring(1)};c.buildQueryParameter=function(a,b,d){return c.encodeQuery(a,d)+(null!==b?"="+c.encodeQuery(b,d):"")};c.addQuery=function(a,b,d){if("object"===typeof b)for(var e in b)u.call(b,e)&&c.addQuery(a,e,b[e]);else if("string"===typeof b)void 0===a[b]?
a[b]=d:("string"===typeof a[b]&&(a[b]=[a[b]]),q(d)||(d=[d]),a[b]=(a[b]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};c.setQuery=function(a,b,d){if("object"===typeof b)for(var e in b)u.call(b,e)&&c.setQuery(a,e,b[e]);else if("string"===typeof b)a[b]=void 0===d?null:d;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");};c.removeQuery=function(a,b,d){var e;if(q(b))for(d=0,e=b.length;d<e;d++)a[b[d]]=
void 0;else if("RegExp"===w(b))for(e in a)b.test(e)&&(a[e]=void 0);else if("object"===typeof b)for(e in b)u.call(b,e)&&c.removeQuery(a,e,b[e]);else if("string"===typeof b)void 0!==d?"RegExp"===w(d)?!q(a[b])&&d.test(a[b])?a[b]=void 0:a[b]=C(a[b],d):a[b]!==String(d)||q(d)&&1!==d.length?q(a[b])&&(a[b]=C(a[b],d)):a[b]=void 0:a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};c.hasQuery=function(a,b,d,e){switch(w(b)){case "String":break;
case "RegExp":for(var f in a)if(u.call(a,f)&&b.test(f)&&(void 0===d||c.hasQuery(a,f,d)))return!0;return!1;case "Object":for(var g in b)if(u.call(b,g)&&!c.hasQuery(a,g,b[g]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(w(d)){case "Undefined":return b in a;case "Boolean":return a=!(q(a[b])?!a[b].length:!a[b]),d===a;case "Function":return!!d(a[b],b,a);case "Array":return q(a[b])?(e?A:B)(a[b],d):!1;case "RegExp":return q(a[b])?
e?A(a[b],d):!1:!(!a[b]||!a[b].match(d));case "Number":d=String(d);case "String":return q(a[b])?e?A(a[b],d):!1:a[b]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};c.joinPaths=function(){for(var a=[],b=[],d=0,e=0;e<arguments.length;e++){var f=new c(arguments[e]);a.push(f);f=f.segment();for(var g=0;g<f.length;g++)"string"===typeof f[g]&&b.push(f[g]),f[g]&&d++}if(!b.length||!d)return new c("");b=(new c("")).segment(b);
""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||b.path("/"+b.path());return b.normalize()};c.commonPath=function(a,b){var d=Math.min(a.length,b.length),c;for(c=0;c<d;c++)if(a.charAt(c)!==b.charAt(c)){c--;break}if(1>c)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(c)||"/"!==b.charAt(c))c=a.substring(0,c).lastIndexOf("/");return a.substring(0,c+1)};c.withinString=function(a,b,d){d||(d={});var e=d.start||c.findUri.start,f=d.end||c.findUri.end,g=d.trim||c.findUri.trim,h=
d.parens||c.findUri.parens,l=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var k=e.exec(a);if(!k)break;var p=k.index;if(d.ignoreHtml){var m=a.slice(Math.max(p-3,0),p);if(m&&l.test(m))continue}var n=p+a.slice(p).search(f);m=a.slice(p,n);for(n=-1;;){var q=h.exec(m);if(!q)break;n=Math.max(n,q.index+q[0].length)}m=-1<n?m.slice(0,n)+m.slice(n).replace(g,""):m.replace(g,"");m.length<=k[0].length||d.ignore&&d.ignore.test(m)||(n=p+m.length,k=b(m,p,n,a),void 0===k?e.lastIndex=n:(k=String(k),a=a.slice(0,p)+k+a.slice(n),
e.lastIndex=p+k.length))}e.lastIndex=0;return a};c.ensureValidHostname=function(a,b){var d=!!a,e=!1;b&&(e=A(c.hostProtocols,b));if(e&&!d)throw new TypeError("Hostname cannot be empty, if protocol is "+b);if(a&&a.match(c.invalid_hostname_characters)){if(!k)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(k.toASCII(a).match(c.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_]');
}};c.ensureValidPort=function(a){if(a){var b=Number(a);if(!(/^[0-9]+$/.test(b)&&0<b&&65536>b))throw new TypeError('Port "'+a+'" is not a valid port');}};c.noConflict=function(a){if(a)return a={URI:this.noConflict()},n.URITemplate&&"function"===typeof n.URITemplate.noConflict&&(a.URITemplate=n.URITemplate.noConflict()),n.IPv6&&"function"===typeof n.IPv6.noConflict&&(a.IPv6=n.IPv6.noConflict()),n.SecondLevelDomains&&"function"===typeof n.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=n.SecondLevelDomains.noConflict()),
a;n.URI===this&&(n.URI=H);return this};g.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=c.build(this._parts),this._deferred_build=!1;return this};g.clone=function(){return new c(this)};g.valueOf=g.toString=function(){return this.build(!1)._string};g.protocol=E("protocol");g.username=E("username");g.password=E("password");g.hostname=E("hostname");g.port=E("port");g.query=G("query","?");g.fragment=G("fragment","#");g.search=function(a,b){var d=
this.query(a,b);return"string"===typeof d&&d.length?"?"+d:d};g.hash=function(a,b){var d=this.fragment(a,b);return"string"===typeof d&&d.length?"#"+d:d};g.pathname=function(a,b){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?c.decodeUrnPath:c.decodePath)(d):d}this._parts.path=this._parts.urn?a?c.recodeUrnPath(a):"":a?c.recodePath(a):"/";this.build(!b);return this};g.path=g.pathname;g.href=function(a,b){var d;if(void 0===a)return this.toString();
this._string="";this._parts=c._parts();var e=a instanceof c,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=c.getDomAttribute(a),a=a[f]||"",f=!1);!e&&f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=c.parse(String(a),this._parts);else if(e||f){e=e?a._parts:a;for(d in e)"query"!==d&&u.call(this._parts,d)&&(this._parts[d]=e[d]);e.query&&this.query(e.query,!1)}else throw new TypeError("invalid input");this.build(!b);return this};
g.is=function(a){var b=!1,d=!1,e=!1,f=!1,g=!1,h=!1,l=!1,k=!this._parts.urn;this._parts.hostname&&(k=!1,d=c.ip4_expression.test(this._parts.hostname),e=c.ip6_expression.test(this._parts.hostname),b=d||e,g=(f=!b)&&t&&t.has(this._parts.hostname),h=f&&c.idn_expression.test(this._parts.hostname),l=f&&c.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return k;case "absolute":return!k;case "domain":case "name":return f;case "sld":return g;case "ip":return b;case "ip4":case "ipv4":case "inet4":return d;
case "ip6":case "ipv6":case "inet6":return e;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return l}return null};var J=g.protocol,K=g.port,L=g.hostname;g.protocol=function(a,b){if(a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(c.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return J.call(this,a,b)};g.scheme=g.protocol;g.port=function(a,b){if(this._parts.urn)return void 0===
a?"":this;void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),c.ensureValidPort(a)));return K.call(this,a,b)};g.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==c.parseHost(a,d))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=d.hostname;this._parts.preventInvalidHostname&&c.ensureValidHostname(a,this._parts.protocol)}return L.call(this,
a,b)};g.origin=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=this.protocol();return this.authority()?(d?d+"://":"")+this.authority():""}d=c(a);this.protocol(d.protocol()).authority(d.authority()).build(!b);return this};g.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?c.buildHost(this._parts):"";if("/"!==c.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');
this.build(!b);return this};g.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?c.buildAuthority(this._parts):"";if("/"!==c.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};g.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var d=c.buildUserinfo(this._parts);return d?d.substring(0,d.length-1):d}"@"!==a[a.length-1]&&
(a+="@");c.parseUserinfo(a,this._parts);this.build(!b);return this};g.resource=function(a,b){if(void 0===a)return this.path()+this.search()+this.hash();var d=c.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!b);return this};g.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+v(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&c.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(d,a);this.build(!b);return this};g.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||
this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(b).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");c.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(v(this.domain())+
"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!b);return this};g.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.lastIndexOf(".");d=this._parts.hostname.substring(d+1);return!0!==b&&t&&t.list[d.toLowerCase()]?t.get(this._parts.hostname)||d:d}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(t&&t.is(a))d=new RegExp(v(this.tld())+"$"),this._parts.hostname=
this._parts.hostname.replace(d,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");d=new RegExp(v(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(d,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};g.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1;d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?c.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+v(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=c.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!b);
return this};g.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/");d=this._parts.path.substring(d+1);return a?c.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=new RegExp(v(this.filename())+"$");a=c.recodePath(a);this._parts.path=this._parts.path.replace(e,a);d?this.normalizePath(b):this.build(!b);return this};g.suffix=
function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?c.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?new RegExp(v(d)+"$"):new RegExp(v("."+d)+"$");else{if(!a)return this;this._parts.path+="."+c.recodePath(a)}e&&(a=c.recodePath(a),this._parts.path=this._parts.path.replace(e,
a));this.build(!b);return this};g.segment=function(a,b,d){var c=this._parts.urn?":":"/",f=this.path(),g="/"===f.substring(0,1);f=f.split(c);void 0!==a&&"number"!==typeof a&&(d=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');g&&f.shift();0>a&&(a=Math.max(f.length+a,0));if(void 0===b)return void 0===a?f:f[a];if(null===a||void 0===f[a])if(q(b)){f=[];a=0;for(var l=b.length;a<l;a++)if(b[a].length||f.length&&f[f.length-1].length)f.length&&!f[f.length-
1].length&&f.pop(),f.push(h(b[a]))}else{if(b||"string"===typeof b)b=h(b),""===f[f.length-1]?f[f.length-1]=b:f.push(b)}else b?f[a]=h(b):f.splice(a,1);g&&f.unshift("");return this.path(f.join(c),d)};g.segmentCoded=function(a,b,d){var e;"number"!==typeof a&&(d=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,d);if(q(a)){var f=0;for(e=a.length;f<e;f++)a[f]=c.decode(a[f])}else a=void 0!==a?c.decode(a):void 0;return a}if(q(b))for(f=0,e=b.length;f<e;f++)b[f]=c.encode(b[f]);else b="string"===typeof b||b instanceof
String?c.encode(b):b;return this.segment(a,b,d)};var M=g.query;g.query=function(a,b){if(!0===a)return c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=c.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=c.buildQuery(a,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace),this.build(!b),this):M.call(this,a,b)};g.setQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var f in a)u.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&
(d=b);this.build(!d);return this};g.addQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);c.addQuery(e,a,void 0===b?null:b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=b);this.build(!d);return this};g.removeQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);c.removeQuery(e,a,b);this._parts.query=c.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(d=b);this.build(!d);return this};g.hasQuery=function(a,b,d){var e=c.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return c.hasQuery(e,a,b,d)};g.setSearch=g.setQuery;g.addSearch=g.addQuery;g.removeSearch=g.removeQuery;g.hasSearch=g.hasQuery;g.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
g.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};g.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&k?this._parts.hostname=k.toASCII(this._parts.hostname):this.is("IPv6")&&m&&(this._parts.hostname=m.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};g.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===c.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};g.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=c.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;b=c.recodePath(b);var d="";if("/"!==b.charAt(0)){var e=!0;b="/"+b}if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");e&&(d=b.substring(1).match(/^(\.\.\/)+/)||
"")&&(d=d[0]);for(;;){var f=b.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){b=b.substring(3);continue}var g=b.substring(0,f).lastIndexOf("/");-1===g&&(g=f);b=b.substring(0,g)+b.substring(f+3)}e&&this.is("relative")&&(b=d+b.substring(1));this._parts.path=b;this.build(!a);return this};g.normalizePathname=g.normalizePath;g.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(c.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};g.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};g.normalizeSearch=g.normalizeQuery;g.normalizeHash=g.normalizeFragment;g.iso8859=function(){var a=c.encode,b=c.decode;c.encode=escape;c.decode=decodeURIComponent;try{this.normalize()}finally{c.encode=a,c.decode=b}return this};g.unicode=function(){var a=c.encode,b=c.decode;c.encode=p;c.decode=unescape;try{this.normalize()}finally{c.encode=a,c.decode=b}return this};
g.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&k?(b+=k.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var d="",e=0,f=a._parts.query.split("&"),g=f.length;e<g;e++){var h=(f[e]||"").split("=");d+="&"+c.decodeQuery(h[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26");void 0!==h[1]&&(d+="="+c.decodeQuery(h[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+d.substring(1)}return b+=c.decodeQuery(a.hash(),!0)};g.absoluteTo=function(a){var b=this.clone(),d=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof c||(a=new c(a));if(b._parts.protocol)return b;b._parts.protocol=a._parts.protocol;if(this._parts.hostname)return b;for(e=0;f=d[e];e++)b._parts[f]=
a._parts[f];b._parts.path?(".."===b._parts.path.substring(-2)&&(b._parts.path+="/"),"/"!==b.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",b._parts.path=(d?d+"/":"")+b._parts.path,b.normalizePath())):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));b.build();return b};g.relativeTo=function(a){var b=this.clone().normalize();if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new c(a)).normalize();var d=
b._parts;var e=a._parts;var f=b.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return b.build();if(f===a)return d.path="",b.build();f=c.commonPath(f,a);
if(!f)return b.build();e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(f.length)||"./";return b.build()};g.equals=function(a){var b=this.clone(),d=new c(a);a={};var e;b.normalize();d.normalize();if(b.toString()===d.toString())return!0;var f=b.query();var g=d.query();b.query("");d.query("");if(b.toString()!==d.toString()||f.length!==g.length)return!1;b=c.parseQuery(f,this._parts.escapeQuerySpace);g=c.parseQuery(g,this._parts.escapeQuerySpace);for(e in b)if(u.call(b,
e)){if(!q(b[e])){if(b[e]!==g[e])return!1}else if(!B(b[e],g[e]))return!1;a[e]=!0}for(e in g)if(u.call(g,e)&&!a[e])return!1;return!0};g.preventInvalidHostname=function(a){this._parts.preventInvalidHostname=!!a;return this};g.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};g.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return c});
(function(k,m){"object"===typeof module&&module.exports?module.exports=m(require("jquery"),require("./URI")):"function"===typeof define&&define.amd?define(["jquery","./URI"],m):m(k.jQuery,k.URI)})(this,function(k,m){function t(c){return c.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function n(c){var h=c.nodeName.toLowerCase();if("input"!==h||"image"===c.type)return m.domAttributes[h]}function c(c){return{get:function(h){return k(h).uri()[c]()},set:function(h,p){k(h).uri()[c](p);return p}}}function v(c,
l){if(!n(c)||!l)return!1;var h=l.match(A);if(!h||!h[5]&&":"!==h[2]&&!q[h[2]])return!1;var m=k(c).uri();if(h[5])return m.is(h[5]);if(":"===h[2]){var t=h[1].toLowerCase()+":";return q[t]?q[t](m,h[4]):!1}t=h[1].toLowerCase();return w[t]?q[h[2]](m[t](),h[4],t):!1}var w={},q={"=":function(c,l){return c===l},"^=":function(c,l){return!!(c+"").match(new RegExp("^"+t(l),"i"))},"$=":function(c,l){return!!(c+"").match(new RegExp(t(l)+"$","i"))},"*=":function(c,l,k){"directory"===k&&(c+="/");return!!(c+"").match(new RegExp(t(l),
"i"))},"equals:":function(c,l){return c.equals(l)},"is:":function(c,l){return c.is(l)}};k.each("origin authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "),function(h,l){w[l]=!0;k.attrHooks["uri:"+l]=c(l)});var C=function(c,l){return k(c).uri().href(l).toString()};k.each(["src","href","action","uri","cite"],function(c,l){k.attrHooks[l]={set:C}});k.attrHooks.uri.get=function(c){return k(c).uri()};
k.fn.uri=function(c){var h=this.first(),k=h.get(0),q=n(k);if(!q)throw Error('Element "'+k.nodeName+'" does not have either property: href, src, action, cite');if(void 0!==c){var t=h.data("uri");if(t)return t.href(c);c instanceof m||(c=m(c||""))}else{if(c=h.data("uri"))return c;c=m(h.attr(q)||"")}c._dom_element=k;c._dom_attribute=q;c.normalize();h.data("uri",c);return c};m.prototype.build=function(c){if(this._dom_element)this._string=m.build(this._parts),this._deferred_build=!1,this._dom_element.setAttribute(this._dom_attribute,
this._string),this._dom_element[this._dom_attribute]=this._string;else if(!0===c)this._deferred_build=!0;else if(void 0===c||this._deferred_build)this._string=m.build(this._parts),this._deferred_build=!1;return this};var A=/^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;var B=k.expr.createPseudo?k.expr.createPseudo(function(c){return function(h){return v(h,c)}}):function(c,l,k){return v(c,k[3])};k.expr[":"].uri=B;return k});
