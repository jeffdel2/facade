# NIQ Rewards App

A React-based rewards program application with configurable themes.

## Features

- User authentication via Auth0
- Dynamic theme switching between:
  - Retail Store
  - Theme Park
  - Mobile Provider
- Rewards program management
- Product browsing
- Store locator

## Theme Configuration

The application supports multiple themes that can be configured in the `src/themes/themes.ts` file. Each theme includes:

- Brand identity (name, tagline)
- Loyalty program details
- Feature descriptions
- Color palette
- UI components styling

### Available Themes

1. **Retail Store Theme**
   - Default theme for retail businesses
   - Blue and pink color scheme
   - Shopping and rewards focused

2. **Theme Park Theme**
   - Entertainment and attractions focused
   - Purple and orange color scheme
   - Adventure and experience oriented

3. **Mobile Provider Theme**
   - Telecommunications focused
   - Teal and yellow color scheme
   - Connectivity and service oriented

### Switching Themes

Themes can be switched using the theme selector in the application header. The default theme can be configured in `src/config/config.ts`.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
