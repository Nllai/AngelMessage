$(document).ready(function(){
    $('#read').on('click', function () {
     var text=$('#read').text();
     if(text === "READ MORE"){
       $(this).html('READ LESS');
     } else{
       $(this).text('READ MORE');
    }
   });

    $('#read2').on('click', function () {
        var text=$('#read2').text();
        if(text === "READ MORE"){
        $(this).html('READ LESS');
        } else{
        $(this).text('READ MORE');
    }
    });
    });
