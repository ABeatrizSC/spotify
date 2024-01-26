const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestAPI(searchValue) {
    const url = `http://localhost:3000/artists?name_like=${searchValue}`;
    fetch(url) /* Chama a url da API */
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistImage.src = element.urlImg;
        artistName.innerHTML = element.name;
    });

    resultsArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue === '') {
        resultPlaylist.classList.remove('hidden');
        resultsArtists.classList.add('hidden'); /* acerto: troquei remove por add */
        return
    } 

    requestAPI(searchValue);
})
