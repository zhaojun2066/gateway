$(function() {
	var height = $(window).height() + 'px'
	$('.templateList').css('height', height);
	$('.templateList').css('max-height', height);

	$('#doc-prompt-toggle').on('click', function() {
		$('#my-prompt').modal({
			relatedTarget: this,
			onConfirm: function(e) {
				if(e.data) {
					saveTemplate(e.data)
				} else {
					alert("不能为空")
				}
			},
			onCancel: function(e) {

			}
		});
	});

    $('#doc-prompt-toggle-page').on('click', function() {
        savePage();
        // $('#my-prompt-page').modal({
        //     relatedTarget: this,
        //     onConfirm: function(e) {
        //         if(e.data) {
        //             savePage(e.data)
        //         } else {
        //             alert("不能为空")
        //         }
        //     },
        //     onCancel: function(e) {
        //
        //     }
        // });
    });

    $('#doc-prompt-toggle-content').on('click', function() {
        $('#my-prompt-content').modal({
            relatedTarget: this,
            onConfirm: function(e) {
                if(e.data) {
                    saveContent(e.data);
                } else {
                    alert("不能为空");
                }
            },
            onCancel: function(e) {

            }
        });
    });

    $('#doc-prompt-toggle-content-update').on('click', function() {
        updateContent();
    });

	function saveTemplate(data) {
		$('.templateTitle').html(data);
		$('.saveBtn').trigger("click");
		$('.templateList').remove();
		$('#content_wrapper').parent().removeAttr('class');
		$('.htmlBtngroup').css('display', 'block');
		$('.delete').css('display', 'none');
		$('.toolbar').remove();
        template();
	}

	function savePage(){
        $('.saveBtn').trigger("click");
        $('.templateList').remove();
        $('#content_wrapper').parent().removeAttr('class');
        $('.htmlBtngroup').css('display', 'block');
        $('.delete').css('display', 'none');
        $('.toolbar').remove();
        h5Page();
	}

    function saveContent(data) {
        $('.contentTitle').html(data);
        $('.saveBtn').trigger("click");
        $('.templateList').remove();
        $('#content_wrapper').parent().removeAttr('class');
        $('.htmlBtngroup').css('display', 'block');
        $('.delete').css('display', 'none');
        $('.toolbar').remove();
        content();
    }

    function updateContent() {
        $('.saveBtn').trigger("click");
        $('.templateList').remove();
        $('#content_wrapper').parent().removeAttr('class');
        $('.htmlBtngroup').css('display', 'block');
        $('.delete').css('display', 'none');
        $('.toolbar').remove();
        contentUpdate();
    }
})

$('.saveHtml').click(function() {

	$('htmlBtngroup').remove();
	$('.toolbar').remove();
	$('#my-alert').remove();
})

$('#chooseTemplate').on('click', 'li', function() {
	$(this).addClass('active').siblings().removeClass('active')
})

$('#chooseTemplate>li').click(function() {
	var itemList = $('#chooseTemplate>li');
	var modelId =$(this).attr('data-model-id');
	var html = getModel(modelId);
	var oDiv = $('<div class="model"></div>');
	oDiv.html(html);
	var oDiv2=$('<div class="modelId"></div>');
	oDiv2.html(modelId);
	oDiv.append(oDiv2);
	$('#content_wrapper').append(oDiv)

})

$('.saveAll').click(function() {
	toggleStatus(false);
})

$('.editAll').click(function() {
	toggleStatus(true);
})

function toggleStatus(status) {
	if(status) {
		$('.toolbar').css('display', 'block')
		// show
	} else {
		$('.toolbar').css('display', 'none')
		// hide
	}
}

function delHr(e) {
	var delBtn = e.target;
	$(delBtn).parent().parent().remove();
}

function del(e) {
	var delBtn = e.target;
	var father = $(delBtn).parent().parent().parent().parent();
	father.remove();
}

function save(e) {
	var btn = e.target
	var father = $(btn).parent().parent().parent();
	var text_input = father.find('.text_input');
	var link_inp = father.find('.link_val');
	var link_box = father.find('.link_box');
	var links = father.find('.link');
	var text_content = father.find('.text_content');
	var text_val = text_input.val();
	var link_val = link_inp.val();
	var text_p = text_val;
	if(text_val && text_val.indexOf('#') != -1) {
		var texts = text_val.split('#');
		text_p = getTextP(texts);
	}
	if(link_val) {
		links.attr('href', link_val)
	}

	text_content.html(text_p);
	text_input.parent().css('display', 'none');
	text_content.css('display', '-webkit-box');
	link_box.css('display', 'none');
}

