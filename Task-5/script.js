const colorPicker = document.getElementById("colorPicker");
const playlistDiv = document.getElementById("playlist");

const moods = {
  "#ff0000": {
    mood: "Energetic",
    songs: [
      { name: "Blinding Lights", link: "https://youtu.be/fHI8X4OXluQ" },
      { name: "Can't Hold Us", link: "https://youtu.be/2zNSgSzhBfM" },
    ],
  },
  "#0000ff": {
    mood: "Chill",
    songs: [
      { name: "Lo-fi Beats", link: "https://youtu.be/jfKfPfyJRdk" },
      { name: "Chillhop Essentials", link: "https://youtu.be/5yx6BWlEVcY" },
    ],
  },
  "#00ff00": {
    mood: "Happy",
    songs: [
      { name: "Happy", link: "https://youtu.be/ZbZSe6N_BXs" },
      { name: "Good Vibes", link: "https://youtu.be/3GwjfUFyY6M" },
    ],
  },
};

colorPicker.addEventListener("input", (e) => {
  const color = e.target.value.toLowerCase();
  const playlist = moods[color] || null;

  if (playlist) {
    playlistDiv.innerHTML =
      `<h2>${playlist.mood} Playlist 🎶</h2>` +
      playlist.songs
        .map(
          (song) => `<a href="${song.link}" target="_blank">${song.name}</a>`
        )
        .join("<br>");
    playlistDiv.classList.remove("hidden");
    playlistDiv.classList.add("show");
  } else {
    playlistDiv.innerHTML =
      "<p>No playlist found for this color. Try red, blue or green!</p>";
    playlistDiv.classList.remove("hidden");
    playlistDiv.classList.add("show");
  }
});
