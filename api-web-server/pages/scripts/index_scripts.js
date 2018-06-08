function makecall() {
    $.ajax(
        {
            url: 'http://localhost:3000/apiGetBusinessHours',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var element = document.getElementById('mainBody');
                
                element.innerHTML = '<p>' + JSON.stringify(data) + '</p>';
            },
            error: (function( jqXHR, textStatus ) {
                    alert("Request failed: " + textStatus);
                    })
        }
    )
}

document.onload = makecall();