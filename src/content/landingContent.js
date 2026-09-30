export const navigation = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projeto', href: '#projeto' },
];

export const hero = {
  title: 'Encontre o serviço que precisa. Entenda como resolver.',
  description:
    'Diga o que você precisa. O InformAju ajuda a encontrar informações sobre serviços locais e governamentais, entender os próximos passos e identificar as fontes das informações.',
};

export const problem = {
  title: 'Encontrar uma informação não deveria ser tão complicado.',
  paragraphs: [
    'Ao buscar informações sobre um serviço local ou governamental, uma necessidade simples pode trazer várias perguntas: onde procurar? Qual serviço atende ao que preciso? O que preciso fazer? Essa informação é confiável?',
    'Quando as respostas estão espalhadas ou são difíceis de compreender, descobrir o próximo passo também fica mais difícil.',
  ],
};

export const guide = {
  title: 'Encontrar. Compreender. Confiar.',
  intro:
    'Encontrar uma informação é apenas o começo. O InformAju busca tornar mais claro o caminho entre aquilo que você precisa e o próximo passo.',
  pillars: [
    {
      title: 'Encontrar',
      description: 'Ajudar a localizar informações e serviços relacionados à sua necessidade.',
    },
    {
      title: 'Compreender',
      description: 'Apresentar orientações de forma mais clara e organizada.',
    },
    {
      title: 'Confiar',
      description: 'Identificar as fontes para que você saiba de onde vêm as informações.',
    },
  ],
  result: 'Mais autonomia para você seguir adiante.',
};

export const howItWorks = {
  title: 'Do que você precisa ao próximo passo.',
  description:
    'Esta é a jornada planejada para o InformAju. O produto ainda está em desenvolvimento.',
  steps: [
    {
      title: 'Conte o que precisa',
      description: 'Descreva sua necessidade com suas próprias palavras.',
    },
    {
      title: 'Encontre caminhos relacionados',
      description: 'A proposta é relacionar a necessidade a serviços e informações disponíveis.',
    },
    {
      title: 'Entenda os próximos passos',
      description: 'Consulte orientações sobre documentos, requisitos e etapas em linguagem clara.',
    },
    {
      title: 'Confira a origem',
      description:
        'Identifique a fonte da informação e o canal correspondente para seguir adiante.',
    },
  ],
  note: 'No MVP planejado, a IA apoiará a interpretação da necessidade (F01) e a linguagem simples (F11). As informações deverão vir de conteúdos controlados e manter sua origem identificada.',
};

export const sources = {
  title: 'Informações com fontes identificadas.',
  description:
    'A proposta é mostrar de onde vem cada informação e oferecer acesso à fonte correspondente, inclusive ao canal oficial quando aplicável.',
  categories: [
    'Origem identificável',
    'Acesso à fonte correspondente',
    'Atualização indicada quando pertinente',
    'Orientação separada do conteúdo da fonte',
  ],
};

export const audience = {
  title: 'Pessoas 50+ em Sergipe, com foco inicial em Aracaju.',
  description:
    'O InformAju considera diferentes níveis de experiência e autonomia digital, priorizando clareza, legibilidade e autonomia no acesso às informações.',
};

export const about = {
  title: 'Informação + Aju.',
  description:
    'O nome une informação a Aju, de Aracaju. O projeto nasce para facilitar a busca, a compreensão e a verificação da origem de informações sobre serviços locais e governamentais, com foco em mais autonomia.',
  highlights: [
    {
      title: 'Projeto acadêmico',
      description:
        'Desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas da UNINASSAU Aracaju.',
    },
    {
      title: 'Tecnologia como apoio',
      description:
        'A IA está planejada para ajudar na interpretação e na clareza do texto; não será a autoridade sobre os serviços.',
    },
  ],
};

export const governance = {
  title: 'Um projeto com responsabilidade e decisões compartilhadas.',
  paragraphs: [
    'O InformAju é desenvolvido por uma equipe de estudantes de Análise e Desenvolvimento de Sistemas da UNINASSAU Aracaju.',
    'A equipe trabalha de forma colaborativa na construção do produto, utilizando Lean Inception para definição da visão e Scrum para organização do desenvolvimento.',
    'Decisões relevantes são discutidas coletivamente e registradas, enquanto alterações de código passam por revisão antes de serem integradas ao projeto.',
  ],
  team: [
    {
      name: 'Gabriel David Vacirca',
      role: 'Product Owner · Scrum Master · Líder · Desenvolvedor',
    },
    { name: 'Yuri Cruz Brandão', role: 'Desenvolvedor' },
    { name: 'Felipe Gabriel dos Santos Vasconcelos', role: 'Desenvolvedor' },
    { name: 'Jorge Felipe Trindade Mendonça', role: 'Desenvolvedor' },
  ],
  policyTitle: 'Governança do projeto',
  policy:
    'O InformAju adota uma governança baseada em decisões colaborativas, organização ágil e revisão de código. A visão do produto é construída com práticas de Lean Inception e o desenvolvimento é organizado com Scrum. As decisões relevantes são discutidas pela equipe e submetidas à votação; em caso de empate, o Product Owner toma a decisão final. O código segue GitFlow, Conventional Commits e revisão por Pull Requests antes da integração.',
  policyUrl: `${import.meta.env.BASE_URL}docs/politica-governanca-informaju-v1.pdf`,
};

export const finalCta = {
  title: 'Um caminho mais claro até a informação que você precisa.',
  description:
    'Conheça como o InformAju pretende ajudar pessoas a encontrar, compreender e verificar informações sobre serviços locais e governamentais.',
};
