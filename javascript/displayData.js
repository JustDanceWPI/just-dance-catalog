// Google Spreadsheet JSON data
var url = "https://spreadsheets.google.com/feeds/list/1UVG4JetMIqrr9rcIVEtvmhw1FAAnGCMHCmwiv99TJGI/3/public/values?alt=json";

$.getJSON(url, function(data) {
    var entry = data.feed.entry;

    $("table").addClass("flex-container").append("<tr><th>Group</th><th>Song</th></tr>")
    $.each(entry, function() {
    $("table").addClass("flex-container").append("<tr><td>" + this.gsx$groupname.$t + "</td><td>" + this.gsx$songname.$t + "</td></tr>")});

});