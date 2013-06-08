var map = function() {
	emit(
		{kontynent: this.continent}, {count: 1}
	);
};

var red = function(key, values) {
	var count = 0;
	values.forEach(function (val) {
		count += val['count'];
	});
	return {count: count};
};

db.airports.mapReduce(map, red, {out: {inline: 1}});

