$("button").click(function(){
    var height = $(".height").val();
    var height = Number(height);
    var position = $(".position").val();
    
if (height <= 160 && position === "libero") {
    $("#result").html("Nishinoya");
} 

else if (height > 160 && position === "setter") {
        $("#result").html("Kageyama");
}

else if (height > 180 && position === "wing spiker") {
     $("#result").html("Bokuto");
} 

else if (height > 190 && position === "middle blocker") {
        $("#result").html("Tsukishima");
}

else {
        $("#result").html("Welcome to the Bench!!! Try Again!!!");
}

});