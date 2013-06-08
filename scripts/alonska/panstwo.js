var map = function() {
	emit(
		{panstwo: this.iso_country}, {count: 1}
	);
};

var red = function(key, values) {
	var count = 0;
	values.forEach(function (val) {
		count += val['count'];
	});
	return {count: count};
};

db.airports.mapReduce(map, red, {out: "panstwo"});
db.panstwo.find();