function save1(e) {
	var btn = e.target
	var father = $(btn).parent().parent().parent();
	var link_val = father.find('.link_val').val();
	var links = father.find('.link');
	var text_input = father.find('.text_input');
	var title_input = father.find('.title_val');
	var title_content = father.find('.title_content');
	var text_content = father.find('.text_content');
	var text_val = text_input.val()
	var title_val = title_input.val()
	var text_p = text_val;
	if(text_val && text_val.indexOf('#') != -1) {
		var texts = text_val.split('#')
		text_p = getTextP(texts)
	}
	if(link_val) {
		links.attr('href', link_val)
	}
	title_content.html(title_val)
	text_content.html(text_p);
	text_input.parent().css('display', 'none');
	text_content.css('display', '-webkit-box');
	title_input.parent().css('display', 'none');
	title_content.parent().css('display', 'block');
}

function getTextP(texts) {
	var reg = /&/g

	var html = ''
	for(var i = 0; i < texts.length; i++) {
		var txt = texts[i]
		var txt = texts[i].replace(reg, '&nbsp;')
		html += '<p style="margin:0;line-height:19px;">' + txt + '</P>'
	}
	return html
}

function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic  
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)  
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome  
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}

function imgChange(e) {
	console.log(e.target)
	var fileInput = e.target
	var father = $(fileInput).parent().parent().parent().parent().parent();
	var img = father.find('.z_file');
	var imgs = father.find('.img');
	if(fileInput.files && fileInput.files[0]) {
		var objUrl = getObjectURL(fileInput.files[0]);
		if(objUrl) {
			imgs.attr("src", objUrl);
		}
	}
	//上传到云文件服务器
    $.ajax({//首先生成上传路径，并获取下载路径
		url:'/file/uploadImg',
		type:'POST',
        async: false,
        success:function(data,textStatus,jqXHR){
            var uploadUrl = data.uploadUrl;
			var downloadUrl = data.downloadUrl;
            console.dir("############********");
            console.dir(uploadUrl);
            console.dir(downloadUrl);
            var imgObj = father.find(".uploadForm")[0];
            console.dir(imgObj);
            var formData = new FormData(imgObj);
            console.dir(formData);
            //formData.append('file', imgObj);
            $.ajax({//上传到云文件服务器操作
                url: uploadUrl,
                type: 'POST',
                cache: false,
                data: formData,//new FormData($('#uploadForm')[0]),
                processData: false,
                contentType: false
            }).done(function(res) {
                //alert(res);
                imgs.attr("src", downloadUrl);
            }).fail(function(res) {
                //alert(res.statusText );
                imgs.attr("src", downloadUrl);
            });
        },
        error:function(xhr,textStatus){
        },
    });
}

function edit(e) {
	var btn = e.target
	var father = $(btn).parent().parent().parent();
	var text_input = father.find('.text_input');
	var text_content = father.find('.text_content');
	var link_box = father.find('.link_box');
	text_input.parent().css('display', 'block');
	text_content.css('display', 'none');
	link_box.css('display', 'block');
}

function titleSave(e) {
	var saveBtn = e.target;
	var father = $(saveBtn).parent().parent().parent();
	var title_input = father.find('.title_input');
	var title_wrapper = father.find('.title_wrapper');
	var title_val = title_input.find('input').val();
	title_wrapper.html(title_val);
	title_wrapper.css('display', 'inline-block');
	title_input.css('display', 'none');
}

function titleEdit(e) {
	var editBtn = e.target
	var father = $(editBtn).parent().parent().parent();
	var title_input = father.find('.title_input');
	var title_wrapper = father.find('.title_wrapper');
	title_wrapper.css('display', 'none');
	title_input.css('display', 'inline-block');
}

function addKeyWord(e) {
	var addBtn = e.target;
	var father = $(addBtn).parent().parent().parent();
	var keyWords_input = father.find('.keyWords_input');
	var label_wrapper = father.find('.label_wrapper');
	var label = $('<label></label>');
	var val = keyWords_input.val();
	if(val != '') {
		label.text(val);
		label_wrapper.append(label);
		keyWords_input.val("");
	} else {
		alert('内容不能为空')
	}

}

function delKeyWord(e) {
	var addBtn = e.target;
	var father = $(addBtn).parent().parent().parent();
	var label_wrapper = father.find('.label_wrapper');
	label_wrapper.empty()
}

