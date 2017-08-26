window.onload=function(){
		var box=document.getElementById('box');  //获取元素div
		
		var str='';  //声名一个变量来存生成的div
		/*
		 * 生成div
		 * 生成的原理(for循环嵌套)
		 * 		图片的宽是1000,高是900
		 * i为行 j为列
		 * i走1次 j走9次
		 * str在最里层所有就可以生成9*10,90个div
		 * 因为i 和j的值是在每次走的时候都会变,代码的执行顺序是从上到下,
		 * 所以让i和j乘上一个div的宽高,把得到的结果赋给他们的left和top.
		 * 给每个div都加上这个背景图片
		 * 再利用 background-position的属性
		 * 给他们对应的repeat-X Y乘上元素的宽高  给一个负的值  ,就能得到他们对应显示图片上的位置
		 * 
		 */
		for(var i=0;i<9;i++){
			for(var j=0;j<10;j++){
				str+='<div style="left:'+j*102+'px;top:'+i*102+'px;background:url(img/pic.jpg) -'+j*100+'px -'+i*100+'px"></div>';
			}
		}
		
		box.innerHTML=str;//把生成的div赋给box的innerHTML
		var div=document.querySelectorAll("#box div");//获取生成的div
		
		for(var i=0;i<div.length;i++){ //给每个div都加上事件
			div[i].onmouseover=function(){//鼠标移入
				this.style.opacity=1;
				this.style.transform='scale(1.5)';
			};
			div[i].onmouseout=function(){//鼠标移出
				this.style.opacity=1;
				this.style.transform='scale(1)';
			};
		};

};	


