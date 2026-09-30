# Decisões técnicas da V2

## React, Vite e CSS Modules

Foram mantidos React, Vite e CSS Modules já presentes. CSS Modules isolam os estilos da página e dos componentes; tokens globais concentram a paleta oficial e os dois temas. Migrar para Tailwind aumentaria configuração e volume de mudanças sem benefício necessário para esta landing estática. Nenhuma dependência foi adicionada.

Vite conserva `base: process.env.VITE_BASE || '/'`. O workflow de GitHub Pages define `VITE_BASE=/informaju-landing-page/`, compila a pasta `dist/` e só é acionado por push na `main`. A branch V2 não dispara publicação automática. O favicon e o PDF em `public/` continuam acessíveis pelo subcaminho.

## Aparência e responsividade

O modo claro é padrão para primeira visita. A preferência escolhida é salva localmente; não existe sincronização com conta. O modo escuro troca variáveis de cor e usa o SVG branco oficial no cabeçalho. A arte é criada com CSS e o símbolo SVG oficial, sem gerar uma tela fictícia de produto.

O layout usa grades fluidas e `clamp()`. As grades passam de 4 para 2 e 1 colunas conforme a largura; as duas colunas editoriais viram uma em mobile. O menu móvel entra até 54rem, antes que a navegação fique espremida. Foram conferidas larguras de 1440, 1024, 800, 390, 375 e 320 pixels.

## Acessibilidade

Há link “Pular para o conteúdo”, um `h1`, títulos de seção, âncoras reais, controles com nomes acessíveis e foco visível. O menu usa `aria-expanded`, fecha com Escape e retorna foco ao botão. O alternador anuncia a próxima ação (“Ativar modo escuro/claro”). Alvos principais têm ao menos 44px de altura. A rolagem suave e a pequena transição do botão são desativadas sob `prefers-reduced-motion`. As artes são decorativas e ocultas de leitores de tela; o logo link tem nome próprio.

## Conteúdo e limites

Os PDFs de planejamento IA e roadmap foram usados para conferir F01 e F11 como capacidades planejadas. A LP conserva a arquitetura de um site estático de apresentação. Não há API, backend, busca, login, depoimentos ou integração com órgãos. O PDF de governança público foi preservado.
