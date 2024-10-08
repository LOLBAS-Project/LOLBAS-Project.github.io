function shorten_url(url_input) {
    var url_parsed = new URL(url_input);
    if(['github.com', 'www.github.com'].includes(url_parsed.hostname) && url_parsed.pathname.includes('/blob/')){
        let parts = url_parsed.pathname.split('/')
        return parts.slice(-1);
        // return "github.com/" + parts.slice(1,3).join('/') + "/(...)/" + parts.slice(-1)
    }
    return url_input
}

const highlight_path = file_path => file_path.replace(/(\&lt;.*?\&gt;)/g, '<span class="path-highlight">$1</span>');

window.addEventListener('load', function () {
    document.querySelectorAll('a[data-shorten]').forEach((element) => {
        element.innerHTML = shorten_url(element.innerHTML);
    });
    document.querySelectorAll('*[data-file-path]').forEach((element) => {
        element.innerHTML = highlight_path(element.innerHTML);
    });
});
