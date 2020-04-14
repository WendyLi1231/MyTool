

//  判断是否是微信
function is_weixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
//JS判断手机操作系统（ios或android）并跳转到不同下载页面
//http://www.bcty365.com/content-69-1807-1.html


//  判断是安卓还是ios
 $(function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        window.location.href = 'appDownload.html';
    }
    if (isIOS) {
        window.location.href = 'iosDownload.html';
    }
});


//  第二种方法：
	downApp() {
        let ua = navigator.userAgent.toLowerCase();
        //Android终端
        let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;  
		//ios终端
        let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        if (isWeixinBrowser()) {
           this.$router.push({
              path: '/product'
           })
        } else {
           if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
              //Ios
           } else if (/(Android)/i.test(navigator.userAgent)) {
              //Android终端
              window.location = 'http://www.xyfan.top/app.apk'
           }
        }
		//微信
        function isWeixinBrowser() {
            return (/micromessenger/.test(ua)) ? true : false;
        }
  	}








