//script



$(function getTravelInfo() {
	var transAPI = {
		query: 'euston',
		type: 'train_station',
		appId: 'f6b90e14',
		appKey: '419e8a35c994665a778df9d81b960f2f',
		path: 'http://transportapi.com/v3/uk/places.json'
	};
	var station = {	// for info
		request_time: '1970-01-01T00:00:00+00:00',
		source: '',
		acknowledgements: '',
		type: '',
		name: '',
		latitude: 0,
		longitude: 0,
		accuracy: 0,
		station_code: '',
		tiploc_code: ''
	};
	var seriesPath = 'http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=2c5c9fc2&app_key=419e8a35c994665a778df9d81b960f2f';

	getPlaceData(seriesPath, station);
	function showdata(){
		station = getObject('allData');
		$('#info').append('<p>'+station.tiploc_code+' Station is at lat '+station.latitude+' long '+station.longitude+'</p>');
	};



	//http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=2c5c9fc2&app_key=419e8a35c994665a778df9d81b960f2f


	function getPlaceData(seriesPath, station){
	// fetch the series data from the server
		console.log('getting '+seriesPath);
		$.getJSON(seriesPath, function (data) {
			console.log(seriesPath, JSON.stringify(data));
			clearObject('allData');
			setObject('allData', data)
			// could make a function call here or just code to execute
			 displayResult(data);
		})
		.fail(function(jqXHR, textStatus, errorThrown) { 
			console.log('getJSON request failed! ' + textStatus); 
		});	
	};

});

function displayResult(data){
	var items = [];
	$.each( data, function( key, val ) {
		if(isObject(val)){
			 displayResult(val);
		} else {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		}
	});

	$( "<ul/>", {
		"class": "my-new-list",
		html: items.join( "" )
	 }).appendTo( "body" ); 
};

function isObject (item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}


var apiKey = "419e8a35c994665a778df9d81b960f2f";
	
});
