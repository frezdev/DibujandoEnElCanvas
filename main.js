let canvas = document.getElementById("canvas");
let lienzo = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect();
let x=0, y=0;
let dibujando = false;
let colorcito = document.getElementById("defColor");
let grosor = document.getElementById("defGrosor");


canvas.addEventListener("mousedown", function(e)
{
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  dibujando = true;
  
  
});

canvas.addEventListener("mousemove", function(e)
{
  if(dibujando == true)
  {
    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top );
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
  console.log('esto es y ' + y);
  console.log('esto es x ' + x);
});

canvas.addEventListener("mouseup", function(e)
{
  if(dibujando == true)
  {
    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top );
    x = 0;
    y = 0;
    dibujando = false;
  }
  
});

function dibujar(x1, y1, x2, y2, color)
{
  lienzo.beginPath();
  lienzo.strokeStyle = colorcito.value;
  lienzo.lineWidth = grosor.value;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}