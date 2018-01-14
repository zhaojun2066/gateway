//加载下一页ID链接列表
function loadNextPageId(){
    $.ajax({
        url:'/outPage/getAllOutPagesByGroupId',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:{
            groupId:0 //[[${groupId}]]
        },
        timeout:5000,    //超时时间
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            var op = data.data;
            $(".link_val").each(function(index,element){
                var linkValue = element.value;
                var html = '<div class="row"><label class="col-sm-2 control-label no-padding-right" for="form-field-8">下一页地址：</label><select class="col-sm-8 nextPage select2" id="form-field-select-1">';
                html += '<option value="0"></option>';
                for(var key in op){
                    html += '<option ';
                    if(linkValue==key){
                        html += ' selected ';
                    }
                    html += 'value="'+key+'">'+op[key]+'</option>';
                }
                html += '</select></div>';
                $(this).replaceWith(html);
            });
        },
        error:function(xhr,textStatus){
        },
        complete:function(){
            $(".select2").select2();
        }
    });
}

//上传图片控件初始化start
function imgLoader(imgId){
    var btn_choose = "选择文件";
    var no_icon = "ace-icon fa fa-picture-o";
    var whitelist_ext = ["jpeg", "jpg", "png", "gif" , "bmp"];
    var whitelist_mime = ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/bmp"];
    var file_input;
    if(imgId==null){
        file_input = $('.file');
    }else{
        file_input = $('#'+imgId);
    }
    file_input
        .ace_file_input('update_settings',
            {
                'btn_choose': btn_choose,
                'no_icon': no_icon,
                'allowExt': whitelist_ext,
                'allowMime': whitelist_mime,
                'droppable':false
            })
    file_input.ace_file_input('reset_input');
    file_input
        .off('file.error.ace')
        .on('file.error.ace', function(e, info) {});
}
//上传图片空间初始化end

//鼠标悬停显示图片
function showImg(){
    $("#content_wrapper").find(".ace-file-container").hover(function(){
        var href = $(this).find(".ace-file-name").attr("data-title");
        if(href=="No File ..."){
            //href = "";//设置默认显示图片
        }else{
            $(this).append("<p id='pic'><img src='"+href+"' id='pic1'/></p>");
        }
        $("#content_wrapper").find(".uploadForm").find(".ace-file-name").mousemove(function(e){
            $("#pic").css({
                "z-index":999
                // "top":(e.pageY+10)+"px",
                // "left":(e.pageX+20)+"px"
            }).fadeIn("fast");
            // $("#pic").fadeIn("fast");
        });

    },function(){
        $("#pic").remove();
    });
}



function compress(fil){
    var Pic;
    var Cnv = document.createElement('canvas');
    var imgObj = document.createElement('img');
    var Cntx = Cnv.getContext('2d');//获取2d编辑容器
    var imgss = new Image();
    var fd;
    for (var intI = 0; intI < fil.length;intI++) {
        var tmpFile = fil[intI];
        var reader = new FileReader();
        reader.readAsDataURL(tmpFile);
        reader.onload = function (e) {
            url = e.target.result;
            imgss.src = url;
            imgObj.src=url;
            imgObj.onload = function () {
                //等比缩放
                //var m = imgss.width / imgss.height;
                //Cnv.height =300;//该值影响缩放后图片的大小
                //Cnv.width= 300*m ;
                //img放入画布中
                //设置起始坐标，结束坐标
                //Cntx.drawImage(imgObj, 0, 0,300*m,300);
                Cnv.height =imgss.height;//该值影响缩放后图片的大小
                Cnv.width= imgss.width ;
                Cntx.drawImage(imgObj, 0, 0,imgss.width,imgss.height);

                var qualityArgument = 0.6;
                Pic = Cnv.toDataURL("image/jpeg",qualityArgument);
//                            var imgs =document.getElementById("press");
//                            imgs.src =Pic ;
                //Pic = Pic.replace(/^data:image\/(jpeg);base64,/, "");

                //var blob = convertBase64UrlToBlob(Pic);
                var blob = dataURItoBlob(Pic);

                var formObj = document.createElement('form');
                var imgObj1 =document.createElement("img");
                imgObj1.src =Pic ;
                formObj.append(imgObj1);
                fd = new FormData(formObj);
                //fd.append("the_file", blob, 'image.png');

            }
        }
    }
    return fd;
}

function convertBase64UrlToBlob(urlData){

    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new Blob( [ab] , {type : 'image/png'});
}

function dataURItoBlob(base64Data) {
    var byteString;
    if (base64Data.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(base64Data.split(',')[1]);
    else
        byteString = unescape(base64Data.split(',')[1]);
    var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}