$(function(){
	$('#head').load('header.html',function(){
		$('#ulList li').eq(1).addClass('active').siblings().removeClass('active');
	});
	
	$('#foot').load('footer.html');
	//切换主题
	var mylink=$('head').find('link');
	$('.mySearch').click(function(){
		mylink.attr('href',"css/bootstrap.min.css");
		$('#mySearchs').addClass('active').siblings().removeClass('active');
	});
	$('.myUser').click(function(){
		mylink.attr('href','css/bootstrap.min.new.css');
		$('#myUsers').addClass('active').siblings().removeClass('active');
	});
	$('#myUsers').click(function(){
		$('.myUser').click();
	});
	$('#mySearchs').click(function(){
		$('.mySearch').click();
	});
	
	//打开添加用户模态框
	$('.myModal').click(function(){
		$('#myModal').modal();
	});

	//用户列表添加
	//操作按钮
	var $str='<div class="dropdown"><button type="button" class="btn btn-default" data-toggle="dropdown">操作<span class="caret"></span></button><ul class="dropdown-menu"><li><a>编辑</a></li><li><a>删除</a></li><li><a>锁定</a></li><li><a>修改密码</a></li></ul></div>';
	for(var i=0;i<10;i++){
		var $tr=$('<tr>');
		for(var j=0;j<4;j++){
			var $td=$('<td>');
			switch(j){
				case 0:$td.html(i+1	);break;
				case 1:$td.html('张三'+i);break;
				case 2:$td.html('1234567@163.com');break;
				case 3:$td.html($str);break;
			}
			$tr.append($td);
		}
		$('#tbody').append($tr);
	}
});
