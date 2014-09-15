var t = new Trianglify({noiseIntensity: 0, x_gradient: colorbrewer.BrBG[5]});
var pattern = t.generate(window.innerWidth, window.innerHeight);

function createShot(shotdata) {
	var shot = $("<div>").addClass("shotbox");
	var likes = $("<h3>").addClass("shotlikes").text(shotdata.likes_count+" Li");
	var img = $("<img>").addClass("shotimage").attr("src", shotdata.image_teaser_url);
	var title = $("<h2>").addClass("shottitle").text(shotdata.title);
	$(shot).append(likes);
	$(shot).append(img);
	$(shot).append(title);
	$(".wrap").append(shot);

	img.on("click",function() {
		$(".details").show();
		$(".overlay").show();
		var likes = $("<h4>").addClass("detaillikes").text(shotdata.likes_count+" Likes");
		var img = $("<img>").addClass("detailimage").attr("src", shotdata.image_url);
		var title = $("<h2>").addClass("detailtitle").text(shotdata.title);
		var views = $("<h4>").addClass("detailviews").text(shotdata.views_count+" Views");
		var url = $("<a>").addClass("detailurl").text("View").attr("href", shotdata.url).attr("target", "_blank");
		$(".details").empty().append(title);
		$(".details").append(likes);
		$(".details").append(views);
		$(".details").append(img);
		$(".details").append(url);
	});
}

function hideProduct() {
	$(".details").hide();
	$(".overlay").hide();
}

$(function(){
	
	// Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
	$.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
		console.log(data);
		for(var i=0;i<data.shots.length;i++) {
			createShot(data.shots[i]);
		}
	});

	$(".overlay").click(function() {
		 hideProduct();
	});

	document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);

});