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
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = [songTitle]
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}