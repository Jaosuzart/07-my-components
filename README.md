# My Components — Projeto Serliv

Este é um projeto educacional inspirado no curso **Web Fundamentos**. Ele consiste em uma **biblioteca visual de componentes reutilizáveis**, desenvolvida com uma arquitetura organizada, acessível, responsiva e pronta para evolução.
Imagem do projetyo:
![alt text](image.png)
## 🚀 Sobre o Projeto

O objetivo deste projeto é demonstrar a construção de componentes de interface de usuário (UI) comuns de forma limpa e sem excesso de complexidade. Não são utilizados frameworks JavaScript pesados no frontend; todo o comportamento é feito com **JavaScript Vanilla** e a estilização baseada no **Bootstrap 5** complementada com CSS customizado. O projeto também inclui um servidor HTTP simples em Node.js com Express para lidar com rotas de API e servir arquivos estáticos.

## 🛠 Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica da página.
*   **CSS3:** Estilização visual (complementar).
*   **JavaScript (Vanilla):** Interatividade do frontend (validação de formulários, manipulação do DOM e requisições assíncronas).
*   **Bootstrap 5:** Framework CSS para componentes responsivos e sistema de grid.
*   **Node.js & Express:** Servidor backend simples para fornecer arquivos estáticos e gerenciar endpoints de API (como o de contato).

## ✨ Funcionalidades

*   **Componentes Reutilizáveis:** Estruturas modulares como *Buttons* (ações claras), *Forms* (entrada de dados e validação) e *Cards* (conteúdo modular).
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (mobile, tablet e desktop) utilizando o sistema de grid do Bootstrap.
*   **Formulário de Contato Dinâmico:** Um formulário de contato integrado com validação em tempo real no frontend e backend. As interações do usuário rolam a página suavemente até a seção de contato e preenchem automaticamente mensagens baseadas nos interesses dos componentes (CTAs).
*   **Servidor Integrado:** Rotas em Express (`/api/contato` para processamento do formulário e `/health` para verificação de status do servidor).

## 💻 Como Rodar o Projeto

1.  Certifique-se de ter o **Node.js** instalado na sua máquina.
2.  Clone ou baixe os arquivos deste projeto.
3.  Navegue até o diretório do projeto via terminal.
4.  Instale as dependências executando:
    ```bash
    npm install
    ```
5.  Inicie o servidor:
    ```bash
    npm start
    ```
    *(Para desenvolvimento contínuo com watch no backend, você pode usar `npm run dev`)*
6.  Abra seu navegador e acesse: `http://localhost:3000`

## 📂 Estrutura de Arquivos

*   `index.html`: Arquivo principal com a estrutura da interface e conteúdo dos componentes.
*   `styles.css`: Arquivo com estilos customizados, sobressaindo ou adicionando aos estilos base do Bootstrap.
*   `script.js`: Arquivo de JavaScript frontend que manipula as interações do usuário e o envio do formulário de contato.
*   `server.js`: Arquivo do servidor Node.js utilizando Express.
*   `package.json`: Configurações do projeto Node.js e dependências.

---
*Projeto educacional — Curso Web Fundamentos.*
