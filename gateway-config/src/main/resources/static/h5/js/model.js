
// 左图右文
var Model1 = function(){
	var content = '<div class="am-container am-padding-horizontal-0">'+
					'<div data-am-widget="list_news" class="am-list-news am-list-news-default">'+
						'<div class="am-list-news-bd">'+
							'<ul class="am-list">'+
								'<a class="link">'+
								'<li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left">'+
									'<div class="am-u-sm-5 am-list-thumb">'+
											'<img class="img" src="/h5/img/z_add.png" alt="图片" />'+
									'</div>'+
									'<div class=" am-u-sm-7 am-list-main">'+
										'<div class="am-list-item-hd link_box">'+
											'<input type="text" class="link_val" name="" id="" value=""  style="width: 100%;"  placeholder="请链接地址"/>'+
										'</div>'+
										'<div class="am-list-item-text text_content" style="display: none;">标记</div>'+
										'<div class="am-list-item-text"  style="max-height: none;-webkit-line-clamp: 3;border:1px solid #3c3c3c;">'+
											'<textarea class="text_input" name="" rows="" cols="" style="width: 98%;height: 100px;border:0;outline:none;"  placeholder="请输入内容"></textarea>'+
										'</div>'+
									'</div>'+
								'</li>'+
								'</a>'+
							'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
								'<div class="am-u-sm-12" style="text-align: center;">'+
									'<button class="saveBtn am-btn am-btn-success am-radius" onclick="save(event)">保存</button>'+
									'<button class="editBtn am-btn am-btn-default am-radius" onclick="edit(event)">编辑</button>'+
									'<button class="delete am-btn am-btn-danger am-radius" onclick="del(event)">删除</button>'+
									'<a href="javascript:;" class="files">添加图片'+
										'<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
									'</a>'+
					'</div>'+
				'</div>'
	
	return content
}
//右图左文
var Model2 = function(){
	var content = '<div class="am-container am-padding-horizontal-0">'+
					'<div data-am-widget="list_news" class="am-list-news am-list-news-default">'+
						'<div class="am-list-news-bd">'+
							'<ul class="am-list">'+
								'<a class="link">'+
								'<li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left">'+
									'<div class=" am-u-sm-7 am-list-main">'+
										'<div class="am-list-item-hd link_box">'+
											'<input type="text" class="link_val" name="" id="" value=""  style="width: 100%;"  placeholder="请链接地址"/>'+
										'</div>'+
										'<div class="am-list-item-text text_content" style="max-height: 3.8em;-webkit-line-clamp: 3;display: none;">标记</div>'+
										'<div class="am-list-item-text"  style="max-height: none;-webkit-line-clamp: 3;border:1px solid #3c3c3c;">'+
											'<textarea class="text_input" name="" rows="" cols="" style="width: 98%;height: 100px;border:0;outline:none;"  placeholder="请输入内容"></textarea>'+
										'</div>'+
									'</div>'+
									'<div class="am-u-sm-5 am-list-thumb">'+
											'<img class="img" src="/h5/img/z_add.png" alt="图片" />'+
									'</div>'+
								'</li>'+
								'</a>'+
							'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
								'<div class="am-u-sm-12" style="text-align: center;">'+
									'<button class="saveBtn am-btn am-btn-success am-radius" onclick="save(event)">保存</button>'+
									'<button class="editBtn am-btn am-btn-default am-radius" onclick="edit(event)">编辑</button>'+
									'<button class="delete am-btn am-btn-danger am-radius" onclick="del(event)">删除</button>'+
									'<a href="javascript:;" class="files">添加图片'+
										'<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
									'</a>'+
					'</div>'+
				'</div>'
	return content
}


var Model3 = function(){
	var content ='<div class="am-container am-padding-horizontal-0 underline"><hr style="margin: 0;"/>'+
				'<div class="am-g  toolbar" style="text-align:center;"><button class="delete am-btn am-btn-danger am-radius" onclick="delHr(event)" style="display: inline-block">删除</button></div>'+
				'</div>'
	
	return content
}

