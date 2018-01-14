function openOpValueWin(utl,containerId){
    $.get(utl,function(data) {
        $("#"+containerId).html(data);
    });
}

function closeWin(modelId){
      $('#'+modelId).model('hide');
}


function openWin(utl,containerId){
     $.get(utl,function(data) {
         console.log(data);
         console.log( containerId )
         $("#"+containerId).html(data);
     });
 }

 function refreshWin(utl,containerId){
     $.get(utl,function(data) {
             $("#"+containerId).html(data);
         });
 }

 function refreshWithEditor(utl,containerId,editorFunc){
     $.get(utl,function(data) {
             $("#"+containerId).html(data);
             editorFunc();
         });
 }

 function openWinWithEditor(utl,containerId,editorFunc){
      $.get(utl,function(data) {
          $("#"+containerId).html(data);
           editorFunc();
      });
  }

   function openWinWithCallback(utl,containerId,callback){
        $.get(utl,function(data) {
            $("#"+containerId).html(data);
             callback();
        });

    }

function openEPWin(utl,containerId){
    $.get(utl,function(data) {
        $("#"+containerId).html(data);
    });
}