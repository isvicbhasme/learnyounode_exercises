var fs = require('fs');
fs.readdir(process.argv[2], function(err, data) {
	if(err)
		return console.error(err);
	var extn = "."+process.argv[3];
	data.forEach(function(filename) {
		if(filename.lastIndexOf(extn) != -1
			&& filename.lastIndexOf(extn) == filename.length - extn.length) {
			console.log(filename);
		}
	});
});