import {
  Banknote,
  Brain,
  BrainCircuit,
  Briefcase,
  ChartColumn,
  Clock,
  Database,
  Earth,
  FileChartColumnIncreasing,
  FileText,
  FingerprintPattern,
  Layers,
  Lightbulb,
  type LucideIcon,
  Package,
  PiggyBank,
  Receipt,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';

export interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLinkItem[];
}

export const EXTERNAL_URLS = {
  login: 'https://app.jaris.com.br/login',
  careers: 'https://jaris.com.br/jaris',
  candidateLogin: 'https://jaris.com.br/candidato/login',
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'O Sistema', href: '#sistema' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Como Funciona', href: '#pdca' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Vagas', href: EXTERNAL_URLS.careers, external: true },
  { label: 'Contato', href: '#contato' },
];

export const HERO_CONTENT = {
  badge: '100% INTEGRADO COM IA',
  titleStart: 'JARIS — Gestão Empresarial',
  titleHighlight: 'Inteligente',
  subtitle:
    'Centralize operações, otimize decisões e escale resultados com uma plataforma modular movida a Inteligência Artificial nativa em cada processo.',
  primaryCta: 'SOLICITAR DEMONSTRAÇÃO',
  secondaryCta: 'Conhecer os Módulos →',
  footnote:
    'Desenvolvido para gestores que não aceitam mais planilhas isoladas, retrabalho e decisão baseada em achismo.',
  mockup: {
    urlLabel: 'jaris.app/dashboard',
    title: 'Visão Executiva',
    liveBadge: 'AO VIVO',
    kpis: [
      { value: 'R$ 2.4M', label: 'Receita' },
      { value: '+18%', label: 'Eficiência' },
      { value: '312', label: 'Colaboradores' },
    ],
    bars: [42, 68, 54, 82, 71, 94],
  },
} as const;

export interface ChallengeItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

export const CHALLENGE_CONTENT = {
  eyebrow: 'O cenário atual',
  title: 'Sua empresa ainda opera assim?',
  subtitle:
    'A maior parte da dor operacional vem de três falhas estruturais — e o JARIS foi desenhado para resolver as três.',
  challengeHeading: 'O desafio',
  solutionHeading: 'A solução JARIS',
  conclusion: 'Transformando dados brutos em agilidade e inteligência estratégica.',
  challenges: [
    {
      Icon: Database,
      title: 'Fragmentação',
      desc: 'Dados espalhados em planilhas e sistemas que não se conversam.',
    },
    {
      Icon: Wrench,
      title: 'Processos Manuais',
      desc: 'Gargalos operacionais e alto risco de erro humano.',
    },
    {
      Icon: TrendingDown,
      title: 'Baixa Eficiência',
      desc: 'Dificuldade em escalar o negócio com a estrutura atual.',
    },
  ] satisfies ChallengeItem[],
  solutions: [
    {
      Icon: Sparkles,
      title: '100% Integrado com IA',
      desc: 'Inteligência Artificial nativa em todos os módulos e processos.',
    },
    {
      Icon: Layers,
      title: 'Plataforma Modular',
      desc: 'Ecossistema completo que se adapta ao tamanho da sua empresa.',
    },
    {
      Icon: Zap,
      title: 'Automação Inteligente',
      desc: 'Fluxos movidos a IA para liberar o potencial da sua equipe.',
    },
  ] satisfies ChallengeItem[],
} as const;

export type ModuleStatus = 'Em Construção' | 'Roadmap' | 'Disponível' | 'Core';

export interface ModuleItem {
  Icon: LucideIcon;
  name: string;
  status: ModuleStatus;
  features: string[];
}

