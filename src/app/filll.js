fetch('api.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
  		list.getElementsByClassName("title").innerHTML = myJson.data[i].title;
			document.getElementsById("rent").innerHTML =("$ "+myJson.data[i].advertisementPrice.baseRent).bold();
			//document.getElementsById("rooms")[k].innerHTML =myJson.data[i].realestateSummary.numberOfRooms+" rooms";
			//document.getElementsById("space")[k].innerHTML =myJson.data[i].realestateSummary.space+" m"+"2".sup();
			document.getElementsById("test")[k].src = myJson.data[i].advertisementAssets[i].advertisementThumbnails.thumb_xs.url;
		var k=0;
		var j=0;
		/*
		for (var i=0;i < 9; i++) {
			var list = document.getElementsByClassName("column")[j];
			j++;
		   	list.getElementsByClassName("title")[k].innerHTML = myJson.data[i].title;
			list.getElementsByClassName("rent")[k].innerHTML =("$ "+myJson.data[i].advertisementPrice.baseRent).bold();
			list.getElementsByClassName("rooms")[k].innerHTML =myJson.data[i].realestateSummary.numberOfRooms+" rooms";
			list.getElementsByClassName("space")[k].innerHTML =myJson.data[i].realestateSummary.space+" m"+"2".sup();
			list.getElementsByClassName("test")[k].src = myJson.data[i].advertisementAssets[i].advertisementThumbnails.thumb_xs.url;
		
		}
		*/
	
  });