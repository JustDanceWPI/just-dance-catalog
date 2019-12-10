// Google Spreadsheet JSON data
var url = "https://spreadsheets.google.com/feeds/list/1UVG4JetMIqrr9rcIVEtvmhw1FAAnGCMHCmwiv99TJGI/3/public/values?alt=json";

$.getJSON(url, function(data) {
    let entry = data.feed.entry;

    $.each(entry, function() {
    $("tbody").append("<tr><td>" + this.gsx$timestamp.$t + "</td><td>" + this.gsx$groupname.$t + "</td><td>" + this.gsx$songname.$t + "</td><td>" + this.gsx$score.$t + "</td></tr>")});

});