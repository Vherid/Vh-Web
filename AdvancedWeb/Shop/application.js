var pointValue = 0;
var itemValue = 0;
var multi = 0;
var raceSelected = false;
var raceValue = 0

var cart = { };
var itemCount = 0;

function addToCart (item){
	if(!cart[item]) { cart[item] = 0; }
}


function swapRaceDesc(race) {
	if(raceSelected==true) {
		cart = { };
		raceValue = Races[race].sPrice;
		$("#pts").text(raceValue + " PTS");
		var desc = Races[race].description;
		$(".racedesc").text(desc+" // Size: "+Races[race].size);
		raceValue = Races[race].sPrice;
		$("#pts").text(raceValue + " PTS");
	}
	else{
		var desc = Races[race].description;
		$(".racedesc").text(desc+" // Size: "+Races[race].size);
		raceValue = Races[race].sPrice;
		$("#pts").text(raceValue + " PTS");
		raceSelected = true;
	}
}

function showProduct(product) {
	if(raceSelected==true){
		$(".details").show();
		$(".overlay").show();
		var productd = Items[product];
		$("#detail-title").text(productd.title);
		$("#detail-image").attr("src", productd.image);
		$("#productpts").text(productd.price+" PTS");
		productValue = productd.price;
		$(".purchase").click(function() {
	    	addToCart(product);
	    	totalCost(cart);
	 	});
	}
	else {
		alert("You Need To Pick A Race First.")
	}
}

function subTotal() {
	return productValue*multi;
}

function totalCost(items) {
	var total = raceValue;
	itemCount = 0;
	for(var itemName in items) {
		var itemPrice = subTotal();
		total -= itemPrice;
		itemCount += 1;
	}
	$("#pts").text(total+" PTS"+" // "+itemCount+" items");
	return total;
}

function hideProduct() {
	$(".details").hide();
	$(".overlay").hide();
	$("#add-to-cart").off("click");
}

function swapMatDesc(material) {
	var title = Material[material].title;
	var weight = Material[material].weight;
	var edge = Material[material].edge;
	var armor = Material[material].armor;
	multi = Material[material].multi;
	$(".materialdesc").text(title+" - "+"Weight: "+weight+" // Edge: "+edge+" // Armor: "+armor+" // Value Multiplier: "+multi+"x");
	$("#productpts").text(productValue*multi+" PTS");
}

$(function() {
	$(".race").click(function() {
		var race = $(this).data("race");
		swapRaceDesc(race);
	});

	$(".material").click(function() {
		var material = $(this).data("material");
		swapMatDesc(material);
	});

	$(".product").click(function() {
		var product = $(this).data("product-id");
	    showProduct(product);
	});

	$(".overlay").click(function() {
		   hideProduct();
	});
});