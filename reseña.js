document.getElementById("formReseña").addEventListener("submit", function(e){
    e.preventDefault();


const reseñita = document.getElementById("reseñita").value;

const phoneNumber = "543888318361";

const mensaje = `Reseña:%0A`+ reseñita;


const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensaje}`;

window.open(whatsappLink, "_blank");
})