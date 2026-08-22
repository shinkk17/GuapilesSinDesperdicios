const anio = document.getElementById('anio');
anio.textContent = new Date().getFullYear();


emailjs.init("YKkfnCb8ZRPHygE1M");

document.getElementById('register_form').addEventListener('submit', function (event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('id').value;
    const phone_num = document.getElementById('phone_num').value;

    const colaborator_choice = document.getElementById('colaborator_choice').value;

    if (name == '' || lastname == '' || email == '' || id == '' || phone_num == ''){
        alert('Debe llenar todos los campos');
        return;
    }

    let message = "";

    if (colaborator_choice == 'buyer') {
        message = 'Hola ' + name + " " + lastname + ", nos alegra que estés interesad@ en nuestro servicio como Comprador. \n¡Muchas gracias por unirte a la causa para un Guápiles con menos desperdicios!\n\n¡Te avisaremos cuando la web esté lista!";
    } else if (colaborator_choice == 'seller') {
        message = 'Hola ' + name + " " + lastname + ", nos alegra que estés interesad@ en nuestro servicio como Vendedor \nMuchas gracias por unirte a la causa para un Guápiles con menos desperdicios.\n\n¡Te avisaremos cuando la web esté lista!";
    }else {
        alert('Debe ingresar una opción de colaborador válida')
        return;
    }

    const templateParams = {
        name: 'Guapiles Sin Desperdicios',
        message: message,
        //title : link de la pagina de inicio en vercel
        user_email: email,
        reply_email: 'guapilessindesperdicios'
    };

    emailjs.send('service_ejctmdh', 'template_77a37b2', templateParams).then(function () {
        alert('¡Mensaje enviado con éxito!');
        document.getElementById('register_form').reset();
    }, function (error) {
        alert('Error al enviar: ' + JSON.stringify(error));
    });
});
function SenMessage() {
    const telefono = "50684796204";
    const mensaje = encodeURIComponent("Hola, me gustaría obtener más información sobre el proyecto Guápiles Sin Desperdicios. ¿Podrían proporcionarme detalles adicionales?");

    const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(urlWhatsApp, '_blank');
}
