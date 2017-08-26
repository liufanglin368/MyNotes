
window.onload=function(){
	
	
		//window的点击事件
		var btn=document.querySelector(".btn");
		var WindPopup=document.querySelector(".WindPopup");
		btn.onclick=function(){
			if(WindPopup.style.display=='block'){
				WindPopup.style.display='none';
			}else{
				WindPopup.style.display='block';
			};
		};
		var start=document.querySelector(".WindPopupLeft .start");//开始按钮
		var starts=document.querySelectorAll(".WindPopupLeft li");//电源 设置  用户按钮
		
		starts[0].onclick=function(){
			if(getComputedStyle(start).width==310+'px'){//开始键展开功能
				start.style.width=48+'px';
			}else{
				start.style.width=310+'px';
			}
		}
};
	
