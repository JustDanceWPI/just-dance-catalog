let songList, savedEmail, savedName;
savedEmail = "";
savedName = "";
let createSongCard = (song) => {

    let card = document.createElement('li');
    card.className = 'card-block card';
    card.setAttribute('href','#');
    card.setAttribute('data-toggle','modal');
    card.setAttribute('data-target','#exampleModalCenter');

    let cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    if(song.ref){cardImg.src = song.ref}

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    let name = document.createElement('h5');
    name.innerText = song.name;
    name.className = 'card-title song-name';

    let text = document.createElement('p');
    let theme = "";
    if(song.theme){(theme = song.theme+' Version')}
    text.innerText = song.artist+'\n'+song.origin+'\n'+theme;
    text.className = 'card-text song-text';

    let badge = document.createElement('span');
    badge.innerText = song.difficulty;
    badge.className = 'difficulty notify-badge badge-pill'+' d'+song.difficulty;

    let clickable = document.createElement('a');
    clickable.className = 'stretched-link';
    clickable.setAttribute('href','#');
    clickable.setAttribute('data-toggle','modal');
    clickable.setAttribute('data-target','#selectSongModal');
    clickable.onclick = () => {
        let selectBadge = $("#selectCardBadge")[0];
        $("#selectCardImg")[0].src = cardImg.src;
        $("#selectCardName")[0].innerText = name.innerText;
        $("#selectCardText")[0].innerText = text.innerText;
        selectBadge.innerText = badge.innerText;
        selectBadge.className = 'notify-badge badge-pill'+' d'+song.difficulty;

        // update form
        document.getElementById('songName').setAttribute('value',song.name);
        document.getElementById('songArtist').setAttribute('value',song.artist);
        document.getElementById('songOrigin').setAttribute('value',song.origin);
        document.getElementById('songTheme').setAttribute('value',theme);
        document.getElementById('songDifficulty').setAttribute('value',song.difficulty);
    };

    card.appendChild(cardImg);
    cardBody.appendChild(name);
    cardBody.appendChild(text);
    cardBody.appendChild(badge);
    cardBody.appendChild(clickable);
    card.appendChild(cardBody);
    songList.appendChild(card);

};

let initListOfSongs = () => {
    if (songList) {
        document.getElementById('songList').replaceWith(songList);
        return;
    }

    songList = document.getElementById('songList');
    songs.forEach((task) => {
        createSongCard(task)
    })
};