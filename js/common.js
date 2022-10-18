$(document).ready(function(){

    var imgs = 4;
    var now = 0;
    var width = $('#visual .item li, p').width();
    setInterval(function(){
        now = now == imgs ? 0 : now += 1;
        $('#visual .item').animate({
            left : now * -width
        });
    }, 3000);
    
});