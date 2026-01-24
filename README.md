# Lendsqr Frontend Engineer Assessment

A React + TypeScript admin dashboard application for managing user data, built as part of the Lendsqr frontend engineer assessment.

## Features

- **Login Page**: Simple authentication with email/password validation
- **Dashboard**: View user statistics and comprehensive user table
- **User Details**: Detailed view of individual user information
- **Filtering**: Filter users by organization, username, email, phone, date, and status
- **Pagination**: Navigate through user data with customizable items per page
- **Mobile Responsive**: Fully responsive design for all screen sizes
- **Mock API**: 500 user records generated locally
- **Local Storage**: User authentication state persisted

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **SCSS** - Styling
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Vitest** - Unit testing

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Option 1: Automated Setup (Linux/Mac)

```bash
# Clone the repository
git clone
cd lendsqr-fe-test

# Run setup script
chmod +x setup.sh
./setup.sh

# Start development server
npm run dev
```

### Option 2: Manual Setup

```bash
# Clone the repository
git clone
cd lendsqr-fe-test

# Install dependencies
npm install

# Create placeholder assets (optional)
mkdir -p public
# Add logo.svg, login-illustration.svg, avatar.png to public/

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Windows Users

Run `setup.bat` for automated setup, or follow the manual setup steps above.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── StatsCard.tsx
│   └── UsersTable.tsx
├── pages/             # Page components
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   └── UserDetails.tsx
├── services/          # API services
│   └── mockApi.ts
├── styles/            # Global styles
│   ├── variables.scss
│   └── global.scss
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions
│   └── storage.ts
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Key Design Decisions

### Architecture

- Component-based architecture with clear separation of concerns
- Custom hooks for reusable logic
- Service layer for data management
- Type-safe implementation with TypeScript

### Performance

- Memoized user data generation (cached after first call)
- Pagination to limit rendered items
- Efficient filtering without external libraries
- Lazy loading of routes (could be implemented for production)

### State Management

- React hooks (useState, useEffect) for local state
- LocalStorage for authentication persistence
- No external state management library (keeping it simple per requirements)

### Testing

- Unit tests for utility functions
- Unit tests for API service layer
- Focus on core business logic

### Code Quality

- Consistent naming conventions
- Small, single-responsibility functions
- SCSS modules for styling
- ESLint and TypeScript for code quality

## Login Credentials

Any valid email and non-empty password will work for login.

Example:

- Email: user@example.com
- Password: password

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Known Limitations

- Mock API data is generated client-side (not persistent across sessions)
- No real authentication backend
- Filter state is not persisted in URL
- No error boundary implementation

## Future Enhancements

- Implement real API integration
- Add error boundaries
- Persist filter state in URL query params
- Add loading skeletons
- Implement advanced search
- Add user data export functionality
- Implement role-based access control

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Built for Lendsqr Frontend Engineer Assessment
