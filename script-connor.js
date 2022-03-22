function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var total = parseInt(principal) + parseInt(interest);
    
    document.getElementById("result").innerHTML=
      'If you deposit <b>' + principal + '</b>,<br> at an interest rate of <b> '+rate+'%</b>.<br> You will receive an amount of <b> '+total+ '</b>,<br> in the year <b> '+year;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}

function validate() 
{
    var principal =parseInt(document.getElementById("principal").value);
  
  if(principal>0)
  {

  }
  else if(principal<0)
  {
    alert("Enter a positive number");
    document.getElementById("principal").value="";
    document.getElementById("principal").focus();
  }
  
  else if(principal==0)
  {
    alert("Enter a positive number");
    document.getElementById("principal").value="";
    document.getElementById("principal").focus();
  }
}