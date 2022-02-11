function song(name,artist,year){
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.completeDetails = function() {
        return this.name + "" + this.artist + "" + this.year ;
    }
    this.play = function() {
        console.log(this.name + " song is playing");
    }
}
 var mysong = new song("Jana Gana Mana","r tagore", 1940 );
 console.log(mysong.completeDetails());
 mysong.play(); 
 

