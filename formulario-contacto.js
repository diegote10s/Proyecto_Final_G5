function toggleFormularioContacto() {
    var formulario = document.getElementById("contacto-form");
    var botonContacto = document.getElementById("contacto-link");

     if (formulario.style.display === "none") {
     formulario.style.display = "block";
     botonContacto.textContent = "Contacto";
     botonContacto.classList.remove("btn-primary");
     botonContacto.classList.add("btn-danger");
     } else {
    formulario.style.display = "none";
    botonContacto.textContent = "Contacto";
    botonContacto.classList.add("btn-primary");
    botonContacto.classList.remove("btn-danger");
     }
    }

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre == "" || email == "" || mensaje == "") {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
    }

    return true;
    }

    document
    .getElementById("contacto-link")
    .addEventListener("click", function () {
    toggleFormularioContacto();
     });