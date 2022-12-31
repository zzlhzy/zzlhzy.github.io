$("#idBtn").click(function(){
	//获取值两个
	var password = $("#password").val();
	var pwd=$("#oldPwd").val();
	if(pwd == password){
		layer.msg("一致");
	}else{
		layer.msg("两次密码不一致");
	}
})