var Model4 = function(){
	var content ='<div class="am-container am-padding-horizontal-0 order" style="text-align: center;overflow: hidden;white-space:nowrap;margin-top:20px;height:auto;">'+  
				   '<span style="white-space:pre"></span><span class="line"></span>'+  
				   '<span style="white-space:pre"></span><span class="txt title_input"><input type="text" name="" id="" value="" style="height: 20px;margin-left: 4px;width: 82px;"  placeholder="标题"/></span>'+  
				   '<span style="white-space:pre"></span><span class="txt title_wrapper"></span>'+  
				   '<span style="white-space:pre"></span><span class="line"></span>'+  
				 
					'<div class="am-g toolbar" style="margin-top: 20px;">'+
							'<div class="am-u-sm-12" style="text-align: center;">'+
								'<button class="saveBtn am-btn am-btn-success am-radius" onclick="titleSave(event)">保存</button>'+
								'<button class="editBtn am-btn am-btn-default am-radius" onclick="titleEdit(event)">编辑</button>'+
								'<button class="delete am-btn am-btn-danger am-radius" onclick="del(event)">删除</button>'+
							'</div>'+
					'</div>'+ 		
				'</div>'
	
	return content
}

var Model5 = function(){
	var content ='<div class="am-container am-padding-horizontal-0">'+
					'<div data-am-widget="list_news" class="am-list-news am-list-news-default">'+
						'<div class="am-list-news-bd">'+
							'<ul class="am-list">'+
								'<a class="link">'+
								'<li class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left">'+
									'<div class="am-u-sm-4 am-list-thumb">'+
											'<img class="img" src="/h5/img/z_add.png" alt="图片" />'+
									'</div>'+
									'<div class=" am-u-sm-8 am-list-main">'+
										'<h3 class="am-list-item-hd title_content"></h3>'+
										'<div class="am-list-item-hd">'+
											'<input type="text" class="link_val" name="" id="" value=""  style="width: 100%;"  placeholder="请输链接地址"/>'+
											'<textarea class="title_val" name="" rows="" cols=""  placeholder="请输入内容" style="width: 100%;height: 120px;border-radius: 5px;resize: none;" ></textarea>'+
										'</div>'+
										'<div class="am-list-item-text text_content" style="max-height: 3.8em;-webkit-line-clamp: 3;">'+
											'<div class="label_wrapper"></div>'+
										'</div>'+
									'</div>'+
								'</li>'+
								'</a>'+
							'</ul>'+
						'</div>'+
					'</div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;text-algin:center;">'+
								'<div class="am-u-sm-12" style="text-align: center;">'+
									'<input type="text" style="margin-left: 20px;" class="keyWords_input"  placeholder="新增关键词">'+
									'<button class="am-btn am-btn-sm am-btn-success am-round" onclick="addKeyWord(event)" style="font-size: 12px;">增加关键词</button>'+
									'<button class="am-btn am-btn-sm am-btn-success am-round" onclick="delKeyWord(event)" style="font-size: 12px;">删除关键词</button>'+
								'</div>'+
								'<div class="am-u-sm-12" style="text-align: center;">'+
									'<button class="saveBtn am-btn am-btn-success am-radius" onclick="save1(event)">保存</button>'+
									'<button class="editBtn am-btn am-btn-default am-radius" onclick="edit(event)">编辑</button>'+
									'<button class="delete am-btn am-btn-danger am-radius" onclick="del(event)">删除</button>'+
									'<a href="javascript:;" class="files" style="vertical-align: middle ;">添加图片'+
										'<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
									'</a>'+
					'</div>'+
				'</div>'
	
	return content
}

var Model6 = function(){
	var content ='<div class="am-container">'+
					'<div style="text-align: center;">'+
						'<input type="text" class="link_val"  style="width: 80%;" placeholder="请输入链接地址">'+
						'<textarea class="textVal" name="" rows="" cols="" style="width: 80%;height: 120px;border-radius: 5px;resize: none;" placeholder="请输入内容"></textarea>'+
					'</div>'+
					'<a class="link" style="color:#333 !important;">'+
						'<div class="text_p">'+
						'</div>'+
					'</a>'+
					'<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
						'<div class="" style="display: inline-block;">'+
							'<button class="editBtn am-btn am-radius am-btn-default" onclick="editText(event)">编辑</button>'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="saveText(event)">保存</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTextTemplate(event)">删除</button>'+
						'</div>'+
					'</div>'+
				'</div>'
	
	return content
}

