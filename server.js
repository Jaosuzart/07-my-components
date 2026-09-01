const express = require('express');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.static(__dirname));

app.post('/api/contato', (req, res) => {
  const { name = '', email = '', message = '' } = req.body ?? {};
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.trim().length < 2) {
    return res.status(400).json({ message: 'Nome inválido.' });
  }
  if (!validEmail.test(email.trim())) {
    return res.status(400).json({ message: 'E-mail inválido.' });
  }
  if (message.trim().length < 10) {
    return res.status(400).json({ message: 'Mensagem muito curta.' });
  }

  // Ponto de integração: SMTP/Umbler, banco de dados ou serviço de tickets.
  console.log(`[contato] ${new Date().toISOString()} - ${email.trim()}`);
  return res.status(200).json({ message: 'Contato recebido.' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'serliv-project' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
