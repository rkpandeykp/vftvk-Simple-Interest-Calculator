function compute()
{
    var principal = document.getElementById("principal").value;
    if(parseInt(principal)<=0)              //if input is negative
    {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
    else if(principal=="")                  //if input is empty
    {
        alert("please enter the principal amount");
        document.getElementById("principal").focus();
    }
    else
    {
        var rate = document.getElementById("rate").value;   
        var years = document.getElementById("years").value;
        var interest=principal*years*rate/100; //si = (P * R * T)/100
        var year = new Date().getFullYear()+parseInt(years); //year when amount will be received
                       
        document.getElementById("result").innerHTML="If you deposit\<span>\ "+principal+" \</span>\,\<br\>at an interest rate of \<span>\ "+rate+" \</span>\%\<br\>You will receive an amount of \<span>\ "+interest+",\</span>\<br\>in the year \<span>\ "+year+"\</span>\.\<br\>"
    }
   
}
function updateRate() // to update rate value according to slider in id rate_val
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}
        
