initial = document.querySelector("input[name='initialprice']")
current = document.querySelector("input[name='currentprice']")
numstocks = document.querySelector("input[name='num-stocks']")
calculate = document.querySelector("#calculate")
message = document.querySelector("#results")

console.log(initial, current, numstocks);

function profitorloss() {

    var initialprice = initial.value;
    var currentprice = current.value;
    var num = numstocks.value;

    console.log(initialprice, currentprice, num);

    if(initialprice <= 0 || currentprice <= 0 || num <= 0) {
        results.innerText = "Invalid input!"
    }
    else {
        costprice = initialprice * num;
        if(currentprice > initialprice) {
            var profit = (currentprice - initialprice) * num
            profitpercentage = (profit / costprice) * 100;
            results.innerText = "You made a profit of " + profit + " and a profit percentage of " + profitpercentage.toFixed(2) + "%. 🤑";
            results.style.color = "green";
        }
        else{
            var loss = (initialprice - currentprice) * num;
            losspercentage = (loss / costprice) * 100;
            results.innerText = "You lost " + loss + " and a loss percentage of " + losspercentage.toFixed(2)+ "% 😟";
            results.style.color = "red";
        }
    }

}

calculate.addEventListener("click", profitorloss)