<script type="text/javascript">
		var margin = {top: 20, right: 20, bottom: 30, left: 50},
   			width = 960 - margin.left - margin.right,
    		height = 500 - margin.top - margin.bottom;
		var x = d3.time.scale()
			.range([0, width]);
		var y = d3.scale.linear()
    		.range([height, 0]);

		var ideal = [
			{date: new Date(2013, 1, 26), points: 50},
			// Fill in the rest of the points!
			{date: new Date(2013, 2, 8), points: 0}
		];
		var actual = [
			{date: new Date(2013, 1, 26), points: 50},
			{date: new Date(2013, 1, 27), points: 75},
			{date: new Date(2013, 1, 28), points: 42},
			{date: new Date(2013, 2, 1), points: 35},
			{date: new Date(2013, 2, 2), points: 29},
			{date: new Date(2013, 2, 3), points: 24},
			{date: new Date(2013, 2, 4), points: 18},
			{date: new Date(2013, 2, 5), points: 4},
			{date: new Date(2013, 2, 8), points: 0}
		];
		var idealLine = d3.svg.line()
			.x(function(d) { return x(d.date); })
    		.y(function(d) { return y(d.points); });
    	var actualLine = d3.svg.line()
    		.x(function(d) { return x(d.date); })
    		.y(function(d) { return y(d.points); });

		x.domain(d3.extent(ideal, function(d){return d.date;}));
		y.domain(d3.extent(actual, function(d){return d.points;}));
		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.tickFormat(d3.time.format("%b %d"));

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		var chart = d3.select("#burndown").append("svg")
			.attr("class", "chart")
			.attr("width", width + margin.left + margin.right)
    		.attr("height", height + margin.top + margin.bottom)
		.append("g")
    		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		// Create the x-axis
		chart.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		// Create the y-axis
		chart.append("g")
	      	.attr("class", "y axis")
	      	.call(yAxis)
	    .append("text")
	      	.attr("transform", "rotate(-90)")
	      	.attr("y", 6)
	      	.attr("dy", ".71em")
	      	.style("text-anchor", "end")
	      	.text("Points");
	    // Paint the ideal line
	    chart.append("path")
	    	.datum(ideal)
	      	.attr("class", "line ideal")
	      	.attr("d", idealLine);
	    // Paint the actual line
	    chart.append("path")
	    	.datum(actual)
	      	.attr("class", "line actual")
	      	.attr("d", actualLine);
	</script>