function delKeyWordTemplate(e) {
	var addBtn = e.target;
	var father = $(addBtn).parent().parent().parent();
	father.remove()
}

function saveKeyWord(e) {
	var addBtn = e.target;
	var father = $(addBtn).parent().parent().parent();
	var keyWordsTitle = father.find('.keyWordsTitle');
	var keywords_title = father.find('.keyWords_title');
	keywords_title.text(keyWordsTitle.val());
	keyWordsTitle.parent().css('display', 'none');
	keywords_title.css('display', 'block');
}

function editKeyWord(e) {
	var editBtn = e.target;
	var father = $(editBtn).parent().parent().parent();
	var keyWordsTitle = father.find('.keyWordsTitle');
	var keywords_title = father.find('.keyWords_title');
	keywords_title.css('display', 'none');
	keyWordsTitle.parent().css('display', 'block')
}

function saveText(e) {
	var saveBtn = e.target;
	var father = $(saveBtn).parent().parent().parent();
	var link_val = father.find('.link_val').val();
	var links = father.find('.link');
	var text_wrapper = father.find('.textVal');
	var text_wrapper_val = text_wrapper.val();
	var text_p = father.find('.text_p');
	var val = text_wrapper_val;
	if(val && val.indexOf('#') != -1) {
		var texts = val.split('#')
		val = getVal(texts)
	}
	if(link_val) {
		links.attr('href', link_val)
	}
	text_p.html(val)
	text_wrapper.parent().css('display', 'none');
	text_p.css('display', 'block')
}

function delTextTemplate(e) {
	var delBtn = e.target;
	var father = $(delBtn).parent().parent().parent().parent();
	father.remove()
}

function editText(e) {
	var editBtn = e.target;
	var father = $(editBtn).parent().parent().parent();
	var text_wrapper = father.find('.textVal');
	var text_p = father.find('.text_p');
	text_wrapper.parent().css('display', 'block');
	text_p.css('display', 'none')
}

function delImg(e) {
    var btn = e.target;
    var father = $(btn).parent().parent().parent();
    father.remove();
}

function saveImg(e){
    var btn = e.target;
    var father = $(btn).parent().parent().parent();
    father.find('.inputBox').css('display','none');
    var links = father.find('.link');
    var linkVal = father.find('.link_val').val();
    if(linkVal){
        links.attr('href',linkVal)
    }
    else{
        links.removeAttr('href')
    }
}

function getVal(texts) {
	var reg = /&/g
	var html = ''
	for(var i = 0; i < texts.length; i++) {
		var txt = texts[i]
		var txt = texts[i].replace(reg, '&nbsp;')
		html += '<p style="font-size: 1.6rem;">' + txt + '</P>'
	}
	return html
}

function save_text(e) {
	var saveBtn = e.target;
	var father = $(saveBtn).parent().parent().parent();
	var link_val = father.find('.link_val').val();
	var links = father.find('.link');
	var show_text = father.find('.show_text');
	var textVal = father.find('.textVal');
	var vals = textVal.val();
	if(vals && vals.indexOf('#') != -1) {
		var texts = vals.split('#')
		vals = getVal(texts)
	}
	if(link_val) {
		links.attr('href', link_val)
	}
	show_text.html(vals);
	show_text.css('display', 'block');
	textVal.parent().css('display', 'none');
}

function edit_text(e) {
	var editBtn = e.target;
	var father = $(editBtn).parent().parent().parent();
	var show_text = father.find('.show_text');
	var textVal = father.find('.textVal');
	show_text.css('display', 'none');
	textVal.parent().css('display', 'block');
}

