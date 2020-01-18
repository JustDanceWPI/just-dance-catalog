// Google Spreadsheet JSON data
const url = "https://spreadsheets.google.com/feeds/list/1UVG4JetMIqrr9rcIVEtvmhw1FAAnGCMHCmwiv99TJGI/3/public/values?alt=json";
function formatDate(date) {
    let d = new Date(date);
    let hh = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let dd = "AM";
    let h = hh;
    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h === 0) {
        h = 12;
    }
    m = m < 10 ? "0" + m : m;

    s = s < 10 ? "0" + s : s;

    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */

    let pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

    let replacement = h + ":" + m;
    /* if you want to add seconds
    replacement += ":"+s;  */
    replacement += " " + dd;

    return date.replace(pattern, replacement);
}

$.getJSON(url, function(data) {
    let entry = data.feed.entry;


    $.each(entry, function() {
    $("tbody").append("<tr><td>" + formatDate(this.gsx$timestamp.$t) + "</td><td>" + this.gsx$groupname.$t + "</td><td>" + this.gsx$songname.$t + "</td><td class='score-data'>" + this.gsx$score.$t + "</td></tr>")});

});