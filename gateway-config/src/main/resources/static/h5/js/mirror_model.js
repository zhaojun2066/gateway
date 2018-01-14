var Model1 = function (){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<a class="link">'+
						'<div class="title_wrapper">'+
							'<span class="title"></span>'+
							'<span class="symptom"></span>'+
						'</div>'+
					'</a>'+
					'<div class="title_form">'+
						'<input class="title_inp" type="" name="" id="" value="" placeholder="请输入标题内容"/>'+
						'<input class="symptom_inp" type="" name="" id="" value="" placeholder="请输入症状内容"/>'+
						'<input class="link_val" type="" name="" id="" value="" placeholder="请输入链接地址"/>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveTitle(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editTitle(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
	
	return content
}

var Model2 = function (){
	var content='<div class="am-container am-padding-horizontal-0">'+
						'<a class="link textContent" style="display: none;">'+
							'<div class="name"><span class="name_text">术养</span></div>'+
							'<div class="text"></div>'+
							'<div class="img_icon"><img src="assets/img/shuyang.png"/></div>'+
						'</a>'+
					'<div class="text_from">'+
						'<div><input type="text" placeholder="请输入治疗方式" name="" id="" value="" class="treatment"/></div>'+
						'<div><input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/></div>'+
					    '<div><textarea placeholder="请输入治疗内容" name="" rows="" cols="" class="treatmentContent"></textarea></div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveText(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editText(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
				
	return content			
}
var Model3 = function (){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<a class="link textContent" style="display: none;">'+
						'<div class="name"><span class="name_text"></span></div>'+
						'<div class="text"></div>'+
						'<div class="img_icon"><img src="assets/img/shiyang.png"/></div>'+
					'</a>'+
					'<div class="text_from">'+
						'<div><input type="text" placeholder="请输入治疗方式" name="" id="" value="" class="treatment"/></div>'+
						'<div><input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/></div>'+
					    '<div><textarea placeholder="请输入治疗内容" name="" rows="" cols="" class="treatmentContent"></textarea></div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveText(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editText(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
				
	return content			
}

var Model4 = function (){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<a class="link textContent" style="display: none;">'+
						'<div class="name"><span class="name_text"></span></div>'+
						'<div class="text"></div>'+
					'</a>'+
					'<div class="text_from">'+
						'<div><input type="text" placeholder="请输入治疗方式" name="" id="" value="" class="treatment"/></div>'+
						'<div><input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/></div>'+
						'<div><textarea placeholder="请输入治疗内容" name="" rows="" cols="" class="treatmentContent"></textarea></div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveText(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editText(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
				return content
}

var Model5 =function(){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<div class="signature_wrapper">'+
						'<a class="link" style="display: none;">'+
							'<span class="signature">请您欣赏：十面埋伏</span>'+
						'</a>'+
					'</div>'+
					'<div class="signature_form" style="text-align: center;">'+
						'<input class="signature_inp" type="text" name="" id="" value="" placeholder="请输入内容"/>'+
						'<input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveSignature(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editSignature(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
	
	return content
}
var Model6 =function(){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<div class="prompting_wrapper">'+
						'<a class="link" style="display: none;color:red;">'+
							'<p class="prompting">请您欣赏：十面埋伏请您欣赏：十面埋伏请您欣赏：十面埋伏请您欣赏：十面埋伏请您欣赏：十面埋伏请您欣赏：十面埋伏请您欣赏</p>'+
						'</a>'+
					'</div>'+
					'<div class="prompting_form" style="text-align: center;">'+
						'<input class="prompting_inp" type="" name="" id="" value="" placeholder="请输入内容"/>'+
						'<input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
						'<div class="am-u-sm-12" style="text-align: center;">'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="savePrompting(event)">保存</button>'+
							'<button class="editBtn am-btn am-btn-default am-radius" onclick="editPrompting(event)">编辑</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTitle(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
	
	return content
}

var Model7 =function(){
	var content='<div class="am-container am-padding-horizontal-0">'+
						
					    '<figure data-am-widget="figure" class="am am-figure am-figure-default ">'+
						    '<a class="link">'+
								'<img class="img" style="border: 0;" src="assets/img/z_add.png"  alt=""/>'+
							'</a>'+
	          			'</figure>'+
	          			
	          			'<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
	          					'<div class="inputBox" style="text-align: center;">'+
								'<input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/>'+
								'</div>'+
								'<span class="files">添加图片'+
									'<input class="file" type="file" name="" id="upimg" onchange="imgChange(event);">'+
								'</span>'+
								'<button class="editBtn am-btn am-btn-danger am-radius" onclick="editImg(event)">编辑</button>'+
								'<button class="saveBtn am-btn am-btn-danger am-radius" onclick="saveImg(event)">保存</button>'+
								'<button class="delete am-btn am-btn-danger am-radius" onclick="delImg(event)">删除</button>'+
						'</div>'+
				'</div>'
	return content
}

var Model8 =function(){
	var content='<div class="am-container am-padding-horizontal-0">'+
					'<div class="am-g">'+
						'<a class="link" style="display:block">'+
						'<div class="am-u-sm-6">'+
							'<figure data-am-widget="figure" class="am am-figure am-figure-default ">'+
								'<img class="img" style="border: 0;" src="assets/img/z_add.png" alt="" />'+
							'</figure>'+
						'</div>'+
						'<div class="am-u-sm-6 wrapper" style="padding-top: 2rem;">'+
						'</div>'+
						'</a>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
						'<div class="inputBox" style="text-align: center;">'+
							'<input class="link_val" style="width: 60%;border: 0;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/>'+
							'<input type="text" class="text_title" name="" id="" value="" placeholder="请输入内容"/>'+
							'<textarea class="text_content" name="" rows="" cols="" placeholder="请输入内容"></textarea>'+
						'</div>'+
						'<button class="am-btn am-btn-danger am-radius" onclick="addText(event)">添加右侧文字</button>'+
						'<a href="javascript:;" class="files">添加图片'+
							'<input class="file" type="file" name="" id="upimg" onchange="imgChange(event);">'+
						'</a>'+
						'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveImg(event)">保存</button>'+
						'<button class="editBtn am-btn am-btn-default am-radius" onclick="editImg(event)">编辑</button>'+
						'<button class="delete am-btn am-btn-danger am-radius" onclick="delImg(event)">删除</button>'+
					'</div>'+
				'</div>'
	
	return content
}


var getModel = function(modelId){
	if(modelId == 1){
		return Model1()
	}
	if(modelId == 2){
		return Model2()
	}
	if(modelId == 3){
		return Model3()
	}
	if(modelId == 4){
		return Model4()
	}
	if(modelId == 5){
		return Model5()
	}
	if(modelId == 6){
		return Model6()
	}
	if(modelId == 7){
		return Model7()
	}
	if(modelId == 8){
		return Model8()
	}
}