function template(){
    var content1 = $("#content_wrapper");
    var content = content1.clone();
    var models = new Array();
    content.find(".model").each(function(index,element){
        var map = {};
        var img = "";
        var words = "";
        var keyWords = "";
        var link = "";
    	var modelId = $(this).find(".modelId").text();
		var pos = index + 1;
        if(modelId=='1'){//左图右文
			img = $(this).find(".img")[0].src;
			words = $(this).find(".am-list-item-text.text_content").text();
			link = $(this).find(".link").attr('href');
            //$(this).find(".img").attr('src','&{img_'+pos+'}');//替换图片
            $(this).find(".am-list-item-text.text_content").text("&{words_"+pos+"}");
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}else if(modelId=='2'){//右图左文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
            //$(this).find(".img").attr('src','&{img_'+pos+'}');//替换图片
            $(this).find(".am-list-item-text.text_content").text("&{words_"+pos+"}");
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}else if(modelId=='3'){//下划线

		}else if(modelId=='4'){//下划线标题
            words = $(this).find(".txt.title_wrapper").text();
            $(this).find(".txt.title_wrapper").text("&{words_"+pos+"}");
		}else if(modelId=='5'){//左图右关键字
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-hd.title_content").text();
            link = $(this).find(".link").attr('href');
            $(this).find(".label_wrapper").find("label").each(function(index,element){
                keyWords = keyWords + element.innerText + ";;";
			});
		}else if(modelId=='6'){//纯文本
            words = $(this).find(".text_p").text();
            link = $(this).find(".link").attr('href');
            $(this).find(".text_p").text("&{words_"+pos+"}");
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}else if(modelId=='7'){//文字围绕左图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
            //$(this).find(".img").attr('src','&{img_'+pos+'}');//替换图片
            $(this).find(".show_text").text("&{words_"+pos+"}");
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}else if(modelId=='8'){//文字围绕右图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
            //$(this).find(".img").attr('src','&{img_'+pos+'}');//替换图片
            $(this).find(".show_text").text("&{words_"+pos+"}");
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}else if(modelId=='9'){//图片模板
            img = $(this).find(".img")[0].src;
            link = $(this).find(".link").attr('href');
            //$(this).find(".img").attr('src','&{img_'+pos+'}');//替换图片
            $(this).find(".link").attr('href',"${link_"+pos+"}");
		}
        map['img']=img;
        map['words']=words;
        map['keyWords'] = keyWords;
        map['link']=link;
        map['type']=modelId;
        map['pos']=pos;
        models.push(map);
	});
    console.dir("===============================");

    var templateName = $('.templateTitle').text();
    $.ajax({
        url:'/template/add',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:{
            content:content.html(),
        	templateName:templateName,
            models:JSON.stringify(models)
        },
        timeout:5000,    //超时时间
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            // if(data!=null){
            //     var ops='';
            //     data.forEach(function( qt, index ) {
            //         ops+=' <option value="'+qt.id+','+qt.fieldType+','+qt.unit+','+qt.code+','+qt.quotaCatCode+','+qt.medical+'">'+qt.name+' ['+qt.code+']</option>';
            //     });
            //     $('#'+quotaSelectId).append(ops);
            // }
        },
        error:function(xhr,textStatus){
        },
        complete:function(){
        }
    });

}

function h5Page(){
    var content = $("#content_wrapper");
    var models = new Array();
    content.find(".model").each(function(index,element){
        var map = {};
        var img = "";
        var words = "";
        var link = "";
        var modelId = $(this).find(".modelId").text();
        var outMouldId = $(this).find(".outMouldId").text();
        var pos = index + 1;
        if(modelId=='1'){//左图右文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='2'){//右图左文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='3'){//下划线

        }else if(modelId=='4'){//下划线标题
            words = $(this).find(".txt.title_wrapper").text();
        }else if(modelId=='5'){//左图右关键字

        }else if(modelId=='6'){//纯文本
            words = $(this).find(".text_p").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='7'){//文字围绕左图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='8'){//文字围绕右图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='9'){//图片模板
            img = $(this).find(".img")[0].src;
            link = $(this).find(".link").attr('href');
        }

        //上传图片
        if(img!=null&&img!=""){
            var imgObj = $(this).find(".img")[0];
            //???????????????????????????

            /*
            var formData = new FormData();
            formData.append('file', imgObj);
            $.ajax({
                url:'/file/upload',
                type:'POST',   //GET
                async:true,    //或false,是否异步
                data:formData,
                cache: false,
                processData: false,
                contentType: false,
                timeout:5000,    //超时时间
                dataType:'json',
                success:function(data,textStatus,jqXHR){
                },
                error:function(xhr,textStatus){
                },
                complete:function(){
                }
            });
            */
        }

        map['img']=img;
        map['words']=words;
        map['link']=link;
        map['id']=outMouldId;
        map['pos']=pos;
        models.push(map);
    });
    console.dir("===============================");

    $.ajax({
        url:'/outTemplate/update',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:{
            content:content.html(),
            outModels:JSON.stringify(models)
        },
        timeout:5000,    //超时时间
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            // if(data!=null){
            //     var ops='';
            //     data.forEach(function( qt, index ) {
            //         ops+=' <option value="'+qt.id+','+qt.fieldType+','+qt.unit+','+qt.code+','+qt.quotaCatCode+','+qt.medical+'">'+qt.name+' ['+qt.code+']</option>';
            //     });
            //     $('#'+quotaSelectId).append(ops);
            // }
        },
        error:function(xhr,textStatus){
        },
        complete:function(){
        }
    });
}

