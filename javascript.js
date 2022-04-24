$(document).ready(function () {
    var t=30;
function time1(){
        t=t-1;
        if(t<30){
            $('#time1').html(t);
        }
        if(t<1){
            window.clearInterval(update)
            $('#time1').html('TIME OUT');
            $('#qdiv1').hide();

        }
    }
    update=setInterval(time1, 1000);

$('#q2').hide();
$('#q3').hide();
$('#q4').hide();
$('#result').hide();
$('#btn1').click(function(){
    $('#q1').hide();  
    $('#q2').show();
    var time=30;
    function time2(){
        time=time-1;
        if(time<30){
        $('#time2').html(time);
    }
    if(time<1){
        window.clearInterval(update)
        $('#time2').html('TIME OUT');
        $('#qdiv2').hide();
    }
}
    update=setInterval(time2, 1000);
});
$('#btn2').click(function(){
    $('#q1').hide();
    $('#q2').hide();
    $('#result').hide();
    $('#q3').show();
    var tl=30;
    function time3(){
        tl=tl-1;
        if(tl<30){
        $('#time3').html(tl);
    }
    if(tl<1){
        window.clearInterval(update)
        $('#time3').html('TIME OUT');
        $('#qdiv3').hide();
    }
}
    update=setInterval(time3,1000);
});
$('#btn3').click(function(){
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#result').hide();
    $('#q4').show();
    var tl1=30;
    function time4(){
        tl1=tl1-1;
        if(tl1<30){
        $('#time4').html(tl1);
    }
    if(tl1<1){
        window.clearInterval(update)
        $('#time4').html('TIME OUT');
        $('#qdiv4').hide();
    }
}
    update=setInterval(time4,1000);
});
$('#btn4').click(function(){
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
    $('#result').show();
    
});

});