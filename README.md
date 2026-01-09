# GIF Explorer

[![Netlify Status](https://api.netlify.com/api/v1/badges/8489c9be-f20c-4a9e-9ee2-24e2b5091ee4/deploy-status)](https://app.netlify.com/projects/gifs-explorer-b07d26/deploys)
[![codecov](https://codecov.io/gh/daniel-pompa/gif-explorer-app/branch/main/graph/badge.svg)](https://codecov.io/gh/daniel-pompa/gif-explorer-app)
[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)

**GIF Explorer** - A React application built with TypeScript and Vite that lets you search and discover animated GIFs using the GIPHY API. Features an intuitive interface with responsive design and smooth animations for finding the perfect GIF for any occasion.

## Table of Contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Testing & Quality Assurance](#testing--quality-assurance)
8. [License](#license)
9. [Author](#author)
10. [Acknowledgements](#acknowledgements)

## Features

- **Search for GIFs** – Ready for GIPHY API integration with interactive search functionality
- **Responsive Grid** – Adaptive layout scaling from 1 to 4 columns based on screen size
- **Mobile-First Design** – Optimized experience across all devices and screen sizes
- **TypeScript Development** – Full type safety and enhanced developer experience
- **Modern UI/UX** – Clean interface with smooth animations and interactive elements
- **Search History** – Quick access to previous searches with intuitive interaction

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technology Stack

<div>
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=html" alt="HTML5" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=css" alt="CSS3" width="40" height="40" />
</div>

## Project structure

The project is structured as follows:

```bash
├───📁 public/
├───📁 src/
│   ├───📁 gifs/
│   │   ├───📁 actions/
│   │   ├───📁 api/
│   │   ├───📁 components/
│   │   ├───📁 hooks/
│   │   └───📁 interfaces/
│   ├───📁 mock-data/
│   ├───📁 shared/
│   │   └───📁 components/
│   ├───📁 utils/
│   ├───📄 GifsApp.tsx
│   ├───📄 index.css
│   └───📄 main.tsx
├───📁 tests/
│   └───📁 mocks/
├───📄 .env.example
├───📄 eslint.config.js
├───📄 index.html
├───📄 LICENSE
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
├───📄 tsconfig.app.json
├───📄 tsconfig.json
├───📄 tsconfig.node.json
└───📄 vite.config.ts
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/gif-explorer-app.git
```

2. **Navigate to the project directory:**

```bash
cd gif-explorer-app
```

3. **Set up environment variables:** This project requires a GIPHY API Key. You can obtain one by creating an app on the [GIPHY Developers Dashboard](https://developers.giphy.com/dashboard/).

Copy the example environment file and fill in your key:

```bash
cp .env.example .env
```

Open the `.env` file and add your key:

```bash
VITE_GIPHY_API_KEY=YOUR_API_KEY
```

4. **Install dependencies:**

```bash
npm install
```

5. **Run the development server:**

```bash
npm run dev
```

> [!NOTE]
> The server will typically run on <http://localhost:5173>, but check the output on your terminal to be sure.

## Usage

Once the development server is running, you can open your browser and navigate to <http://localhost:5173> to view the application. The main functionalities include searching for GIFs and viewing the results in a grid layout.

### Main Features

1. **Search for GIFs**:
   - Enter a search term in the search bar at the top of the page and press `Enter`.
   - The application will fetch and display GIFs related to your search term.

2. **View GIFs**:
   - The fetched GIFs will be displayed in a responsive grid layout.
   - Scroll through the grid to browse the available GIFs.

> [!TIP]
> If you encounter issues while using the application, refer to the following troubleshooting tips:
>
> - **No Results**: If you don't see any results, try a different search term or check your internet connection.
> - **Loading Issues**: If the GIFs are not loading, ensure that your development server is running correctly and check the console for any errors.

## Testing & Quality Assurance

This project follows a **behavior-driven testing strategy** designed to ensure reliability, maintainability, and long-term scalability. Automated tests are treated as a first-class development tool rather than an afterthought.

### Testing Philosophy

The test suite is guided by the following principles:

- **Behavior over implementation**  
  Tests validate observable outcomes and user interactions instead of internal component structure.

- **Confidence over vanity metrics**  
  Code coverage is used as a diagnostic tool, not as a goal in itself.

- **Fast and deterministic feedback**  
  Tests are optimized for speed and reliability to encourage frequent execution during development.

- **Explicit testing boundaries**  
  Only executable code with direct behavioral impact is included in coverage calculations.

### Test Scope

The test suite covers the following areas:

- **UI Components**  
  Components are tested using **React Testing Library**, ensuring correctness from the user's perspective.

- **Custom Hooks & Business Logic**  
  Hooks and action layers are tested independently to guarantee predictable state management and side effects.

- **API Integration Layer**  
  External API calls are mocked to provide deterministic results and to validate edge cases such as empty responses or failures.

### Coverage Strategy

Code coverage is generated using **Vitest** with the **V8 coverage engine**.

The following files are intentionally excluded from coverage metrics:

- Application bootstrap files (e.g. `main.tsx`)
- Type-only definitions (`interfaces`)
- Thin utility abstractions with no business logic impact (e.g. logging helpers)

This approach ensures that coverage reflects **meaningful runtime behavior** rather than inflating metrics with non-executable or low-risk code.

### Tooling

| Tool | Purpose |
| --- | --- |
| **Vitest** | Fast, Vite-native test runner |
| **React Testing Library** | User-focused component testing |
| **jsdom** | Browser-like DOM environment for UI tests |
| **axios-mock-adapter** | Declarative API request mocking |
| **V8 Coverage** | High-performance native code coverage |

### Running Tests Locally

All testing capabilities are fully available in a local environment without requiring any external services or credentials.

| Command | Description |
| --- | --- |
| `npm run test` | Runs tests in watch mode |
| `npm run test:ui` | Launches the interactive Vitest UI |
| `npm run test:only` | Executes the full test suite once |
| `npm run coverage` | Generates a local coverage report |

### Continuous Integration & Coverage Reporting

This repository uses **GitHub Actions** to automatically run the test suite on every push and pull request to the `main` branch.

Coverage reports are generated during CI execution and uploaded to **Codecov** to provide historical insights and transparency.

> [!IMPORTANT]
> Codecov is used **exclusively in CI**.  
> Running tests or coverage locally does **not** require any Codecov configuration or credentials.

The coverage badge displayed at the top of this README reflects the current health of the `main` branch as validated by the CI pipeline.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge for see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

## Acknowledgements

Special thanks to the developers and contributors of:

- **[Vite](https://vitejs.dev/)** for the fast and modern build tool.
- **[React](https://es.react.dev/)** for the powerful UI library.
- **[GIPHY](https://developers.giphy.com/)** for providing a robust and accessible API that powers the core functionality of this application.

I would like to extend my sincere thanks to:

- **[Node.js](https://nodejs.org/en)** for offering a powerful and efficient runtime environment for JavaScript.
- **[npm](https://www.npmjs.com/)** for being a crucial tool in managing project dependencies and packages.
- **[Skillicons](https://skillicons.dev/)** for high-quality icons that enhance the visual appeal of this project.
- **Open Source Community** for the countless resources, tutorials, and tools available that have supported our learning journey.

[⬆️ Back to Top](#table-of-contents)
