# Portfólio Pessoal — Mateus de Souza Silva Rabetti

Portfólio pessoal e profissional desenvolvido do zero com foco em elegância visual, desempenho nativo e animações fluidas.

> "Simples na aparência, complexo nos detalhes e com o meu jeitinho." &mdash; Mateus Rabetti

---

## 🌟 Identidade & Projetos

- **Autor:** Mateus de Souza Silva Rabetti
- **GitHub Oficial:** [https://github.com/mateusrabetti](https://github.com/mateusrabetti)

### Projetos Publicados em Destaque:
1. **Block World**
   - **Descrição:** Jogo 3D voxel de sobrevivência construído com Three.js e JavaScript puro. Conta com geração procedural de terreno, biomas, iluminação dinâmica, inventário com crafting 2x2 e 3x3 na bancada, fundição em fornalha, ciclo dia/noite e suporte para conexões em rede local (LAN).
   - **Aplicação Publicada:** [https://block-world-tau.vercel.app/](https://block-world-tau.vercel.app/)
   - **Repositório GitHub:** [https://github.com/mateusrabetti/Block-World](https://github.com/mateusrabetti/Block-World)

2. **Maria DB**
   - **Descrição:** Interface web moderna e de alto impacto visual para apresentação institucional do MariaDB. Destaque para composição tipográfica apurada (Plus Jakarta Sans), contrastes equilibrados e comunicação orientada a produto de nível corporativo e código aberto.
   - **Aplicação Publicada:** [https://maria-db-rho.vercel.app/](https://maria-db-rho.vercel.app/)
   - **Repositório GitHub:** [https://github.com/mateusrabetti/MariaDB](https://github.com/mateusrabetti/MariaDB)

3. **Fitness**
   - **Descrição:** Dashboard interativo de monitoramento de saúde e treinos corporais. Apresenta métricas de calorias queimadas, frequência cardíaca em tempo real, tempo de treino, anéis de progresso, navegação por categorias de exercícios (Cardio, Weight, Muscle) e catálogo de rotinas populares.
   - **Aplicação Publicada:** [https://fitness-beta-seven.vercel.app/](https://fitness-beta-seven.vercel.app/)
   - **Repositório GitHub:** [https://github.com/mateusrabetti/fitness](https://github.com/mateusrabetti/fitness)

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído **exclusivamente com tecnologias web nativas**:
- **HTML5 Semântico:** Estruturação acessível com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` e atributos ARIA.
- **CSS3 Puro (Vanilla CSS):** Design System customizado através de variáveis CSS (`:root`), Grid, Flexbox, transições aceleradas por GPU (`transform` e `opacity`) e suporte nativo a `prefers-reduced-motion`.
- **JavaScript Puro (Vanilla JS ES6+):** Controle de interatividade, menu responsivo, observadores via `IntersectionObserver` para revelação gradual ao rolar a página, alternância de telas de projetos e spotlight interativo no cursor do mouse.
- **Zero Frameworks:** Livre de React, Vue, Next.js, Tailwind ou dependências externas pesadas.

---

## 📂 Estrutura de Pastas e Arquivos

```
Meu-Portif-lio/
│
├── index.html               # Página principal do portfólio
├── README.md                # Documentação técnica e instruções
├── AGENTS.md                # Diretrizes para agentes de IA e desenvolvedores
├── identidade.md            # Documentação de identidade pessoal e projetos
├── referencias.md           # Análise técnica das referências visuais
├── funcionalidades.md       # Especificação detalhada das funcionalidades
│
├── css/
│   └── style.css            # Folha de estilos e design system oficial
│
├── js/
│   └── script.js            # Lógica interativa e animações
│
└── Assents/                 # Pasta oficial de recursos visuais
    ├── projects/
    │   ├── block-world/
    │   │   ├── preview.png  # Captura real do menu e controles
    │   │   ├── gameplay.png # Captura real 3D in-game em Three.js
    │   │   └── mobile.png   # Captura da visualização mobile
    │   ├── maria-db/
    │   │   ├── preview.png  # Captura real do hero desktop
    │   │   ├── full.png     # Captura da página completa
    │   │   └── mobile.png   # Captura da visualização mobile
    │   └── fitness/
    │       ├── preview.png  # Captura real do dashboard desktop
    │       ├── full.png     # Captura geral do dashboard
    │       └── mobile.png   # Captura real da interface de app mobile
    ├── icons/               # Ícones SVG limpos e padronizados
    │   ├── github.svg
    │   ├── external-link.svg
    │   ├── code.svg
    │   ├── arrow-down.svg
    │   ├── copy.svg
    │   └── check.svg
    └── images/              # Recursos visuais complementares
```

---

## 🚀 Como Executar Localmente

Como o projeto é 100% estático (HTML, CSS e JS nativos), você pode executá-lo de qualquer uma das seguintes formas:

### Opção 1: Abrir diretamente no navegador
Dê um duplo clique no arquivo `index.html` ou abra com o seu navegador favorito (Chrome, Edge, Firefox, Safari).

### Opção 2: Usar um servidor local com Node.js / npx
Na raiz do projeto, execute no terminal:
```bash
npx serve .
# ou com python:
python -m http.server 3000
```
Em seguida, acesse no navegador: `http://localhost:3000`

---

## 🌐 Publicação na Vercel

O projeto está pronto para publicação imediata na [Vercel](https://vercel.com):
1. Conecte o repositório GitHub `mateusrabetti/Meu-Portif-lio` à Vercel.
2. Como se trata de um site estático na raiz, nenhuma etapa de compilação (Build Command) é necessária.
3. Clique em **Deploy** e o site estará no ar instantaneamente com HTTPS e CDN global.