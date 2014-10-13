 console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, username, comment) {
	// console.log(template)
	// console.log(username)
	// console.log(comment)
	return `<b>${escape(username)} says</b>: "${escape(comment)}"`
}

// function escape(comment) {
// 	return comment
// 		.replace('&', '&amp;', 'g')
// 		.replace('\'', '&#39;', 'g')
// 		.replace('"', '&quot;', 'g')
// 		.replace('<', '&lt;', 'g')
// 		.replace('>', '&gt;', 'g')
// }

function escape(s) {
        return s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/'/g, "&#39;")
                .replace(/"/g, "&quot;");
    }