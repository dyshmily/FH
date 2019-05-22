window.onload=function(){
	/**********选项卡***********/
	var sBtn = document.getElementById('sBtn');
	var sBox = document.getElementById('sBox');
	sBtn.onclick=function(){
		sBox.style.display = 'block';
		var aLi = sBox.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				sBox.style.display = 'none';
				sBtn.innerHTML = this.innerHTML;
			}
			/*aLi[i].onmouseout=function(){
				this.className = '';
			}
			aLi[i].onmouseover=function(){
				this.className = 'active';
			}*/

		}
	}
	/*************证券tab选项卡切换**************/
	bond();
	function bond(){
		var oCurve = document.getElementById('curve');
		var oItem = getClassObj(oCurve,'curve_item')[0];
		var oItemLi = oItem.getElementsByTagName('li');
		var oDataBox = getClassObj(oCurve,'data_pic_box')[0];
		var oDataPic = getClassObj(oDataBox,'data_pic');
		for(var i=0;i<oItemLi.length;i++){
			oItemLi[i].index = i;
			oItemLi[i].onmouseover=function(){
				for (var j = 0; j < oItemLi.length; j++) {
					oItemLi[j].className = '';
					oDataPic[j].style.display = 'none';
				}
				this.className = 'active';
				oDataPic[this.index].style.display = 'block';
			}
		}
	};
	/***********************多媒体内容tab选项卡切换*****************/
	media();
	function media(){
		var oCurve = document.getElementById('media');
		var oItem = getClassObj(oCurve,'channel')[0];
		var oItemLi = oItem.getElementsByTagName('li');
		var oDataBox = getClassObj(oCurve,'box')[0];
		var oDataPic = getClassObj(oDataBox,'content');
		for(var i=0;i<oItemLi.length;i++){
			oItemLi[i].index = i;
			oItemLi[i].onmouseover=function(){
				for (var j = 0; j < oItemLi.length; j++) {
					oItemLi[j].className = '';
					oDataPic[j].style.display = 'none';
				}
				this.className = 'active';
				oDataPic[this.index].style.display = 'block';
			}
		}
	}
	/********************凤凰客户端选项卡**************/
	ifengTab();
	function ifengTab(){
		var oCurve = document.getElementById('ifengTab');
		var oItem = getClassObj(oCurve,'channel')[0];
		var oItemLi = oItem.getElementsByTagName('li');
		var oDataBox = getClassObj(oCurve,'box2')[0];
		var oDataPic = getClassObj(oDataBox,'list_1');
		for(var i=0;i<oItemLi.length;i++){
			oItemLi[i].index = i;
			oItemLi[i].onmouseover=function(){
				for (var j = 0; j < oItemLi.length; j++) {
					oItemLi[j].className = '';
					oDataPic[j].style.display = 'none';
				}
				this.className = 'active';
				oDataPic[this.index].style.display = 'block';
			}
		}
	}
	/*******************频道选项卡动画*****************/
	tabAnimate();
	function tabAnimate(){
		var oTab = document.getElementById('tab_animate');
		var oItem = getClassObj(oTab,'item')[0];
		var oPicBox = getClassObj(oTab,'pic_box')[0];
		var oBoxUl = oPicBox.getElementsByTagName('ul')[0];
		var oItemLi = oItem.getElementsByTagName('li');
		var oBoxUlLi = oBoxUl.getElementsByTagName('li');
		var oBtnLeft = getClassObj(oPicBox,'btn_left')[0];
		var oBtnRight = getClassObj(oPicBox,'btn_right')[0];
		var iNow = 0;
		var len = oItemLi.length;
		for(var i=0;i<len;i++){
			oItemLi[i].index = i;
			oItemLi[i].onmouseover = function(){
				iNow = this.index;
				move(this.index)
			}
		}
		function move(index){
			for (var j = 0; j < oItemLi.length; j++) {
				oItemLi[j].className = '';
				oBoxUlLi[j].style.display = 'none';
			}
			oBoxUlLi[index].style.display = 'block';
			oItemLi[index].className = 'active';
		}
		time();
		function time(){
			var timer = setInterval(function(){
				iNow++;
				if (iNow > len - 1) {
					iNow = 0;
				}
				move(iNow);
			}, 1000)
			oTab.onmouseover = function(){
				oBtnLeft.style.display= 'block';
				oBtnRight.style.display= 'block';
				clearInterval(timer);
			}
			oTab.onmouseout = function(){
				oBtnLeft.style.display= 'none';
				oBtnRight.style.display= 'none';
				time()
			}
		}
		oBtnLeft.onclick=function(){
			iNow--;
			if(iNow<0){
				iNow = len-1;
			}
			move(iNow)
		}
		oBtnRight.onclick=function(){
			iNow++;
			if (iNow > len - 1) {
				iNow = 0;
			}
			move(iNow)
		}
	}
}

/****
 * 通过class选择元素
 * @param {Object} aPrent
 * @param {Object} className
 */
function getClassObj(aPrent,className){
	var obj = aPrent.getElementsByTagName('*');
	var result = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className == className){
			result.push(obj[i]);
		}
	}
	return result;
}















