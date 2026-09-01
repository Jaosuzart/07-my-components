(() => {
  'use strict';

  const form = document.querySelector('#contactForm');
  const status = document.querySelector('#formStatus');

  document.querySelectorAll('.js-cta').forEach((button) => {
    button.addEventListener('click', () => {
      const plan = button.dataset.plan || 'plano';
      const message = document.querySelector('#message');
      if (message) {
        message.value = `Olá! Tenho interesse no ${plan}.`;
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('#name')?.focus();
      }
    });
  });

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    form.classList.add('was-validated');

    if (!form.checkValidity()) return;

    status.textContent = 'Enviando...';
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Não foi possível enviar.');

      status.textContent = 'Mensagem enviada com sucesso.';
      form.reset();
      form.classList.remove('was-validated');
    } catch (error) {
      status.textContent = error.message || 'Erro ao enviar a mensagem.';
    }
  });
})();