document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío tradicional del formulario

  // Obtener los valores ingresados por el cliente
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const people = document.getElementById("people").value;

  // Definir el número de WhatsApp
  const phoneNumber = "543888318361"; // Reemplaza con el número de tu restaurante

  // Crear el mensaje codificado
  const message = `Detalles de la Reserva:%0ACliente: ${name}%0AFecha: ${date}%0AHora: ${time}%0APersonas: ${people}`;
  // Crear el enlace de WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  // Redirigir al cliente a WhatsApp
  window.open(whatsappLink, "_blank");
});