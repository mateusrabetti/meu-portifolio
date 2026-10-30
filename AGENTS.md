# AGENTS.md — Diretrizes para Agentes de Desenvolvimento

## 1. Contexto do Projeto
Este projeto é o portfólio pessoal oficial de **Mateus de Souza Silva Rabetti**.
Ele foi desenvolvido do zero seguindo um padrão visual sofisticado, contemporâneo e altamente detalhado, com foco em animações fluidas, design refinado e uso estrito de tecnologias nativas.

## 2. Regras Rígidas de Tecnologia
1. **Apenas Tecnologias Nativas:**
   - HTML5 Semântico
   - CSS3 Puro (Vanilla CSS)
   - JavaScript Puro (Vanilla JS)
2. **Proibições:**
   - Proibido o uso de frameworks (React, Vue, Angular, Svelte, Next.js, etc.).
   - Proibido o uso de bibliotecas de CSS (Tailwind, Bootstrap, Bulma, etc.).
   - Proibido o uso de bibliotecas pesadas de animação externas sem prévia autorização.
3. **Estrutura de Pastas:**
   - A pasta de imagens DEVE se chamar exatamente `Assents/` (não renomeie para Assets).
   - O projeto deve rodar localmente abrindo o `index.html` ou através de qualquer servidor HTTP estático simples.
   - Totalmente compatível com publicação na Vercel (serviço estático).

## 3. Diretrizes de Conteúdo
1. **Projetos Oficiais:**
   - Block World: `https://block-world-tau.vercel.app/` | Repo: `https://github.com/mateusrabetti/Block-World`
   - Maria DB: `https://maria-db-rho.vercel.app/` | Repo: `https://github.com/mateusrabetti/MariaDB`
   - Fitness: `https://fitness-beta-seven.vercel.app/` | Repo: `https://github.com/mateusrabetti/fitness`
2. **Não Inventar Informações:**
   - Nunca inventar experiências profissionais fictícias, diplomas, certificados, empresas ou idade.
   - As imagens dos projetos na pasta `Assents/projects/` são capturas reais das aplicações publicadas. Nunca substitua por imagens falsas geradas por IA ou ilustrações genéricas.

## 4. Padrões de Código e Performance
- CSS estruturado com Custom Properties (variáveis CSS) para cores, tipografia, espaçamentos e transições.
- Aceleração por GPU em animações (`transform` e `opacity`).
- Respeito à preferência do sistema `prefers-reduced-motion`.
- Imagens com caminhos relativos consistentes e textos alternativos acessíveis.
