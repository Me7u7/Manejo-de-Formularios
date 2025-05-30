document.getElementById('registroEvento').addEventListener('submit', function (event) {
event.preventDefault();

const nombre = document.getElementById('nombre').value.trim();
const correo = document.getElementById('correo').value.trim();
const telefono = document.getElementById('telefono').value.trim();
const intereses = document.querySelectorAll('input[name="intereses"]:checked');
const horario = document.querySelector('input[name="horario"]:checked');
const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;

if (nombre.length < 5) {
    alert("El nombre debe tener al menos 5 caracteres.");
    return;
}

const telRegex = /^\d{10}$/;
if (!telRegex.test(telefono)) {
    alert("Ingresa un teléfono válido de 10 dígitos.");
    return;
}

const hoy = new Date();
hoy.setHours(0, 0, 0, 0);
const fechaEvento = new Date(fecha);
if (fechaEvento < hoy) {
    alert("La fecha del evento no puede ser anterior a hoy.");
    return;
}

if (!correo || intereses.length === 0 || !horario || !fecha || !hora) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
}

alert("Registro exitoso. ¡Gracias por registrarte!");
});
