var meals = {};
var meals2 = new Object();
var meals3 = { breakfast: "oatmeal" };
var meals4 = new Object ({ breakfast: "oatmeals"});
console.log(meals4.breakfast)

var playlist = {
  FleetFoxes: 'Mykonos',
  Bob: 'London Bridge' ,
  Yeasayer: 'Sunrise'
}
function updatePlaylist(playlist, artist, song) {
  playlist.artist = [song]
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}