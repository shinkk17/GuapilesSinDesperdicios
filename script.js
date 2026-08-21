const form = document.getElementById('register_form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const id = document.getElementById('id').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const type = document.getElementById('type').value.trim();
    if(name === "" || email === "" || id === "" || lastName === "" || type === ""){
        alert("Por favor complete todos los campos");
        return;
    }
    //Esto lo vamos a terminar mañana hoy no pq esta muy insano
});