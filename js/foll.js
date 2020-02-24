/* sakura.8351.1.js 繧ｹ繝槭�繝医ヵ繧ｩ繝ｳ逕ｨ縺ｫ隱ｿ遽��さ繝｡繝ｳ繝亥�繧後◆繝舌�繧ｸ繝ｧ繝ｳ */

(function () {
	var divSakura = document.createElement('div');	/* 螟ｧ譫�縺ｫ縺ｪ繧掬iv繧剃ｽ懊ｋ */
	divSakura.id = "sakura";	/* id 繧定ｿｽ蜉�縺吶ｋ */

	/* 莉･荳� div 縺ｮ荳ｭ縺ｫ霑ｽ蜉�縺吶ｋ html��style 繧ｿ繧ｰ縺ｨ css 繧定ｿｽ蜉�縺励※縺�∪縺呻ｼ� */
	divSakura.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid white;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
// 	'border: 10px solid white;'+
// 	'border-radius: 15px;'+
// 	'border-top-right-radius: 0;'+
// 	'border-bottom-left-radius: 0;'+
	'-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
	'}'+

	'.t1{border-color:#fff;}'+
	'.t2{border-color:#fff;}'+
	'.t3{border-color:#fff;}'+
	'.t4{border-color:#fff;}'+
	'.t5{border-color:#fff;}'+
	'.t1::after{border-color:#fff;}'+
	'.t2::after{border-color:#fff;}'+
	'.t3::after{border-color:#fff;}'+
	'.t4::after{border-color:#fff;}'+
	'.t5::after{border-color:#fff;}'+

	'.y1{-webkit-animation:v1 10s infinite;}'+
	'.y2{-webkit-animation:v2 10s infinite;}'+
	'.y3{-webkit-animation:v3 9s infinite;}'+
	'.y4{-webkit-animation:v4 9s infinite;}'+
	'.y5{-webkit-animation:v5 8s infinite;}'+
	'@-webkit-keyframes v1{'+
		'from{-webkit-transform: rotate(0deg) scale(.9);}'+
		'50%{-webkit-transform: rotate(270deg) scale(.9);}'+
		'to{-webkit-transform: rotate(1deg) scale(.9);}'+
	'}'+
	'@-webkit-keyframes v2{'+
		'from{-webkit-transform: rotate(-90deg) scale(.8);}'+
		'50%{-webkit-transform: rotate(-360deg) scale(.8);}'+
		'to{-webkit-transform: rotate(-89deg) scale(.8);}'+
	'}'+
	'@-webkit-keyframes v3{'+
		'from{-webkit-transform: rotate(30deg) scale(.7);}'+
		'50%{-webkit-transform: rotate(300deg) scale(.7);}'+
		'to{-webkit-transform: rotate(29deg) scale(.7);}'+
	'}'+
	'@-webkit-keyframes v4{'+
		'from{-webkit-transform: rotate(-120deg) scale(.6);}'+
		'50%{-webkit-transform: rotate(-390deg) scale(.6);}'+
		'to{-webkit-transform: rotate(-119deg) scale(.6);}'+
	'}'+
	'@-webkit-keyframes v5{'+
		'from{-webkit-transform: rotate(60deg) scale(.5);}'+
		'50%{-webkit-transform: rotate(330deg) scale(.5);}'+
		'to{-webkit-transform: rotate(59deg) scale(.5);}'+
	'}'+
	'</style>';

	document.body.appendChild(divSakura);	/* body 繧ｿ繧ｰ縺ｫ螟ｧ譫�縺ｮ div 繧定ｿｽ蜉�縺励∪縺� */

	var windowHeight = window.innerHeight;	/* 繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆繧貞叙蠕� */
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;	/* 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ菴咲ｽｮ繧貞叙蠕� */
	var styleZindex = 9999;	/* 闃ｱ縺ｳ繧峨� z-index ��9999縺九ｉ髢句ｧ具ｼ� */
	var styleTop = new Array();	/* 闃ｱ縺ｳ繧峨� top 菴咲ｽｮ驟榊� */
	var styleLeft = new Array();	/* 闃ｱ縺ｳ繧峨� left 菴咲ｽｮ驟榊� */
	var yuragi = new Array();	/* 繧�ｉ縺仙ｹ��驟榊� */
	var sokudo = new Array();	/* 關ｽ荳矩溷ｺｦ縺ｮ驟榊� */
	var hanabiraId = new Array();	/* 闃ｱ縺ｳ繧峨�ID縺ｮ驟榊� */
	var yuragiConut = new Array();	/* 謠ｺ繧峨℃縺ｮ繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ驟榊� */
	var kazeCount = 0;	/* 讓ｪ鬚ｨ縺ｮ繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ */

	/* 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ譎ゅ�繧､繝吶Φ繝育匳骭ｲ�医せ繧ｯ繝ｭ繝ｼ繝ｫ縺輔ｌ縺ｦ繧り干縺ｳ繧峨′繧ｦ繧｣繝ｳ繝峨え蜀�↓蜿弱∪繧区ｧ倥↓�� */
	document.addEventListener('scroll', function(){ scroll = document.documentElement.scrollTop || document.body.scrollTop; }, false);

	/* 闃ｱ縺ｳ繧�10譫夂畑諢上☆繧� */
	for(var i = 0; i < 10; i++){
		var divHanabira = document.createElement('div');	/* 闃ｱ縺ｳ繧峨� div 繧剃ｽ懊ｋ */
		divHanabira.id = 'hanabira' + i;	/* id 繧定ｿｽ蜉�縺吶ｋ�井ｾ具ｼ�<div id="hanabira0">�� */
		styleTop[i] = Math.random() * -500 + scroll;	/* 蛻晄悄陦ｨ遉ｺ菴咲ｽｮ��top�峨ｒ繝ｩ繝ｳ繝繝�縺ｫ蜿門ｾ� */
		styleLeft[i] = Math.random() * window.innerWidth;	/* 蛻晄悄陦ｨ遉ｺ菴咲ｽｮ��left�峨ｒ繧ｦ繧｣繝ｳ繝峨え縺ｮ蟷��縺ｧ繝ｩ繝ｳ繝繝�縺ｫ蜿門ｾ� */
		divHanabira.setAttribute('style', 'z-index:' + (styleZindex + i) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;');	/* 闃ｱ縺ｳ繧� div 縺ｫ style 繧定ｿｽ蜉� */
		var hanabiraClass = 'hana t' + (Math.floor(Math.random() * 5) + 1) + ' y' + (Math.floor(Math.random() * 5) + 1);	/* 闃ｱ縺ｳ繧� div 縺ｮ class 繧堤畑諢� */
		divHanabira.setAttribute('class', hanabiraClass);	/* 闃ｱ縺ｳ繧� div 縺ｫ class 繧定ｿｽ蜉� */
		divSakura.appendChild(divHanabira);	/* 螟ｧ譫�縺ｮ div 縺ｫ闃ｱ縺ｳ繧� div 繧定ｿｽ蜉� */
		yuragi[i] = Math.random() * 35 + 15;	/* 謠ｺ繧峨＄蟷�ｒ繝ｩ繝ｳ繝繝�縺ｫ蜿門ｾ� */
		sokudo[i] = Math.random() * 2 + 1;	/* 關ｽ荳矩溷ｺｦ繧偵Λ繝ｳ繝繝�縺ｫ蜿門ｾ� */
		hanabiraId[i] = document.getElementById('hanabira' + i);	/* 縺ゅ→縺ゅ→謇ｱ縺�ｄ縺吶＞讒倥↓闃ｱ縺ｳ繧峨↓ id 繧帝�蛻励↓譬ｼ邏� */
		yuragiConut[i] = 0;	/* 謠ｺ繧峨℃繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ縺ｮ蛻晄悄蛟､縺ｯ0 */
	}

	/* 闃ｱ縺ｳ繧峨ｒ蜍輔°縺呻ｼ�45繝溘Μ遘呈ｯ弱↓郢ｰ繧願ｿ斐＠�� */
	setInterval(function(){

		/* 闃ｱ縺ｳ繧峨�菴咲ｽｮ繧貞宛蠕｡��10譫壼虚縺九☆�� */
		for(var i = 0; i < 10; i++){
			if(styleTop[i] < scroll + windowHeight - 40){	/* 闃ｱ縺ｳ繧峨�菴咲ｽｮ��top�峨′繧ｦ繧｣繝ｳ繝峨え蜀�↑繧� */
				if(yuragi[i] >= yuragiConut[i]){	/* 謠ｺ繧峨＄蟷�ｼ亥承縺ｸ遘ｻ蜍包ｼ牙�縺ｪ繧� */
					styleLeft[i] = styleLeft[i] + 0.3 + Math.random() * 0.3;
				}else{	/* 謠ｺ繧峨＄蟷�ｼ亥ｷｦ縺ｸ遘ｻ蜍包ｼ牙�縺ｪ繧� */
					styleLeft[i] = styleLeft[i] - 0.3 - Math.random() * 0.3;
				}
				if((yuragi[i] * 2) <= yuragiConut[i]){	/* 繧�ｉ縺弱�蟷��2蛟阪↑繧� */
					yuragiConut[i] = 0;	/* 繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ繝ｪ繧ｻ繝�ヨ */
				}
			}else{	/* 闃ｱ縺ｳ繧峨′繧ｦ繧｣繝ｳ繝峨え縺ｮ荳九∪縺ｧ縺阪◆繧� */
				styleTop[i] = scroll;	/* 闃ｱ縺ｳ繧峨ｒ荳翫↓謌ｻ縺� */
				styleLeft[i] = Math.random() * window.innerWidth;	/* 闃ｱ縺ｳ繧芽｡ｨ遉ｺ菴咲ｽｮ��left�峨ｒ繝ｩ繝ｳ繝繝�縺ｫ */
			}


/* 縺薙％縺九ｉ讓ｪ鬚ｨ */

			/* 鬚ｨ繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ縺ｮ謨ｰ蛟､縺ｫ繧医ｊ蜿ｳ縺ｸ縺ｮ遘ｻ蜍輔ｒ蜉�邂� */
			if(kazeCount >= 100 && kazeCount <= 110){ styleLeft[i] += 0.5; }
			else if(kazeCount >= 111 && kazeCount <= 120){ styleLeft[i] += 1; }
			else if(kazeCount >= 121 && kazeCount <= 129){ styleLeft[i] += 1.5; }
			else if(kazeCount >= 130 && kazeCount <= 137){ styleLeft[i] += 2; }
			else if(kazeCount >= 138 && kazeCount <= 144){ styleLeft[i] += 2.5; }
			else if(kazeCount >= 145 && kazeCount <= 300){ styleLeft[i] += 3; }
			else if(kazeCount >= 301 && kazeCount <= 311){ styleLeft[i] += 2.5; }
			else if(kazeCount >= 312 && kazeCount <= 322){ styleLeft[i] += 2; }
			else if(kazeCount >= 323 && kazeCount <= 335){ styleLeft[i] += 1.5; }
			else if(kazeCount >= 336 && kazeCount <= 349){ styleLeft[i] += 1; }
			else if(kazeCount >= 350 && kazeCount <= 354){ styleLeft[i] += 0.5; }

			/* 鬚ｨ繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ縺ｮ謨ｰ蛟､縺ｫ繧医ｊ蟾ｦ縺ｸ縺ｮ遘ｻ蜍輔ｒ蜉�邂� */
			else if(kazeCount >= 500 && kazeCount <= 510){ styleLeft[i] -= 0.5; }
			else if(kazeCount >= 511 && kazeCount <= 520){ styleLeft[i] -= 1; }
			else if(kazeCount >= 521 && kazeCount <= 529){ styleLeft[i] -= 1.5; }
			else if(kazeCount >= 530 && kazeCount <= 537){ styleLeft[i] -= 2; }
			else if(kazeCount >= 538 && kazeCount <= 544){ styleLeft[i] -= 2.5; }
			else if(kazeCount >= 545 && kazeCount <= 700){ styleLeft[i] -= 3; }
			else if(kazeCount >= 701 && kazeCount <= 711){ styleLeft[i] -= 2.5; }
			else if(kazeCount >= 712 && kazeCount <= 722){ styleLeft[i] -= 2; }
			else if(kazeCount >= 723 && kazeCount <= 735){ styleLeft[i] -= 1.5; }
			else if(kazeCount >= 736 && kazeCount <= 749){ styleLeft[i] -= 1; }
			else if(kazeCount >= 750 && kazeCount <= 754){ styleLeft[i] -= 0.5; }

			else if(kazeCount >= 900){ kazeCount = 0; }	/* 繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ繝ｪ繧ｻ繝�ヨ */

/* 縺薙％縺ｾ縺ｧ讓ｪ鬚ｨ */

			styleTop[i] = styleTop[i] + sokudo[i];	/* 陦ｨ遉ｺ菴咲ｽｮ��top�峨↓騾溷ｺｦ蛻�ｿｽ蜉� */
			hanabiraId[i].style.top = styleTop[i] + 'px';	/* 螳滄圀縺ｫ top 縺ｫ謨ｰ蛟､繧貞渚譏�縺輔○繧� */
			hanabiraId[i].style.left = styleLeft[i] + 'px';	/* 螳滄圀縺ｫ left 謨ｰ蛟､繧貞渚譏�縺輔○繧� */
			yuragiConut[i]++;	/* 謠ｺ繧峨℃繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ縺ｫ1雜ｳ縺� */
		}
		kazeCount += 0.5;	/* 鬚ｨ繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ縺ｫ0.5雜ｳ縺� */
	}, 30);
})();