var siteUrl = config.apiUri + '/site/' + config.siteId;

alert(siteUrl);

//$.get(siteUrl,'', {'Authorization' : oauth.sign("GET", siteUrl)});

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
        }
    }
)
