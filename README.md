# Project Sapiens

> **Don't just use AI. Build with it. Live with it. Lead with it.**

An adaptive AI learning ecosystem that transforms users from AI Users into AI Collaborators, Architects, and Innovators through goal-based learning paths, interactive labs, and collaborative community features.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

---

## Mission

Project Sapiens is a living ecosystem designed to help individuals master AI through hands-on experience and structured learning. We believe AI fluency is not about memorizing prompts—it's about understanding systems, building workflows, and creating real solutions.

Our platform combines three core pillars:

- **Academy**: Goal-based, role-specific learning paths
- **Lab**: Interactive sandboxes for safe experimentation
- **Network**: Collaborative community for peer validation and mentorship

---

## Features

### Learning Paths

Choose from four specialized paths designed for different goals and roles:

1. **AI for Small Business** - Automate operations, marketing, and business decisions
2. **AI for Productivity** - Build personal workflows, automation, and life systems
3. **AI for Creators** - Master content creation, visuals, campaigns, and monetization
4. **Build with AI** - Prototype tools, micro-SaaS products, and AI applications

### AI Fluency Spectrum

Progress through four levels of AI mastery:

- **Level 1: Collaborator** - AI Fundamentals
- **Level 2: Practitioner** - Workflow Designer
- **Level 3: Integrator** - System Builder
- **Level 4: Leader** - Solution Architect

### Interactive Labs

Hands-on experimentation spaces with instant feedback:

- **Writing Lab** - Master prompt engineering and content generation
- **Analysis Lab** - Learn data analysis and insight extraction
- **Code Lab** - Build with AI-assisted development
- **Creative Lab** - Explore multi-modal AI content creation
- **Strategy Lab** - Design AI-powered business solutions

### Community & Collaboration

- Share prompts, workflows, and best practices
- Join learning circles with peers
- Participate in challenges and competitions
- Earn badges and recognition for achievements

### Gamified Progress

- XP-based progression system
- Skill tracking across key competencies
- Achievement badges and milestones
- Weekly challenges with rewards

---

## Tech Stack

### Frontend
- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first styling

### Backend & Services
- **Supabase** - Authentication and PostgreSQL database
- **Row Level Security (RLS)** - Secure data access policies

### UI & Design
- **Lucide React** - Beautiful icon library
- **Neo-Brutalist Design** - Bold, expressive aesthetic inspired by Material Design 3
- **Responsive Design** - Mobile-first with adaptive layouts

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (for database and authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-sapiens.git
cd project-sapiens
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Other Commands

```bash
npm run lint        # Run ESLint
npm run preview     # Preview production build locally
npm run typecheck   # Run TypeScript type checking
```

---

## Project Structure

```
project-sapiens/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Main application pages
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── PathsPage.tsx
│   │   ├── LabsPage.tsx
│   │   └── CommunityPage.tsx
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and custom classes
├── supabase/
│   └── migrations/       # Database migrations
├── public/               # Static assets
├── dist/                 # Production build output
└── package.json          # Dependencies and scripts
```

---

## Design System

### Visual Style

Project Sapiens uses a **neo-brutalist design aesthetic** characterized by:

- Bold 2-4px black borders on all elements
- High contrast color palette
- Sharp, geometric layouts
- Expressive typography with clear hierarchy
- Playful yet professional feel

### Color Palette

- **Primary Orange**: `#FF6A00` - CTAs, highlights, energy
- **Secondary Blue**: `#0A74FF` - Progress, levels, trust
- **Background**: `#F4F4F4` - Clean, neutral canvas
- **Text**: `#000000` (headings), `#555555` (body)
- **Borders**: `#000000` - Strong definition

### Typography

- **Headings**: Bold, uppercase, high impact
- **Body**: Readable, relaxed line height
- **Emphasis**: Strategic use of color and weight

### Custom CSS Classes

```css
.neo-heading          /* Bold headings with tracking */
.neo-card             /* Cards with bold borders and shadow */
.neo-button-primary   /* Primary action buttons */
.neo-button-secondary /* Secondary action buttons */
```

---

## Development Guide

### Adding a New Page

1. Create a new component in `src/pages/`
2. Import and add it to the routing logic in `App.tsx`
3. Update the `Navigation` component to include the new page

### Creating New Learning Paths

1. Define path metadata (title, focus, labs, project)
2. Add to the paths grid in `PathsPage.tsx`
3. Create detailed path content and modules
4. Connect to user progress tracking in the database

### Navigation System

The app uses client-side routing through state management:
- `currentPage` state in `App.tsx`
- Page components receive `onNavigate` callback
- Call `onNavigate('pagename')` to switch pages

---

## Database Schema

The project uses Supabase with the following main tables:

- **profiles** - User profile information and settings
- Configured with Row Level Security (RLS) for data protection

See `supabase/migrations/` for complete schema definitions.

---

## Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use functional React components with hooks
- Maintain consistent formatting with ESLint
- Keep components focused and modular
- Write descriptive variable and function names
- Add comments for complex logic

### Design Principles

- Mobile-first responsive design
- Maintain neo-brutalist aesthetic
- Ensure accessibility standards
- Prioritize user experience and clarity
- Keep interactions intuitive and delightful

---

## Roadmap

### Coming Soon

- User authentication and profiles
- Progress persistence and sync
- Expanded lab exercises and challenges
- Community discussion forums
- Prompt library and sharing
- AI integration for personalized learning
- Mobile app (iOS/Android)
- API for third-party integrations

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Design inspiration from Material Design 3 and neo-brutalist web design
- Icons by [Lucide](https://lucide.dev)
- Built with [Vite](https://vitejs.dev), [React](https://react.dev), and [Supabase](https://supabase.com)

---

## Contact

Have questions or feedback? We'd love to hear from you!

- **Project Website**: [Coming Soon]
- **Issues**: [GitHub Issues](https://github.com/yourusername/project-sapiens/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/project-sapiens/discussions)

---

**Built with passion for AI education and empowerment.**

*Project Sapiens - Where AI Users become AI Leaders.*
