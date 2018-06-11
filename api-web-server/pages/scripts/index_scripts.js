function makecall() {
    $.ajax(
        {
            url: 'http://localhost:3000/apiGetBusinessHours',
            type: 'get',
            dataType: 'html',
            success: function (data) {
                console.log(data);
                var element = document.getElementById('mainBody');
                element.innerHTML = data;
            },
            error: (function( jqXHR, textStatus ) {
                    var element = document.getElementById('mainBody');
                    element.innerHTML = "<p>An error occured while loading.  Please try again later.</p>";
                    console.log(textStatus);
                    })
        }
    )
}

document.onload = makecall();