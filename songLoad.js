let songCatalog = fetch("songCatalog.json");
let songList;

let createSongCard = (song) => {

    let card = document.createElement('li');
    card.className = 'card col-4 card-block';

    let cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    if(song.ref){cardImg.src = song.ref}

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    let name = document.createElement('h5');
    name.innerText = song.name;
    name.className = 'card-title song-name';

    let text = document.createElement('p');
    text.innerText = song.artist+'\n'+song.origin+'\n';
    if(song.theme){text.innerText.concat(song.theme+'Version')}
    text.className = 'card-text song-text';

    let badge = document.createElement('span');
    badge.innerText = song.difficulty;
    badge.className = 'notify-badge badge-pill'+' d'+song.difficulty;

    card.appendChild(cardImg);
    cardBody.appendChild(name);
    cardBody.appendChild(text);
    cardBody.appendChild(badge);
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