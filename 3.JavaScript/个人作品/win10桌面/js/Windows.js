
window.onload=function(){
	
	
		//window 展开
		var btn=document.querySelector(".btn");
		var WindPopup=document.querySelector(".WindPopup");
		btn.onclick=function(){
			if(WindPopup.style.display=='block'){
				WindPopup.style.display='none';
			}else{
				WindPopup.style.display='block';
			};
			popups1.style.display='none';
			start.style.width=48+'px';
		};
		var start=document.querySelector(".WindPopupLeft .start");//开始按钮
		var starts=document.querySelectorAll(".WindPopupLeft li");//电源 设置  用户按钮
		var popups1=document.querySelector(".popups1");		//注销 锁定 更改账户设置
		var a1=document.querySelectorAll(".popups1 a");
		var txt1=['更改账户设置','锁定','注销'];
		var txt2=['睡眠','关机','重启']
		//开始键展开
		
		starts[0].onclick=function(){
			
			if(popups1.style.display=='block'){
				popups1.style.display='none';
			}else{
				if(getComputedStyle(start).width==310+'px'){
					start.style.width=48+'px';
					
				}else{
					start.style.width=310+'px';
				}
			}
			hover.style.display='none';
			
		}
		
		//更改账户设置按钮展开
		starts[1].onclick=function(){
			if(popups1.style.display=='block'){
				popups1.style.display='none';
			}else{
				popups1.style.display='block';
			}
			
			for(var i=0;i<a1.length;i++){
				a1[i].innerHTML=txt1[i];
			}
			
			popups1.style.top=262+'px';
		}
		
		//这里少个设置功能
		// 电源展开
		starts[3].onclick=function(){
			if(popups1.style.display=='block'){
				popups1.style.display='none';
			}else{
				popups1.style.display='block';
			}
			for(var i=0;i<a1.length;i++){
				a1[i].innerHTML=txt2[i];
			}
			popups1.style.top=362+'px';
		}
		
		//点击电源按钮后弹出层子项的hover功能
		var txt4=['电脑保持开机状态,但耗电较少。应用会一致保持打开状态,这样在唤醒电脑后,可以立即恢复到你离开时的状态',
				 '关闭所有应用,然后关闭电脑。','关闭所有应用,关闭电脑,然后重新打开电脑。']
			for(var i=0;i<a1.length;i++){
				a1[0].onmouseover=function(){
					pop(0,310,316,60,'initial');
				}
				a1[1].onmouseover=function(){
					pop(1,374,166,28,'center');
				}
				a1[2].onmouseover=function(){
					pop(2,410,250,28,'center');
				}
				a1[i].onmouseout=function(){
					hover.style.display='none';
				}
				function pop(txt,t,w,h,c){
					hover.style.display='block';
					hover.innerHTML=txt4[txt];
					hover.style.left=this.offsetLeft+'px';
					hover.style.top=t+'px';
					hover.style.width=w+'px';
					hover.style.height=h+'px';
					hover.style.textAlign=c;
				}
			}
			
		//最左边几个功能键的hover功能
		var hover=document.querySelector(".hover");
		
		hove();
		function hove(){
			
			var txt3=['展开','liufanglin368@163.com','设置','电源'];
			for(var i=0;i<starts.length;i++){
				starts[i].index=i;
				starts[i].onmouseover=function(){
					hover.style.display='block';
					hover.innerHTML=txt3[this.index];
					hover.style.left=this.offsetLeft+'px';
					hover.style.top=this.offsetTop-28+'px';
					hover.style.width=46+'px';
					hover.style.height=28+'px';
				}
				starts[1].onmouseover=function(){
					hover.style.display='block';
					hover.innerHTML=txt3[this.index];
					hover.style.left=this.offsetLeft+'px';
					hover.style.top=this.offsetTop-28+'px';
					hover.style.width=146+'px'
					hover.style.height=28+'px'
				}
				starts[i].onmouseout=function(){
				hover.style.display='none';
				}
			}
		}
};
	
