/**
 *
 * @param data_form_id    添加form id
 * @param search_form_id or callbackFunction
 */
function vilidata() {
    var count  =  arguments.length;
    var data_form_id;
    if (count<=0){
        return;
    }

    if (count==1){
        data_form_id= arguments[0];
    }

    var search_form_id =null;
    var callbackFunction = null;
    for(var i =0;i<count;i++){
        if (i==0){
            data_form_id = arguments[0];
        }else {
            var argument =  arguments[i];
            var ty = $.type(argument);
            if (ty=='string'){
                search_form_id = argument;
            }else if(ty=='function'){
                callbackFunction = argument;
            }
        }
    }

    if (callbackFunction==null){
        callbackFunction = defaultCallback;
    }




    var fields = {};
    $('#'+data_form_id).find(':input').each(
        function(){
           var f = $(this);
           var type = this.type;
           if (type == 'passsword' ||　type=='select-multiple'　　|| type=='select-one'|| type=='text'||
               type=='textarea'|| type=='checkbox'|| type=='radio'){
               if(hasAttr(f,'name')){
                   var name = f.attr('name');
                   fields[name]={
                       validators: {}
                   };
                   if(hasAttr(f,'req')){
                       var req = f.attr('req');
                       fields[name]['validators']['notEmpty']={};
                       if (hasAttr(f,'empty_err')) {
                           var empty_err= f.attr('empty_err');
                           fields[name]['validators']['notEmpty']['message']=empty_err;
                       }
                   }
                   if(hasAttr(f,'numeric')){
                       var numeric = f.attr('numeric');
                       fields[name]['validators']['numeric']={};
                       if (hasAttr(f,'numeric_err')) {
                           var numeric_err= f.attr('numeric_err');
                           fields[name]['validators']['numeric']['message']=numeric_err;
                       }
                   }
                   if(hasAttr(f,'length')){
                       var length = f.attr('length');
                       var lengths = length.split('-');
                       fields[name]['validators']['stringLength']={min: lengths[0], max: lengths[1]};
                       if (hasAttr(f,'length_err')) {
                           var length_err= f.attr('length_err');
                           fields[name]['validators']['stringLength']['message']=length_err;
                       }
                   }
                   if(hasAttr(f,'reg')){
                      var reg = f.attr('reg');
                      fields[name]['validators']['regexp']={'regexp':reg};
                      if (hasAttr(f,'reg_err')) {
                          var reg_err= f.attr('reg_err');
                          fields[name]['validators']['regexp']['message']=reg_err;
                H      }
                  }
                   if (hasAttr(f,'rmi')) {
                       var rmi= f.attr('rmi');
                       var rmi_err='该字段已经被占用';
                       if (hasAttr(f,'rmi_err')) {
                           rmi_err= f.attr('rmi_err');
                       }
                       fields[name]['validators']['remote']={
                           url: rmi,//验证地址
                           message: rmi_err,//提示消息
                           type: 'POST'//请求方式
                       }

                       if (hasAttr(f,'rmi_ids')) {
                           var rmi_ids= f.attr('rmi_ids');
                           var ids = rmi_ids.split(',');
                           if (ids.length>0){
                                var parms ={};
                                for(var j=0;j<ids.length;j++){
                                    parms[ids[j]] = $('#'+ids[j]).val();
                                }
                               fields[name]['validators']['remote']={
                                   url: rmi,//验证地址
                                   message: rmi_err,//提示消息
                                   type: 'POST',//请求方式
                                   data:function(){
                                       return parms;
                                   }
                               }
                           }

                       }
                   }


               }

           }

        }
    );
    $('#'+data_form_id).bootstrapValidator({
        message: '输入格式错误',
        feedbackIcons: {/*输入框不同状态，显示图片的样式*/
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: fields
    }).on("success.form.bv",function(e){
        e.preventDefault();
        //var $form = $(e.target);
        var el_form = e.target;
        //ajax提交表单
        ajaxSubmit(el_form,function(data){
            callbackFunction(search_form_id,data);
        });

    });
}


//真正提交动作/^[^/s]*$/
function ajaxSubmit(frm, fn) {
    var dataPara = getFormJson(frm);
    $.ajax({
        url : frm.action,
        type : frm.method,
        data : dataPara,
        dataType : "json",
        async: false,//异步
        success : fn
    });
}

// 将form中的值转换为键值对。
function getFormJson(frm) {
    var a = $(frm).serializeArray();
    return a;
}

function defaultCallback(search_form_id,result){
    if(!result.valid){
        $.alert({
            title: '提示!',
            content: result.msg
        });
    }else {

        //如果不包含/ 说是formId
        if (search_form_id==null){
            document.location.reload();
        }else {
            $('#'+search_form_id).submit();
        }
    }

}

function bindSubmitRefreshContainer(dataFormId,url,containerId){
     $('#'+dataFormId).bind('submit', function(){
            ajaxSubmit(this, function(data){
                if(data){
                     $.alert({
                           title: '提示!',
                           content: '操作成功!',
                       });
                    refreshWin(url,containerId);
                }else{
                   $.alert({
                       title: '提示!',
                       content: '网络异常，请稍后重试!',
                   });
                }
            });
            return false;
        });
}


function bindSubmitRefreshContainerCloseCurrentWin(dataFormId,url,containerId,currentWinCloseBtnId){
     $('#'+dataFormId).bind('submit', function(){
            ajaxSubmit(this, function(data){
                if(data){
                     $.alert({
                           title: '提示!',
                           content: '操作成功!',
                       });
                    refreshWin(url,containerId);
                    $('#'+currentWinCloseBtnId).click();
                }else{
                   $.alert({
                       title: '提示!',
                       content: '网络异常，请稍后重试!',
                   });
                }
            });
            return false;
        });
}

/**
*objE为form表单
**/
function clearForm(objE){
    $(objE).find(':input').each(
        function(){
            switch(this.type){
                case 'passsword':
                case 'select-multiple':
                case 'select-one':
                case 'text':
                case 'textarea':
                    $(this).val('');
                    break;
                case 'checkbox':
                case 'radio':
                    this.checked = false;
            }
        }
    );
}

function clearFormWithCallback(objE,callback){
    $(objE).find(':input').each(
        function(){
            switch(this.type){
                case 'passsword':
                case 'select-multiple':
                case 'select-one':
                case 'text':
                case 'textarea':
                    $(this).val('');
                    break;
                case 'checkbox':
                case 'radio':
                    this.checked = false;
            }
        }
    );
    callback();
}

function destroyFormVilidator(formId){
    $("#"+formId).data('bootstrapValidator').destroy();
    $('#'+formId).data('bootstrapValidator', null);
}


function bindSubmitAjaxCallback(dataFormId,callback){
     $('#'+dataFormId).bind('submit', function(){
            ajaxSubmit(this, function(data){
                 callback(data);
            });
            return false;
      });
}

