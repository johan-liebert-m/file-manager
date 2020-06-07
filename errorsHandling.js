exports.onError404 = function(req, res) {
	res.status(404);
	res.sendFile(__dirname + '/Error404.html');
}

exports.onError500 = function(req, res) {
	res.status(500);
	res.sendFile(__dirname + '/Error500.html');
}
