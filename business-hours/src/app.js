var siteUrl = config.apiUri + '/site/' + config.siteId;

var endpoint = URI.parse(siteUrl);
console.log('URL: ' + 'https://' + siteUrl);

$.ajax(
    {
        url: siteUrl,
        type: 'get',
        headers: {
            'Authorization': oauth.sign("GET", 'https://' + siteUrl)
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: (function( jqXHR, textStatus ) {
                alert("Request failed: " + textStatus);
                })
    }
)
