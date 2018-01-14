var cf_div = '<div id="dialog-confirm" class="hide">'+
    '<div class="space-6"></div>'+
    '<p class="bigger-110 bolder center grey">'+
        '<i class="ace-icon fa fa-hand-o-right blue bigger-120"></i>'+
        ' 确认执行该操作吗? '+
    '</p>'+
'</div>';

$(function(){
    $('body').append(cf_div);
});


function deleteById(id,deleteUrl,formId){
    $( "#dialog-confirm" ).removeClass('hide').dialog({
                resizable: false,
                width: '320',
                modal: true,
                title: "提示",
                title_html: true,
                buttons: [
                    {
                        html: "<i class='ace-icon fa fa-trash-o bigger-110'></i>&nbsp; 确认",
                        "class" : "btn btn-danger btn-minier",
                        click: function() {
                              $.ajax({
                                   url:deleteUrl,
                                   type:'POST', //GET
                                   async:true,    //或false,是否异步
                                   data:{
                                       id:id
                                   },
                                   timeout:5000,    //超时时间
                                   dataType:'json',
                                   success:function(data,textStatus,jqXHR){
                                       if(data){
                                          $('#'+formId).submit();
                                          $( this ).dialog( "close" );
                                       }
                                   },
                                   error:function(xhr,textStatus){
                                   },
                                   complete:function(){
                                   }
                                 });

                        }
                    }
                    ,
                    {
                        html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; 取消",
                        "class" : "btn btn-minier",
                        click: function() {
                            $( this ).dialog( "close" );
                        }
                    }
                ]
            });
}


function openWinWithBtn(winId,url,formId){
        if($("#"+winId).length<=0){
            var winDiv = '<div id="'+winId+'" class="hide">  '+
                              '<iframe  src=""></iframe>  '+
                         ' </div> ';
            $('body').append(winDiv);
        }

        var dialog = $( "#"+winId ).removeClass('hide').dialog({
                modal: true,
                title: " 编辑",
                open: function(ev, ui){
                              $('#'+winId).find('iframe')[0].attr('src',url);
                          },
                buttons: [
                    {
                        text: "取消",
                        "class" : "btn btn-minier",
                        click: function() {
                            $( this ).dialog( "close" );
                        }
                    },
                    {
                        text: "保存",
                        "class" : "btn btn-primary btn-minier",
                        click: function() {
                            $( this ).dialog( "close" );
                        }
                    }
                ]
            });

}