var Model7 = function(){
	var content ='<div class="am-container  box">'+
					'<a class="link">'+
					'<div class="am-g box_content">'+
							'<div class="am-u-sm-6 am-u-md-5 am-u-lg-4 am-list-thumb" style="max-height: none !important;">'+
								'<img class="img" style="max-width: 100%;" src="/h5/img/z_add.png" alt="图片" />'+
							'</div>'+
							'<div class="show_text"></div>'+
						'<div class=" am-u-sm-6 am-u-md-7 am-u-lg-8 am-list-main">'+
							'<input type="text" class="link_val"  style="width: 100%;" placeholder="请输入链接地址">'+
							'<textarea class="textVal" name="" rows="" cols=""  placeholder="请输入内容" style="width: 100%;height: 120px;border-radius: 5px;resize: none;" ></textarea>'+
						'</div>'+
					'</div>'+
					'</a>'+
					'<div style="clear: both;"></div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
							'<button class="editBtn am-btn am-btn-success am-radius" onclick="edit_text(event)">编辑</button>'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="save_text(event)">保存</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTextTemplate(event)">删除</button>'+
							'<a href="javascript:;" class="files">添加图片'+
								'<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
							'</a>'+
					'</div>'+
				'</div>'
	
	return content
}

var Model8 = function(){
	var content ='<div class="am-container  box">'+
					'<a class="link">'+
					'<div class="am-g box_content">'+
					'<div class=" am-u-sm-6 am-u-md-7 am-u-lg-8 am-list-main">'+
							'<input type="text" class="link_val"  style="width: 100%;" placeholder="请输入链接地址">'+
								'<textarea class="textVal" name="" rows="" cols=""  placeholder="请输入内容" style="width: 100%;height: 120px;border-radius: 5px;resize: none;" ></textarea>'+
							'</div>'+
							'<div class="am-u-sm-6 am-u-md-5 am-u-lg-4 am-list-thumb" style="max-height: none !important;float:right;">'+
								'<img class="img" style="max-width: 100%;" src="/h5/img/z_add.png" alt="图片" />'+
							'</div>'+
							'<div class="show_text"></div>'+
						
					'</div>'+
					'</a>'+
					'<div style="clear: both;"></div>'+
					'<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
							'<button class="editBtn am-btn am-btn-success am-radius" onclick="edit_text(event)">编辑</button>'+
							'<button class="saveBtn am-btn am-btn-success am-radius" onclick="save_text(event)">保存</button>'+
							'<button class="delete am-btn am-btn-danger am-radius" onclick="delTextTemplate(event)">删除</button>'+
							'<a href="javascript:;" class="files">添加图片'+
								'<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
							'</a>'+
					'</div>'+
				'</div>'
	
	return content
}
var Model9 =function(){
    var content='<div class="am-container am-padding-horizontal-0">'+

        '<figure data-am-widget="figure" class="am am-figure am-figure-default ">'+
        '<a class="link">'+
        '<img class="img" style="border: 0;" src="/h5/img/z_add.png"  alt=""/>'+
        '</a>'+
        '</figure>'+

        '<div class="am-g toolbar" style="margin-top: 20px;padding-left: 20px;text-align: center;">'+
        '<div class="inputBox" style="text-align: center;">'+
        '<input class="link_val" style="width: 60%;border: 1px solid #333;margin: 5px 0;border-radius: .5rem;" type="text" name="" id="" value="" placeholder="请输入链接地址"/>'+
        '</div>'+
        '<button class="editBtn am-btn am-btn-danger am-radius" onclick="editImg(event)">编辑</button>'+
        '<button class="saveBtn am-btn am-btn-danger am-radius" onclick="saveImg(event)">保存</button>'+
        '<button class="delete am-btn am-btn-danger am-radius" onclick="delImg(event)">删除</button>'+
        '<span class="files">添加图片'+
        '<form class="uploadForm" enctype="multipart/form-data" method="post"><input class="file" type="file" name="file" id="upimg" onchange="imgChange(event);"></form>'+
        '</span>'+
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
    if(modelId == 9){
        return Model9()
    }
}
