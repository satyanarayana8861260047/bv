function song(name,artist,year){
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.play = function(){
        console.log(this.name + ' is playing');
    }
}