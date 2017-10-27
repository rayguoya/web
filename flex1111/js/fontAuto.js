var fontAuto={
	width:640,
	fontFun:function(){
		var that=this;
		var htmlNode=document.documentElement;
		var winW=htmlNode.clientWidth;
		winW=winW<320?320:winW;
		if(winW>=that.width){
			htmlNode.style.fontSize="625%";
		}
		else{
			htmlNode.style.fontSize=winW/that.width*625+"%";
		}
	},
	init:function(){
		var that=this;
		that.fontFun();
		window.onresize=function(){
			that.fontFun();
		}
	}
};
fontAuto.init();