# GIF Explorer

**GIF Explorer** - A React application built with TypeScript and Vite that lets you search and discover animated GIFs using the GIPHY API. Features an intuitive interface with responsive design and smooth animations for finding the perfect GIF for any occasion.

## Table of Contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [License](#license)
8. [Author](#author)
9. [Acknowledgements](#acknowledgements)

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

> [!NOTE]
> Project structure is evolving as features are added.

The project is structured as follows:

```bash
├───📁 public/
├───📁 src/
│   ├───📁 gifs/
│   │   └───📁 components/
│   ├───📁 mock-data/
│   ├───📁 shared/
│   │   └───📁 components/
│   ├───📄 GifsApp.tsx
│   ├───📄 index.css
│   └───📄 main.tsx
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

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

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
