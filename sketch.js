// var canvas;

function popup(mylink, windowname) {
    if (!window.focus) return true;
    var href;
    if (typeof(mylink) == 'string') href = mylink;
    else href = mylink.href;
    window.open(href, windowname, 'width=400, height=200, scrollbars=yes');
    return false;
}

// function mouseClicked() {
//     document.documentElement.setAttribute('class', 'rotateme'); //Note that this will override the current class
//     return false
// }

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
    return false;
}
