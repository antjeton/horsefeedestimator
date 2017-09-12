alert(" is js working?");



function day(){
var horses=document.getElementById("horses").value;
var hay=horses*.5;
document.getElementById("answer").value=hay;
}

function month(){
var horses=document.getElementById("horses").value;
var hay=horses*.5;
var haytwo=hay*30;
document.getElementById("answertwo").value=haytwo;
}

function year(){
var horses=document.getElementById("horses").value;
var hay=horses*.5;
var haytwo=hay*30;
var haythree=haytwo*12;
document.getElementById("answerthree").value=haythree;
}



function sweetfeed(){
var grain=document.getElementById("grain").value;
var horses=document.getElementById("horses").value;
var dailygrain=horses*grain;

document.getElementById("answerfour").value=dailygrain;
}

function monthfeed(){
var grain=document.getElementById("grain").value;
var horses=document.getElementById("horses").value;
var dailygrain=horses*grain;
var monthgrain=dailygrain*30;
document.getElementById("answerfive").value=monthgrain;
}

function yearfeed(){
var grain=document.getElementById("grain").value;
var horses=document.getElementById("horses").value;
var dailygrain=horses*grain;
var monthgrain=dailygrain*30;
var yeargrain=monthgrain*12;
document.getElementById("answersix").value=yeargrain;
}



function balecost(){
var horses=document.getElementById("horses").value;
var hay=horses*.5;
var costhay=document.getElementById("baleprice").value;
var dailyhaycost=costhay*hay;
document.getElementById("answerseven").value=dailyhaycost;
}

function balecostmonth(){
  var horses=document.getElementById("horses").value;
  var hay=horses*.5;
  var costhay=document.getElementById("baleprice").value;
  var dailyhaycost=costhay*hay;
  var monthhaycost=dailyhaycost*30;
  document.getElementById("answereight").value=monthhaycost;
}

function balecostyear(){
  var horses=document.getElementById("horses").value;
  var hay=horses*.5;
  var costhay=document.getElementById("baleprice").value;
  var dailyhaycost=costhay*hay;
  var monthhaycost=dailyhaycost*30;
  var yearlyhaycost=monthhaycost*12;
  document.getElementById("answernine").value=yearlyhaycost;
}

function feedcost(){
    var grain=document.getElementById("grain").value;
    var bagprice=document.getElementById("bagprice").value;
    var horses=document.getElementById("horses").value;
    var poundprice=bagprice/50;
    var grainamount=poundprice*grain;
    var totaldailygrainprice=grainamount*horses;

    document.getElementById("answerten").value = totaldailygrainprice;
}

function feedcostmonth(){
    var grain=document.getElementById("grain").value;
    var bagprice=document.getElementById("bagprice").value;
    var horses=document.getElementById("horses").value;
    var poundprice=bagprice/50;
    var grainamount=poundprice*grain;
    var totaldailygrainprice=grainamount*horses;
  var totaldailygrainpricemonth=totaldailygrainprice*30;
    document.getElementById("answereleven").value = totaldailygrainpricemonth;
}


function feedcostyear(){
    var grain=document.getElementById("grain").value;
    var bagprice=document.getElementById("bagprice").value;
    var horses=document.getElementById("horses").value;
    var poundprice=bagprice/50;
    var grainamount=poundprice*grain;
    var totaldailygrainprice=grainamount*horses;
  var totaldailygrainpricemonth=totaldailygrainprice*30;
  var totaldailygrainpriceyear=totaldailygrainpricemonth*12;
    document.getElementById("answertwelve").value = totaldailygrainpriceyear;
}




function totalfeedcostday(){
  var horses=document.getElementById("horses").value;
  var hay=horses*.5;
  var costhay=document.getElementById("baleprice").value;
  var dailyhaycost=costhay*hay;
  var grain=document.getElementById("grain").value;
  var bagprice=document.getElementById("bagprice").value;
  var horses=document.getElementById("horses").value;
  var poundprice=bagprice/50;
  var grainamount=poundprice*grain;
  var totaldailygrainprice=grainamount*horses;
  var dailytotalcost=totaldailygrainprice+dailyhaycost;

    document.getElementById("answerthirteen").value = dailytotalcost ;
}



function totalfeedcostmonth(){
  var horses=document.getElementById("horses").value;
  var hay=horses*.5;
  var costhay=document.getElementById("baleprice").value;
  var dailyhaycost=costhay*hay;
  var grain=document.getElementById("grain").value;
  var bagprice=document.getElementById("bagprice").value;
  var horses=document.getElementById("horses").value;
  var poundprice=bagprice/50;
  var grainamount=poundprice*grain;
  var totaldailygrainprice=grainamount*horses;
  var dailytotalcost=totaldailygrainprice+dailyhaycost;
  var monthlytotalcost=dailytotalcost*30;
    document.getElementById("answerfourteen").value = monthlytotalcost ;
}


function totalfeedcostyear(){
  var horses=document.getElementById("horses").value;
  var hay=horses*.5;
  var costhay=document.getElementById("baleprice").value;
  var dailyhaycost=costhay*hay;
  var grain=document.getElementById("grain").value;
  var bagprice=document.getElementById("bagprice").value;
  var horses=document.getElementById("horses").value;
  var poundprice=bagprice/50;
  var grainamount=poundprice*grain;
  var totaldailygrainprice=grainamount*horses;
  var dailytotalcost=totaldailygrainprice+dailyhaycost;
  var monthlytotalcost=dailytotalcost*30;
  var yearlytotalcost= monthlytotalcost*12;
    document.getElementById("answerfifteen").value = yearlytotalcost ;
}
