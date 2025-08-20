// Configuração e funcionalidade do EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS com seu Public Key
    emailjs.init("seu_user_id_publico"); // Substitua pelo seu Public Key do EmailJS
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Enviar email usando EmailJS
            emailjs.send('service_automecanica', 'template_contato', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                });
        });
    }
});
