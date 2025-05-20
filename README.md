# CoreInfra Test Project

A modern React application built with Vite and TypeScript showcasing various UI components and features.

Demo: [https://coreinfra-test.vercel.app/](https://coreinfra-test.vercel.app/)

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Routing:** TanStack Router
- **UI Components:**
  - Radix UI (for accessible components)
  - Recharts (for charts and data visualization)
  - React Day Picker
  - Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- PNPM package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/memoye/coreinfra-test.git
cd coreinfra-test
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
pnpm build
```

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## Features

- Modern React features with TypeScript support
- File-based routing with TanStack Router
- Component library built on Radix UI primitives
- Responsive design with TailwindCSS
- Data visualization with Recharts
- SVG icon support with SVGR
- Hot Module Replacement (HMR) in development

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint for code linting

## Environment Variables

N/A

## Deployment

This project is deployed on Vercel. For deployment:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your changes

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [TanStack Router](https://tanstack.com/router)
