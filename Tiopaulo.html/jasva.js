function openWhatsApp() {
    
    var phoneNumber = "SEUNUMERO";
    var message = encodeURIComponent("Olá, gostaria de mais informações.");

    var whatsappLink = `https://api.whatsapp.com/send?phone=${+5531991907925}&text=${message}`;
    window.open(whatsappLink, '_blank');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    alert('Formulário enviado! (Esta é apenas uma simulação. Não envia o formulário real)');
});
