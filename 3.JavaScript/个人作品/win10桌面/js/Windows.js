
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

};
	
