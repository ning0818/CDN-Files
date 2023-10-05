document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"><link rel="stylesheet" href="https://jsd.onmicrosoft.cn/ning0818/CDN-Files/linkjs.css">';
function linkjs() {
    var linkjss = document.getElementsByTagName('linkjs');
    for (var i = 0; i < linkjss.length; i++) {
        linkjss[i].className = 'linkjs';
            linkjss[i].innerHTML = '<div><p class="link-name" style="color: #f60">' + linkjss[i].getAttribute('linkname') + '</p><br><stong class="fintroduce">链接：' + linkjss[i].getAttribute('url') + '</stong><br></div><div><button class="link-js" style="background-color: #f60" title="前往" onclick="goText(`' + linkjss[i].getAttribute('pwd') + '`,`' + linkjss[i].getAttribute('url') + '`);">前往</button></div>';
    }
}
window.onload = function () {
    linkjs();
}
function goText(strtext, url) {
    window.open(url, '_blank');
}