export const MODULES_CONTENT = {
  eyebrow: 'Ecossistema modular',
  titleStart: 'Um ecossistema. Seis módulos.',
  titleHighlight: 'Uma inteligência central.',
  subtitle:
    'Cada módulo opera de forma independente, mas conversa em tempo real com os demais. Adote apenas o que sua empresa precisa hoje — escale quando quiser.',
  modules: [
    {
      Icon: Users,
      name: 'RH / DP Inteligente',
      status: 'Em Construção',
      features: [
        'Recrutamento e fluxo de contratação com IA',
        'Gestão de ponto com validação facial',
        'Folha de pagamento automatizada',
        'Gestão de férias estratégica',
        'Painel do colaborador',
      ],
    },
    {
      Icon: PiggyBank,
      name: 'Financeiro IA',
      status: 'Roadmap',
      features: [
        'Contas a pagar e receber',
        'Fluxo de caixa em tempo real',
        'Projeção financeira com IA',
        'Assistente de análise inteligente',
        'Conciliação bancária automática',
      ],
    },
    {
      Icon: Package,
      name: 'Suprimentos IA',
      status: 'Roadmap',
      features: [
        'Gestão de compras inteligente',
        'Controle de estoque preditivo',
        'Homologação automática de fornecedores',
        'Cotação com análise de custo-benefício',
        'Requisições via fluxo de aprovação',
      ],
    },
    {
      Icon: FileText,
      name: 'Gestão de Contratos',
      status: 'Roadmap',
      features: [
        'Ciclo de vida documental completo',
        'Assinatura digital integrada',
        'Alertas de renovação via IA',
        'Auditoria automática de cláusulas',
        'Repositório com busca inteligente',
      ],
    },
    {
      Icon: Receipt,
      name: 'Orçamentos IA',
      status: 'Roadmap',
      features: [
        'Criação rápida de propostas',
        'Análise automática de margens e custos',
        'Fluxo de aprovação por alçada',
        'Histórico de revisões e versões',
        'Sugestão de condições para conversão',
      ],
    },
    {
      Icon: BrainCircuit,
      name: 'Inteligência Central (IA Core)',
      status: 'Core',
      features: [
        'Conecta todos os módulos em uma única inteligência',
        'Análises preditivas cross-módulo',
        'Dashboards 360° em tempo real',
        'Insights estratégicos automáticos',
        'Auditoria inteligente nativa',
      ],
    },
  ] satisfies ModuleItem[],
} as const;

export interface PdcaStep {
  letter: 'P' | 'D' | 'C' | 'A';
  title: string;
  subtitle: string;
  angle: number;
  bullets: string[];
}

export const PDCA_CONTENT = {
  eyebrow: 'Como funciona',
  titleStart: 'Gestão estratégica, agora operada por',
  titleHighlight: 'agentes de IA.',
  subtitle:
    'O JARIS automatiza o ciclo PDCA com agentes inteligentes que planejam, executam, auditam e otimizam seus processos continuamente.',
  centerLabelTop: 'CICLO',
  centerLabelMid: 'PDCA',
  centerLabelSub: '+ IA',
  svgAriaLabel: 'Ciclo PDCA com IA',
  steps: [
    {
      letter: 'P',
      title: 'Planejar',
      subtitle: 'Plan',
      angle: -90,
      bullets: [
        'Identificar o problema',
        'Analisar o processo via IA',
        'Criar plano de ação inteligente',
      ],
    },
    {
      letter: 'D',
      title: 'Executar',
      subtitle: 'Do',
      angle: 0,
      bullets: [
        'Executar via módulos integrados',
        'Operação unificada',
        'Coleta de dados em tempo real',
      ],
    },
    {
      letter: 'C',
      title: 'Verificar',
      subtitle: 'Check',
      angle: 90,
      bullets: [
        'Checar resultados obtidos',
        'Análise preditiva de desvios',
        'Dashboards de performance',
      ],
    },
    {
      letter: 'A',
      title: 'Agir',
      subtitle: 'Act',
      angle: 180,
      bullets: [
        'Análise de resultados via IA',
        'Otimização contínua',
        'Escalabilidade do processo',
      ],
    },
  ] satisfies PdcaStep[],
} as const;

export interface FlowStepItem {
  Icon: LucideIcon;
  label: string;
}

export interface FlowHighlight {
  Icon: LucideIcon;
  title: string;
  desc: string;
  steps: FlowStepItem[];
  metric: string;
}

