function UrlChange(head,footer,change,out) {
	window.onload=function (){
	for (n in document.getElementsByTagName('a')){
		if (document.getElementsByTagName('a')[Number(n)].href.indexOf('javascript:') < 0){ 
		if (document.getElementsByTagName('a')[Number(n)].href.indexOf(out) < 0){ 
		if(change){
		document.getElementsByTagName('a')[Number(n)].href=head+encodeURIComponent(document.getElementsByTagName('a')[Number(n)].href)+footer
		}else{
		document.getElementsByTagName('a')[Number(n)].href=head+document.getElementsByTagName('a')[Number(n)].href+footer
		}
		}
		}
}}
console.clear()};
