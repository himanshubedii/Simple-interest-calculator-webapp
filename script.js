function compute()
{
    //p = document.getElementById("principal").value;
     var principal = parseFloat(document.getElementById("principal").value);
     var rate = parseFloat(document.getElementById("rate").value);
     var years = parseInt(document.getElementById("years").value);
     var intrest = principal * years * rate/100 ;
    //var amount = intrest+principal;
     var years = new Date().getFullYear()+ parseInt(years);
     // inner text
     //document.getElementById("result").innerHTML= intrest; 
     document.getElementById("result").innerHTML = "If you deposit " +principal+ ",\<br\> at an intrest rate of " +rate+ "%\<br\> You will receive an amount of " +intrest+ "\<br\> in the year " +years;
}
// to update rate by slider
function updateRate()
{
    //document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// To check for positive values
function validationPrincipal()
{
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
