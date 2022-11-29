function start(){
    var array = [23, 12, 54, 76, 87, 54, 67, 976, 356, 345, 245];
    var largest= 0;

    for (i=0; i<array.length; i++){
        if (array[i]>largest) {
            largest=array[i];
        }
    }

    document.getElementById("container").innerHTML+=("The largest number in your array is "+largest);
}