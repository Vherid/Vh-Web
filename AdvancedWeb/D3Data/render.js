function colorData(data) {
	console.log(data);

	var svg = d3.select(".inner").append("svg");

	var w = 12*data.length;
	var h = 200;
	var barPadding = 4;

	svg.attr("width", w)
       .attr("height", h);

    var rectangles = svg.selectAll("g")
    	 .data(data)
    	 .enter()
    	 .append("g")
    	 .attr("transform", function(d, i) {
    		return "translate(" + (i * (w / data.length)) + ",0)";
			 })
    	 .selectAll("rect")
    	 	.data(function(d) {return d.hex_colors;})
    	 	.enter()
    	 	.append("rect")
   		 	.attr("y", function(d,i) {return i*20;})
   		 	.attr("width", w / data.length - barPadding)
   		 	.attr("height", 20)
   		 	.attr("fill", function(d, i) {
    			return "#"+d;
    		});
}

var hex = 0;

function thisColor() {
  $("#colorhere").text(hex);
}

$(function() {
  $("rect").hover(function() {
    hex = $(this).attr("fill");
    thisColor();
  });
});