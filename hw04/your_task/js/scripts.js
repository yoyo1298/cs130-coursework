const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const playTrack = (ev) => {
    const elem = ev.currentTarget;
    const previewURL = elem.dataset.previewTrack;
    if (previewURL){
        audioPlayer.setAudioFile(previewURL);
        audioPlayer.play();
    }
    else {
        console.log('no preview available for this track');
    }
    document.querySelector('footer .track-item').innerHTML = elem.innerHTML;
};


const getTracks = (term) => {
    let i = 0
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}&limit=5`
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(tracks => {
            if (tracks.length == 0) {
                document.querySelector("#tracks").innerHTML =
                `<section id="tracks">No tracks found that matches your search criteria.</section>`
            }
            else {
                document.querySelector("#tracks").innerHTML = ''
                for (const track of tracks) {
                    if (i < 5){
                        document.querySelector("#tracks").innerHTML +=
                        `<section class="track-item preview" data-preview-track=${track.preview_url} onclick="playTrack(event);">
                            <img src=${track.album.image_url}>
                            <i class="fas play-track fa-play" aria-hidden="true"></i>
                            <div class="label">
                                <h3>${track.name}</h3>
                                <p>
                                    ${track.artist.name}
                                </p>
                            </div>
                        </section>`
                        i += 1 
                    }
                }   
            }   
        })
};

const getAlbums = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(albums => {
            if (albums.length == 0) {
                document.querySelector("#albums").innerHTML =
                `<section id="albums">No albums were returned.</section>`
            }
            else {
                document.querySelector("#albums").innerHTML = ''
                for (const album of albums){
                    document.querySelector("#albums").innerHTML +=
                    `<section class="album-card" id=${album.id}>
                        <div>
                            <img src=${album.image_url}>
                            <h3>${album.name}</h3>
                            <div class="footer">
                                <a href= target=${album.spotify_url}"_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`
                }
            }
        })
};


const getArtist = (term) => {    
    let url = baseURL + `?type=artist&q=${term}&limit=1`;
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(artist => {
            if (artist.length != 1) {
                document.querySelector("#artist").innerHTML =
                `<section id="artist">No artist found that matches your search criteria.</section>`
            }
            else { 
                document.querySelector("#artist").innerHTML =
                `<section class="artist-card" id="${artist[0].id}">
                    <div>
                        <img src="${artist[0].image_url}">
                        <h3>${artist[0].name}</h3>
                        <div class="footer">
                            <a href="${artist[0].spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
            }
        })   
};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};



