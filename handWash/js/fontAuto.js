function fontAuto(width){//width表示效果图的宽度
	var htmlNode=document.documentElement;//html节点(标签)
	var screenW=htmlNode.clientWidth;//html的可视宽度（屏幕的宽度）
	if(screenW>=640){
		htmlNode.style.fontSize="625%";
	}
	else{
		htmlNode.style.fontSize=screenW/width*625+"%";
	}
}


fontAuto(640);
window.onresize=function(){
	fontAuto(640);
}