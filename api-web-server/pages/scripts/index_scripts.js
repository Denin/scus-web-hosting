function makecall() {
    $.ajax(
        {
            url: 'http://localhost:3000/callApi',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var element = document.getElementById('mainBody');
                element.innerHTML = data.content;
            },
            error: (function( jqXHR, textStatus ) {
                    alert("Request failed: " + textStatus);
                    })
        }
    )
}

document.onload = makecall();