# InformAju

Landing page de apresentação do InformAju em React, Vite, JavaScript e CSS Modules. A página segue a prancha em `docs/handoff/referencias/landing-page/LP-APROVADA-REFERENCIA-PRINCIPAL.png`, usando os SVGs de identidade incluídos no handoff.

## Requisitos e execução

- Node.js `^20.19.0 || >=22.12.0` (a implementação foi verificada com Node 24.14.1)
- npm (verificado com 11.15.0)

No terminal aberto nesta pasta:

```powershell
npm ci
npm run dev
```

Abra o endereço local mostrado pelo Vite. Outros comandos:

| Comando                | Resultado                                 |
| ---------------------- | ----------------------------------------- |
| `npm run build`        | Gera o site em `dist/`                    |
| `npm run preview`      | Mostra localmente o build gerado          |
| `npm run format`       | Formata os arquivos com Prettier          |
| `npm run format:check` | Confere a formatação sem alterar arquivos |

## Onde editar

- `src/content/landingContent.js`: textos, listas e categorias de fontes.
- `src/components/`: cada seção em sua pasta, com JSX e CSS Module.
- `src/styles/tokens.css`: cores e valores compartilhados; `global.css`: regras globais.
- `src/assets/brand/`: SVGs da marca; `public/favicon.svg`: ícone do navegador.
- `docs/handoff/`: referência visual, especificações e procedência originais.

Os documentos de arquitetura, aprendizado e validação ficam na pasta local `docs/`, excluída do Git, e em uma cópia organizada em `Projeto MVP 4 Período/Docs/Landing Page InformAju/Documentacao`. O código em `src/` é a versão atual; o roteiro de gravação foi preservado apenas como material histórico.

## Estado e publicação

A página é estática: os campos desenhados nas ilustrações não são uma pesquisa funcional. A seção de Projeto usa os nomes e textos aprovados, e o PDF da Política de Governança v1.0 está em `public/docs/politica-governanca-informaju-v1.pdf`. As linhas de percurso são SVGs decorativos em `src/assets/decorative/`; não alteram os SVGs oficiais da marca em `src/assets/brand/`.

O workflow em `.github/workflows/deploy-pages.yml` compila e publica a pasta `dist/` no GitHub Pages quando a branch `main` recebe um push. Ele usa `VITE_BASE=/informaju-landing-page/`, pois a URL prevista para este repositório é `https://<usuario>.github.io/informaju-landing-page/`. O mesmo prefixo é usado no link do PDF em `public/docs/`.

Depois de criar o repositório público `informaju-landing-page` no GitHub e enviar a branch `main`, selecione **Settings → Pages → Build and deployment → Source → GitHub Actions**. Acompanhe o resultado na aba **Actions**; o endereço publicado aparecerá em **Settings → Pages**. O workflow também pode ser executado manualmente pela aba **Actions**.

Para testar o build localmente com o mesmo subcaminho, no PowerShell:

```powershell
$env:VITE_BASE = '/informaju-landing-page/'
npm run build
npm run preview
Remove-Item Env:VITE_BASE
```

O GitHub Pages publica os arquivos de `public/` na internet, inclusive o PDF da Política de Governança. Revise esse documento antes de ativar o site, caso não queira divulgar as matrículas nele contidas.