export const FLOWS_CONTENT = {
  eyebrow: 'Destaques com IA',
  titleStart: 'Veja a IA em ação nos',
  titleHighlight: 'fluxos críticos',
  titleEnd: 'do seu negócio.',
  flows: [
    {
      Icon: Briefcase,
      title: 'Contratação Inteligente',
      desc: 'Da triagem de currículos ao onboarding digital, tudo orquestrado por IA.',
      steps: [
        { Icon: ScanLine, label: 'Triagem IA com score de compatibilidade' },
        { Icon: Clock, label: 'Agendamento inteligente de entrevistas' },
        { Icon: UserCheck, label: 'Validação automática de documentos' },
        { Icon: Sparkles, label: 'Integração com clínica para ASO' },
      ],
      metric: 'Redução de até 60% no tempo de contratação',
    },
    {
      Icon: FingerprintPattern,
      title: 'Ponto e Folha Automatizados',
      desc: 'Jornada, cálculos e conformidade legal em um único fluxo.',
      steps: [
        { Icon: Clock, label: 'Marcação via App, Web ou Biometria' },
        { Icon: ScanLine, label: 'Reconhecimento facial e prova de vida' },
        { Icon: Banknote, label: 'Cálculo automático de proventos e encargos' },
        { Icon: UserCheck, label: 'Auditoria automática de eSocial' },
      ],
      metric: 'Zero erros e segurança jurídica absoluta',
    },
    {
      Icon: TrendingUp,
      title: 'Fluxo Financeiro Preditivo',
      desc: 'Do lançamento à projeção de cenários, com IA analisando cada movimento.',
      steps: [
        { Icon: Banknote, label: 'Lançamentos e vencimentos automáticos' },
        { Icon: Clock, label: 'Visão do caixa em tempo real' },
        { Icon: TrendingUp, label: 'Projeção de cenários baseada em histórico' },
        { Icon: Sparkles, label: 'Assistente IA de análise de desvios' },
      ],
      metric: 'Controle total e previsibilidade financeira',
    },
  ] satisfies FlowHighlight[],
} as const;

// Note: using original Lucide icons for Ponto e Folha and Financeiro steps matching exact original JarisLanding imports
export const INSIGHTS_CONTENT = {
  eyebrow: 'Inteligência de dados',
  titleStart: 'O JARIS trabalha para você — entregando a',
  titleHighlight: 'informação pronta.',
  subtitle:
    'Esqueça planilhas manuais e relatórios que demoram dias. Nossa IA consolida dados de todos os módulos e entrega insights acionáveis em tempo real.',
  features: [
    {
      Icon: FileChartColumnIncreasing,
      title: 'Relatórios Automáticos',
      desc: 'Geração instantânea de DRE, balancetes e KPIs sem intervenção manual.',
    },
    {
      Icon: Brain,
      title: 'Análises Preditivas',
      desc: 'A IA identifica tendências e desvios antes que aconteçam, permitindo gestão proativa.',
    },
    {
      Icon: Lightbulb,
      title: 'Insights Estratégicos',
      desc: 'Assistente inteligente que sugere ações de otimização baseadas no comportamento real da empresa.',
    },
  ] satisfies ChallengeItem[],
  chartCard: {
    Icon: ChartColumn,
    title: 'Performance Operacional',
    badge: '+24%',
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    values: [34, 52, 46, 68, 61, 82],
    captionStart: 'Dashboards estratégicos que transformam dados em',
    captionHighlight: 'poder de decisão.',
  },
} as const;

export const DIFFERENTIALS_CONTENT = {
  eyebrow: 'Diferenciais',
  titleStart: 'Por que o JARIS é',
  titleHighlight: 'diferente?',
  items: [
    {
      Icon: Target,
      title: 'Agilidade Estratégica',
      desc: 'Decisões rápidas baseadas em dados concretos. Eliminamos o “achismo” da gestão.',
    },
    {
      Icon: ShieldCheck,
      title: 'Segurança de Dados',
      desc: 'Controle absoluto sobre as informações da sua empresa com auditoria inteligente nativa.',
    },
    {
      Icon: Earth,
      title: 'Visão 360°',
      desc: 'Entenda a saúde financeira, operacional e de pessoas em um único clique.',
    },
  ] satisfies ChallengeItem[],
} as const;

export type RoadmapStatus = 'Em Desenvolvimento' | 'Próximo' | 'Roadmap' | 'Visão';

export interface RoadmapPhase {
  title: string;
  status: RoadmapStatus;
  progress: number;
  desc: string;
}

export const ROADMAP_CONTENT = {
  eyebrow: 'Roadmap',
  titleStart: 'Um ecossistema em',
  titleHighlight: 'construção estratégica.',
  subtitle:
    'Estamos entregando módulo por módulo, com foco em qualidade e integração real. Acompanhe nosso roadmap.',
  phases: [
    {
      title: 'Fase 1 — DP Inteligente',
      status: 'Em Desenvolvimento',
      progress: 40,
      desc: 'Fluxo de contratação IA, Ponto e Folha Digital, Férias.',
    },
    {
      title: 'Fase 2 — Financeiro IA',
      status: 'Próximo',
      progress: 0,
      desc: 'Projeções preditivas e Assistente de Análise.',
    },
    {
      title: 'Fase 3 — Contratos IA',
      status: 'Roadmap',
      progress: 0,
      desc: 'Ciclo documental e Auditoria Inteligente.',
    },
    {
      title: 'Fase 4 — Suprimentos IA',
      status: 'Roadmap',
      progress: 0,
      desc: 'Cotações automáticas e Compras Preditivas.',
    },
    {
      title: 'Fase 5 — Ecossistema 360°',
      status: 'Visão',
      progress: 0,
      desc: 'Integração total com IA Avançada Core.',
    },
  ] satisfies RoadmapPhase[],
  calloutHighlight: 'Early access',
  calloutText: 'disponível para empresas que querem evoluir junto com o sistema.',
} as const;

