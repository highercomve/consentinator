Privacy Consent APP
==========================================

### How to run the project

```bash
# Install all the dependencies of the project with npm or yarn
yarn # or npm install

# Run the development server with
yarn dev # or npm run dev
```

### How to run test

```bash
yarn test # or yarn test --watch
```

### How to build the project

```bash
yarn build # npm run build

# If you want to active the services to use HTTP request to get the consents from a API use
API_BASE_URL=https.... ENV=production yarn build

# Or create an .env file with those varibles
```