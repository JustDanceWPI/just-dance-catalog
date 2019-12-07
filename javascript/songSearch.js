let displayLimit;
function searchFunction(limit, refresh) {
    displayLimit = limit;
    let input, filter, ul, li, song, text, i, c, d;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    ul = document.getElementById('songList');
    li = ul.getElementsByTagName('li');
    if(refresh){
        for(i=0; i< li.length; i++){
            li[i].style.display = 'none';
    }}
    if(!filter){return}
    for(i=0, c=0 ; i< li.length && c < displayLimit; i++){
        song = document.getElementsByClassName('song-name')[i];
        text = document.getElementsByClassName('song-text')[i];
        d = document.getElementsByClassName('difficulty')[i];
        if(
            d.innerText.toLowerCase().indexOf(filter) > -1 ||
            song.innerText.toLowerCase().indexOf(filter) > -1 ||
            text.innerText.toLowerCase().indexOf(filter) > -1){
            li[i].style.display = "";
            c++;
        }

        else{
            li[i].style.display = 'none';
        }
    }
}

$(window).scroll(function() {
    if($(window).scrollTop() + 2*($(window).height())> $(document).height()) {
        searchFunction(displayLimit + 20, false)
    }
});