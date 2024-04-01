console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {artist: "Stephen Bawes",songName: "Teenage Dreams", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {artist: "G-eazy",songName: "Him & I", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {artist: "Ariana Grande",songName: "7 Rings", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {artist: "Taylor Swift",songName: "Gorgeous", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {artist: "JaymesYoung ",songName: "infinity", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {artist: "Lana Del Rey",songName: "West Coast", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {artist: "taylor Swift",songName: "Wildest Dreams", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {artist: "The Weeknd,Jennie,Lilly-Rose Depp",songName: "One of the girls", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {artist: "Modern Talking",songName: "Cheri Cheri lady", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {artist: "R.E.M.",songName: "Radio", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {artist: "Lana Del Rey",songName: "Doin Time", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {artist: "Rihanna",songName: "Diamonds", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {artist: "Shawn Mendes, Camilla Cabello",songName: "Senorita", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {artist: "Taylor Swift",songName: "Style", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {artist: "Britney Spears",songName: "Circus", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {artist: "Lana Del Rey",songName: "Chemtrails Over the Country Club", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {artist: "Arctic Monkeys",songName: "I Wanna Be Yours", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {artist: "Elvis Presley",songName: "Cant help falling in love", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {artist: "The Weeknd",songName: "Starboy", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {artist: "Fun",songName: "We are young", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {artist: "The Weeknd",songName: "Popular", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {artist: "Kate Bush",songName: "Running up that hill", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {artist: "Stephen Sanchez",songName: "Until I found you", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {artist: "Henrik",songName: "Half of forever", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {artist: "David Kushner",songName: "Daylight", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {artist: "Glass Animals",songName: "Heat Waves", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {artist: "Why Don't We",songName: "Lotus Inn", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {artist: "Benson Boone",songName: "Beautiful Things ", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {artist: "Bon Iver & Vincet",songName: "Roslyn", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {artist: "Billie Eilish",songName: "Bad Guy", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {artist: "Gotye",songName: "Somebody that I used to know", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {artist: "Lord Huron",songName: "The Night We Met ", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {artist: "Payton",songName: "Rich Boy", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {artist: "Chris Brown",songName: "Under the influence", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {artist: "Dhruv",songName: "Double Take", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
    {artist: "Halle Abadi",songName: "BOYTOY", filePath: "songs/36.mp3", coverPath: "covers/36.jpg"},
    {artist: "Taylor Swift",songName: "Delicate", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {artist: "Post Malone",songName: "Circles", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {artist: "Ed Sheeran",songName: "Shape of you", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {artist: "The Weeknd",songName: "Often", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {artist: "Jay Sean",songName: "Ride it ", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {artist: "ZOMBIES",songName: "We own the night", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {artist: "Aurora",songName: "Runaway", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},

]

songItems.forEach((element, i) => {
    if (i < songs.length) { // Check if there are still songs to populate
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    } else {
        // Hide or disable UI elements for additional songs if needed
        element.style.display = "none";
    }
});
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    if (i < songs.length) { // Check if there are still songs to attach event listeners to
        element.addEventListener('click', (e) => {
            makeAllPlays();
            songIndex = i; // Use the index of the clicked element
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath; // Use the file path from the songs array
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        });
    }
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=43){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
/// Define the addToPlaylist function to add songs to the playlist
const addToPlaylist = (song) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${song.title} - ${song.artist}`;
    playlistItems.appendChild(listItem);
};


// Function to generate personalized recommendations based on user preferences
const generateRecommendations = (userPreferences) => {
    const favoriteArtist = userPreferences.favoriteArtist;
    
    const recommendations = songs.filter(song => {
        // Filter songs based on both song artist and user's favorite artist
        return song.artist === favoriteArtist || song.artist.includes(favoriteArtist);
    });

    // Clear previous recommendations
    const playlistItems = document.getElementById('playlistItems');
    playlistItems.innerHTML = '';

    if (recommendations.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = "Sorry, no recommendations available based on your preferences.";
        playlistItems.appendChild(listItem);
    } else {
        recommendations.forEach(song => {
            addToPlaylist(song); // Assuming addToPlaylist function appends the song to the playlist
        });
    }
};

// Event listener for recommendation button click
const recommendButton = document.getElementById('recommendButton');
recommendButton.addEventListener('click', () => {
    const favoriteArtistInput = document.getElementById('favoriteArtist');
    const favoriteArtist = favoriteArtistInput.value;
    generateRecommendations({ favoriteArtist: favoriteArtist });
});
document.addEventListener("DOMContentLoaded", function() {
    const playlist = document.getElementById("playlist");
    const addSongBtn = document.getElementById("addSongBtn");
    const songInput = document.getElementById("songInput");
  
    addSongBtn.addEventListener("click", function() {
      const songName = songInput.value.trim();
      if (songName !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${songName}</span><button class="removeBtn">Remove</button>`;
        playlist.appendChild(li);
        songInput.value = ""; // Clear input field after adding song
      }
    });
  
    playlist.addEventListener("click", function(event) {
      if (event.target.classList.contains("removeBtn")) {
        const listItem = event.target.closest("li");
        listItem.remove();
      }
    });
  });