# Arquitetura e componentes da Landing Page V2

```text
index.html                         metadados, favicon e ponto de montagem
src/main.jsx                       fonte, estilos globais e montagem React
src/app/App.jsx                    chama a Landing Page
src/pages/LandingPage/
  LandingPage.jsx                  seções, conteúdo e estado do tema
  LandingPage.module.css           layout, arte CSS e media queries
src/components/
  Header/                           navegação, menu móvel e botão de tema
  Footer/                           links e identificação acadêmica
  Logo/                             variante oficial do SVG conforme fundo
  Container/                        largura e margens compartilhadas
src/content/landingContent.js      textos institucionais e listas
src/styles/tokens.css              paleta e variáveis dos dois temas
src/styles/global.css              base, foco e movimento reduzido
src/assets/brand/                  SVGs oficiais 1B.2
public/docs/                       PDF público de governança
docs/                              decisões e evidências selecionadas
```

`LandingPage.jsx` define pequenos componentes para cada seção: Hero, Problem, Guide, HowItWorks, Sources, Audience, About, Governance e FinalCTA. Todos devolvem elementos semânticos (`section`, `h2`, listas e artigos). `SectionHeading` padroniza rótulo, título e introdução; `Container` limita a largura. O conteúdo factual é importado de `landingContent.js`; apenas os quatro princípios editoriais da seção de público estão próximos da apresentação, pois são exclusivos da V2.

O estado `theme` usa `useState`. O valor inicial é claro, a menos que a pessoa já tenha escolhido escuro no mesmo navegador. `useEffect` escreve `data-theme` no elemento `<html>` e salva a escolha em `localStorage`. `Header` recebe `theme` e `onToggleTheme` por props. Os tokens em `tokens.css` mudam com `:root[data-theme='dark']`; os SVGs da marca usam variantes oficiais por contraste.

O React não faz chamadas a API nem guarda dados de visitantes. Links de seção são âncoras locais. O PDF vem da pasta `public/`; a URL usa `import.meta.env.BASE_URL` para funcionar tanto em `/` quanto no subcaminho do GitHub Pages.
