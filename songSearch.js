function searchFunction() {
    var input, filter, ul, li, song, text, i, d;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    ul = document.getElementById('songList');
    li = ul.getElementsByTagName('li');

    for(i=0 ; i< li.length; i++){
        song = document.getElementsByClassName('song-name')[i];
        text = document.getElementsByClassName('song-text')[i];
        d = document.getElementsByClassName('difficulty')[i];
        if(
            d.innerText.toLowerCase().indexOf(filter) > -1 ||
            song.innerText.toLowerCase().indexOf(filter) > -1 ||
            text.innerText.toLowerCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}

function onClickCard(){
    var img, name, text, badge;

}