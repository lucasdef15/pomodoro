# ⏳ Pomodoro Timer

Um aplicativo de Pomodoro Timer moderno, limpo e focado em produtividade. Desenvolvido com **Next.js (App Router)**, **React**, **TypeScript** e estilizado com **Tailwind CSS** e componentes acessíveis da **Radix UI**.

---

## 🚀 Tecnologias Utilizadas

### Core

- **Framework:** [Next.js](https://nextjs.org/) (v16.x) - App Router
- **Biblioteca Principal:** [React](https://react.dev/) (v19)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)

### Estilização & UI

- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Componentes Primitivos:** [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Utilidades CSS:** `clsx`, `tailwind-merge`, e `class-variance-authority`

### Testes

- **Runner:** [Vitest](https://vitest.dev/)
- **Ambiente & Matchers:** [Testing Library (React & Jest-DOM)](https://testing-library.com/) e `jsdom`

---

## 📁 Estrutura do Projeto

A organização das pastas e arquivos do projeto segue a estrutura padrão do Next.js App Router:

````text
├── app/                    # Rotas, layouts e páginas da aplicação
│   ├── globals.css         # Estilos globais do Tailwind
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial do Pomodoro
├── components/             # Componentes reutilizáveis de UI
│   ├── tabSelector/        # Seleção de abas/modos do timer (Pomodoro, Pausa Curta, etc.)
│   ├── ui/                 # Componentes base (Shadcn/Radix)
│   └── AppWrapper.tsx      # Wrapper global da aplicação
├── context/                # Gerenciamento de Estado Global
│   ├── PomodoroContext.tsx # Estado do Timer, contagem regressiva e modos
│   └── SettingsContext.tsx # Configurações e preferências do usuário
├── lib/                    # Funções utilitárias e helpers de configuração
│   └── utils.ts
├── types/                  # Tipagens do TypeScript
│   └── timer.ts            # Definições de tipos do Timer (TimerMode, etc.)
├── utils/                  # Funções auxiliares com testes unitários
│   ├── formatTime.ts       # Função de formatação do tempo (MM:SS)
│   └── formatTime.test.ts  # Testes da função de formatação
└── package.json            # Scripts e dependências do projeto
```text
````
