# Entendendo e editando a Landing Page V2

## Como a página aparece

`index.html` contém a `<div id="root">`. `src/main.jsx` carrega a fonte e os estilos, cria a raiz do React e renderiza `App`. `App` renderiza `LandingPage`. O Vite serve esses arquivos durante o desenvolvimento e, em `npm run build`, transforma o código em arquivos estáticos dentro de `dist/`.

## Conceitos React usados

- **Componentes:** funções que devolvem JSX, como `Hero`, `Header` e `Footer`. Cada função representa uma parte visual e semântica.
- **Props:** dados passados a um componente. `Header` recebe o tema atual e a função para alterná-lo; `Container` recebe `children` e uma classe opcional.
- **Renderização de listas:** `.map()` cria cartões de pilares, etapas, equipe e links a partir dos dados. Cada item recebe uma `key` estável.
- **Estado:** `useState` guarda o tema escolhido. Ao clicar no botão, React redesenha o texto e o SVG apropriado.
- **Efeito:** `useEffect` aplica `data-theme` ao documento e salva a preferência no navegador quando o estado muda.

## Alterar um texto

Abra `src/content/landingContent.js`, encontre o objeto da seção e edite a string. A seção consome esses dados em `src/pages/LandingPage/LandingPage.jsx`. Preserve as afirmações de “proposta” e “planejado” enquanto o MVP não estiver disponível.

## Alterar a aparência

As cores base e de tema ficam em `src/styles/tokens.css`. Ajustes de grade, espaçamento, cartões e arte CSS ficam em `src/pages/LandingPage/LandingPage.module.css`. Cabeçalho e rodapé têm seus próprios CSS Modules. Não edite os traçados dos SVGs em `src/assets/brand/`: eles são o master operacional aprovado; selecione a variante já existente adequada ao fundo.

## Rodar e conferir

```powershell
npm ci
npm run dev
npm run build
npm run format:check
```

Confira a página em desktop e celular, nos dois temas, incluindo menu, âncoras, PDF e navegação por teclado. `docs/VALIDACAO_EVIDENCIAS.md` registra as verificações já feitas. A V2 já foi integrada à `main` e publicada no GitHub Pages; mudanças futuras na `main` acionam o workflow de publicação.
