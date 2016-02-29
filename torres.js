var d = document;
const altura = "40px";

var cuerpo;

var cuadro1 = new Cuadro(true);
var cuadro2 = new Cuadro(false);
var cuadro3 = new Cuadro(false);

function over1()
{
    over(cuadro1);
}

function over2()
{
    over(cuadro2);
}

function over3()
{
    over(cuadro3);
}

function over(cuadro)
{
    cuadro.caja.style.backgroundColor = "#adfaaa";
}

function out1()
{
    out(cuadro1);
}

function out2() {
    out(cuadro2);
}

function out3()
{
    out(cuadro3);
}

function out(cuadro)
{
    cuadro.caja.style.backgroundColor = "#ffffff";
}


function click1()
{
    cuadro1.elegido = !cuadro1.elegido;
    click(cuadro1);
}

function click2() {
    cuadro2.elegido = !cuadro2.elegido;
    click(cuadro2);
}

function click3() {
    cuadro3.elegido = !cuadro3.elegido;
    click(cuadro3);
}

function click(cuadro)
{
    if (cuadro.elegido)
    {
       
    }
    else
    {
       
    }
}

function crearDiv()
{
    var caja = d.createElement("div");
    return caja;
}


function RellenarContenido()
{
    var contenido = new Array();

    for (var i = 0; i < 5; i++)
    {
        contenido[i] = new Relleno();
    }

    return contenido;
}

function rellenarFichas()
{
    var contenido = new Array();        

    contenido[0] = new Relleno();
    contenido[1] = new FichaS();
    contenido[2] = new FichaM();
    contenido[3] = new FichaL();
    contenido[4] = new FichaXL();

    return contenido;
}

function FichaS()
{
    this.caja =  crearDiv();
    this.caja.style.width = "10%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "red";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaM() {
    this.caja =  crearDiv();
    this.caja.style.width = "30%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "blue";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaL() {
    this.caja = crearDiv();
    this.caja.style.width = "50%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "magenta";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function FichaXL() {
    this.caja = crearDiv();
    this.caja.style.width = "70%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#000000";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
}

function Relleno()
{
    this.caja =  crearDiv();
    this.caja.style.width = "100%";
    this.caja.style.height = altura;
}



//Constructor
function Cuadro(cajaInicial)
{
    //propiedades:
    this.caja = crearDiv();

    this.caja.style.width = "28%";
    this.caja.style.height = "200px";
    this.caja.style.marginLeft = "4%";
    this.caja.style.borderWidth = "2%";
    this.caja.style.border = "solid black";
    this.caja.style.display = "inline-block";

    this.elegido = false;

    this.contenido;

    if (cajaInicial)
    {
        this.contenido = rellenarFichas();
    }
    else
    {
        this.contenido = RellenarContenido();
    }

    for (var i = 0; i <this.contenido.length; i++)
    {
        this.caja.appendChild(this.contenido[i].caja);
    }

}

function iniciar()
{
    cuerpo = d.getElementsByTagName("body")[0];

    cuerpo.appendChild(cuadro1.caja);
    cuerpo.appendChild(cuadro2.caja);
    cuerpo.appendChild(cuadro3.caja);
   
    cuadro1.caja.addEventListener("mouseover", over1, false);
    cuadro2.caja.addEventListener("mouseover", over2, false);
    cuadro3.caja.addEventListener("mouseover", over3, false);

    cuadro1.caja.addEventListener("mouseout", out1, false);
    cuadro2.caja.addEventListener("mouseout", out2, false);
    cuadro3.caja.addEventListener("mouseout", out3, false); 

    cuadro1.caja.addEventListener("click", click1, false);
    cuadro2.caja.addEventListener("click", click2, false);
    cuadro3.caja.addEventListener("click", click3, false);
    
}




window.addEventListener("load", iniciar, false);

