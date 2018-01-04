$(function(){
	
	
	var m = 1;/*摇一摇冰开关，1为开启*/
	
	$('img').click(function(){ /*去除UC点击图片部分查看图片*/})
	
	/*倒计时15秒*/ 
	var FromNow = new Date().valueOf() +  10 * 1000;
	$('#clock').countdown(FromNow, function(event) {
		clock = event.strftime('%S')
	    $(this).html(clock);
	    if(clock==01){
	    	setTimeout("result()",1500)
	    }
	});
	
	/*监听手机摇一摇*/
	var i = 0;
	if(window.DeviceMotionEvent) { 
		//修改此数据可以控制摇一摇难易程度
		var speed = 20;
		var x = y = z = lastX = lastY = lastZ = 0;
		window.addEventListener('devicemotion', function(){
			var acceleration =event.accelerationIncludingGravity;
			x = acceleration.x;
			y = acceleration.y;
			if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
				if(clock==00){
					return false;
				}else{
					random()
					i += parseInt(1);//自加变量
					var num = document.getElementById("num");//获取text属性
					num.innerText = i //将次数i赋值给num
				}
			}
			lastX = x;
			lastY = y;
		}, false);
	}
})



function random(){/*摇一次手机顶部随机位置出现冰淇淋图标下落*/
	var src = new Array('img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png')
	var num = Math.floor(Math.random()*101 -10)+'%'
	var img = '<img class="ice" style="left:'+num+'" src="'+src[Math.round(Math.random()*10)%8]+'" />'
	$('.con').append(img)
	//alert(num)
}

var resultbg = '<div class="resultbg"></div>';
var result1 = '<div class="resultcon">\
			<div class="relative">\
				<div class="resultp">\
					<p>笨蛋，很遗憾，你只摇了<span id="num01">0</span>次</p>\
					<p>讲真心话，你笨得一批，我已经把难度系数调到最低了。</p>\
					<p>回家再修炼两年,古德拜~</p>\
				</div>\
				<div class="start02">\
					<a href="home.html"><img src="img/12.png"/></a>\
				</div>\
			</div>\
		</div>';

var result2 = '<div class="resultcon">\
					<div class="relative">\
						<div class="resultp02">\
							<p>厉害啊少年，</p>\
							<p>你摇了<span id="m">50</span>次</p>\
							<p>平时没少修炼吧 ^_^</p>\
							<img class="iceimg" src="img/011.png" />\
							<p>你得到的奖励是：逗小雨同学笑<span id="n">1</span>次</p>\
							<p>每一次获奖都是上天的恩赐，请把奖品当作一种责任，认真对待</p>\
						</div>\
						<div class="rule02">\
							<div class="rulebg02">\
								<p>关闭页面前，请一定要记得带着你真诚的心去领取奖励哦，</p>\
								<p>不然会受到上天的惩罚的!(认真脸)</p>\
							</div>\
						</div>\
						<div class="start03">\
							<a href="home.html"><img src="img/12.png"/></a>\
						</div>\
					</div>\
				</div>';
var result3 = '<div class="resultcon">\
			<div class="relative">\
				<div class="resultp">\
					<p>厉害了少年，你摇了<span id="num">0</span>次</p>\
					<p>这张美图给你啦~(随机生成)</p>\
					<img style="width: 300px;height: 250px; margin-left: 145px;"class="daniel" src="img/###.jpg" />\
				</div>\
				<div class="start02">\
					<a href="home.html"><img src="img/12.png"/></a>\
				</div>\
			</div>\
		</div>';
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}

deniel = ["img/d0.jpg","img/d1.gif","img/d2.jpg"]
function result(){
	$('body').append(resultbg)
	var number = $("#num").text();
	//100以下无奖品
	if(number < 100){
		$('body').append(result1)
		$("#num01").text(number)
	}
	//130-180送1支冰淇淋
	if(number>=100 && number<150){
		$('body').append(result2)
		$("#m").text(number)
		$("#n").text(1)
		var ranum = randomWord(false,10,10);
		$("#ranum").text(ranum)
	}
	//180-230送2支冰淇淋
	if(number>=150 && number<200){
		$('body').append(result2)
		$('.iceimg').attr("src","img/022.png")
		$("#m").text(number)
		$("#n").text(2)
		var ranum = randomWord(false,10,10);
		$("#ranum").text(ranum)
	}
	//230以上送3支冰淇淋
	if(number>=235){
		$('body').append(result3)
		dimg = deniel[GetRandomNum(0,2)]
		$('.daniel').attr("src",dimg)
		$('.iceimg').attr("src","img/033.png")
		$("#m").text(number)
		$("#n").text(3)
		var ranum = randomWord(false,10,10);
		$("#ranum").text(ranum)
	}
	atouch()
	
	/*
	** randomWord 产生任意长度随机字母数字组合  true OR false
	** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
	*/
	 
	function randomWord(randomFlag, min, max){
	    var str = "",
	        range = min,
	        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	 
	    // 随机产生
	    if(randomFlag){
	        range = Math.round(Math.random() * (max-min)) + min;
	    }
	    for(var i=0; i<range; i++){
	        pos = Math.round(Math.random() * (arr.length-1));
	        str += arr[pos];
	    }
	    return "Simle";
	}
}

function atouch(){/*结果页按钮点击效果*/
	$('a img').on('touchstart',function(){
		$(this).attr('src','img/012.png')
	})
	$('a img').on('touchmove',function(){
		$(this).attr('src','img/012.png')
	})
	$('a img').on('touchend',function(){
		$(this).attr('src','img/12.png')
	})
}
