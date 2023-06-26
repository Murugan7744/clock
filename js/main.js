
var n= new Date();


var sec=n.getSeconds();
var seconds=document.getElementById("sec");
seconds.innerHTML=sec;

var  min=n.getMinutes();
var minutes=document.getElementById("min");
minutes.innerHTML=min+":";

var hour=n.getHours();
var hoursin=document.getElementById("hour");
hoursin.innerHTML=hour+":";


var dates=n.getDate();
var date=document.getElementById("date");
date.innerHTML=dates;

var monthly=n.getMonth();
var month=document.getElementById("month");
month.innerHTML=monthly+1;


var years=n.getFullYear();
var year=document.getElementById("year");
year.innerHTML=years;

var days=n.getDay();

var day1=document.getElementById("sunday");
var day2=document.getElementById("monday");
var day3=document.getElementById("tuesday");
var day4=document.getElementById("wednesday");
var day5=document.getElementById("thursday");
var day6=document.getElementById("friday");
var day7=document.getElementById("saturday");





setInterval(function(){
    sec++;
    seconds.innerHTML=sec ;
    minutes.innerHTML=min;
    hoursin.innerHTML=hour;
    if(sec<9){
        seconds.innerHTML="0"+sec;
    }
    if(sec>59){
        sec=0;
        seconds.innerHTML=sec;
        min++;
        minutes.innerHTML=min;
    }
    if(min<10){
        min.innerHTML="0"+minutes;
    }
    if(min>59){
        min="0"+0;
        minutes.innerHTML=minutes;
        hour++;
        hoursin.innerHTML=hour;
    }
    if(hour<9){
        hoursin="0"+hour;
    }
    if(hour>23){
        hour="0"+0;
        hoursin.innerHTML=hour;
        dates++;
        date.innerHTML=dates;
    }
///*--Month-- *//

if(monthly===0||monthly===2||monthly===4||monthly===6||monthly===7||monthly===9||monthly===11){
    if(dates>31){
        dates=1;
        date.innerHTML=dates;
        monthly++;
        month.innerHTML=monthly+1;

    }
    else if(monthly===1||monthly===3||monthly===5||monthly===8||monthly===10||monthly==12){
        if(dates>30){
        dates=1;
        date.innerHTML=dates;
        monthly++;
        month.innerHTML=monthly+1;
        
    }
   }
    else if(year%4==0){
        if(dates>29){
            dates=1;
        date.innerHTML=dates;
        monthly++;
        month.innerHTML=monthly+1;
            
        }
    }
    else if(year%4!=0){
        if(dates>28){
            dates=1;
        date.innerHTML=dates;
        monthly++;
        month.innerHTML=monthly+1;
            
        }
    }
  }
    
    switch(days){
    case 0:
        day1.style.color="red";
        break;
        case 1:
            day2.style.color="red";
            break;
        case 2:
            day3.style.color="red";
            break; 
        case 3:
                day4.style.color="red";
                break; 
        case 4:
             day5.style.color="red";
            break;
        case 5:
                day6.style.color="red";
                break;
     case 6:
            day7.style.color="red";
            break;
            
        }

},1000,sec)