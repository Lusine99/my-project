let points = 0;
let resp0 =  prompt ("What is the most spoken language in the world?");
if(resp0==="English"){
    points= points + 1;
}
let resp1 = prompt("What is the most popular sport in the world?");
if(resp1 === "Soccer") {
    points = points + 1;
}

let resp2 =prompt("What is the capital Armenia?");
if (resp2 ==="Yerevan") {
    points =points +1;
}

console.log("You received"  + points+ " out of 3");