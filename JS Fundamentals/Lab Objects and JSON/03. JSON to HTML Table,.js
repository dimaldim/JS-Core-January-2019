function solve(input) {
    let json = JSON.parse(input);
    let html = '<table>\n';
    html += '   <tr>';
    Object.keys(json[0]).forEach(key => html += `<th>${key}</th>`);
    html += '</tr>\n';

    for (let val of json) {
        html += '   <tr>';
        Object.keys(val).forEach(k => html += `<td>${htmlEscape(String(val[k]))}</td>`);
        html += '</tr>\n';
    }
    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}