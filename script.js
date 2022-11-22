function start(){
var numb = 99,
    bottle = "bottles",
    lyrics = "",
    output = document.getElementById('container');
while (numb > 0) {
    if (numb == 1) {
        bottle = "bottle";
    }

    lyrics += numb + " ";
    lyrics += bottle + " of beer on the wall, ";
    lyrics += numb + " " + bottle + " of beer.<br>";
    
    numb--;
    lyrics += "Take one down and pass it around, ";
    lyrics += + numb + " bottles of beer on the wall.<hr>"

    if (numb == 0) {
        numb = "no more";
    }
    output.innerHTML += lyrics;
    lyrics = '';
}

output.innerHTML += " No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.";

}