
function ajax(opt){
	opt = opt || {};
	opt.method = opt.method.toUpperCase() || "post";
	opt.url = opt.url || "";
	opt.async = opt.async || true;
	opt.data = opt.data || null;
	opt.timeout = opt.timeout || 4000;
	opt.success = opt.success || function(){};
	opt.error = opt.error || function(){};
	
	var xmlHttp = null;
	if(XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var params = [];
	for(var key in opt.data){
		params.push(key + "=" + opt.data[key])
	}
	
	var postData = params.join("&");
	if(opt.method.toUpperCase() === "POST"){
		xmlHttp.open(opt.method,opt.url,opt.async);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
		xmlHttp.send(postData);
	}else if(opt.method.toUpperCase() === "GET"){
		xmlHttp.open(opt.method, opt.url + "?" + postData, opt.async);
		xmlHttp.send(null);
	}
	
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4){
			if(xmlHttp.status == 200){
				opt.success(xmlHttp.responseText)
			}else{
				if(opt.error){
					opt.error(xmlHttp)
				}
			}
		}
		
		clearTimeout(timeoutFlag);
	}
	
	var timeoutFlag;
	timeoutFlag = setTimeout(()=>{
		//超时操作
		xmlHttp.onreadystatechange = null;
	},opt.timeout)
	
}


ajax({
	method:"GET",
	async:false,
	url:"",
	success:function(res){
		
	},
	error:function(){
		
	}
})

ajax({
	method:"POST",
	async:false,
	url:"",
	data:{},
	success:function(res){
		
	},
	error:function(){
		
	}
})