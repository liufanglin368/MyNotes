
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
		
		
		starts[0].onclick=function(){
			if(popups1.style.display=='block'){
				popups1.style.display='none';
			}else{
				
				if(getComputedStyle(start).width==310+'px'){
					start.style.width=48+'px';
					start.style.background='#141a20';
				}else{
					start.style.width=310+'px';
					start.style.background='#1f1f1f';
				}
			}
			hover.style.display='none';
			start.style.width==48+'px'?hove():' ';
			
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
				a1[i].onmouseover=null;
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
		
		
		//中间应用栏的功能
		var allapp=document.querySelector(".allapp");  		  //整体区域
		var allappleft=document.querySelector(".allappleft"); //左侧外层div
		var appul=document.querySelector(".appul");           //左侧div里的ul
		var sliding=document.querySelector(".sliding");       //右侧整体div
		var sliding1=document.querySelector(".sliding1");	  //可滑动的区域
		var sliding2=document.querySelector(".sliding2");	  //滑块
		var ha=sliding.querySelectorAll("a");
		
		//鼠标拖动文本动
		sliding2.onmousedown=function(ev){
			var disY=ev.clientY-sliding2.offsetTop;
			document.onmousemove=function(ev){
				var t=ev.clientY-disY;
				if(t<0){
					t=0
				}else if(t>sliding1.offsetHeight-sliding2.offsetHeight){
					t=sliding1.offsetHeight-sliding2.offsetHeight;
				}
				sliding2.style.top=t+'px';
				var bfb=t/(sliding1.offsetHeight-sliding2.offsetHeight);
				appul.style.top=bfb*(allappleft.offsetHeight-appul.offsetHeight)+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
			}
			
			ev.cancelBubble=true
			return false
		}
		
		//鼠标放在文字区域与滚动条区域，滚动滚轮都可以滚动
		myScroll(sliding1,function(ev){
					var blockY=ev.clientY-sliding2.offsetTop+20;
					var t=ev.clientY-blockY;
					if(t<0){
						t=0;
					}
					sliding2.style.top=(t--)+'px';
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					
				},function(ev){
					var blockY=ev.clientY-sliding2.offsetTop-20;
					var t=ev.clientY-blockY;
					if(t>sliding1.offsetHeight-sliding2.offsetHeight){
						t=sliding1.offsetHeight-sliding2.offsetHeight;
					}
					console.log(t);
					sliding2.style.top=(t++)+'px';
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					
				});
			
				//鼠标放在文本区域滚动滑块与内容
				myScroll(appul,function(ev){
					var blockY=ev.clientY-sliding2.offsetTop+20;
					var t=ev.clientY-blockY;
					if(t<0){
						t=0;
					}
					sliding2.style.top=(t--)+'px';
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					
				},function(ev){
					var blockY=ev.clientY-sliding2.offsetTop-20;
					var t=ev.clientY-blockY;
					if(t>sliding1.offsetHeight-sliding2.offsetHeight){
						t=sliding1.offsetHeight-sliding2.offsetHeight;
					}
					sliding2.style.top=(t++)+'px';
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					
				});
			//滚轮函数
			function myScroll(obj,upFn,downFn){
				obj.onmousewheel=fn;
				obj.addEventListener('DOMMouseScroll',fn);
				
				function fn(ev){
					if(ev.wheelDelta>0 || ev.detail<0){
						//这个条件成立，说明现在都是往上边滚动
						//upFn();
						upFn.call(obj,ev);
					}else{
						//走这里说明，都是往下滚动
						//downFn();
						downFn.call(obj,ev);
					}
					
					ev.preventDefault();
					return false;
				};
			}
			
			//鼠标点击滑块到滑块点击的位置
			sliding1.onmousedown=function(ev){
				var t=ev.clientY-sliding2.offsetHeight-sliding2.offsetHeight/2
				if(t<0){
					t=0
				}else if(t>sliding1.offsetHeight-sliding2.offsetHeight){
					t=sliding1.offsetHeight-sliding2.offsetHeight
				}
				sliding2.style.top=t+'px';
				var bfb=t/(sliding1.offsetHeight-sliding2.offsetHeight);
				appul.style.top=bfb*(allappleft.offsetHeight-appul.offsetHeight)+'px';
				document.onmouseup=function(){
					document.onmousedown=null;
				}
				return false
			};
			
			//5、鼠标按下上下箭头，滚动条滚动
				ha[1].onmousedown=function(ev){
					var blockY=ev.clientY-sliding2.offsetTop-20;
					var t=ev.clientY-blockY;
					ha[1].style.background='#8d8f8e';
					if(t<0){
						t=0;
					}else if(t>sliding1.clientHeight-sliding2.clientHeight){
						t=sliding1.clientHeight-sliding2.clientHeight
					}
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					sliding2.style.top=t--+'px';
					document.onmouseup=function(){
						document.onmousedown=null;
						ha[1].style.background='';
					}
				}
				ha[0].onmousedown=function(ev){
					var blockY=ev.clientY-sliding2.offsetTop+20;
					var t=ev.clientY-blockY;
					ha[0].style.background='#8d8f8e';
					if(t<0){
						t=0;
					}else if(t>sliding1.clientHeight-sliding2.clientHeight){
						t=sliding1.clientHeight-sliding2.clientHeight
					}
					var scale=t/(sliding1.clientHeight-sliding2.clientHeight);
					appul.style.top=scale*(allappleft.clientHeight-appul.clientHeight)+'px';
					sliding2.style.top=t+++'px';
					
					document.onmouseup=function(){
						document.onmousedown=null;
						ha[0].style.background='';
					}
				}
				
				//鼠标移入左侧应用栏右侧滚动条显示
				allapp.onmouseover=function(){
					sliding.style.display='block';
				}
				allapp.onmouseout=function(){
					sliding.style.display='none';
				}
			
			//最右侧滚动条
			var WindPopupRight=document.querySelector(".WindPopupRight");
			var strip=document.querySelector(".strip");
			WindPopupRight.onmouseover=function(){
					strip.style.display='block';
				}
				WindPopupRight.onmouseout=function(){
					strip.style.display='none';
				}
				
};
	
