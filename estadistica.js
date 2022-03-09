import {calcularMediaAritmetica, calcularMediana, calcularModa, calcularMediaPonderada} from "./utils/funcionesEstadistica.js";

let data = document.getElementsByClassName("input"),
r = document.getElementById("result");
console.log(data);

data[0].addEventListener("click", () => {
    let l = document.getElementById("list-of-numbers").value;
    if(l.lastIndexOf(",") === l.length-1){l = l.slice(0, l.length-1)};
    r.innerHTML = `<p>Mean: ${calcularMediaAritmetica(l)}</p>`;
})

data[1].addEventListener("click", () => {
    let l = document.getElementById("list-of-numbers").value;
    if(l.lastIndexOf(",") === l.length-1){l = l.slice(0, l.length-1)};
    r.innerHTML = `<p>Median: ${calcularMediana(l)}</p>`;
})

data[2].addEventListener("click", () => {
    let l = document.getElementById("list-of-numbers").value;
    if(l.lastIndexOf(",") === l.length-1){l = l.slice(0, l.length-1)};
    let m = calcularModa(l);
    let text = "<p>Mode: ";
    if(m.length > 1){
        for(let i=0;i<m.length; i++){
            text += m[i];
            if(i === m.length-1){text += "</p>";continue;}
            text += " - ";
        }
        r.innerHTML = text;
    } else {
        r.innerHTML = text + m;
    }
})

data[3].addEventListener("click", () => {
    let table = "<table class='results-table'><tr>";
    let l = document.getElementById("list-of-numbers").value;
    if(l.lastIndexOf(",") === l.length-1){l = l.slice(0, l.length-1)};
    let mean = calcularMediaAritmetica(l);
    let median = calcularMediana(l);
    let mode = calcularModa(l);
    const results = {
        mean: mean,
        median: median,
        mode: mode,
    }
    for(let i in results){
        table += `<td>${i}</td><td>${results[i]}</td>`
    }
    table += "</tr><table>";
    r.innerHTML = table;
})
