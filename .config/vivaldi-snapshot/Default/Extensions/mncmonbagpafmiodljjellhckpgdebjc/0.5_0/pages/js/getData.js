function DOMtoString(a){for(var b="",c=a.firstChild;c;){switch(c.nodeType){case Node.ELEMENT_NODE:b+=c.outerHTML}c=c.nextSibling}var d="",e=b;e=e.replace(/\s/g,"*br*"),e=e.replace(/\r?\n|\r/g,"*br*");for(var f=e.split("*br*"),g=0;g<f.length;g++){var h=obtieneURLimagen(f[g]);h&&""!=h&&(""!=d&&(d+="~"),d+=h)}if(""!=d){var i=d,j=[],k=i.split("~"),l="",m="<a href='",n="' target='_blank'>",o="<img src='",p="' style='width:100px;height:100px' name='photox' class='",q="'>",r="</a>";j=limpiaArray(k);for(var u=0;u<j.length;u++){devuelveTamanio(j[u]);l+="<li>"+m+j[u]+n+o+j[u]+p+q+r+"</li>"}var w="<ul>",x="</ul>";return w+l+x}return"No pictures found on this web (only 500px.com supported at this moment)"}function limpiaArray(a){for(var b=[],c=0;c<a.length;c++)if(0==c&&b.push(a[0]),a[c].indexOf("?v=")==-1){for(var d=!1,e=0;e<b.length;e++)if(b[e]==a[c]){d=!0;break}d||b.push(a[c])}return b}function obtieneURLimagen(a){var b=/(https:\/\/drscdn\.500px\.org.+)(\")/gi,c="",d="";return a.indexOf("https://drscdn.500px.org")!=-1&&(c=b.exec(a),c&&(d=c[1],d=d.replace(";",""),d=d.replace(")",""),d=d.replace('"',""))),d}function getMeta(a,b){var c=new Image;c.src=a,c.onload=function(){b(this.width,this.height)}}function devuelveTamanio(a){return getMeta(a,function(a,b){return a<1e3?"small":a>=1e3?"mid":"big"})}chrome.runtime.sendMessage({action:"getSource",source:DOMtoString(document)});