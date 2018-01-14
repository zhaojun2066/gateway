$(function(){
				var height=$(window).height()+'px'
				$('.templateList').css('height',height);
				$('.templateList').css('max-height',height);
				
				
				
				$('#doc-prompt-toggle').on('click', function() {
				    $('#my-prompt').modal({
				      relatedTarget: this,
				      onConfirm: function(e) {
				      	if(e.data){
				      		saveTemplate(e.data)
				      	}else{
				      		alert("不能为空")
				      	}
				        
				      },
				      onCancel: function(e) {
				        
				      }
				    });
				  });
			})


$('.saveHtml').click(function(){
				
				$('htmlBtngroup').remove();
				$('.toolbar').remove();
				$('#my-alert').remove();
			})

function saveTemplate(data){
	console.log(data)
	$('.templateTitle').html(data)
	$('.saveBtn').trigger("click")
		$('.templateList').remove();
		$('#content_wrapper').parent().removeAttr('class');
		$('.htmlBtngroup').css('display', 'block');
		$('.delete').css('display', 'none');
		$('.toolbar').remove();
}

$('#chooseTemplate').on('click', 'li', function() {
	$(this).addClass('active').siblings().removeClass('active');
})

$('.sure').click(function() {
	$('#my-popup').modal('close');
	var itemList = $('#chooseTemplate>li');
	var modelId = ''
	for(var i = 0; i < itemList.length; i++) {
		if($(itemList[i]).hasClass('active')) {
			modelId = $(itemList[i]).attr('data-model-id');
			var html = getModel(modelId);
			var oDiv = $('<div></div>');
			oDiv.html(html);
			$('#content_wrapper').append(oDiv);
		}
	}
})

$('.saveAll').click(function() {
	toggleStatus(false);
})

$('.editAll').click(function() {
	toggleStatus(true);
})

function toggleStatus(status) {
	if(status) {
		$('.toolbar').css('display', 'block');
		// show
	} else {
		$('.toolbar').css('display', 'none');
		// hide
	}
}

//标题
function saveTitle(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var links = father.find('.link');
	var linkVal = father.find('.link_val').val();
	var title_content = father.find('.title');
	var symptom = father.find('.symptom');
	var symptom_val = father.find('.symptom_inp');
	var title_inp = father.find('.title_inp');
	if(linkVal){
		links.attr('href',linkVal)
	}
	else{
		links.removeAttr('href')
	}
	title_content.html(title_inp.val());
	symptom.html(symptom_val.val());
	title_inp.parent().css('display', 'none');
	title_content.parent().css('display', 'block');
}

function editTitle(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var title_content = father.find('.title');
	var title_inp = father.find('.title_inp');
	title_inp.parent().css('display', 'block');
	title_content.parent().css('display', 'none');
}

function delTitle(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	father.remove();
}
function delImg(e) {
	var btn = e.target;
	var father = $(btn).parent().parent();
	father.remove();
}

//术养
function saveText(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var links = father.find('.link');
	var linkVal = father.find('.link_val').val();
	var name_text = father.find('.name_text');
	var text_content = father.find('.text');
	var name_text_inp = father.find('.treatment');
	var text_conent_inp = father.find('.treatmentContent');
	var textValue = text_conent_inp.val();
	if(linkVal){
		links.attr('href',linkVal)
	}
	else{
		links.removeAttr('href')
	}
	
	if(textValue && textValue.indexOf('#') != -1) {
		var texts = textValue.split('#');
		textValue = getTextP(texts);
	}

	name_text.html(name_text_inp.val());
	text_content.html(textValue);
	name_text.parent().parent().css('display', 'flex');
	name_text_inp.parent().parent().css('display', 'none');
}

function editText(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var name_text = father.find('.name_text');
	var name_text_inp = father.find('.treatment');
	name_text.parent().parent().css('display', 'none');
	name_text_inp.parent().parent().css('display', 'block');
}

function getTextP(texts) {
//	console.log(texts)
	var html = ''
	for(var i = 0; i < texts.length; i++) {
		html += '<p style="margin:0;">' + texts[i] + '</P>'
	}
	return html
}

function saveSignature(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var links = father.find('.link');
	var linkVal = father.find('.link_val').val();
	var signature_wrapper = father.find('.signature');
	var signature_val = father.find('.signature_inp');
	signature_wrapper.html(signature_val.val());
	signature_wrapper.parent().css('display', 'block');
	signature_val.parent().css('display', 'none');
	if(linkVal){
		links.attr('href',linkVal);
	}
	else{
		links.removeAttr('href');
	}
}

function editSignature(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var signature_wrapper = father.find('.signature');
	var signature_val = father.find('.signature_inp');
	signature_wrapper.parent().css('display', 'none');
	signature_val.parent().css('display', 'block')
}

function savePrompting(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var links = father.find('.link');
	var linkVal = father.find('.link_val').val();
	var prompting_wrapper = father.find('.prompting');
	var prompting_val = father.find('.prompting_inp');
	prompting_wrapper.html(prompting_val.val());
	prompting_wrapper.parent().css('display', 'block');
	prompting_val.parent().css('display', 'none');
	if(linkVal){
		links.attr('href',linkVal)
	}
	else{
		links.removeAttr('href')
	}
}

function editPrompting(e) {
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var prompting_wrapper = father.find('.prompting');
	var prompting_val = father.find('.prompting_inp');
	prompting_wrapper.parent().css('display', 'none');
	prompting_val.parent().css('display', 'block')
}

function imgChange(e) {

	var fileInput = e.target
	var father = $(fileInput).parent().parent().parent().parent();
	var img = father.find('.z_file');
	var imgs = father.find('.img')
	if(fileInput.files && fileInput.files[0]) {
		var objUrl = getObjectURL(fileInput.files[0]);
		if(objUrl) {
			imgs.attr("src", objUrl);
		}
	}
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

function addText(e){
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	var txtt_title=father.find('.text_title');
	var text_content=father.find('.text_content');
	var text_title_value=txtt_title.val();
	var text_content_value=text_content.val();
	if(text_title_value==""||text_content_value==""){
		alert('请输入内容')
		return
	}
	var wrapper=father.find('.wrapper');
	var reg1=/#/g
	var reg2=/&/g
	var text_content_value=text_content_value.replace(reg1,'<br>')
	var text_content_value=text_content_value.replace(reg2,'&nbsp;')
	var content=textTemplate(text_title_value,text_content_value);
	wrapper.append(content);
}

function textTemplate(title,content){
	var oDiv=$('<div></div>');
	var html='<div class="textContent" style="display: flex;margin: 2rem 0;">'+
			 	'<div class="name"><span class="name_text">'+
			  	title+
			  	'</span></div>'+
				'<div class="text">'+
				content+
				'</div></div>';
	
	oDiv.html(html);
	
	return oDiv
				
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
function editImg(e){
	var btn = e.target;
	var father = $(btn).parent().parent().parent();
	father.find('.inputBox').css('display','block');
}