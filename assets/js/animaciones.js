
var cont=0;
let contenedor=document.getElementById("logros");
let centerX = document.documentElement.clientWidth / 2;

let posicion=contenedor.getBoundingClientRect();

window.addEventListener("load",() => {
    window.addEventListener("scroll", () => {
        if (cont==0){
            scrollFunctionContador(centerX);
            cont=1;
        }
    })
});

function scrollFunctionContador(distancia) {
    if (document.body.scrollTop > distancia || document.documentElement.scrollTop > distancia) {
        contador0("contador0");
        contador1("contador1");
        contador2("contador2"); 
    }   
}
function contador0(elemento){
    const numero=document.getElementById(elemento);
    let limite=document.getElementById(elemento).innerHTML;
    let cantidad=0;
    let tiempo= setInterval(() => {
    cantidad+=1;
    numero.textContent=cantidad
    if(cantidad== limite){ 
        clearInterval(tiempo);
        agregarTexto(elemento,'+');
       
    }
},45);
}

function contador1(elemento){
    const numero=document.getElementById(elemento);
    let limite=document.getElementById(elemento).innerHTML;
    let cantidad=0;
    let tiempo= setInterval(() => {
    cantidad+=1;
    numero.textContent=cantidad
    if(cantidad== limite){
        clearInterval(tiempo)
        agregarTexto(elemento,'k+');
    }
},25);
}

function contador2(elemento){
    const numero=document.getElementById(elemento);
    let limite=document.getElementById(elemento).innerHTML;
    let cantidad=0;
    let tiempo= setInterval(() => {
    cantidad+=1;
    numero.textContent=cantidad
    if(cantidad== limite){
        clearInterval(tiempo)
        agregarTexto(elemento,'+');
        validador=true;
    }
},10);
}

function agregarTexto(elemento, texto)
{
    var modificacion=document.getElementById(elemento).innerHTML+texto;
    document.getElementById(elemento).innerHTML=modificacion;
}



