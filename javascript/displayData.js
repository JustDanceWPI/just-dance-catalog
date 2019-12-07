// Google Spreadsheet JSON data
var url = "https://spreadsheets.google.com/feeds/list/1UVG4JetMIqrr9rcIVEtvmhw1FAAnGCMHCmwiv99TJGI/3/public/values?alt=json";

$.getJSON(url, function(data) {
    let entry = data.feed.entry;

    $("table").addClass("table table-dark").append("<tr><th>Time</th><th>Name</th><th>Song</th><th>Score</th></tr>");
    $.each(entry, function() {
    $("table").addClass("table table-dark").append("<tr><td>" + this.gsx$timestamp.$t + "</td><td>" + this.gsx$groupname.$t + "</td><td>" + this.gsx$songname.$t + "</td><td>" + this.gsx$score.$t + "</td></tr>")});

});