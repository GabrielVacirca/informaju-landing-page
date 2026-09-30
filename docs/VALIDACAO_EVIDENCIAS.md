# Validação e evidências — Landing Page V2

Data: 30/09/2026. A V2 foi desenvolvida na branch `feature/landing-rebranding-v2`, integrada à `main` pelo [Pull Request #1](https://github.com/GabrielVacirca/informaju-landing-page/pull/1) e publicada pelo [workflow #3](https://github.com/GabrielVacirca/informaju-landing-page/actions/runs/36741621587), concluído com sucesso.

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `npm run format:check` | Aprovado: arquivos compatíveis com Prettier. |
| `npm run build` com `VITE_BASE=/informaju-landing-page/` | Aprovado: Vite gerou `dist/` sem erro. |
| Preview de produção no subcaminho do GitHub Pages | Página 200; PDF `docs/politica-governanca-informaju-v1.pdf` 200, `application/pdf`, 249.256 bytes. |
| Chromium em 1440, 1024, 390 e 375px, temas claro e escuro | 8 combinações sem erro JavaScript e sem rolagem horizontal; um `h1` em cada. |
| Larguras extras 800 e 320px no preview | Sem rolagem horizontal; menu móvel visível. |
| Menu móvel | Abre e fecha com Escape em 390 e 375px. |
| Tema | Claro na primeira visita; escolha escura persiste após recarregar. |
| CTA | “Ver como funciona” navega para `#como-funciona`. |
| PDF público | Link do projeto abre o documento existente em nova aba com `noopener noreferrer`. |
| Marca | 16 SVGs do repositório com hash igual ao master externo 1B.2; nenhum foi editado. |

## Capturas reais

As capturas da V2 são `fullPage` feitas pelo Chromium, depois da página rodar localmente. Duas capturas reais da V1, preservadas da validação anterior, foram copiadas para permitir comparação antes/depois. Estão em `docs/screenshots/2026-09-30-landing-v2/`:

| Largura | Claro | Escuro |
| --- | --- | --- |
| 1440px | `informaju-v2-1440-light.png` | `informaju-v2-1440-dark.png` |
| 1024px | `informaju-v2-1024-light.png` | `informaju-v2-1024-dark.png` |
| 390px | `informaju-v2-390-light.png` | `informaju-v2-390-dark.png` |
| 375px | `informaju-v2-375-light.png` | `informaju-v2-375-dark.png` |

Antes da V2: `informaju-v1-1440-before.png` e `informaju-v1-390-before.png` (a V1 só tinha modo claro).

O código de captura usado nesta rodada fica no workspace local `work/roteiro-preview/validar-v2.cjs`, fora do repositório publicado. As imagens de ProtoPie em `docs/references/proto-pie-v2/` são apenas referências fornecidas pelo responsável, não capturas da implementação.

## Limites

- O site publicado em `https://gabrielvacirca.github.io/informaju-landing-page/` foi conferido após a integração: título, selo de desenvolvimento, alternador de tema, seções e link do PDF estão presentes.
- A LP descreve o MVP planejado, sem busca ou API funcional. Isso está explícito na interface.
- O teste automatizado cobre navegação, reflow e ausência de erros nas larguras descritas. A validação com pessoas do público prioritário pertence à evolução do produto, e não foi declarada como concluída.
