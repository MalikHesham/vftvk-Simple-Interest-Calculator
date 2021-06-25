function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute() {
    var principal = document.getElementById("principal").value;
    if(!principal || isNaN(principal)){alert("Please enter a positive number");}
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    p = document.getElementById("result");
    p.innerHTML=`
                If you deposit ${principal},
                at an interest rate of ${rate}%.
                You will receive an amount of ${interest},
                in the year ${year}
                `
}