$("button").click(function() {
    $(".img1").attr("src", "https://media2.giphy.com/media/e2NYESj4wyZMY/source.gif");
    $(".mouseOnBox").text("DOUBLE CLICK THE HEADER!");
});

$(".H1").dblclick(function() {
 $(".H1").text("YOU FOUND THE ISLAND!");
    $(".img2").show();
    $(".mouseOnBox").hide();
    $(".clicky").hide();
});

$(".img2").hover(function(){
    $("body").css("Background-color","blue");
   
});


$(".img2").hide();

