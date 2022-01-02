function squarePerimeter(side){
    return side * 4;
} 


function squareArea(side){
    return side ** 2;
}


function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
} 


function triangleArea(base, height){
    return base * height / 2;
}


function circlePerimeter(radius){
    return (radius * 2 * Math.PI).toFixed(2);
} 


function circleArea(radius){
    return (radius ** 2 * Math.PI).toFixed(2);
} 


function calculateSquareMeasures(){
    let side = Number(document.getElementById('square-input').value);
    let measure = document.getElementById('measure-input').value;
    document.getElementsByClassName('square-perimeter')[0].innerHTML=
    squarePerimeter(side)+ ' ' + measure;
    document.getElementsByClassName('square-area')[0].innerHTML=
    squareArea(side) + ' ' + measure + '<sup>2</sup>';
    document.getElementsByClassName('measurements-container')[0].style.display='initial';
}
// console.group('Squares')
// console.log('El área del cuadrado es ' + squareArea + ' cm^2');
// console.groupEnd();

// Tríangulo