function content(){
    var content = $("#content_wrapper");
    var contentModels = new Array();
    content.find(".model").each(function(index,element){
        var map = {};
        var img = "";
        var words = "";
        var keyWords = "";
        var link = "";
        var modelId = $(this).find(".modelId").text();
        var pos = index + 1;
        if(modelId=='1'){//左图右文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='2'){//右图左文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='3'){//下划线

        }else if(modelId=='4'){//下划线标题
            words = $(this).find(".txt.title_wrapper").text();
        }else if(modelId=='5'){//左图右关键字
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-hd.title_content").text();
            link = $(this).find(".link").attr('href');
            $(this).find(".label_wrapper").find("label").each(function(index,element){
                keyWords = keyWords + element.innerText + ";;";
            });
        }else if(modelId=='6'){//纯文本
            words = $(this).find(".text_p").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='7'){//文字围绕左图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='8'){//文字围绕右图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='9'){//图片模板
            img = $(this).find(".img")[0].src;
            link = $(this).find(".link").attr('href');
        }
        map['img']=img;
        map['words']=words;
        map['keyWords'] = keyWords;
        map['link']=link;
        map['type']=modelId;
        map['pos']=pos;
        contentModels.push(map);
    });
    console.dir("===============================");

    var contentName = $('.contentTitle').text();
    var outTemplateId = $('.outTemplateId').val();
    $.ajax({
        url:'/outTemplate/addContent',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:{
            htmlContent:content.html(),
            contentName:contentName,
            outTemplateId:outTemplateId,
            contentModels:JSON.stringify(contentModels)
        },
        timeout:5000,    //超时时间
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            // if(data!=null){
            //     var ops='';
            //     data.forEach(function( qt, index ) {
            //         ops+=' <option value="'+qt.id+','+qt.fieldType+','+qt.unit+','+qt.code+','+qt.quotaCatCode+','+qt.medical+'">'+qt.name+' ['+qt.code+']</option>';
            //     });
            //     $('#'+quotaSelectId).append(ops);
            // }
        },
        error:function(xhr,textStatus){
        },
        complete:function(){
        }
    });

}

function contentUpdate(){
    var content = $("#content_wrapper");
    var contentModels = new Array();
    content.find(".model").each(function(index,element){
        var map = {};
        var img = "";
        var words = "";
        var keyWords = "";
        var link = "";
        var modelId = $(this).find(".modelId").text();
        var pos = index + 1;
        if(modelId=='1'){//左图右文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='2'){//右图左文
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-text.text_content").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='3'){//下划线

        }else if(modelId=='4'){//下划线标题
            words = $(this).find(".txt.title_wrapper").text();
        }else if(modelId=='5'){//左图右关键字
            img = $(this).find(".img")[0].src;
            words = $(this).find(".am-list-item-hd.title_content").text();
            link = $(this).find(".link").attr('href');
            $(this).find(".label_wrapper").find("label").each(function(index,element){
                keyWords = keyWords + element.innerText + ";;";
            });
        }else if(modelId=='6'){//纯文本
            words = $(this).find(".text_p").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='7'){//文字围绕左图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='8'){//文字围绕右图片
            img = $(this).find(".img")[0].src;
            words = $(this).find(".show_text").text();
            link = $(this).find(".link").attr('href');
        }else if(modelId=='9'){//图片模板
            img = $(this).find(".img")[0].src;
            link = $(this).find(".link").attr('href');
        }
        map['img']=img;
        map['words']=words;
        map['keyWords'] = keyWords;
        map['link']=link;
        map['type']=modelId;
        map['pos']=pos;
        contentModels.push(map);
    });
    console.dir("===============================");

    var contentId = $('.contentId').val();
    $.ajax({
        url:'/outTemplate/updateContent',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:{
            htmlContent:content.html(),
            contentId:contentId,
            contentModels:JSON.stringify(contentModels)
        },
        timeout:5000,    //超时时间
        dataType:'json',
        success:function(data,textStatus,jqXHR){
            // if(data!=null){
            //     var ops='';
            //     data.forEach(function( qt, index ) {
            //         ops+=' <option value="'+qt.id+','+qt.fieldType+','+qt.unit+','+qt.code+','+qt.quotaCatCode+','+qt.medical+'">'+qt.name+' ['+qt.code+']</option>';
            //     });
            //     $('#'+quotaSelectId).append(ops);
            // }
        },
        error:function(xhr,textStatus){
        },
        complete:function(){
        }
    });

}