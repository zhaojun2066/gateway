 function deleteById(obj,deleteUrl){
       var deleteObj = $(obj);
       var id = deleteObj.attr('value');
        $.confirm({
            title: '提示!',
            content: '确认要删除该条数据吗!',
            buttons: {
                confirm: function () {
                    $.ajax({
                      url:deleteUrl,
                      type:'POST', //GET
                      async:true,    //或false,是否异步
                      data:{
                          name:id
                      },
                      timeout:5000,    //超时时间
                      dataType:'json',
                      success:function(data,textStatus,jqXHR){
                          if(data){
                            document.location.reload();
                          }
                      },
                      error:function(xhr,textStatus){
                      },
                      complete:function(){
                      }
                  });
                },
                cancel: function () {
                }
            }
        });

}

 function deleteByIdReloadByForm(obj,deleteUrl,searchFormId){
     var deleteObj = $(obj);
     var id = deleteObj.attr('value');
     $.confirm({
         title: '提示!',
         content: '确认要删除该条数据吗!',
         buttons: {
             confirm: function () {
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
                            $('#'+searchFormId).submit();
                         }
                     },
                     error:function(xhr,textStatus){
                     },
                     complete:function(){
                     }
                 });
             },
             cancel: function () {
             }
         }
     });

 }

function deleteByIdCallBack(obj,deleteUrl,refreshUrl,containerId,callback){
       var deleteObj = $(obj);
       var id = deleteObj.attr('value');
        $.confirm({
            title: '提示!',
            content: '确认要删除该条数据吗!',
            buttons: {
                confirm: function () {
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
                         callback(refreshUrl,containerId);
                      },
                      error:function(xhr,textStatus){
                      },
                      complete:function(){
                      }
                  });
                },
                cancel: function () {
                }
            }
        });
}