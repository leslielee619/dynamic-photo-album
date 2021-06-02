window.onload = function(){
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");
	var div4 = document.getElementById("div4");
	var div5 = document.getElementById("div5");
	var div6 = document.getElementById("div6");
	var div7 = document.getElementById("div7");
	var div8 = document.getElementById("div8");	
	
	div1.addEventListener("mouseover", play1, false);
	div1.addEventListener("mouseout", pause1, false);
	
	div2.addEventListener("mouseover", play2, false);
	div2.addEventListener("mouseout", pause2, false);
	
	div3.addEventListener("mouseover", play3, false);
	div3.addEventListener("mouseout", pause3, false);
	
	div4.addEventListener("mouseover", play4, false);
	div4.addEventListener("mouseout", pause4, false);
	
	div5.addEventListener("mouseover", play5, false);
	div5.addEventListener("mouseout", pause5, false);
	
	div6.addEventListener("mouseover", play6, false);
	div6.addEventListener("mouseout", pause6, false);

	div7.addEventListener("mouseover", play7, false);
	div7.addEventListener("mouseout", pause7, false);
	
	div8.addEventListener("mouseover", play8, false);
	div8.addEventListener("mouseout", pause8, false);
	
	function play1(){
		img = div1.firstChild
		img.play()
	}
	function pause1(){
		img = div1.firstChild
		img.pause()
	}
	
	function play2(){
		img = div2.firstChild
		img.play()
	}
	function pause2(){
		img = div2.firstChild
		img.pause()
	}

	function play3(){
		img = div3.firstChild
		img.play()
	}
	function pause3(){
		img = div3.firstChild
		img.pause()
	}
	
	function play4(){
		img = div4.firstChild
		img.play()
	}
	function pause4(){
		img = div4.firstChild
		img.pause()
	}
	
	function play5(){
		img = div5.firstChild
		img.play()
	}
	function pause5(){
		img = div5.firstChild
		img.pause()
	}
	
	function play6(){
		img = div6.firstChild
		img.play()
	}
	function pause6(){
		img = div6.firstChild
		img.pause()
	}
	
	function play7(){
		img = div7.firstChild
		img.play()
	}
	function pause7(){
		img = div7.firstChild
		img.pause()
	}

	function play8(){
		img = div8.firstChild
		img.play()
	}
	function pause8(){
		img = div8.firstChild
		img.pause()
	}
}
