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

    //--------------------------------------start
    let correctans=0;
    let wrongans=0;
    let correct=0;
    let wrong=0;
    //--------------------------------------end

$('#q2').hide();
$('#q3').hide();
$('#q4').hide();
$('#result').hide();

//--------------------------------------------------------------------start
 $('#ans1o1').click(function(){
            if(wrong==0){
                wrong++;
            correct=0;
            }
     });
 $('#ans1o2').click(function(){
            if( correct==0){
                correct++;
               wrong=0;
            }
     });
 $('#ans1o3').click(function(){
         if(wrong==0){
                wrong++;
                correct=0;
            }
     });
 $('#ans1o4').click(function(){
        if(wrong==0){
                wrong++;
                correct=0;
            }
     });
//--------------------------------------------------------------------end

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


      let correct1=0;
      let wrong1=0;

      $('#ans2o1').click(function(){
            if(wrong1==0){
                wrong1++;
            correct1=0;
            }
     });
 $('#ans2o2').click(function(){
            if( wrong1==0){
                wrong1++;
                correct1=0;
            }
     });
 $('#ans2o3').click(function(){
         if(correct1==0){
            correct1++;
            wrong1=0;
            }
     });
 $('#ans2o4').click(function(){
        if(wrong1==0){
                wrong1++;
                correct1=0;
            }
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

    let correct2=0;
    let wrong2=0;


    $('#ans3o1').click(function(){
            if(wrong2==0){
                wrong2++;
            correct2=0;
            }
     });
 $('#ans3o2').click(function(){
            if( correct2==0){
                correct2++;
               wrong2=0;
            }
     });
 $('#ans3o3').click(function(){
         if(wrong2==0){
                wrong2++;
                correct2=0;
            }
     });
 $('#ans3o4').click(function(){
        if(wrong2==0){
                wrong2++;
                correct2=0;
            }
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

    let correct3=0;
    let wrong3=0;

    $('#ans4o1').click(function(){
                if(wrong3==0){
                    wrong3++;
                    correct3=0;
                }
         });
     $('#ans4o2').click(function(){
                if( correct3==0){
                    correct3++;
                   wrong3=0;
                }
         });
     $('#ans4o3').click(function(){
             if(wrong3==0){
                    wrong3++;
                    correct3=0;
                }
         });
     $('#ans4o4').click(function(){
            if(wrong3==0){
                    wrong3++;
                    correct3=0;
                }
         });
   

$('#btn4').click(function(){
    $('#q1').hide();
    $('#q2').hide();
    $('#q3').hide();
    $('#q4').hide();
    $('#result').show();


    

    //--------------------------------------------------------------------start
    correctans=  correct +correct1+correct2+correct3;
    wrongans= wrong + wrong1 + wrong2+wrong3;
    $('#correct').html('Correct answers: '+ correctans);
    $('#wrong').html('Wrong answers: '+ wrongans);
    //--------------------------------------------------------------------end

});

});