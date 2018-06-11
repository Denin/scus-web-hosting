var htmlObjects = (function() {
    
    function buildHoursHTML(jsonObj) {
        var htmlReturn;
        htmlReturn = '<h3>This is the return of buildHoursHTML()</h3>'
        
        if (jsonObj.hasOwnProperty('error')) {
            console.log('Error received');
            htmlReturn = '<p>Error processing hours, please try again later.</p>';
            console.log(htmlReturn);
            return htmlReturn;
        }

        var monHours, tueHours, wedHours, thuHours, friHours, satHours, sunHours;

        if (jsonObj.monday.hasOwnProperty('is_closed')) monHours = "Closed";
        else monHours = timeConvert(jsonObj.monday.open_time) + " - " + timeConvert(jsonObj.monday.close_time);
        
        if (jsonObj.tuesday.hasOwnProperty('is_closed')) tueHours = "Closed";
        else tueHours = timeConvert(jsonObj.tuesday.open_time) + " - " + timeConvert(jsonObj.tuesday.close_time);

        if (jsonObj.wednesday.hasOwnProperty('is_closed')) wedHours = "Closed";
        else wedHours = timeConvert(jsonObj.wednesday.open_time) + " - " + timeConvert(jsonObj.wednesday.close_time);

        if (jsonObj.thursday.hasOwnProperty('is_closed')) thuHours = "Closed";
        else thuHours = timeConvert(jsonObj.thursday.open_time) + " - " + timeConvert(jsonObj.thursday.close_time);

        if (jsonObj.friday.hasOwnProperty('is_closed')) friHours = "Closed";
        else friHours = timeConvert(jsonObj.friday.open_time) + " - " + timeConvert(jsonObj.friday.close_time);

        if (jsonObj.saturday.hasOwnProperty('is_closed')) satHours = "Closed";
        else satHours = timeConvert(jsonObj.saturday.open_time) + " - " + timeConvert(jsonObj.saturday.close_time);

        if (jsonObj.sunday.hasOwnProperty('is_closed')) sunHours = "Closed";
        else sunHours = timeConvert(jsonObj.sunday.open_time) + " - " + timeConvert(jsonObj.sunday.close_time);

        htmlReturn = '<table class="OpeningHoursTable"><tbody><tr><td class="fl"><span id="sun_DayLbl" ' + 
        'class="OpeningHoursLabel">Sunday</span></td><td class="fl"><span id="sun_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + sunHours + '</span></td></tr><tr class="numEven"><td><span id="mon_DayLbl" ' + 
        'class="OpeningHoursLabel">Monday</span></td><td><span id="mon_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + monHours + '</span></td></tr><tr><td class="fl"><span id="tue_DayLbl" ' + 
        'class="OpeningHoursLabel">Tuesday</span></td><td class="fl"><span id="tue_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + tueHours + '</span></td></tr><tr class="numEven"><td><span id="wed_DayLbl" ' + 
        'class="OpeningHoursLabel">Wednesday</span></td><td><span id="wed_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + wedHours + '</span></td></tr><tr><td class="fl"><span id="thu_DayLbl" ' + 
        'class="OpeningHoursLabel">Thursday</span></td><td class="fl"><span id="thu_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + thuHours + '</span></td></tr><tr class="numEven"><td><span id="fri_DayLbl" ' + 
        'class="OpeningHoursLabel">Friday</span></td><td><span id="fri_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + friHours + '</span></td></tr><tr><td class="fl"><span id="sat_DayLbl" ' + 
        'class="OpeningHoursLabel">Saturday</span></td><td class="fl"><span id="sat_HrsLbl" ' + 
        'class="OpeningHoursLabel">' + satHours + '</span></td></tr></tbody></table>'
        
        return htmlReturn;
        
    };

    function timeConvert (time) {
        // Check correct time format and split into components
        time = time.substring(0,time.length-3);
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }

    return {
        buildHoursHTML: buildHoursHTML
    };
})();

module.exports = htmlObjects;