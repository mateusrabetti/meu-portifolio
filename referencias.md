# Análise das Referências Visuais

## 1. Referência 1 — Mobbin MCP (https://mobbin.com/mcp)
Acessada e analisada diretamente no ambiente.

### Princípios Extraídos:
1. **Composição e Espaçamento Generoso:**
   - Uso cirúrgico de espaçamentos verticais e horizontais em grade fluida.
   - O conteúdo "respira", eliminando poluição visual e garantindo foco imediato nas mensagens-chave.
2. **Hierarquia Tipográfica Marcante:**
   - Títulos imponentes com tracking negativo sutil (`tracking-[-0.6px]`) que transmitem sofisticação editorial.
   - Textos secundários em tons atenuados com alto nível de legibilidade e pesos balanceados.
3. **Pílulas, Badges e Botões:**
   - Botões arredondados em formato pill (`rounded-full`) com microinterações suaves de hover.
   - Badges discretos para status, categorias e metadados contextuais.
4. **Molduras e Tratamento de Mídia:**
   - Apresentação de capturas reais em cards com bordas sutis e cantos refinados (`rounded-24`), sem sombras pesadas ou artificiais.

---

## 2. Referência 2 — Animações e Efeitos (https://lightskyblue-pigeon-301177.hostingersite.com/)
Acessada e analisada diretamente no ambiente.

### Efeitos e Comportamentos Observados:
1. **Entrada Progressiva com Transform e Opacity:**
   - Elementos iniciam com estados atenuados (`opacity: 0; transform: translateY(30px)`) e entram de forma escalonada através de curvas cúbicas naturais (`cubic-bezier(0.19, 1, 0.22, 1)` ou similares).
   - Movimento sem travamentos, sem recálculos contínuos de layout (`reflow`), utilizando aceleração por hardware da GPU.
2. **Navbar com Efeito Glassmorphism & Transição de Rolagem:**
   - Barra de navegação fixa com fundo translúcido suave (`backdrop-filter: blur(16px)`), borda sutil translúcida e ativação visual elegante durante a rolagem.
3. **Reação Interativa ao Movimento do Mouse:**
   - Efeito de elevação suave em cards (`translateY(-4px)` a `translateY(-6px)`) com iluminação periférica sutil na borda (`border-color` iluminado) e transições coordenadas.
   - Botões com feedback tátil e visual ao passar o cursor e ao clicar.
4. **Respeito à Acessibilidade:**
   - Implementação estrita de `prefers-reduced-motion: reduce` para usuários que preferem não visualizar animações contínuas ou de translação.

---

## 3. Diretriz de Integração para o Portfólio de Mateus Rabetti
- Criar uma estética autoral que una o rigor tipográfico e minimalista do Mobbin com o dinamismo suave e interações refinadas da referência de animações.
- Manter o tema escuro elegante, moderno e confortável para a leitura, com toques de cor inspirados nos próprios projetos reais (verde e azul de Block World, azul fluido de MariaDB, acento de destaque do Fitness).