export const CONTACT_CONTENT = {
  eyebrow: 'Fale com o time',
  titleStart: 'Pronto para centralizar sua gestão com',
  titleHighlight: 'IA?',
  subtitle:
    'Agende uma demonstração personalizada e descubra como o JARIS pode transformar a operação da sua empresa. Nosso time entra em contato em até 24 horas úteis.',
  checklist: [
    'Demonstração personalizada ao seu setor',
    'Análise gratuita de maturidade digital',
    'Condições especiais para early adopters',
    'Sem compromisso — converse com um especialista',
  ],
  form: {
    roles: ['CEO / Diretor', 'Gerente', 'Coordenador', 'Analista', 'Outro'] as const,
    companySizes: ['1-50', '51-200', '201-500', '501-1000', '1000+'] as const,
    interests: [
      'DP / RH',
      'Financeiro',
      'Suprimentos',
      'Contratos',
      'Orçamentos',
      'Ecossistema completo',
    ] as const,
    labels: {
      name: 'Nome completo *',
      email: 'E-mail corporativo *',
      phone: 'Telefone / WhatsApp *',
      company: 'Empresa *',
      role: 'Cargo *',
      companySize: 'Nº de colaboradores *',
      selectDefault: 'Selecione',
      interests: 'Quais módulos mais interessam? *',
      message: 'Mensagem',
      consent: 'Concordo com a Política de Privacidade e autorizo o contato da equipe JARIS.',
      submit: 'SOLICITAR DEMONSTRAÇÃO',
      submitting: 'ENVIANDO...',
      errorFallback: 'Não foi possível enviar agora. Tente novamente em instantes.',
    },
    phonePlaceholder: '(00) 00000-0000',
    success: {
      title: 'Recebemos seu contato!',
      desc: 'Em breve nosso time falará com você por e-mail ou WhatsApp.',
      retry: 'Enviar outra solicitação',
    },
  },
} as const;

export const FOOTER_CONTENT = {
  headline: 'Gestão Empresarial 100% Integrada com IA.',
  subheadline: 'A base da gestão moderna e inteligente da sua empresa.',
  columns: [
    {
      title: 'Produto',
      links: [
        { label: 'O Sistema', href: '#sistema' },
        { label: 'Módulos', href: '#modulos' },
        { label: 'Como Funciona', href: '#pdca' },
        { label: 'Dashboards', href: '#insights' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'Early Access', href: '#contato' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre o Jaris', href: '#sistema' },
        { label: 'Nosso Time', href: '#contato' },
        { label: 'Casos de Uso', href: '#fluxos' },
        { label: 'Blog / Artigos', href: '#' },
        { label: 'Trabalhe Conosco', href: EXTERNAL_URLS.careers, external: true },
        { label: 'Parcerias', href: '#contato' },
      ],
    },
    {
      title: 'Suporte & Legal',
      links: [
        { label: 'Entrar na plataforma', href: EXTERNAL_URLS.login, external: true },
        { label: 'Portal do Candidato', href: EXTERNAL_URLS.candidateLogin, external: true },
        { label: 'Central de Ajuda', href: '#' },
        { label: 'Documentação', href: '#' },
        { label: 'Contato', href: '#contato' },
        { label: 'Política de Privacidade', href: '#' },
        { label: 'Termos de Uso', href: '#' },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: '© 2026 JARIS — Todos os direitos reservados.',
  madeIn: 'Feito com IA no Brasil 🇧🇷',
} as const;

export const COOKIE_CONTENT = {
  storageKey: 'jaris_cookie_consent',
  legacyKey: 'sigma7_cookie_consent',
  message:
    'Utilizamos cookies essenciais para autenticação segura e funcionamento do sistema. Ao continuar, você concorda com o uso de cookies conforme nossa política de privacidade.',
  acceptLabel: 'Aceitar',
  closeAriaLabel: 'Fechar',
} as const;
