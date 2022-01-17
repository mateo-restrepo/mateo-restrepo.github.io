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
    let measure = document.getElementById('square-measure-input').value;

    document.getElementsByClassName('square-perimeter')[0].innerHTML=
    squarePerimeter(side)+ ' ' + measure;
    document.getElementsByClassName('square-area')[0].innerHTML=
    squareArea(side) + ' ' + measure + '<sup>2</sup>';
    document.getElementsByClassName('measurements-container')[0].style.display='initial';
}


function calculateTriangleMeasures(){
    let side1 = Number(document.getElementById('triangle-side1').value);
    let side2 = Number(document.getElementById('triangle-side2').value);
    let base = Number(document.getElementById('triangle-base').value);
    let height = Number(document.getElementById('triangle-height').value);
    let measure = document.getElementById('triangle-measure-input').value;

    document.getElementsByClassName('triangle-perimeter')[0].innerHTML=
    trianglePerimeter(side1, side2, base)+ ' ' + measure;
    document.getElementsByClassName('triangle-area')[0].innerHTML=
    triangleArea(base, height) + ' ' + measure + '<sup>2</sup>';
    document.getElementsByClassName('measurements-container')[1].style.display='initial';
}


function calculateCircleMeasures(){
    let radius = Number(document.getElementById('circle-input').value);
    let measure = document.getElementById('circle-measure-input').value;

    document.getElementsByClassName('circle-perimeter')[0].innerHTML=
    circlePerimeter(radius)+ ' ' + measure;
    document.getElementsByClassName('circle-area')[0].innerHTML=
    circleArea(radius) + ' ' + measure + '<sup>2</sup>';
    document.getElementsByClassName('measurements-container')[2].style.display='initial';
}


// console.group('Squares')
// console.log('El área del cuadrado es ' + squareArea + ' cm^2');
// console.groupEnd();


let titleSection = document.getElementsByClassName('title-section')[0];

window.onscroll = function() {
    let headerHeight = document.getElementsByClassName('header-container')[0].offsetHeight;

    if(window.scrollY >= headerHeight){
        titleSection.style.position='fixed';
        titleSection.style.top='0';
    }  
    else {
        titleSection.style.position='initial';
        titleSection.style.top='none';
    }
  }