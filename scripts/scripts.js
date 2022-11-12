const output = document.getElementById("output");
output.style.visibility = "hidden";


// TODO listen to input and output in grams and pounds and ounces

document.getElementById("kgInput").addEventListener("input", function(event){
    output.style.visibility = "visible";
    let kg = event.target.value;
    document.getElementById("gmOutput").innerHTML = (kg * 1000).toFixed(4);
    document.getElementById("lbOutput").innerHTML = (kg * 2.2).toFixed(4);
    document.getElementById("ozOutput").innerHTML = (kg * 35.27).toFixed(4);

})
   

