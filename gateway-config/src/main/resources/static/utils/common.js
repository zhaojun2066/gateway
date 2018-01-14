
/**
删除
**/
function deleteById(id,deleteUrl,formId){
    $.confirm({
            title: '提示！',
            content: '确认要删除该项吗？',
            theme: 'bootstrap',
            animation: 'scale',
            type: 'blue',
            buttons: {
                ok: {
                    text: "确定",
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function(){
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
                                  }
                              },
                              error:function(xhr,textStatus){
                              },
                              complete:function(){
                              }
                            });
                    }
                },
                cancel: {
                    text: "取消",
                    btnClass: 'btn-primary',
                    keys: ['esc'],
                    action:function () {
                    }

                }
            }
    });
}

//打开编辑和添加窗口
function openEditWin(url,formId){

        $.confirm({
            theme: 'bootstrap',
            animation: 'scale',
            type: 'blue',
            title: '编辑项目',
            content: 'url:'+url+'',
            columnClass: 'col-md-6 col-md-offset-3',
            buttons: {
                ok: {
                    text: "保存",
                    btnClass: 'btn-primary',
                    keys: ['enter'],
                    action: function(){

                    }
                },
                cancel: {
                    text: "取消",
                    btnClass: 'btn-primary',
                    keys: ['esc'],
                    action:function () {
                    }

                }
            }
        });
}

function openAdd() {
    
}


//打开编辑和添加窗口
function openWin(title,url){
    slert("ok");
        $.dialog({
            theme: 'bootstrap',
            animation: 'scale',
            type: 'blue',
            title: title,
            content: 'url:'+url,
            closeIcon: true,
            columnClass: 'col-md-8 col-md-offset-2'
        });
}