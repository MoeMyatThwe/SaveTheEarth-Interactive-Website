"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("feedback");
    var allResponses = [];
    function formatCheckboxes(checkedActivities) {
        // console.log(checkedActivities);
        var checkedString="";
        for (var i = 0; i < checkedActivities.length; i++) {
            if (checkedActivities.length-1) {
                checkedString += checkedActivities[i];
            }else {
            checkedString += checkedActivities[i].value + ", ";
        }
    }
    return checkedString;
    }

    

    function createTableHeader(){
        var colHeaders = ["Username", "Email", "Password","Problem","Rate","Activities","Solution","Message"];
        var tableHeaderString = "<tr>";
        for (let i = 0; i < colHeaders.length; i++) {
            tableHeaderString += "<th>" + colHeaders[i] + "</th>";
        }
        tableHeaderString += "</tr>";
        return tableHeaderString;
    }

    function createTableBody(){
        var tableBodyString = "";
        for (let i = 0; i < allResponses.length; i++){
            tableBodyString += createRow(allResponses[i]);

        }
        return tableBodyString;
    }

    function createRow(eachRowData){
        var resultString = "<tr>";

        for (let i = 0; i < eachRowData.length; i++) {
            resultString += "<td>" + eachRowData[i] + "</td>";
        }
        resultString += "</tr>";
        return resultString;

    }

    form.addEventListener("submit",function(event) {
        console.log(event);
        event.preventDefault(); //prevent from submission

        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var problem = document.getElementById("problem").value;
        var rate = document.getElementById("rate").value;
        var message = document.getElementById("message").value;

        var activities = formatCheckboxes(document.querySelectorAll('input[name = "activities"]:checked'));
        var solution = document.querySelector('input[name="solution"]:checked').value;
        console.log(username, email, password, problem, rate, activities, solution, message);

        
        var eachRowData = [username, email, password, problem, rate, activities, solution, message ]
        allResponses.push(eachRowData);

        document.getElementById("response_table_body").innerHTML = createTableHeader();
        document.getElementById("response_table_body").innerHTML = createTableBody();
        form.reset();
    });
});

function showWelcomeMessage() {
    alert("Welcome to FeedBack Page!");
}
window.onload = showWelcomeMessage;


