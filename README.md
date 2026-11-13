# JARIS — Gestão Empresarial Inteligente com IA

Landing page moderna e responsiva da plataforma **JARIS**, desenvolvida com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS**. A plataforma centraliza RH, Financeiro, Contratos e Suprimentos em um único ecossistema inteligente impulsionado por Inteligência Artificial.

---

## 🚀 Tecnologias e Ferramentas

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite](https://vite.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Formulários e Validação:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Padronização & Linting:** [ESLint](https://eslint.org/) + typescript-eslint

---

## 📁 Estrutura do Projeto

```text
├── public/                 # Favicons, manifesto web e assets estáticos
├── src/
│   ├── components/         # Componentes compartilhados (Navbar, CookieBanner, MotionPrimitives)
│   ├── data/               # Conteúdos estáticos e links da landing page (landingContent.ts)
│   ├── lib/                # Configurações de utilitários e animações (motion.ts)
│   ├── sections/           # Seções da página (Hero, Módulos, PDCA, Contato, etc.)
│   ├── styles/             # Design tokens e variáveis de estilos (tokens.css)
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── index.css           # Estilos globais e configuração de Tailwind
│   └── main.tsx            # Ponto de entrada da aplicação React
├── eslint.config.js        # Configuração do ESLint
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configuração do compilador TypeScript
└── vite.config.ts          # Configuração do Vite e plugins
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalada.
- Gerenciador de pacotes `npm` (ou `pnpm` / `yarn`).

### 1. Clonar o repositório
```bash
git clone https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git
cd <SEU_REPOSITORIO>
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O servidor será iniciado tipicamente em `http://localhost:5173`.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento com Hot Module Replacement (HMR). |
| `npm run build` | Valida tipagens (`tsc --noEmit`) e gera o build de produção otimizado na pasta `dist/`. |
| `npm run preview` | Executa localmente o build gerado em `dist/` para validação pré-deploy. |
| `npm run typecheck` | Executa a verificação estática de tipos do TypeScript sem gerar arquivos. |
| `npm run lint` | Executa a verificação de regras de código com o ESLint. |

---

## 🌐 Deploy

Os arquivos estáticos gerados em `dist/` após a execução de `npm run build` estão prontos para publicação em plataformas como:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 📄 Licença

Este projeto é de uso privado e confidencial da JARIS. Todos os direitos reservados.
