# FinTrack - AI-Powered Personal Finance Advisor

![FinTrack Logo](./public/FinTrack.png)

FinTrack is a modern, AI-driven personal finance management application that helps you take control of your financial life. Built with Next.js and powered by OpenAI, FinTrack provides intelligent insights and recommendations to help you manage your budgets, track expenses, and monitor income streams effectively.

## Features

### AI-Powered Financial Insights
- Get personalized financial advice based on your spending patterns
- AI-generated recommendations for budget optimization
- Smart analysis of your financial health

### Budget Management
- Create and manage multiple budgets with custom categories
- Set spending limits and track progress
- Visual indicators for budget utilization
- Emoji-based categorization for easy identification

###  Expense Tracking
- Detailed expense logging with categorization
- Real-time expense monitoring
- Historical expense analysis
- Budget-linked expense tracking

### Income Management
- Multiple income stream tracking
- Income vs. expense analysis
- Financial goal planning

### Visual Analytics
- Interactive charts and graphs using Recharts
- Dashboard with comprehensive financial overview
- Bar charts for budget vs. spending analysis
- Real-time financial metrics

### Secure Authentication
- Clerk-powered authentication system
- Secure user data management
- Multi-user support

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **AI Integration**: OpenAI GPT-4
- **Charts**: Recharts
- **UI Components**: Radix UI, Lucide React
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon recommended)
- OpenAI API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thanavreddy/FinTrack.git
   cd FinTrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Database
   DATABASE_URL=your_postgresql_connection_string
   
   # OpenAI
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Getting Started
1. **Sign up/Sign in** using the authentication system
2. **Create your first budget** by clicking "Create Budget" on the dashboard
3. **Add income sources** to track your earnings
4. **Log expenses** and categorize them under your budgets
5. **View AI insights** on your dashboard for personalized financial advice

### Key Features Guide

#### Creating Budgets
- Navigate to the Budgets section
- Click "Create Budget"
- Choose an emoji icon, set a name, and define the budget amount
- Your budget will appear on the dashboard with spending tracking

#### Tracking Expenses
- Go to the Expenses section
- Add new expenses with amount, description, and budget category
- View expense history and patterns
- Get AI-powered spending insights

#### Managing Income
- Access the Income section
- Add multiple income sources
- Track total income vs. expenses
- Monitor your financial health

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management

## 🗄️ Database Schema

The application uses three main tables:

- **Budgets**: Store budget categories with names, amounts, and icons
- **Expenses**: Track individual expenses linked to budgets
- **Incomes**: Manage multiple income streams



##  Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/thanavreddy/FinTrack/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem

## 🔮 Future Enhancements

- [ ] Mobile app development
- [ ] Investment tracking
- [ ] Bill reminders and notifications
- [ ] Financial goal setting and tracking
- [ ] Multi-currency support
- [ ] Export financial reports
- [ ] Integration with bank APIs
- [ ] Advanced AI financial planning

## 📊 Project Structure

```
ai-finance-tracking-1/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (routes)/          # Main application routes
│   │   └── dashboard/     # Dashboard and main features
│   └── _components/       # Shared components
├── components/            # UI components
│   └── ui/               # Reusable UI elements
├── lib/                  # Utility libraries
├── public/               # Static assets
└── utils/                # Application utilities
    ├── dbConfig.jsx      # Database configuration
    ├── schema.jsx        # Database schema
    └── getFinancialAdvice.js # AI integration
```

---

*Take control of your finances with AI-powered insights!*