function runClock() {


    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;
    
    var newYear = new Date("January 1, 2024");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay)/(1000*60*60*24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secLeft = (minLeft - Math.floor(minLeft)) * 60;
    
    
    // document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minLeft);
    document.getElementById("secs").textContent = Math.floor(secLeft);
    
    // var dateDiv = document.getElementById("dateNow");
    // dateDiv.innerHTML="May 3 2021";
    }
    
    runClock();
    setInterval("runClock()", 1000);
    

    var dayEvent = new Array();

    dayEvent[1] = "<br />Plant a tree in your neighborhood to help protect the environment.";
    dayEvent[2] = "<br />Use public transport today to reduce your carbon footprint.";
    dayEvent[3] = "<br />Participate in 'Green Innovations' seminar at 8 pm.";
    dayEvent[4] = "<br />Join the community cleanup at 7:30 pm to keep our surroundings clean.";
    dayEvent[5] = "<br />Attend 'Sustainable Living' workshop at 11 am.";
    dayEvent[6] = "<br />Enjoy a night of eco-friendly jazz by LHT Jazz Band at 7 pm.";
    dayEvent[7] = "";
    
    dayEvent[8] = "<br />Join the Civic Forum at 7 pm to discuss local environmental issues.<br />";
    dayEvent[9] = "<br />Watch 'An Inconvenient Truth' documentary at 7:30 pm.";
    dayEvent[10] = "<br />Participate in a bicycle rally to promote eco-friendly transportation at 7:30 pm.";
    dayEvent[11] = "<br />Visit the Farmers' Market to support local produce and reduce food miles at 7:30 pm.";
    dayEvent[12] = "<br />Learn about composting and waste reduction in the 'Green Gardening' workshop at 11 am.";
    dayEvent[13] = "";
    dayEvent[14] = "<br />Attend 'Renewable Energy Solutions' talk at 7 pm to explore sustainable power sources.<br />free";
    
    dayEvent[15] = "<br />Join a community tree-planting event at 7:30 pm to enhance green spaces.";
    dayEvent[16] = "<br />Participate in a beach cleanup drive at 7:30 pm to protect marine life.";
    dayEvent[17] = "<br />Explore 'Eco-Fashion: Style with Sustainability' exhibition at 7:30 pm.";
    dayEvent[18] = "<br />Attend an 'Introduction to Solar Energy' workshop at 2 pm to learn about clean energy.";
    dayEvent[19] = "<br />Join the 'Farm-to-Table Brunch' featuring locally sourced ingredients at 11 am.";
    dayEvent[20] = "<br />Discover the latest advancements in 'Green Technology' at 7 pm.";
    dayEvent[21] = "";
    
    dayEvent[22] = "<br />Attend the 'Sustainable Living Awards' banquet at 6 pm to honor environmental champions.";
    dayEvent[23] = "<br />Experience 'Nature through Cinema: Planet Earth' at 7 pm.";
    dayEvent[24] = "<br />Enjoy a night of 'Recycled Melodies' concert at 8 pm.";
    dayEvent[25] = "<br />Attend the 'Harmony in Nature' concert at 8 pm to celebrate the environment.";
    dayEvent[26] = "<br />Join the 'Organic Brunch Buffet' featuring locally grown produce at 11 am.";
    dayEvent[27] = "";
    dayEvent[28] = "<br />Bring your kids to the 'Earth Explorers' event at 6 pm to learn about nature.";
    
    dayEvent[29] = "<br />Visit the 'Green Kids Fair' at 6 pm for eco-friendly activities and games.";
    dayEvent[30] = "<br />Attend the 'Climate Action Now' talk at 7:30 pm to discuss solutions for a better future.";
    dayEvent[31] = "<br />Attend the 'Climate Action Now' talk at 7:30 pm to discuss solutions for a better future."


function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    // caption for month
    calendarHTML += calCaption(calDate);
 
    // add table header
    calendarHTML += calWeekdayRow();
 
    // add table rows
    calendarHTML += calDays(calDate);
 
    calendarHTML += "</table>";
    return calendarHTML;
 }
 
 function calCaption(calDate) {
    var monthName = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December"
    ];
 
    var thisMonth = calDate.getMonth(); // September -> 8
    var thisYear = calDate.getFullYear(); // 2021 
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
 }
 
 function calWeekdayRow() {
    var dayName = [
       "SUN",
       "MON",
       "TUE",
       "WED",
       "THU",
       "FRI",
       "SAT"
    ];
    var rowHTML = "<tr>";
    for (var i = 0; i < dayName.length; i++) {
       rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
    }
    rowHTML += "</tr>";
    return rowHTML;
 }
 
 function daysInMonth(calDate) {
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var thisMonth = calDate.getMonth(); // september -> 8
    var thisYear = calDate.getFullYear(); // 2021
 
    if (thisYear % 4 === 0) {
       if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
          dayCount[1] = 29
       }
    }
 
    return dayCount[thisMonth]; // dayCount[8] -> 30
 }
 
 function calDays(calDate) { // cal date = Sep 24, 2021
    // determine the starting day of the month
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1); // new Date(2021, 8, 1)
    var weekDay = day.getDay(); // -> what day is 1st of Sep -> 3
 
    // write blank cells preceding the starting day
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
       htmlCode += "<td></td>";
    }
 
    // write cells for each day of the month
    var totalDays = daysInMonth(calDate); // 30 days
 
    var highlightDay = calDate.getDate();
    for (var i = 1; i <= totalDays; i++) {
       day.setDate(i);
       weekDay = day.getDay();
 
       if (weekDay === 0) htmlCode += "<tr>";
 
       if (i === highlightDay) {
          htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i]+"</td>";
       } else {
          htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] +"</td>";
       }
       if (weekDay === 6) htmlCode += "</tr>";
    }
    return htmlCode;
 }
 
 var thisDay = new Date();
 document.getElementById("calendar").innerHTML = createCalendar(thisDay);