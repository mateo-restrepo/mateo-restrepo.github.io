const calcularMediaAritmetica = (arr = []) => {
    try {
        if(arr.length === 0){return 0}
        if(typeof arr === "string"){
            arr = arr.split(",");
        }
        arr = arr.filter(item => !isNaN(item));
        arr = arr.map(item => Number(item));
        const suma = arr.reduce((a,b) => a+b);
        return (suma/arr.length).toFixed(2);
    }
    catch(err){
        console.error(err.message);
    }
}

const calcularMediana = (arr = []) => {
    if(arr.length === 0){return 0}
    if(typeof arr === "string"){
        arr = arr.split(",");
    }
    arr = arr.filter(item => !isNaN(item));
    arr = arr.map(item => Number(item));
    arr.sort((a,b) => a-b);
    let l = arr.length;
    const mediana = arr.length % 2 == 0
    ? (arr[(l/2)-1] + arr[(l/2)])/2
    : arr[(l-1)/2];
    return mediana;
}

const calcularModa = (arr = []) => {
    if(arr.length === 0){return 0}
    if(typeof arr === "string"){
        arr = arr.split(",");
    }
    arr = arr.filter(item => !isNaN(item));

    const reps = {};
    arr.forEach(i => reps[i] = reps[i] ? reps[i] + 1 : 1);
    console.log(reps);
    const max = Math.max(...Object.values(reps));
    const moda = []
    for(let i in reps){
        if(reps[i] === max){moda.push(Number(i))}
    }
    return moda;
    }

const calcularMediaPonderada = (arrDatos = [], arrPesos=[]) => {
    let a = 0, b = 0, i, l = arrDatos.length;
    for(i = 0; i < l; i++){
        a += arrDatos[i]*arrPesos[i];
        b += arrPesos[i];
    }
    return a/b;
}

export {calcularMediaAritmetica, calcularMediana, calcularModa, calcularMediaPonderada};