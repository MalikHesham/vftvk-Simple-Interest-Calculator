function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute() {
    var principal = document.getElementById("principal").value;
    let flag = 1;
    if( principal == 0 || isNaN(principal) || principal<0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        flag = 0;
    }
    if (flag){
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year = new Date().getFullYear()+parseInt(years);
        var interest = principal * years * rate /100;
        p = document.getElementById("result");
        p.innerHTML=`
                    If you deposit <span class="resultNum">${principal}</span>,<br/>
                    at an interest rate of <span class="resultNum">${rate}%</span>.<br/>
                    You will receive an amount of <span class="resultNum">${interest}</span>,<br/>
                    in the year <span class="resultNum">${year}</span>
                    `
    }

}