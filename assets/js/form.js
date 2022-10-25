let form = document.getElementById('form');
let button = document.getElementById('form-button');
let Fname=document.getElementById('form-name');
let Ftipo=document.getElementById('form-plaza-servicio');

function changeform(){
    let select =document.getElementById('selectform');
    button.removeAttribute('disabled');
    if(select.value=='aspirante'){
        document.getElementById('option-correo').innerText='*Completa este formulario si deseas aplicar a alguna de nuestras plazas disponibles*';
        form.setAttribute('action','enviar2.php');
        Fname.setAttribute('placeholder','Nombre Completo');
        Ftipo.setAttribute('placeholder','Plaza a la que aplica');
    }else{
        document.getElementById('option-correo').innerText='*Completa este formulario si deseas contratar nuestros servicios o deseas más información*';
        form.setAttribute('action','enviar.php');
        Fname.setAttribute('placeholder','Nombre de Empresa');
        Ftipo.setAttribute('placeholder','Servicio de Interés');
    }
}
