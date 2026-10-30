# Especificação de Funcionalidades — Portfólio Mateus Rabetti

## 1. Estrutura de Navegação & Menu
- **Barra de Navegação Fixa (Glassmorphism):**
  - Logotipo de texto estilizado "Mateus Rabetti" com indicador de status sutil (ex.: "Disponível para novos desafios").
  - Links de âncora suaves: Início, Sobre Mim, Projetos, Contato.
  - Link direto para o perfil do GitHub com ícone SVG oficial e abertura segura (`target="_blank" rel="noopener noreferrer"`).
  - Menu responsivo com botão hambúrguer animado para dispositivos móveis, transição suave de abertura/fechamento, bloqueio de rolagem do body quando aberto e fechamento automático ao clicar em qualquer item.
  - Indicador de seção ativa via `IntersectionObserver` que atualiza o link correspondente conforme a rolagem.

## 2. Seção Hero (Apresentação Inicial)
- **Título Principal (`<h1>`):** "Mateus de Souza Silva Rabetti" com apresentação visual destacada "Mateus Rabetti".
- **Subtítulo / Proposta de Valor:** Foco em desenvolvimento de software com paixão pela construção de experiências digitais sólidas, interativas e bem detalhadas.
- **Chamadas para Ação (CTAs):**
  - Botão Primário: "Explorar Projetos" com rolagem suave até `#projetos`.
  - Botão Secundário: "Ver no GitHub" abrindo o perfil oficial.
- **Efeito Visual Dinâmico:** Grade de fundo sutil com ponto de luz dinâmico acompanhando o movimento do mouse de forma leve e performática (usando CSS Variables `--mouse-x` e `--mouse-y`), além de badges de status.

## 3. Seção Sobre Mim
- **Apresentação Pessoal:**
  - Texto focado no entusiasmo por tecnologia, desenvolvimento web e criação de soluções do zero.
  - Estrutura clara e pronta para leitura, sem informações artificiais ou biografia inventada.
  - Destaque para a filosofia de trabalho: "Simples na aparência, complexo nos detalhes e com o meu jeitinho".
- **Pílulas de Foco & Tecnologias Reais:**
  - HTML5 Semântico, CSS3 Moderno, JavaScript Vanilla, Three.js & WebGL (utilizado no Block World), Integração de Sistemas & Arquitetura Front-end.
- **Destaque Rápido:** Indicadores visuais dos 3 projetos desenvolvidos e foco em código limpo e independente de frameworks pesados.

## 4. Seção Projetos (Trabalhos Oficiais em Destaque)
Apresentação visual rica dos 3 projetos reais com imagens reais capturadas na pasta `Assents/projects/`:
- **Card 1: Block World (3D Voxel Survival)**
  - Imagem real: `Assents/projects/block-world/gameplay.png` (ou alternância com `preview.png`).
  - Tags de Tecnologia: `Three.js`, `WebGL`, `JavaScript Vanilla`, `Procedural Terrain`.
  - Descrição técnica detalhada e autêntica.
  - Botão "Acessar Projeto" -> `https://block-world-tau.vercel.app/`
  - Botão "Repositório GitHub" -> `https://github.com/mateusrabetti/Block-World`
  - Modal interativo para visualização ampliada das capturas reais da interface.

- **Card 2: Maria DB (Web Showcase)**
  - Imagem real: `Assents/projects/maria-db/preview.png`
  - Tags de Tecnologia: `HTML5`, `CSS3 Moderno`, `JavaScript`, `Design Tipográfico`.
  - Descrição objetiva baseada no produto real.
  - Botão "Acessar Projeto" -> `https://maria-db-rho.vercel.app/`
  - Botão "Repositório GitHub" -> `https://github.com/mateusrabetti/MariaDB`

- **Card 3: Fitness (Dashboard & App de Treinos)**
  - Imagem real: `Assents/projects/fitness/preview.png` (com suporte a visualização mobile `Assents/projects/fitness/mobile.png`).
  - Tags de Tecnologia: `UI/UX Mobile`, `JavaScript`, `Dark Mode`, `Health Metrics`.
  - Descrição focada no rastreamento de calorias, frequência cardíaca e rotinas de exercícios.
  - Botão "Acessar Projeto" -> `https://fitness-beta-seven.vercel.app/`
  - Botão "Repositório GitHub" -> `https://github.com/mateusrabetti/fitness`

## 5. Modal de Galeria / Visualização dos Projetos
- Ao clicar no botão de preview ou na imagem do projeto, um modal elegante abre exibindo a captura em alta resolução, detalhes adicionais e links diretos.
- Controle por teclado (`ESC` para fechar) e foco acessível.

## 6. Seção Contato
- Links reais e diretos:
  - GitHub: [https://github.com/mateusrabetti](https://github.com/mateusrabetti)
  - Botão de cópia rápida do link do perfil com feedback visual de confirmação ("Link copiado!").
- Formulário de contato visualmente integrado com validação nativa de campos no navegador (nome, e-mail e mensagem) e aviso explícito de que para recebimento em tempo real é necessária integração de serviço externo (como Formspree, Resend ou EmailJS).

## 7. Rodapé (Footer)
- Nome completo: Mateus de Souza Silva Rabetti.
- Declaração de tecnologias utilizadas: Desenvolvido com HTML5, CSS3 e JavaScript puro.
- Link direto para o repositório deste portfólio no GitHub.

## 8. Desempenho e Acessibilidade
- Marcação HTML5 semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Uso exclusivo de CSS e JS nativos.
- Suporte a `prefers-reduced-motion: reduce`.
- Atributos `alt` descritivos em todas as imagens.
- Foco visível e navegabilidade completa por teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`).
