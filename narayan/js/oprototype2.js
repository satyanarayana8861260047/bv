function song(name,artist,year){
    this.name = name;
    this.artist = artist;
    this.year = year;

}
let song1 = new song('jana gana mana','R tagore',1940);
let song2 = new song('anisutide yako indu','sonu nigam',2007);
let song3 = new song('jote joteyali','s.p balasubramanya',2009);
song.prototype.duration = 0;

console.log(typeof song1);
console.log(song1.duration);
console.log(song2.duration);
console.log(song3.duration);