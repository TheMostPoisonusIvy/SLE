//for index
function get(url) {
    var strReturn = "";
    jQuery.ajax({
        url: url,
        success: function (html) {
            strReturn = html;
        },
        async: false
    });
    return strReturn;
}

function stringToEl(string) {
    var parser = new DOMParser(),
        content = 'text/html',
        DOM = parser.parseFromString(string, content);
    return DOM.body.childNodes[0];
}
