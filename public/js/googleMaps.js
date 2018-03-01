function initMap() {
	var ucsd_ltlng={lat:32.879003, lng: -117.23585};
	var map= new google.maps.Map(document.getElementById('map'),{
		center: ucsd_ltlng,
		zoom:15
	});

	var marker= new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title:"UCSD"
	});
}