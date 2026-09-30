# InformAju — Landing Page V2

Landing page de apresentação do **InformAju — O Guia Confiável**, projeto acadêmico de Análise e Desenvolvimento de Sistemas da UNINASSAU Aracaju. O produto está **em desenvolvimento**. A página descreve a proposta e a jornada planejada; não oferece busca funcional.

## Executar

Requer Node.js `^20.19.0 || >=22.12.0` e npm.

```powershell
npm ci
npm run dev
```

Abra o endereço local exibido pelo Vite. Para conferir a versão de produção:

```powershell
npm run build
npm run preview
```

`npm run format:check` verifica a formatação; `npm run format` aplica Prettier.

## Estrutura e edição

- `src/content/landingContent.js`: textos institucionais, equipe, pilares e etapas.
- `src/pages/LandingPage/LandingPage.jsx`: seções semânticas e alternância de tema.
- `src/pages/LandingPage/LandingPage.module.css`: layout da V2 e media queries.
- `src/components/Header/`, `Footer/`, `Logo/`, `Container/`: peças compartilhadas.
- `src/styles/tokens.css`: cores dos modos claro e escuro; `global.css`: base global.
- `src/assets/brand/`: SVGs oficiais 1B.2, preservados sem alterações.
- `public/docs/politica-governanca-informaju-v1.pdf`: documento público vinculado na página.
- `docs/references/proto-pie-v2/`: nove imagens usadas somente para estudo de composição, nunca renderizadas no site.
- `docs/screenshots/2026-09-30-landing-v2/`: capturas reais do navegador nas duas aparências.

O modo claro é o padrão para novos visitantes. O botão no cabeçalho alterna o tema e salva a escolha no navegador. A página adapta colunas, cartões e navegação a telas menores.

## Publicação

Repositório: [GabrielVacirca/informaju-landing-page](https://github.com/GabrielVacirca/informaju-landing-page). Site atual: [GitHub Pages](https://gabrielvacirca.github.io/informaju-landing-page/). A V2 está na branch `feature/landing-rebranding-v2` para revisão; o site público permanece na versão da `main` até integração aprovada.

O workflow `.github/workflows/deploy-pages.yml` publica a pasta `dist/` após push na `main`. Para validar localmente o mesmo subcaminho do Pages:

```powershell
$env:VITE_BASE = '/informaju-landing-page/'
npm run build
npm run preview
Remove-Item Env:VITE_BASE
```

O PDF de governança em `public/` integra o site público e contém dados acadêmicos no documento original. Sua publicação integral foi autorizada pelo responsável pelo projeto.

## Documentação da V2

- `docs/REBRANDING_LP_V2.md`: correspondência das referências visuais e limites de conteúdo.
- `docs/ARQUITETURA_E_COMPONENTES.md`: organização do código e fluxo dos dados.
- `docs/DECISOES_TECNICAS.md`: escolhas de estilo, responsividade, temas e deploy.
- `docs/APRENDIZADO_IMPLEMENTACAO.md`: roteiro para entender e editar React e Vite neste projeto.
- `docs/VALIDACAO_EVIDENCIAS.md`: verificações e capturas reais.

Por preferência anterior do responsável, a pasta `docs/` continua ignorada de forma geral; os cinco documentos da V2, as nove referências e as capturas de validação são adicionados explicitamente ao Git. Os materiais acadêmicos antigos permanecem locais.
