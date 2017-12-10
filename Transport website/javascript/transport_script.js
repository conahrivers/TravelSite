$(document).ready(function() {
    
    $.getJSON("https://transportapi.com/v3/uk/train/station/NRW/2017-12-06/12:49/timetable.json?app_id=f6b90e14&app_key=419e8a35c994665a778df9d81b960f2f&train_status=passenger",
        function (data){

        console.log(data);
        });
});

        
    /* 		 data.departures.all.forEach(departure => {
                const destination = departure.destination_name;
                const time = departure.aimed_departure_time;
                $('.departures').append('<li><b>Going to:</b> ' + destination + 
    '<br><b>At: </b>' + time + '</li>');  */
