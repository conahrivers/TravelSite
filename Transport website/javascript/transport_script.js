$(document).ready(function () {

    $("#normalFont").hide();

    $("#submitButton").on('click', function (e) {

        e.preventDefault();

        var date = $("#calendarDropDown").val();
        var time = $("#timeDropDown").val();

        if (date == "" && time == "") {
            var transport_url = 'https://transportapi.com/v3/uk/train/station/NRW/' + date + '/' + time + '/timetable.json?app_id=f6b90e14&app_key=419e8a35c994665a778df9d81b960f2f&train_status=passenger';

            $.getJSON(transport_url, function (data) {
                console.log(data);

                var departuresObject = data.departures.all;

                for (var i = 0; i < departuresObject.length; i++) {
                    console.log(departuresObject[i].destination_name);
                }
            });

        } else if (date == "" && time != "") {
            alert('Please enter a date.');
        } else if (date != "" && time == "") {
            alert('Please enter a time.');
        }
    });

    $('#datetimepicker').datetimepicker({
        format: 'dd/MM/yyyy hh:mm:ss',
        language: 'pt-BR'
      });

    $("#plusButton").on('click', function () {
        $("#normalFont").show();
        $("*").css({
            'font-size': '1.05em'
        });
    });
    $("#normalFont").on('click', function () {
        $("*").css({
            'font-size': '0.98em'
        });
    });
    $("#greenButton").on('click', function () {
        $(".greenColour").css({
            'background-color': 'green'
        });
    });
});
