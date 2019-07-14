var countdownid;
var count = 0;

function playOn(){
	var play = document.getElementById("play");
	var pause = document.getElementById("pause");
	var timer = document.getElementById("timer");
	var h2 = document.getElementById("h2");
	var h3 = document.getElementById("h3");	
	play.innerText = 'Return';
	pause.className = 'rounded-circle play';
	timer.className = 'timer playing';
	h2.innerText = 'Hard Work Pays Off';
	h3.innerText = 'Task : The First Thing To Do';
	countdown();
	count++;
	if(count == 2){
		countdown(false,true);
	}
	console.log(count);
};


function countdown(isPause = false,isReturn = false){
	var play = document.getElementById("play");
	var pause = document.getElementById("pause");
	var timer = document.getElementById("timer");
	var h1 = document.getElementById("h1");
	var h2 = document.getElementById("h2");
	var h3 = document.getElementById("h3");	
	var countdownnumber = parseFloat(h1.innerText.substr(0,2))*60 + parseFloat(h1.innerText.substr(3,2));

	if(isReturn){
		play.innerText = 'Play';
		pause.className = 'rounded-circle pause';
		timer.className = 'timer offset';
		h2.innerText = 'Ready to Work?';
		h3.innerText = 'Task : The First Thing To Do';
		h1.innerText = '25:00';				
		clearTimeout(countdownid);
		count = 0;
	}else{
		if(isPause == false){
			if (countdownnumber == 0){ 
				play.innerText = 'Play';
				pause.className = 'rounded-circle pause';
				timer.className = 'timer offset';
				h2.innerText = 'Ready to Work?';
				h3.innerText = 'Task : The Second Thing To Do';
				h1.innerText = '25:00';				
				clearTimeout(countdownid);
			}else{
				countdownnumber --;
				var sec = Math.floor(countdownnumber%60);
				var min = Math.floor(countdownnumber/60);
				if(sec<10){sec = '0'+ sec;}			
				if(min<10){min = '0'+ min;}
				h1.innerText = min + ':' + sec;
	
				if(countdownid){clearTimeout(countdownid);}
				countdownid = setTimeout(countdown,1000);	
			}
			return pause_flag = true;
		}else{
			pause.innerText = 'Play';
			pause_time = countdownnumber;
			clearTimeout(countdownid);
			countdownid = clearInterval(countdown,1000);		
			return pause_flag = false;
		}
	}

};

var pause_flag = true;
function isPause(){
	if(pause_flag){
		pause_flag = countdown(true,false);
	}else{
		pause_flag = countdown(false,false);
		document.getElementById("pause").innerText = 'Pause';
	}	
}
    
