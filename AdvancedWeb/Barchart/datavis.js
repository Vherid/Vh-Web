var maxsal = 0;

function createSal(data) {
	var salwidth = parseFloat(data[18])/maxsal*100;
	var databox = $("<div>").addClass("databox").css('width', salwidth+"%").css('background-color', );
	var namesal = $("<h2>").addClass("dataname").text(data[8]+" - "+"$"+data[18]);
	$(databox).append(namesal);
	$(".wrap").append(databox);
}

data.sort(function(a, b) {
    // a and b will here be two objects from the array
    // thus a[1] and b[1] will equal the names

    // if they are equal, return 0 (no sorting)
    if (a[18] == b[18]) { return 0; }
    if (a[18] > b[18])
    {
        // if a should come after b, return 1
        return 1;
    }
    else
    {
        // if b should come after a, return -1
        return -1;
    }
});
data.reverse();

$(function(){
	console.log(data);
	for (var y=0;y<data.length;y++) {
		var num = parseFloat(data[y][18]);
		maxsal = Math.max(num,maxsal);
	}
	for(var i=0;i<data.length;i++) {
		createSal(data[i]);
	}

});