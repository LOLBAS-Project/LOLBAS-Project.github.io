function shorten_url(url_input) {
    var url_parsed = new URL(url_input);
    if (['github.com', 'www.github.com'].includes(url_parsed.hostname) && url_parsed.pathname.includes('/blob/')) {
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

    this.document.querySelectorAll("pre>code").forEach(x => {
        let value = x.innerText;

        const path_or_folder = y => y == 'folder' ? 'folder' : `file with a${y ? (' ' + y) : 'n arbitrary'} extension`
        const path_folder = y => y == 'folder' ? 'folder' : `file${y || '.ext'}`


        value = value.replace(/\{PATH(?::(folder|\.[a-zA-Z0-9.]+?))?\}/g, (_, y) => `<span class="path" title="A relative or absolute path to a ${path_or_folder(y)}.">${path_folder(y)}</span>`)
            .replace(/\{PATH_ABSOLUTE(?::(folder|\.[a-zA-Z0-9.]+?))?\}/g, (_, y) => `<span class="path" title="An absolute path to a ${path_or_folder(y)}.">C:\\Windows\\Temp\\${path_folder(y)}</span>`)
            .replace(/\{PATH_SMB(?::(folder|\.[a-zA-Z0-9.]+?))?\}/g, (_, y) => `<span class="path" title="An SMB path to a ${path_or_folder(y)}.">\\\\servername\\C$\\Windows\\Temp\\${path_folder(y)}</span>`)

            .replace(/\{REMOTEURL(?::(folder|\.[a-zA-Z0-9.]+?))?\}/g, (_, y) => `<span class="path" title="A URL for ${path_or_folder(y)}.">https://www.example.org/${path_folder(y)}</span>`)

            .replace(/\{CMD\}/g, `<span class="path" title="A command line.">cmd /c c:\\windows\\system32\\calc.exe</span>`)
            .replace(/\{CMD:args\}/g, `<span class="path" title="Command-line arguments.">/arg1 /arg2</span>`)

            .replace(/\{PID\}/g, `<span class="path" title="A process ID.">1234</span>`)
        x.innerHTML = value;
    });
});
